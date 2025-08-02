import { ArrowLeft, Star, Users, GraduationCap, Zap } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent("היי, התעניינתי בשירותי פרויקטים שאתם מציעים");
  const whatsappUrl = `https://wa.me/972509888175?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Dynamic Background */}
      <div className="absolute inset-0 premium-gradient"></div>
      
      {/* Elegant Floating Particles */}
      <div className="floating-particles">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 ios-fade-in">
            <div className="premium-card px-6 py-3 stagger-1">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">200+ לקוחות מרוצים</span>
              </div>
            </div>
            <div className="premium-card px-6 py-3 stagger-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">סטודנטים בכל התארים</span>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-8 ios-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight text-balance">
              <span className="text-white">הפרויקט שלך,</span>
              <br />
              <span className="text-gradient">בסטנדרט הגבוה ביותר</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-12 ios-fade-in stagger-3">
            <p className="text-xl md:text-2xl text-white/90 max-w-readable mx-auto leading-relaxed font-medium text-balance">
              פתרונות מותאמים אישית, בקרת איכות כפולה, והגשה מדויקת בזמן
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className="premium-card px-4 py-2 text-sm text-foreground/80 stagger-4">עבודות גמר</span>
              <span className="premium-card px-4 py-2 text-sm text-foreground/80 stagger-5">תרגילים</span>
              <span className="premium-card px-4 py-2 text-sm text-foreground/80 stagger-6">קורסים</span>
              <span className="premium-card px-4 py-2 text-sm text-foreground/80 stagger-1">ליווי אישי</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 ios-scale-in stagger-4">
            <HeroButton 
              variant="glow" 
              size="xl"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="btn-premium group"
            >
              <span className="flex items-center gap-3">
                בואו נתחיל עכשיו
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
              </span>
            </HeroButton>
            
            <HeroButton 
              variant="outline" 
              size="xl"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="premium-card border-white/30 text-white hover:bg-white/10"
            >
              גלה את השירותים
            </HeroButton>
          </div>

          {/* Social Proof */}
          <div className="ios-fade-in stagger-5">
            <p className="text-white/70 mb-4 text-sm">אמינות מוכחת</p>
            <div className="flex justify-center items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white font-semibold mr-3">4.9/5</span>
              <span className="text-white/70">ממוצע ביקורות</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ios-fade-in stagger-6">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;