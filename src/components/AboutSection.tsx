
import { Card, CardContent } from "@/components/ui/card";
import { HeroButton } from "@/components/ui/hero-button";
import { CheckCircle, Users, Clock, Shield, Lightbulb, FolderOpen, CheckCheck, Rocket, ArrowLeft } from "lucide-react";

const AboutSection = () => {
  const whatsappUrl = "https://wa.me/972509888175?text=שלום, אני מעוניין להתחיל פרויקט חדש";

  const processSteps = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "פנייה",
      description: "שלחו לנו את פרטי הפרויקט שלכם (כל נושא או שפת תכנות)",
      number: "01"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "התאמת מומחה",
      description: "אנחנו מתאימים מומחה מוכח בתחום שלכם (קודינג, הנדסה, עסקים וכו')",
      number: "02"
    },
    {
      icon: <CheckCheck className="w-6 h-6" />,
      title: "בדיקת איכות",
      description: "כל פרויקט עובר בדיקה כפולה ובדיקת גניבה ספרותית",
      number: "03"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "מסירה",
      description: "בזמן, מוכן להגשה, ללא לחץ",
      number: "04"
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "250+ פרויקטים מוצלחים"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "ציון ממוצע 90+"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "99% מסירה בזמן"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "סודיות מלאה"
    }
  ];

  return (
    <section className="py-32 relative" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 apple-overlay opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 ios-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-inter">
            תשאירו את כאב הראש ועבודה השחורה לנו
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            SOS Projects הוקמה כדי לעזור לסטודנטים לסיים פרויקטים, מבחנים, משימות קודינג ועבודות אקדמיות באיכות גבוהה. 
            אנחנו כאן כדי להפוך את הלימודים שלכם לפשוטים יותר ומוצלחים יותר.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            איך זה עובד?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full bg-gradient-to-br from-card to-card/90 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-8 text-center relative">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{step.number}</span>
                    </div>
                    
                    {/* Icon - Smaller size */}
                    <div className="text-primary mb-6 flex justify-center">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-xl font-bold mb-4 text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connector Line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            למה לבחור בנו?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-primary/10">
                <div className="text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Elements */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-primary/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            אמינות ובטחון
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-primary">
                <Shield className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold text-foreground">עבודה אנונימית</h4>
              <p className="text-sm text-muted-foreground">פרטיותכם מובטחת</p>
            </div>
            <div className="space-y-2">
              <div className="text-primary">
                <CheckCircle className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold text-foreground">תשלומים מאובטחים</h4>
              <p className="text-sm text-muted-foreground">בטחון מלא בכל עסקה</p>
            </div>
            <div className="space-y-2">
              <div className="text-primary">
                <Users className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold text-foreground">ביקורות אמיתיות</h4>
              <p className="text-sm text-muted-foreground">מלקוחות מרוצים</p>
            </div>
            <div className="space-y-2">
              <div className="text-primary">
                <FolderOpen className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-semibold text-foreground">פרויקטים מותאמים</h4>
              <p className="text-sm text-muted-foreground">כל עבודה ייחודית</p>
            </div>
          </div>
        </div>

        {/* Call to Action - Luxury Design */}
        <div className="text-center relative">
          <div className="bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-xl border border-primary/20 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground bg-gradient-to-r from-primary via-primary to-purple-600 bg-clip-text text-transparent">
                מוכנים להתחיל?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                אל תיתנו ללחץ והזמנים לקבוע את הציונים שלכם. בואו נעזור לכם להצליח!
              </p>
              <HeroButton 
                variant="glow" 
                size="xl"
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="shadow-2xl hover:shadow-primary/30 transition-all duration-500"
              >
                <span className="flex items-center gap-3">
                  דברו איתנו עכשיו
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
                </span>
              </HeroButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
