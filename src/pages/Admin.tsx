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
    { label: t("admin.stats.totalUsers"), value: "248", icon: Users, color: "from-blue-500 to-blue-600" },
    { label: t("admin.stats.activeProjects"), value: "42", icon: Activity, color: "from-accent to-teal" },
    { label: t("admin.stats.storageUsed"), value: "2.4 TB", icon: Database, color: "from-purple-500 to-purple-600" },
    { label: t("admin.stats.pendingReviews"), value: "8", icon: Shield, color: "from-orange-500 to-orange-600" },
  ];

  const recentActivity = [
    { user: "Ahmed Al-Rashid", action: "Uploaded Al-Noor Residential Complex plans", time: "5 min ago", type: "upload" },
    { user: "Sara Mohammed", action: "Approved SBC-CERT-2025-003 certificate", time: "15 min ago", type: "approval" },
    { user: "Khalid Hassan", action: "Updated Kingdom Tower project status to Under Review", time: "1 hour ago", type: "update" },
    { user: "Fatima Ali", action: "Downloaded compliance report for Green Mall project", time: "2 hours ago", type: "download" },
    { user: "Omar Abdullah", action: "Initiated AI analysis for Heritage Center", time: "3 hours ago", type: "analysis" },
    { user: "Layla Mansour", action: "Generated QR verification code", time: "4 hours ago", type: "verification" },
    { user: "Mohammed Bin Salman", action: "Exported 3D model for Tech Hub project", time: "5 hours ago", type: "export" },
  ];

  const systemMetrics = {
    apiRequests: "2,847",
    analysisJobs: "156",
    storageUsage: "2.4 TB",
    activeUsers: "89",
    avgResponseTime: "245ms",
    errorRate: "0.02%",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary to-deepBlue bg-clip-text text-transparent">
                  {t("admin.title")}
                </span>
              </h1>
              <p className="text-muted-foreground mt-2">
                {t("admin.subtitle")}
              </p>
            </div>
            <Button className="bg-gradient-to-r from-accent to-teal-light">
              <Settings className="h-4 w-4 mr-2" />
              {t("admin.systemSettings")}
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
                  {t("admin.recentActivity")}
                </h2>
                <Button variant="outline" size="sm">{t("admin.viewAll")}</Button>
              </div>
              <div className="space-y-3">
                {recentActivity.slice(0, 5).map((activity, index) => {
                  const getActivityIcon = (type: string) => {
                    switch (type) {
                      case 'upload': return '📤';
                      case 'approval': return '✅';
                      case 'update': return '🔄';
                      case 'download': return '📥';
                      case 'analysis': return '🤖';
                      case 'verification': return '🔍';
                      case 'export': return '📊';
                      default: return '📋';
                    }
                  };
                  
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="text-lg mt-0.5">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.user}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* System Health */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  {t("admin.systemHealth")}
                </h2>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  {t("admin.allSystemsOperational")}
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { service: t("admin.services.apiServer"), status: t("admin.services.operational"), uptime: "99.9%", load: "23%", icon: "🌐" },
                  { service: t("admin.services.database"), status: t("admin.services.operational"), uptime: "99.8%", load: "45%", icon: "🗄️" },
                  { service: t("admin.services.aiAnalysis"), status: t("admin.services.operational"), uptime: "99.7%", load: "67%", icon: "🤖" },
                  { service: t("admin.services.fileStorage"), status: t("admin.services.operational"), uptime: "99.9%", load: "34%", icon: "💾" },
                ].map((service, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{service.icon}</span>
                        <p className="font-medium text-sm">{service.service}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        {service.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                      <div>
                        <span>{t("admin.services.uptime")}: </span>
                        <span className="font-medium">{service.uptime}</span>
                      </div>
                      <div>
                        <span>Load: </span>
                        <span className="font-medium">{service.load}</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-secondary rounded-full h-1.5">
                        <div 
                          className="bg-green-500 h-1.5 rounded-full transition-all" 
                          style={{ width: service.load }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-semibold text-sm mb-3">System Metrics (Last 24h)</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-muted-foreground">API Requests</p>
                    <p className="font-bold text-lg">{systemMetrics.apiRequests}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Analysis Jobs</p>
                    <p className="font-bold text-lg">{systemMetrics.analysisJobs}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg Response</p>
                    <p className="font-bold text-lg">{systemMetrics.avgResponseTime}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Error Rate</p>
                    <p className="font-bold text-lg text-green-600">{systemMetrics.errorRate}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">{t("admin.quickActions")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                <Users className="h-6 w-6" />
                <span>{t("admin.actions.manageUsers")}</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                <Bell className="h-6 w-6" />
                <span>{t("admin.actions.systemAlerts")}</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                <Database className="h-6 w-6" />
                <span>{t("admin.actions.backupData")}</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
