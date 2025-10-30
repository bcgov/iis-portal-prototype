
import BCHeader from "@/components/BCHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Users, Shield, Activity, AlertTriangle, Settings, FileText, Check, X, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { DemoControls } from "@/components/DemoControls";
import { StatusBadge } from "@/components/StatusBadge";

interface PendingRequest {
  id: string;
  name: string;
  identityServices: string[];
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedBy: string;
  requestDate: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [pendingRequests, setPendingRequests] = useState<PendingRequest[]>([
    {
      id: "1",
      name: "Health Portal System",
      identityServices: ["BC Services Card", "BCeID"],
      description: "Public health service for appointment booking and medical records access",
      status: "pending",
      requestedBy: "Patricia Lee",
      requestDate: "2 hours ago"
    },
    {
      id: "2",
      name: "Transportation Management Portal",
      identityServices: ["IDIR", "BCeID"],
      description: "Internal system for managing transportation infrastructure projects",
      status: "pending",
      requestedBy: "Michael Chen",
      requestDate: "5 hours ago"
    }
  ]);

  const handleApprove = (requestId: string) => {
    const request = pendingRequests.find(r => r.id === requestId);
    setPendingRequests(prev => prev.map(r =>
      r.id === requestId ? { ...r, status: 'approved' as const } : r
    ));

    toast({
      title: "Integration approved",
      description: `${request?.name} has been approved and the team will be notified.`,
    });

    // Remove from pending list after a short delay
    setTimeout(() => {
      setPendingRequests(prev => prev.filter(r => r.id !== requestId));
    }, 2000);
  };

  const handleReject = (requestId: string) => {
    const request = pendingRequests.find(r => r.id === requestId);
    setPendingRequests(prev => prev.map(r =>
      r.id === requestId ? { ...r, status: 'rejected' as const } : r
    ));

    toast({
      title: "Integration rejected",
      description: `${request?.name} has been rejected. The team will be notified.`,
      variant: "destructive",
    });

    // Remove from pending list after a short delay
    setTimeout(() => {
      setPendingRequests(prev => prev.filter(r => r.id !== requestId));
    }, 2000);
  };

  const activePendingCount = pendingRequests.filter(r => r.status === 'pending').length;

  const systemStats = [
    {
      title: "Active Integrations",
      value: "147",
      change: "+12 this month",
      icon: Activity,
      color: "text-blue-600"
    },
    {
      title: "Pending Approvals",
      value: activePendingCount.toString(),
      change: "Requires attention",
      icon: AlertTriangle,
      color: "text-orange-600"
    },
    {
      title: "Total Users",
      value: "2.3M",
      change: "+5.2% this month",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "System Health",
      value: "99.9%",
      change: "All systems operational",
      icon: Shield,
      color: "text-green-600"
    }
  ];

  const recentActivity = [
    {
      action: "New integration request",
      service: "Health Portal System",
      time: "2 hours ago",
      status: "pending"
    },
    {
      action: "Integration approved",
      service: "Education Services",
      time: "4 hours ago",
      status: "approved"
    },
    {
      action: "System maintenance completed",
      service: "BC Services Card Provider",
      time: "1 day ago",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <BCHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor and manage the IIS Broker system
            </p>
          </div>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => console.log("System settings")}
          >
            <Settings className="mr-2 h-5 w-5" />
            System Settings
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index} className="bc-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pending Approvals */}
          <div className="lg:col-span-2">
            <Card className="bc-card">
              <CardHeader>
                <CardTitle>Pending Integration Requests</CardTitle>
                <CardDescription>New integrations awaiting approval</CardDescription>
              </CardHeader>
              <CardContent>
                {pendingRequests.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-500" />
                    <p className="font-medium">All caught up!</p>
                    <p className="text-sm">No pending integration requests at this time.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pendingRequests.map((request) => (
                      <div key={request.id} className="border rounded-lg p-4 transition-all">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{request.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {request.identityServices.join(" + ")}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Requested by {request.requestedBy} • {request.requestDate}
                            </p>
                          </div>
                          <StatusBadge status={request.status} />
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {request.description}
                        </p>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleApprove(request.id)}
                            disabled={request.status !== 'pending'}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <Check className="mr-1 h-4 w-4" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReject(request.id)}
                            disabled={request.status !== 'pending'}
                            className="hover:bg-red-50 hover:text-red-700 hover:border-red-300"
                          >
                            <X className="mr-1 h-4 w-4" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Activity */}
          <div className="space-y-6">
            <Card className="bc-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  Identity Providers
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  System Reports
                </Button>
              </CardContent>
            </Card>

            <Card className="bc-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-3">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.service}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <DemoControls />
    </div>
  );
};

export default AdminDashboard;
