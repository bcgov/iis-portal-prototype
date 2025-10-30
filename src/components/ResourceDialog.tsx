import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

interface ResourceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export const ResourceDialog = ({ open, onOpenChange, title, children }: ResourceDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Information and resources for BC Government services
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export const TechnicalDocsContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground">
      Comprehensive technical documentation for integrating with BC Government identity services.
    </p>

    <div className="space-y-3">
      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">Getting Started Guide</h4>
        <p className="text-sm text-muted-foreground mb-2">
          Step-by-step instructions for setting up your first integration
        </p>
        <a href="#" className="text-sm text-primary hover:underline inline-flex items-center">
          View guide <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">Authentication Protocols</h4>
        <p className="text-sm text-muted-foreground mb-2">
          Detailed documentation on OIDC, SAML, and OAuth 2.0 implementations
        </p>
        <a href="#" className="text-sm text-primary hover:underline inline-flex items-center">
          View protocols <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">Security Best Practices</h4>
        <p className="text-sm text-muted-foreground mb-2">
          Guidelines for secure implementation and data handling
        </p>
        <a href="#" className="text-sm text-primary hover:underline inline-flex items-center">
          View best practices <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  </div>
);

export const APIReferenceContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground">
      Complete API reference documentation for all available endpoints and methods.
    </p>

    <div className="bg-slate-50 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Base URL</h4>
      <code className="text-sm bg-slate-100 px-2 py-1 rounded">
        https://api.loginproxy.gov.bc.ca/v1
      </code>
    </div>

    <div className="space-y-3">
      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">Authentication Endpoints</h4>
        <p className="text-sm text-muted-foreground mb-2">
          POST /auth/token - Obtain access tokens<br />
          GET /auth/userinfo - Retrieve user information<br />
          POST /auth/logout - End user session
        </p>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">Configuration Endpoints</h4>
        <p className="text-sm text-muted-foreground mb-2">
          GET /config/providers - List identity providers<br />
          POST /config/integrations - Create integration<br />
          GET /config/integrations/:id - Get integration details
        </p>
      </div>
    </div>
  </div>
);

export const IntegrationGuideContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground">
      Comprehensive guides for integrating various identity providers with your application.
    </p>

    <div className="space-y-3">
      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">BC Services Card Integration</h4>
        <p className="text-sm text-muted-foreground mb-2">
          Integrate BC Services Card for citizen authentication with highest assurance level
        </p>
        <ul className="text-sm list-disc list-inside space-y-1 text-muted-foreground">
          <li>Identity assurance level 3 (IAL3)</li>
          <li>Mobile app and web integration</li>
          <li>Age verification capabilities</li>
        </ul>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">BCeID Integration</h4>
        <p className="text-sm text-muted-foreground mb-2">
          Connect with business and basic BCeID for external user authentication
        </p>
        <ul className="text-sm list-disc list-inside space-y-1 text-muted-foreground">
          <li>Basic and Business account types</li>
          <li>Organization management</li>
          <li>Multi-factor authentication support</li>
        </ul>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">IDIR Integration</h4>
        <p className="text-sm text-muted-foreground mb-2">
          Authenticate BC Government employees and contractors
        </p>
        <ul className="text-sm list-disc list-inside space-y-1 text-muted-foreground">
          <li>Active Directory integration</li>
          <li>Role-based access control</li>
          <li>Single sign-on (SSO)</li>
        </ul>
      </div>
    </div>
  </div>
);

export const ContactSupportContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground">
      Get help from our technical support team for integration questions and issues.
    </p>

    <div className="space-y-3">
      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">Technical Support</h4>
        <p className="text-sm text-muted-foreground mb-2">
          For integration assistance and technical issues
        </p>
        <p className="text-sm">
          <strong>Email:</strong> idim.support@gov.bc.ca<br />
          <strong>Hours:</strong> Monday-Friday, 8:30 AM - 4:30 PM PST
        </p>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">Rocket.Chat</h4>
        <p className="text-sm text-muted-foreground mb-2">
          Join our community chat for quick questions and discussions
        </p>
        <p className="text-sm">
          <strong>Channel:</strong> #identity-services<br />
          <strong>Access:</strong> chat.developer.gov.bc.ca
        </p>
      </div>

      <div className="border rounded-lg p-4">
        <h4 className="font-semibold mb-2">Service Desk</h4>
        <p className="text-sm text-muted-foreground mb-2">
          For urgent production issues and outages
        </p>
        <p className="text-sm">
          <strong>Phone:</strong> 250-387-7000<br />
          <strong>Available:</strong> 24/7 for critical issues
        </p>
      </div>
    </div>
  </div>
);
