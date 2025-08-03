import { 
  Code, 
  BookOpen, 
  Users, 
  Laptop, 
  GraduationCap, 
  Smartphone,
  Database,
  Globe,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import servicesImage from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Code,
    title: "פרויקטים בכל שפות התכנות",
    description: "Python, Java, JavaScript, C++, React, Node.js ועוד",
    features: ["פיתוח מותאם אישית", "קוד נקי ומתועד", "בדיקות איכות"]
  },
  {
    icon: BookOpen,
    title: "פתרון תרגילים ומבחנים",
    description: "פתרונות מפורטים ומוסברים לכל רמה",
    features: ["הסברים ברורים", "פתרונות מהירים", "דרגות גבוהות"]
  },
  {
    icon: Users,
    title: "כתיבת עבודות אקדמיות",
    description: "עבודות מחקר, סמינריונים ומאמרים ברמה גבוהה",
    features: ["מחקר מעמיק", "כתיבה אקדמית", "ייחודיות מובטחת"]
  },
  {
    icon: GraduationCap,
    title: "ליווי אישי בקורסים",
    description: "תמיכה רציפה ומקצועית לאורך הסמסטר",
    features: ["זמינות 24/7", "הדרכה אישית", "תוצאות מובטחות"]
  },
  {
    icon: Laptop,
    title: "פרויקטי גמר ברמה גבוהה",
    description: "פרויקטים מתקדמים שיבלטו בוועדה",
    features: ["חדשנות טכנולוגית", "עיצוב מקצועי", "הצגה מושלמת"]
  },
  {
    icon: Globe,
    title: "בניית אתרים ואפליקציות",
    description: "פיתוח fullstack מקצה לקצה",
    features: ["עיצוב רספונסיבי", "אבטחת מידע", "ביצועים מיטביים"]
  }
];

const ServicesSection = () => {
  const whatsappMessage = encodeURIComponent("היי, אני מעוניין לשמוע עוד על השירותים שלכם");
  const whatsappUrl = `https://wa.me/972509888175?text=${whatsappMessage}`;

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${servicesImage})`
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 ios-page-enter">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 ios-text-reveal leading-tight">
            <span className="text-gradient">השירותים</span> שלנו
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed ios-text-reveal-delay font-light">
            פתרונות מקצועיים ומותאמים אישית לכל צורך אקדמי וטכנולוגי
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card hover:border-primary/30 ios-card ios-stagger-enter ios-stagger-${(index % 6) + 1}`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-105">
                  <service.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-6" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-center mb-3 text-foreground leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border border-border rounded-3xl p-16 relative overflow-hidden ios-card ios-scale-enter" style={{ animationDelay: '0.8s' }}>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 ios-text-reveal" style={{ animationDelay: '1s' }}>
              מוכנים להתחיל?
            </h3>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto ios-text-reveal-delay leading-relaxed font-light" style={{ animationDelay: '1.2s' }}>
              צרו קשר עוד היום ותגלו איך אנחנו יכולים לעזור לכם להצליח
            </p>
            <div className="ios-fade-up" style={{ animationDelay: '1.4s' }}>
              <HeroButton 
                variant="whatsapp" 
                size="xl"
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="group ios-button px-12 py-4"
              >
                <span className="flex items-center gap-4 text-xl font-semibold">
                  בואו נדבר בוואטסאפ
                  <ArrowLeft className="w-7 h-7 group-hover:-translate-x-2 transition-transform duration-300" />
                </span>
              </HeroButton>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-4">
              <Database className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute top-4 right-4">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute bottom-4 right-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;