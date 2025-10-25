import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Award, Download, QrCode, CheckCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Certificates = () => {
  const { t } = useTranslation();

  const certificates = [
    {
      id: "CERT-2025-001",
      projectName: "Residential Complex - Riyadh",
      issuedDate: "2025-10-20",
      validUntil: "2030-10-20",
      compliance: "98%",
      status: "Valid",
    },
    {
      id: "CERT-2025-002",
      projectName: "Commercial Tower - Jeddah",
      issuedDate: "2025-10-18",
      validUntil: "2030-10-18",
      compliance: "95%",
      status: "Valid",
    },
    {
      id: "CERT-2025-003",
      projectName: "Villa Project - Dammam",
      issuedDate: "2025-10-15",
      validUntil: "2030-10-15",
      compliance: "97%",
      status: "Valid",
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
                  {t("certificates.title")}
                </span>
              </h1>
              <p className="text-muted-foreground mt-2">
                {t("certificates.subtitle")}
              </p>
            </div>
          </div>

          {/* Search */}
          <Card className="p-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder={t("certificates.searchPlaceholder")}
                  className="w-full"
                />
              </div>
              <Button className="bg-gradient-to-r from-accent to-teal-light">
                <Search className="h-4 w-4 mr-2" />
                {t("certificates.search")}
              </Button>
            </div>
          </Card>

          {/* Certificates List */}
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-6 flex-1">
                    <div className="p-4 bg-gradient-to-br from-accent/10 to-teal/10 rounded-lg">
                      <Award className="h-8 w-8 text-accent" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{cert.projectName}</h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
                          <CheckCircle className="h-3 w-3" />
                          {cert.status}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground font-mono">
                        {t("certificates.certificateId")}: {cert.id}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-4 pt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">{t("certificates.issuedDate")}</p>
                          <p className="text-sm font-medium">{cert.issuedDate}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{t("certificates.validUntil")}</p>
                          <p className="text-sm font-medium">{cert.validUntil}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{t("certificates.compliance")}</p>
                          <p className="text-sm font-medium text-accent">{cert.compliance}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <QrCode className="h-4 w-4" />
                    </Button>
                    <Button className="bg-gradient-to-r from-accent to-teal-light">
                      <Download className="h-4 w-4 mr-2" />
                      {t("certificates.download")}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold text-accent">18</p>
              <p className="text-sm text-muted-foreground mt-1">{t("certificates.stats.totalIssued")}</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold text-green-600">18</p>
              <p className="text-sm text-muted-foreground mt-1">{t("certificates.stats.valid")}</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold text-orange-600">0</p>
              <p className="text-sm text-muted-foreground mt-1">{t("certificates.stats.expiringSoon")}</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold">5</p>
              <p className="text-sm text-muted-foreground mt-1">{t("certificates.stats.thisMonth")}</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
