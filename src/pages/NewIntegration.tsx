
import BCHeader from "@/components/BCHeader";
import IntegrationWizard from "@/components/IntegrationWizard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const NewIntegration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <BCHeader />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Dashboard', path: '/client' },
            { label: 'New Integration' }
          ]}
        />
        <IntegrationWizard />
      </main>
    </div>
  );
};

export default NewIntegration;
