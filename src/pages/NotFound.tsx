import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HeroButton } from "@/components/ui/hero-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 apple-overlay opacity-10"></div>
      <div className="relative z-10 glass-card p-10 rounded-2xl text-center space-y-6">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="text-muted-foreground text-lg">אופס! הדף לא נמצא</p>
        <HeroButton variant="glow" asChild>
          <a href="/">חזרה לדף הבית</a>
        </HeroButton>
      </div>
    </div>
  );
};

export default NotFound;
