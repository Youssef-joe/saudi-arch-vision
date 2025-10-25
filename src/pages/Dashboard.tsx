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
      label: "Total Projects",
      value: "24",
      change: "+3 this week",
      color: "from-primary to-deepBlue",
    },
    {
      icon: CheckCircle,
      label: "Approved",
      value: "18",
      change: "+2 this week",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Clock,
      label: "Under Review",
      value: "4",
      change: "2 pending action",
      color: "from-accent to-gold",
    },
    {
      icon: AlertCircle,
      label: "Needs Revision",
      value: "2",
      change: "Action required",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const recentProjects = [
    {
      name: "Residential Complex - Riyadh",
      status: "Approved",
      date: "2025-10-20",
      compliance: "98%",
    },
    {
      name: "Commercial Tower - Jeddah",
      status: "Under Review",
      date: "2025-10-22",
      compliance: "85%",
    },
    {
      name: "Villa Project - Dammam",
      status: "Needs Revision",
      date: "2025-10-23",
      compliance: "72%",
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
              <h2 className="text-2xl font-semibold">Recent Projects</h2>
              <Button variant="outline">View All</Button>
            </div>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-accent/50 transition-all duration-300"
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">Compliance</p>
                      <p className="text-lg font-bold text-accent">{project.compliance}</p>
                    </div>
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
                <h3 className="text-xl font-semibold">Compliance Trend</h3>
              </div>
              <div className="h-48 flex items-center justify-center text-muted-foreground">
                Chart visualization coming soon
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Issued</span>
                  <span className="text-2xl font-bold">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">This Month</span>
                  <span className="text-2xl font-bold text-accent">5</span>
                </div>
                <Button className="w-full" variant="outline">
                  View All Certificates
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
