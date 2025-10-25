import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  Users,
  Settings,
  Activity,
  Database,
  Shield,
  Bell,
} from "lucide-react";

const Admin = () => {
  const { t } = useTranslation();

  const systemStats = [
    { label: "Total Users", value: "248", icon: Users, color: "from-blue-500 to-blue-600" },
    { label: "Active Projects", value: "42", icon: Activity, color: "from-accent to-teal" },
    { label: "Storage Used", value: "2.4 TB", icon: Database, color: "from-purple-500 to-purple-600" },
    { label: "Pending Reviews", value: "8", icon: Shield, color: "from-orange-500 to-orange-600" },
  ];

  const recentActivity = [
    { user: "Ahmed Al-Rashid", action: "Uploaded new project", time: "5 min ago" },
    { user: "Sara Mohammed", action: "Approved certificate", time: "15 min ago" },
    { user: "Khalid Hassan", action: "Updated project status", time: "1 hour ago" },
    { user: "Fatima Ali", action: "Downloaded compliance report", time: "2 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary to-deepBlue bg-clip-text text-transparent">
                  Admin Panel
                </span>
              </h1>
              <p className="text-muted-foreground mt-2">
                System management and monitoring
              </p>
            </div>
            <Button className="bg-gradient-to-r from-accent to-teal-light">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemStats.map((stat, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg shadow-accent`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Activity className="h-5 w-5 text-accent" />
                  Recent Activity
                </h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* System Health */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  System Health
                </h2>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  All Systems Operational
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { service: "API Server", status: "Operational", uptime: "99.9%" },
                  { service: "Database", status: "Operational", uptime: "99.8%" },
                  { service: "AI Analysis", status: "Operational", uptime: "99.7%" },
                  { service: "File Storage", status: "Operational", uptime: "99.9%" },
                ].map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{service.service}</p>
                      <p className="text-xs text-muted-foreground">Uptime: {service.uptime}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {service.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                <Users className="h-6 w-6" />
                <span>Manage Users</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                <Bell className="h-6 w-6" />
                <span>System Alerts</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                <Database className="h-6 w-6" />
                <span>Backup Data</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
