import { ArrowLeft, Star, Users, GraduationCap, Zap } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent("היי, התעניינתי בשירותי פרויקטים שאתם מציעים");
  const whatsappUrl = `https://wa.me/972509888175?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Minimal Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95"></div>
      <div className="absolute inset-0 apple-overlay opacity-5"></div>

      {/* Main Content - Clean & Minimal */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          
          {/* Minimal Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 ios-scale-enter">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/30 ios-card ios-stagger-1">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium text-sm">200+ לקוחות מרוצים</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/30 ios-card ios-stagger-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium text-sm">60+ סטודנטים שסיימו תואר</span>
            </div>
          </div>

          {/* Clean Professional Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heebo">
            <span className="text-foreground font-bold ios-text-reveal block">פתרונות אקדמיים</span>
            <span className="ios-text-reveal-delay text-foreground font-bold block mt-2">מותאמים אישית</span>
            <span className="ios-text-reveal text-muted-foreground text-lg md:text-xl lg:text-2xl font-normal mt-4 block leading-relaxed">
              מהירים, מקצועיים, ובסטנדרט הגבוה ביותר
            </span>
          </h1>

          {/* Minimal Subtitle */}
          <div className="space-y-4 mb-10 ios-fade-up">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              מתמחים בביצוע פרויקטים לסטודנטים בכל תחום ותואר
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base ios-stagger-enter">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full border border-primary/20 ios-stagger-3">עבודות גמר</span>
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full border border-primary/20 ios-stagger-4">תרגילים</span>
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full border border-primary/20 ios-stagger-5">קורסים</span>
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full border border-primary/20 ios-stagger-6">ליווי אישי</span>
            </div>
          </div>

          {/* Minimal Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ios-fade-up-delay">
            <HeroButton 
              variant="glow" 
              size="lg"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="group shadow-lg hover:shadow-primary/20 ios-button px-8 py-3"
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

          {/* Minimal Trust Indicators */}
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

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ios-scale-enter" style={{ animationDelay: '1.5s' }}>
        <div className="w-5 h-8 border border-border/30 rounded-full flex justify-center ios-card">
          <div className="w-0.5 h-2 bg-primary rounded-full mt-2 ios-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
