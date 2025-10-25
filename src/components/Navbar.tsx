import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layers, Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-3 bg-white rounded-xl group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
              <img src="/logo.svg" alt="SIMA Logo" className="h-12 w-12" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-sima-navy bg-clip-text text-transparent text-gradient-fallback">
              {t("brand.name")}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <Link to="/upload" className="text-foreground hover:text-primary transition-colors">
              {t("nav.upload")}
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
              {t("nav.dashboard")}
            </Link>
            <Link to="/viewer3d" className="text-foreground hover:text-primary transition-colors">
              {t("nav.viewer3d")}
            </Link>
            <Link to="/chat" className="text-foreground hover:text-primary transition-colors">
              {t("nav.chat")}
            </Link>
            <Link to="/certificates" className="text-foreground hover:text-primary transition-colors">
              {t("nav.certificates")}
            </Link>
            <Link to="/admin" className="text-foreground hover:text-primary transition-colors">
              {t("nav.admin")}
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="ghost">{t("nav.signIn")}</Button>
            <Button className="bg-gradient-to-r from-primary to-sima-purple text-white font-semibold px-6 rounded-xl hover:shadow-accent transition-all duration-300">
              {t("nav.getStarted")}
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top">
            <Link to="/" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("nav.home")}
            </Link>
            <Link to="/upload" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("nav.upload")}
            </Link>
            <Link to="/dashboard" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("nav.dashboard")}
            </Link>
            <Link to="/viewer3d" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("nav.viewer3d")}
            </Link>
            <Link to="/chat" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("nav.chat")}
            </Link>
            <Link to="/certificates" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("nav.certificates")}
            </Link>
            <Link to="/admin" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t("nav.admin")}
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <LanguageSwitcher />
              <Button variant="ghost" className="w-full">{t("nav.signIn")}</Button>
              <Button className="w-full bg-gradient-to-r from-primary to-sima-purple text-white font-semibold rounded-xl hover:shadow-accent transition-all duration-300">
                {t("nav.getStarted")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
