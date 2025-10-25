import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Upload,
  FileCheck,
  Boxes,
  MessageSquare,
  Award,
  Activity,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const features = [
    {
      icon: Upload,
      title: t("features.smartUpload.title"),
      description: t("features.smartUpload.description"),
    },
    {
      icon: FileCheck,
      title: t("features.aiAnalysis.title"),
      description: t("features.aiAnalysis.description"),
    },
    {
      icon: Boxes,
      title: t("features.3dVisualization.title"),
      description: t("features.3dVisualization.description"),
    },
    {
      icon: MessageSquare,
      title: t("features.aiAssistant.title"),
      description: t("features.aiAssistant.description"),
    },
    {
      icon: Award,
      title: t("features.certification.title"),
      description: t("features.certification.description"),
    },
    {
      icon: Activity,
      title: t("features.performanceMonitoring.title"),
      description: t("features.performanceMonitoring.description"),
    },
  ];

  const steps = [
    {
      number: "01",
      title: t("steps.step1.title"),
      description: t("steps.step1.description"),
    },
    {
      number: "02",
      title: t("steps.step2.title"),
      description: t("steps.step2.description"),
    },
    {
      number: "03",
      title: t("steps.step3.title"),
      description: t("steps.step3.description"),
    },
    {
      number: "04",
      title: t("steps.step4.title"),
      description: t("steps.step4.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-sand/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t("home.badge")}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-deepBlue to-primary bg-clip-text text-transparent">
                {t("home.title1")}
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-teal-light bg-clip-text text-transparent">
                {t("home.title2")}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-deepBlue hover:shadow-elegant transition-all duration-300 text-lg px-8"
                onClick={() => navigate("/upload")}
              >
                <Upload className="mr-2 h-5 w-5" />
                {t("home.startAnalysis")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent/10 text-lg px-8"
                onClick={() => navigate("/dashboard")}
              >
                {t("home.viewDashboard")}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">{t("home.saudiCompliant")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">{t("home.aiPowered")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-deepBlue bg-clip-text text-transparent">
                {t("home.featuresTitle")}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.featuresSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 group animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-gradient-to-br from-accent/10 to-teal/10 rounded-lg w-fit mb-4 group-hover:shadow-accent transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-deepBlue bg-clip-text text-transparent">
                {t("home.howItWorksTitle")}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.howItWorksSubtitle")}
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-teal-light rounded-full flex items-center justify-center shadow-accent">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent to-teal/30" />
                  )}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-deepBlue to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t("home.ctaDescription")}
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-teal-light text-accent-foreground text-lg px-8 shadow-accent hover:shadow-accent transition-all duration-300"
            onClick={() => navigate("/upload")}
          >
            <Upload className="mr-2 h-5 w-5" />
            {t("home.startFreeAnalysis")}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>{t("home.footer")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
