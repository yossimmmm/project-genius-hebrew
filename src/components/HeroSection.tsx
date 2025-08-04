
import { ArrowLeft, Star, Users, GraduationCap, Zap } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent("היי, התעניינתי בשירותי פרויקטים שאתם מציעים");
  const whatsappUrl = `https://wa.me/972509888175?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95"></div>
      <div className="absolute inset-0 apple-overlay opacity-3"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 ios-scale-enter">
            <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm rounded-xl px-4 py-2 border border-border/20 ios-card ios-stagger-1">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium text-sm">מעל 250 לקוחות מרוצים</span>
            </div>
            <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm rounded-xl px-4 py-2 border border-border/20 ios-card ios-stagger-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium text-sm">ציון ממוצע 90+</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 ios-text-reveal">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-heebo">
              <span className="text-foreground font-bold block">
                אין לך זמן או חשק לפרויקט? לנו יש.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed ios-text-reveal-delay">
              פתרונות אקדמיים מותאמים אישית, עם בקרת איכות כפולה והגשה בזמן.
            </p>
          </div>

          {/* Service Tags - Better Mobile Layout */}
          <div className="space-y-6 ios-fade-up">
            <p className="text-base md:text-lg text-muted-foreground font-light">
              תשאירו את הכאב ראש והעבודה השחורה לנו.
            </p>
            <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 max-w-2xl mx-auto ios-stagger-enter">
              <span className="bg-primary/10 text-primary px-3 py-2 rounded-xl border border-primary/20 ios-stagger-3 text-center text-sm md:text-base">עבודות גמר</span>
              <span className="bg-primary/10 text-primary px-3 py-2 rounded-xl border border-primary/20 ios-stagger-4 text-center text-sm md:text-base">תרגילים</span>
              <span className="bg-primary/10 text-primary px-3 py-2 rounded-xl border border-primary/20 ios-stagger-5 text-center text-sm md:text-base">קורסים</span>
              <span className="bg-primary/10 text-primary px-3 py-2 rounded-xl border border-primary/20 ios-stagger-6 text-center text-sm md:text-base">ליווי אישי</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ios-fade-up-delay">
            <HeroButton 
              variant="glow" 
              size="lg"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="group shadow-xl hover:shadow-primary/20 ios-button px-8 py-3"
            >
              <span className="flex items-center gap-3 text-lg font-medium">
                בואו נתחיל עכשיו
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
              </span>
            </HeroButton>
            
            <HeroButton 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="backdrop-blur-sm border-border text-foreground hover:bg-card/50 ios-button px-8 py-3 text-lg"
            >
              גלה את השירותים
            </HeroButton>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 ios-scale-enter" style={{ animationDelay: '1.2s' }}>
            <p className="text-muted-foreground mb-3 text-sm">אמינות מוכחת</p>
            <div className="flex justify-center items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400 transition-all duration-300 hover:scale-110" />
              ))}
              <span className="text-foreground font-medium mr-2 text-sm">4.9/5</span>
              <span className="text-muted-foreground text-sm">ממוצע ביקורות</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ios-scale-enter" style={{ animationDelay: '1.5s' }}>
        <div className="w-5 h-8 border border-border/20 rounded-full flex justify-center ios-card">
          <div className="w-0.5 h-2 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
