import { ArrowLeft, Star, Users, GraduationCap, Zap } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent("היי, התעניינתי בשירותי פרויקטים שאתם מציעים");
  const whatsappUrl = `https://wa.me/972123456789?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-90"></div>
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="float animate-delay-200">
          <Star className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-20 opacity-30">
        <div className="float animate-delay-400">
          <GraduationCap className="w-10 h-10 text-primary-variant" />
        </div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-30">
        <div className="float animate-delay-600">
          <Zap className="w-6 h-6 text-accent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 opacity-0 animate-fadeInUp">
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-white font-semibold">200+ לקוחות מרוצים</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-white font-semibold">60+ סטודנטים שסיימו תואר</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight opacity-0 animate-fadeInUp animate-delay-200">
            <span className="text-shimmer">הפתרון</span>{" "}
            <span className="text-white">המושלם</span>
            <br />
            <span className="text-gradient">לכל פרויקט</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 font-light opacity-0 animate-fadeInUp animate-delay-400 max-w-3xl mx-auto leading-relaxed">
            מתמחים בביצוע פרויקטים לסטודנטים בכל תחום ותואר
            <br />
            <span className="text-primary font-semibold">עבודות גמר • תרגילים • קורסים • ליווי אישי</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fadeInUp animate-delay-600">
            <HeroButton 
              variant="glow" 
              size="xl"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="group"
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
              className="backdrop-blur-sm border-white/30 text-white hover:bg-white/10"
            >
              גלה את השירותים
            </HeroButton>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 opacity-0 animate-fadeInUp animate-delay-700">
            <p className="text-gray-300 mb-4">אמינות מוכחת</p>
            <div className="flex justify-center items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white font-semibold mr-2">4.9/5</span>
              <span className="text-gray-300">ממוצע ביקורות</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeInUp animate-delay-700">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;