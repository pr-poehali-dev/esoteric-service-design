import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg z-50 p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Icon name="Cookie" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div className="text-sm text-muted-foreground">
            <p>
              Мы используем файлы cookie для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                политикой обработки персональных данных
              </Link>
              .
            </p>
          </div>
        </div>
        <Button onClick={handleAccept} className="whitespace-nowrap">
          Согласен
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
