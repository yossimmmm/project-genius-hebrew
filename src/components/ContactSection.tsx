import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, ArrowLeft } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const whatsappMessage = encodeURIComponent("היי, אני מעוניין לקבל עוד מידע על השירותים שלכם");
  const whatsappUrl = `https://wa.me/972509888175?text=${whatsappMessage}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message from form data
    let whatsappMessage = `היי, אני רוצה לקבל עוד מידע על השירותים שלכם\n\n`;
    whatsappMessage += `שם: ${formData.name}\n`;
    whatsappMessage += `אימייל: ${formData.email}\n`;
    if (formData.phone) {
      whatsappMessage += `טלפון: ${formData.phone}\n`;
    }
    if (formData.subject) {
      whatsappMessage += `נושא הפרויקט: ${formData.subject}\n`;
    }
    whatsappMessage += `פרטים נוספים: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappContactUrl = `https://wa.me/972509888175?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappContactUrl, '_blank');
    
    // Show success message and reset form
    toast({
      title: "מעביר לוואטסאפ...",
      description: "ההודעה שלך מוכנה לשליחה",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-muted/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            בואו <span className="text-gradient">נתחיל</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            יש לכם פרויקט? רוצים לשמוע עוד? אנחנו כאן בשבילכם
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                צרו קשר עוד היום
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                אנחנו זמינים 24/7 לכל שאלה או פרויקט. 
                צרו קשר בדרך הנוחה לכם והתחילו את המסע להצלחה אקדמית.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-card/60 backdrop-blur-sm border border-border rounded-xl hover-scale transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 flex items-center justify-center hover:bg-primary/15 transition-all duration-300">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">טלפון / וואטסאפ</h4>
                  <p className="text-muted-foreground">זמינים 24/7 לשיחה</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card/60 backdrop-blur-sm border border-border rounded-xl hover-scale transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 flex items-center justify-center hover:bg-primary/15 transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">אימייל</h4>
                  <p className="text-muted-foreground">projectssosil@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card/60 backdrop-blur-sm border border-border rounded-xl hover-scale transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 flex items-center justify-center hover:bg-primary/15 transition-all duration-300">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">זמני פעילות</h4>
                  <p className="text-muted-foreground">24/7 - זמינים תמיד</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card/60 backdrop-blur-sm border border-border rounded-xl hover-scale transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 flex items-center justify-center hover:bg-primary/15 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">מיקום</h4>
                  <p className="text-muted-foreground">שירות ברחבי הארץ</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
              <h4 className="font-bold text-green-600 mb-3">התחילו עכשיו בוואטסאפ!</h4>
              <p className="text-muted-foreground mb-4">
                הדרך הכי מהירה לקבל מענה ולהתחיל עם הפרויקט שלכם
              </p>
              <HeroButton 
                variant="whatsapp" 
                size="lg"
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="w-full group"
              >
                <span className="flex items-center justify-center gap-3">
                  שלחו הודעה בוואטסאפ
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                </span>
              </HeroButton>
            </div>
          </div>

          {/* Contact Form - Enhanced */}
          <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-2xl hover:shadow-primary/5 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">שלחו הודעה</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">שם מלא *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="השם שלכם"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">טלפון</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="050-1234567"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">אימייל *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <Label htmlFor="subject">נושא הפרויקט</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="למשל: פרויקט Python, עבודת גמר, אתר אינטרנט"
                />
              </div>

              <div>
                <Label htmlFor="message">פרטים נוספים *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 min-h-[120px] resize-none"
                  placeholder="ספרו לנו על הפרויקט שלכם, המטלה, התאריכים והדרישות המיוחדות"
                />
              </div>

              <HeroButton 
                type="submit" 
                variant="hero" 
                size="lg"
                className="w-full group"
              >
                <span className="flex items-center justify-center gap-3">
                  שלח הודעה
                  <Send className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                </span>
              </HeroButton>
            </form>

            <p className="text-sm text-muted-foreground text-center mt-4">
              * נחזור אליכם תוך מקסימום 2 שעות
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
