import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useIntegrations } from "@/hooks/useIntegrations";
import { useToast } from "@/hooks/use-toast";
import { RotateCcw, Info, Trash2 } from "lucide-react";
import { STORAGE_KEYS } from "@/data/mockData";

export const DemoControls = () => {
  const [open, setOpen] = useState(false);
  const { resetToDefaults } = useIntegrations();
  const { toast } = useToast();

  const handleReset = () => {
    resetToDefaults();
    localStorage.removeItem(STORAGE_KEYS.WIZARD_DRAFT);
    localStorage.removeItem(STORAGE_KEYS.ACTIVITY_LOGS);

    toast({
      title: "Demo data reset",
      description: "All data has been reset to default values.",
    });

    setOpen(false);

    // Reload page to refresh all components
    window.location.reload();
  };

  const handleClearDraft = () => {
    localStorage.removeItem(STORAGE_KEYS.WIZARD_DRAFT);
    toast({
      title: "Draft cleared",
      description: "Wizard draft has been cleared.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed bottom-4 right-4 shadow-lg z-50 bg-white"
        >
          <Info className="mr-2 h-4 w-4" />
          Demo Controls
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Demo Controls</DialogTitle>
          <DialogDescription>
            Manage prototype data and settings
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Reset Demo Data</CardTitle>
              <CardDescription className="text-sm">
                Reset all integrations to original demo data. This will delete any integrations you've created.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="destructive"
                size="sm"
                className="w-full"
                onClick={handleReset}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset All Data
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Clear Wizard Draft</CardTitle>
              <CardDescription className="text-sm">
                Clear any saved wizard progress to start fresh.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={handleClearDraft}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Draft
              </Button>
            </CardContent>
          </Card>

          <div className="text-sm text-muted-foreground space-y-2 border-t pt-4">
            <p className="font-semibold">Prototype Information:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>All data is stored in browser localStorage</li>
              <li>No actual backend connections</li>
              <li>Data persists between sessions</li>
              <li>Clear browser data to reset everything</li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
