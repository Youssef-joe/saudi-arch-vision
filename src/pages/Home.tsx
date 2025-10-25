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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-emerald/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald/20 to-forest/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/15 to-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up">
              <span className="bg-gradient-to-r from-primary via-forest to-primary bg-clip-text text-transparent text-gradient-fallback">
                {t("home.title1")}
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-emerald-light bg-clip-text text-transparent text-gradient-fallback">
                {t("home.title2")}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              {t("home.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Button
                size="lg"
                className="btn-gradient text-white text-lg px-8 py-4 rounded-xl font-semibold shadow-accent animate-glow"
                onClick={() => navigate("/upload")}
              >
                <Upload className="mr-2 h-5 w-5" />
                {t("home.startAnalysis")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent/10 text-lg px-8 py-4 rounded-xl font-semibold glass hover:shadow-accent transition-all duration-300"
                onClick={() => navigate("/dashboard")}
              >
                {t("home.viewDashboard")}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground font-medium">{t("home.saudiCompliant")}</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground font-medium">{t("home.aiPowered")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-mint/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald/10 to-accent/5 rounded-full blur-2xl" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-forest bg-clip-text text-transparent text-gradient-fallback">
                {t("home.featuresTitle")}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.featuresSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 card-hover glass border-0 shadow-lg group animate-in fade-in slide-in-from-bottom backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 bg-gradient-to-br from-accent/20 to-emerald/20 rounded-xl w-fit mb-6 group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
              <span className="bg-gradient-to-r from-primary to-forest bg-clip-text text-transparent text-gradient-fallback">
                {t("home.howItWorksTitle")}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.howItWorksSubtitle")}
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center space-y-6 animate-in fade-in slide-in-from-bottom group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent to-emerald-light rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-all duration-500 animate-glow">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-1 bg-gradient-to-r from-accent/60 to-emerald/30 rounded-full" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-forest to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}} />
        </div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-r from-emerald/20 to-accent/10 rounded-full blur-3xl animate-float" />
        <div className="container mx-auto px-4 text-center space-y-10 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            {t("home.ctaDescription")}
          </p>
          <Button
            size="lg"
            className="bg-white text-primary text-xl px-12 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-500 animate-glow"
            onClick={() => navigate("/upload")}
          >
            <Upload className="mr-3 h-6 w-6" />
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
