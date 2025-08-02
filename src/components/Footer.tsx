import { Phone, Mail, MessageCircle, Shield, Lock, Award, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappUrl = "https://wa.me/972509888175?text=" + encodeURIComponent("היי, אשמח לקבל מידע נוסף על השירותים");

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-black/20 backdrop-blur-sm border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 apple-overlay opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="ios-fade-up">
            <h3 className="text-2xl font-bold text-white mb-6 font-inter">SOS Projects</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              פתרונות אקדמיים מקצועיים לסטודנטים. אמינות, איכות ומסירה בזמן - זה מה שמבדיל אותנו.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-sm text-green-400">
                <Shield className="w-4 h-4" />
                <span>אבטחת מידע</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-sm text-blue-400">
                <Lock className="w-4 h-4" />
                <span>תשלומים מאובטחים</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="ios-fade-up ios-stagger-2">
            <h4 className="text-xl font-semibold text-white mb-6 font-inter">יצירת קשר</h4>
            <div className="space-y-4">
              <a 
                href="tel:+972509888175" 
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors ios-button"
              >
                <Phone className="w-5 h-5" />
                <span>050-988-8175</span>
              </a>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors ios-button"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              
              <a 
                href="mailto:info@sosprojects.co.il" 
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors ios-button"
              >
                <Mail className="w-5 h-5" />
                <span>info@sosprojects.co.il</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="ios-fade-up ios-stagger-3">
            <h4 className="text-xl font-semibold text-white mb-6 font-inter">השירותים שלנו</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-primary transition-colors cursor-pointer">עבודות גמר</li>
              <li className="hover:text-primary transition-colors cursor-pointer">פרויקטים</li>
              <li className="hover:text-primary transition-colors cursor-pointer">תרגילים</li>
              <li className="hover:text-primary transition-colors cursor-pointer">ליווי אישי</li>
              <li className="hover:text-primary transition-colors cursor-pointer">פיתוח תוכנה</li>
            </ul>
          </div>

          {/* Stats & Guarantees */}
          <div className="ios-fade-up ios-stagger-4">
            <h4 className="text-xl font-semibold text-white mb-6 font-inter">למה לבחור בנו</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>200+ לקוחות מרוצים</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-green-400" />
                <span>מסירה בזמן מובטחת</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>אחריות מלאה על העבודה</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} SOS Projects - כל הזכויות שמורות
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>תנאי שימוש</span>
              <span>•</span>
              <span>מדיניות פרטיות</span>
              <span>•</span>
              <span>SSL מאובטח</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;