import { useState, useEffect } from 'react';
import { Integration, initialIntegrations, STORAGE_KEYS } from '@/data/mockData';

export const useIntegrations = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load integrations from localStorage on mount
  useEffect(() => {
    const loadIntegrations = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.INTEGRATIONS);
        if (stored) {
          const parsed = JSON.parse(stored);
          // Validate and normalize the data
          const normalized = Array.isArray(parsed) ? parsed.map((int: any) => ({
            ...int,
            // Ensure required fields exist
            identityServices: int.identityServices || int.solution?.components || [],
            environments: int.environments || [],
            status: int.status || 'draft',
            lastActivity: int.lastActivity || 'Unknown'
          })) : [];
          setIntegrations(normalized);
        } else {
          // Initialize with default data
          setIntegrations(initialIntegrations);
          localStorage.setItem(STORAGE_KEYS.INTEGRATIONS, JSON.stringify(initialIntegrations));
        }
      } catch (error) {
        console.error('Error loading integrations:', error);
        // On error, clear localStorage and use initial data
        localStorage.removeItem(STORAGE_KEYS.INTEGRATIONS);
        setIntegrations(initialIntegrations);
        localStorage.setItem(STORAGE_KEYS.INTEGRATIONS, JSON.stringify(initialIntegrations));
      } finally {
        setIsLoading(false);
      }
    };

    loadIntegrations();
  }, []);

  // Save to localStorage whenever integrations change
  useEffect(() => {
    if (!isLoading && integrations.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEYS.INTEGRATIONS, JSON.stringify(integrations));
      } catch (error) {
        console.error('Error saving integrations:', error);
      }
    }
  }, [integrations, isLoading]);

  const addIntegration = (integration: Integration) => {
    setIntegrations(prev => [...prev, integration]);
  };

  const updateIntegration = (id: string, updates: Partial<Integration>) => {
    setIntegrations(prev =>
      prev.map(int => (int.id === id ? { ...int, ...updates, updatedAt: new Date().toISOString() } : int))
    );
  };

  const deleteIntegration = (id: string) => {
    setIntegrations(prev => prev.filter(int => int.id !== id));
  };

  const getIntegrationById = (id: string) => {
    return integrations.find(int => int.id === id);
  };

  return {
    integrations,
    isLoading,
    addIntegration,
    updateIntegration,
    deleteIntegration,
    getIntegrationById
  };
};
