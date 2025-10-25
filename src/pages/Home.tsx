import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
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

  const features = [
    {
      icon: Upload,
      title: "Smart Upload",
      description: "Accept all drawing formats: DWG, DXF, PDF, IFC, RVT and more",
    },
    {
      icon: FileCheck,
      title: "AI Analysis",
      description: "Automated compliance check against Saudi Architectural Guidelines",
    },
    {
      icon: Boxes,
      title: "3D Visualization",
      description: "Convert 2D plans into interactive 3D models instantly",
    },
    {
      icon: MessageSquare,
      title: "AI Assistant",
      description: "Get instant answers about design issues and recommendations",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Digital certificates with QR code verification",
    },
    {
      icon: Activity,
      title: "Performance Monitoring",
      description: "10-year building simulation with real-time IoT integration",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Upload Your Plans",
      description: "Simply drag and drop your architectural drawings in any format",
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI analyzes compliance, performance, and design quality",
    },
    {
      number: "03",
      title: "Review & Improve",
      description: "Get actionable recommendations and visualize improvements",
    },
    {
      number: "04",
      title: "Get Certified",
      description: "Receive compliance certification with QR verification",
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
              <span className="text-sm font-medium text-accent">AI-Powered Architecture Review</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-deepBlue to-primary bg-clip-text text-transparent">
                Transform Architectural
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
                Review & Certification
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload your architectural plans and get instant AI-powered analysis, compliance
              verification, and performance simulation aligned with Saudi Architectural Design Guidelines.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-deepBlue hover:shadow-elegant transition-all duration-300 text-lg px-8"
                onClick={() => navigate("/upload")}
              >
                <Upload className="mr-2 h-5 w-5" />
                Start Analysis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent/10 text-lg px-8"
                onClick={() => navigate("/dashboard")}
              >
                View Dashboard
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">Saudi Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">AI-Powered</span>
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
                Comprehensive Features
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for modern architectural review and certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 group animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-gradient-to-br from-accent/10 to-gold/10 rounded-lg w-fit mb-4 group-hover:shadow-gold transition-all duration-300">
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
                How It Works
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, efficient workflow from upload to certification
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
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center shadow-gold">
                    <span className="text-3xl font-bold text-primary">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent to-gold/30" />
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
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join architects and design offices using AI to accelerate review and ensure compliance
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-gold text-foreground text-lg px-8 shadow-gold hover:shadow-gold transition-all duration-300"
            onClick={() => navigate("/upload")}
          >
            <Upload className="mr-2 h-5 w-5" />
            Start Free Analysis
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 ArchReview AI. Empowering sustainable architecture in Saudi Arabia.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
