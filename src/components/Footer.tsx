import { MessageCircle, Phone, Mail, Heart, ArrowUp } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";

const Footer = () => {
  const whatsappMessage = encodeURIComponent("היי, התעניינתי בשירותים שלכם");
  const whatsappUrl = `https://wa.me/972509888175?text=${whatsappMessage}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">SOS פרויקטים</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              הפתרון המושלם לכל סטודנט - מתמחים בביצוע פרויקטים אקדמיים ברמה הגבוהה ביותר. 
              עם מעל 200 לקוחות מרוצים ו-60 סטודנטים שסיימו תואר בהצלחה.
            </p>
            
            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-3">
              <HeroButton 
                variant="whatsapp" 
                size="sm"
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="group"
              >
                <MessageCircle className="w-4 h-4 ml-2" />
                וואטסאפ
              </HeroButton>
              <HeroButton 
                variant="outline" 
                size="sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-4 h-4 ml-2" />
                צור קשר
              </HeroButton>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">השירותים שלנו</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                פרויקטים בשפות תכנות
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                פתרון תרגילים ומבחנים
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                עבודות אקדמיות
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                ליווי אישי בקורסים
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                פרויקטי גמר
              </li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">
                בניית אתרים ואפליקציות
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">צרו קשר</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>זמינים 24/7</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>projectssosil@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>וואטסאפ מהיר</span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">שעות פעילות</h5>
              <div className="text-sm text-muted-foreground space-y-1">
                <div className="text-primary font-medium">24/7 - זמינים תמיד</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                © 2024 SOS פרויקטים. כל הזכויות שמורות
                <Heart className="w-4 h-4 text-red-500" />
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <span>חזרה למעלה</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                SOS פרויקטים - הפתרון המקצועי לכל צורך אקדמי • שירות אמין ומהיר • תוצאות מובטחות
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center pulse-glow"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;