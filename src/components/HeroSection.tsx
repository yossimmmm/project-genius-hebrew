import { ArrowLeft, Star, Users, GraduationCap, Zap } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent("היי, התעניינתי בשירותי פרויקטים שאתם מציעים");
  const whatsappUrl = `https://wa.me/972509888175?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Interactive Background Layer */}
      <div 
        className="absolute inset-0 interactive-gradient opacity-60"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
        }}
      ></div>
      
      {/* iOS Particle System */}
      <div className="ios-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`ios-particle ios-particle-${i % 4 + 1}`}></div>
        ))}
      </div>
      
      {/* Animated Wave Background */}
      <div className="wave-bg"></div>
      
      {/* Animated Grid Pattern */}
      <div className="grid-bg"></div>
      
      {/* Morphing Blobs */}
      <div className="blob-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      {/* iOS Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 ios-bg-parallax"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      ></div>
      
      {/* iOS Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="ios-floating-icon">
          <Star className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-20 opacity-30">
        <div className="ios-floating-icon" style={{ animationDelay: '2s' }}>
          <GraduationCap className="w-10 h-10 text-primary-variant" />
        </div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-30">
        <div className="ios-floating-icon" style={{ animationDelay: '4s' }}>
          <Zap className="w-6 h-6 text-accent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 ios-scale-enter">
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 ios-card ios-stagger-1">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-white font-semibold">200+ לקוחות מרוצים</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 ios-card ios-stagger-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-white font-semibold">60+ סטודנטים שסיימו תואר איתנו</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-inter">
            <span className="text-white font-bold ios-text-reveal">הפתרון המושלם</span>
            <br />
            <span className="ios-text-reveal-delay text-white font-bold">לכל פרויקט</span>
          </h1>

          {/* Subtitle */}
          <div className="space-y-4 mb-8 ios-fade-up">
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              מתמחים בביצוע פרויקטים לסטודנטים בכל תחום ותואר - איכות מקצועית, מסירה בזמן
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base ios-stagger-enter">
              <span className="bg-primary/20 text-white px-3 py-1 rounded-full border border-primary/30 ios-stagger-3">עבודות גמר</span>
              <span className="bg-primary/20 text-white px-3 py-1 rounded-full border border-primary/30 ios-stagger-4">תרגילים</span>
              <span className="bg-primary/20 text-white px-3 py-1 rounded-full border border-primary/30 ios-stagger-5">קורסים</span>
              <span className="bg-primary/20 text-white px-3 py-1 rounded-full border border-primary/30 ios-stagger-6">ליווי אישי</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center ios-fade-up-delay">
            <HeroButton 
              variant="glow" 
              size="xl"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="group shadow-lg hover:shadow-primary/20 ios-button"
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
              className="backdrop-blur-sm border-white/30 text-white hover:bg-white/10 ios-button"
            >
              גלה את השירותים
            </HeroButton>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 ios-scale-enter" style={{ animationDelay: '1.2s' }}>
            <p className="text-gray-300 mb-4">אמינות מוכחת</p>
            <div className="flex justify-center items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400 transition-all duration-300 hover:scale-110" />
              ))}
              <span className="text-white font-semibold mr-2">4.9/5</span>
              <span className="text-gray-300">ממוצע ביקורות</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ios-scale-enter" style={{ animationDelay: '1.5s' }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center ios-card">
          <div className="w-1 h-3 bg-white rounded-full mt-2 ios-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
