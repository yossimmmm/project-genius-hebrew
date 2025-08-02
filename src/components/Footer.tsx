import { Phone, Mail, MessageCircle, Shield, Lock, Award, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappUrl = "https://wa.me/972509888175?text=" + encodeURIComponent("היי, אשמח לקבל מידע נוסף על השירותים");

  return (
    <footer className="relative mt-20">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-muted/60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1),transparent_70%)]"></div>
      
      {/* Main footer content */}
      <div className="relative z-10 border-t border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-20">
          {/* Top section with company info */}
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
              SOS Projects
            </h3>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              הפתרון המקצועי והאמין לכל הצרכים האקדמיים שלכם. 
              איכות ללא פשרות, מסירה בזמן ושירות אישי ברמה הגבוהה ביותר.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-foreground mb-8">יצירת קשר</h4>
              <div className="space-y-6">
                <a 
                  href="tel:+972509888175" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">050-988-8175</span>
                </a>
                
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-green-400 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500/20 to-green-400/20 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-400/30 transition-all duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-lg">WhatsApp</span>
                </a>
                
                <a 
                  href="mailto:projectssos@gmail.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg">projectssos@gmail.com</span>
                </a>
              </div>
            </div>


            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-foreground mb-6">השירותים שלנו</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group">
                  <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-all duration-300"></div>
                  <span className="text-lg">עבודות גמר</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group">
                  <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-all duration-300"></div>
                  <span className="text-lg">פרויקטים</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group">
                  <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-all duration-300"></div>
                  <span className="text-lg">תרגילים</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group">
                  <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-all duration-300"></div>
                  <span className="text-lg">ליווי אישי</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group">
                  <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-all duration-300"></div>
                  <span className="text-lg">פיתוח תוכנה</span>
                </li>
              </ul>
            </div>

            {/* Stats & Guarantees */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-foreground mb-6">למה לבחור בנו</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-lg">200+ לקוחות מרוצים</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500/20 to-green-400/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-lg">מסירה בזמן מובטחת</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-400/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-lg">אחריות מלאה על העבודה</span>
                </div>
              </div>
            </div>

            {/* Trust & Security */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-foreground mb-6">אבטחה ואמינות</h4>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 hover:border-primary/50 transition-all duration-300">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium">אבטחת מידע</span>
                  </div>
                  <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 hover:border-primary/50 transition-all duration-300">
                    <Lock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">תשלומים מאובטחים</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  שירותנו מוגן בהצפנת SSL ברמה הגבוהה ביותר. 
                  כל המידע האישי נשמר בהקפדה מלאה על פרטיותכם.
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Enhanced */}
          <div className="border-t border-border/50 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Copyright */}
              <div className="text-center lg:text-right">
                <div className="text-lg font-medium text-foreground mb-2">
                  © {currentYear} SOS Projects
                </div>
                <div className="text-muted-foreground">
                  כל הזכויות שמורות • רישיון עסק: 516389047
                </div>
              </div>
              
              {/* Legal & Trust Links */}
              <div className="flex flex-col sm:flex-row items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-4 text-sm">
                  <a href="#" className="hover:text-primary transition-colors duration-300">תנאי שימוש</a>
                  <span className="text-border">•</span>
                  <a href="#" className="hover:text-primary transition-colors duration-300">מדיניות פרטיות</a>
                  <span className="text-border">•</span>
                  <a href="#" className="hover:text-primary transition-colors duration-300">שירות לקוחות</a>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm font-medium">SSL מאובטח</span>
                </div>
              </div>
            </div>
            
            {/* Bottom disclaimer */}
            <div className="text-center mt-8 pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground/80">
                SOS Projects - פתרונות אקדמיים מקצועיים • זמינים 24/7 לשירותכם
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;