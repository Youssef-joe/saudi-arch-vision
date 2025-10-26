import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  FileCheck,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Award,
} from "lucide-react";

const Dashboard = () => {
  const { t } = useTranslation();
  const stats = [
    {
      icon: FileCheck,
      label: t("dashboard.totalProjects"),
      value: "24",
      change: "+3 this week",
      color: "from-primary to-deepBlue",
    },
    {
      icon: CheckCircle,
      label: t("dashboard.approved"),
      value: "18",
      change: "+2 this week",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Clock,
      label: t("dashboard.underReview"),
      value: "4",
      change: "2 pending action",
      color: "from-accent to-gold",
    },
    {
      icon: AlertCircle,
      label: t("dashboard.needsRevision"),
      value: "2",
      change: "Action required",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const recentProjects = [
    {
      name: "Al-Noor Residential Complex - Riyadh",
      status: "Approved",
      date: "2025-01-20",
      compliance: "98%",
      architect: "Saudi Design Studio",
      area: "15,000 m²",
      type: "Residential",
    },
    {
      name: "Kingdom Business Tower - Jeddah",
      status: "Under Review",
      date: "2025-01-22",
      compliance: "85%",
      architect: "Modern Arch Consultants",
      area: "45,000 m²",
      type: "Commercial",
    },
    {
      name: "Al-Fanar Villa Complex - Dammam",
      status: "Needs Revision",
      date: "2025-01-23",
      compliance: "72%",
      architect: "Eastern Design Group",
      area: "8,500 m²",
      type: "Residential",
    },
    {
      name: "Green Mall Shopping Center - Riyadh",
      status: "Approved",
      date: "2025-01-18",
      compliance: "94%",
      architect: "Sustainable Architects KSA",
      area: "32,000 m²",
      type: "Commercial",
    },
    {
      name: "Heritage Cultural Center - Mecca",
      status: "Under Review",
      date: "2025-01-25",
      compliance: "89%",
      architect: "Cultural Heritage Designs",
      area: "12,000 m²",
      type: "Cultural",
    },
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
                  {t("dashboard.title")}
                </span>
              </h1>
              <p className="text-muted-foreground mt-2">
                {t("dashboard.subtitle")}
              </p>
            </div>
            <Button className="bg-gradient-to-r from-accent to-teal-light hover:shadow-accent transition-all duration-300">
              <FileCheck className="mr-2 h-4 w-4" />
              {t("dashboard.newProject")}
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg shadow-gold`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Recent Projects */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">{t("dashboard.recentProjects")}</h2>
              <Button variant="outline">{t("dashboard.viewAll")}</Button>
            </div>
            <div className="space-y-4">
              {recentProjects.slice(0, 3).map((project, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-4 border border-border rounded-lg hover:border-accent/50 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{project.name}</h3>
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                        {project.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <p><span className="font-medium">Architect:</span> {project.architect}</p>
                        <p><span className="font-medium">Area:</span> {project.area}</p>
                      </div>
                      <div>
                        <p><span className="font-medium">Date:</span> {project.date}</p>
                        <p><span className="font-medium">Compliance:</span> <span className="text-accent font-bold">{project.compliance}</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        project.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : project.status === "Under Review"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold">{t("dashboard.complianceTrend")}</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">94.2%</p>
                    <p className="text-xs text-muted-foreground">Avg Compliance</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">+5.8%</p>
                    <p className="text-xs text-muted-foreground">This Month</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">12</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Energy Efficiency</span>
                    <span className="font-medium">96%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }} />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Fire Safety</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }} />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Accessibility</span>
                    <span className="font-medium">89%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '89%' }} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold">{t("dashboard.certifications")}</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t("dashboard.totalIssued")}</span>
                  <span className="text-2xl font-bold">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t("dashboard.thisMonth")}</span>
                  <span className="text-2xl font-bold text-accent">5</span>
                </div>
                <Button className="w-full" variant="outline">
                  {t("dashboard.viewAllCertificates")}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
