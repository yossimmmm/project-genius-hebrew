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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">השירותים</span> שלנו
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            פתרונות מקצועיים ומותאמים אישית לכל צורך אקדמי וטכנולוגי
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-sm font-semibold text-center mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-xs text-muted-foreground text-center leading-snug">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border border-border rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              מוכנים להתחיל?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              צרו קשר עוד היום ותגלו איך אנחנו יכולים לעזור לכם להצליח
            </p>
            <HeroButton 
              variant="whatsapp" 
              size="xl"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="group"
            >
              <span className="flex items-center gap-3">
                בואו נדבר בוואטסאפ
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
              </span>
            </HeroButton>
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