
import BCHeader from "@/components/BCHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { Plus, Activity, BookOpen, Code, Users, Edit, Trash2, TrendingUp, AlertCircle, CheckCircle, Eye } from "lucide-react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useIntegrations } from "@/hooks/useIntegrations";
import { StatusBadge } from "@/components/StatusBadge";
import { ResourceDialog, TechnicalDocsContent, APIReferenceContent, IntegrationGuideContent, ContactSupportContent } from "@/components/ResourceDialog";

const ClientDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { integrations, deleteIntegration, isLoading } = useIntegrations();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [integrationToDelete, setIntegrationToDelete] = useState<typeof integrations[0] | null>(null);
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const recentActivity = [
    {
      action: "Integration 00006124 updated configuration",
      time: "2 hours ago",
      type: "update"
    },
    {
      action: "New authentication method added to project Internal HR System",
      time: "1 day ago",
      type: "create"
    },
    {
      action: "Production approval granted for project Citizen Services Portal",
      time: "3 days ago",
      type: "approval"
    }
  ];

  const quickActions = [
    {
      title: "Implementation Guides",
      description: "Step-by-step integration documentation",
      icon: BookOpen,
      action: () => setActiveDialog('integration-guide')
    },
    {
      title: "Code Samples",
      description: "Ready-to-use implementation examples",
      icon: Code,
      action: () => setActiveDialog('technical-docs')
    },
    {
      title: "API Documentation",
      description: "Complete API reference and endpoints",
      icon: BookOpen,
      action: () => setActiveDialog('api-reference')
    },
    {
      title: "Contact Support",
      description: "Get help from our technical team",
      icon: Users,
      action: () => setActiveDialog('contact-support')
    }
  ];

  const handleDeleteClick = (integration: typeof integrations[0]) => {
    setIntegrationToDelete(integration);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (integrationToDelete) {
      deleteIntegration(integrationToDelete.id);
      toast({
        title: "Integration deleted",
        description: `Integration "${integrationToDelete.name}" has been deleted.`,
      });
      setDeleteDialogOpen(false);
      setIntegrationToDelete(null);
    }
  };

  const handleEdit = (integrationId: string) => {
    navigate(`/client/integrations/${integrationId}/edit`);
  };

  return (
    <div className="min-h-screen bg-background">
      <BCHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Developer Dashboard</h1>
            <p className="text-muted-foreground mb-4">
              Manage your identity integrations and monitor service performance
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-lg font-semibold"
              onClick={() => navigate('/client/new-integration')}
            >
              <Plus className="mr-2 h-5 w-5" />
              Request New Integration
            </Button>
          </div>
        </div>

        {/* Status Banner */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-blue-600 mr-3" />
            <p className="text-blue-800">
              Integration 00006124 requires additional configuration. 
              <Button variant="link" className="p-0 h-auto ml-1 text-blue-600 underline">
                Complete setup to activate your service
              </Button>
            </p>
          </div>
        </div>

        {/* Top Metrics Row */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Active Integrations</span>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  2 production, 1 development
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Monthly Authentications</span>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">12.5K</div>
                <p className="text-xs text-muted-foreground">
                  authenticated users
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Service Health</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-green-600">All Systems Operational</div>
                <p className="text-xs text-muted-foreground">
                  99.9% uptime
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Pending Actions</span>
                <AlertCircle className="h-4 w-4 text-yellow-500" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">
                  item needs review
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Integrations Table - Full Width */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>My Integrations</CardTitle>
            <CardDescription>Manage and monitor your identity services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Identity Services</TableHead>
                    <TableHead>Environment</TableHead>
                    <TableHead>Last Activity</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        Loading integrations...
                      </TableCell>
                    </TableRow>
                  ) : integrations.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        No integrations found. Create your first integration to get started.
                      </TableCell>
                    </TableRow>
                  ) : integrations.map((integration) => (
                    <TableRow 
                      key={integration.id} 
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <TableCell className="font-medium">
                        <button
                          onClick={() => navigate(`/client/integrations/${integration.id}`)}
                          className="text-primary hover:underline cursor-pointer transition-colors"
                        >
                          {integration.requestId}
                        </button>
                      </TableCell>
                      <TableCell className="font-medium">
                        {integration.name}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={integration.status} />
                      </TableCell>
                      <TableCell className="text-sm">
                        {integration.identityServices.join(", ")}
                      </TableCell>
                      <TableCell className="text-sm">
                        {integration.environments.length > 0 
                          ? integration.environments.join(", ") 
                          : "-"
                        }
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {integration.lastActivity}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="hover:bg-muted"
                            onClick={() => navigate(`/client/integrations/${integration.id}`)}
                            aria-label="View integration details"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="hover:bg-muted"
                            onClick={() => handleEdit(integration.id)}
                            aria-label="Edit integration"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="hover:bg-destructive/10 hover:text-destructive"
                            onClick={() => handleDeleteClick(integration)}
                            aria-label="Delete integration"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {/* Pagination - shown if more than 10 integrations */}
            {integrations.length > 10 && (
              <div className="mt-4 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Integration?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete <strong>{integrationToDelete?.name}</strong>? 
                This action cannot be undone and will remove all associated configurations, 
                roles, and user assignments.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteConfirm}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Delete Integration
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Quick Actions & Recent Activity - Below Table */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common developer resources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="w-full text-left p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <action.icon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">{action.title}</h4>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates to your integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="space-y-1">
                    <p className="text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Resource Dialogs */}
      <ResourceDialog
        open={activeDialog === 'technical-docs'}
        onOpenChange={(open) => !open && setActiveDialog(null)}
        title="Technical Documentation"
      >
        <TechnicalDocsContent />
      </ResourceDialog>

      <ResourceDialog
        open={activeDialog === 'api-reference'}
        onOpenChange={(open) => !open && setActiveDialog(null)}
        title="API Reference"
      >
        <APIReferenceContent />
      </ResourceDialog>

      <ResourceDialog
        open={activeDialog === 'integration-guide'}
        onOpenChange={(open) => !open && setActiveDialog(null)}
        title="Integration Guide"
      >
        <IntegrationGuideContent />
      </ResourceDialog>

      <ResourceDialog
        open={activeDialog === 'contact-support'}
        onOpenChange={(open) => !open && setActiveDialog(null)}
        title="Contact Support"
      >
        <ContactSupportContent />
      </ResourceDialog>
    </div>
  );
};

export default ClientDashboard;
