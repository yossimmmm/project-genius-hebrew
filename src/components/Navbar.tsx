import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const whatsappMessage = encodeURIComponent("היי, התעניינתי בשירותים שלכם");
  const whatsappUrl = `https://wa.me/972509888175?text=${whatsappMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ios-nav ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold text-gradient ios-button"
            >
              SOS פרויקטים
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-foreground hover:text-primary ios-nav font-medium"
            >
              בית
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary ios-nav font-medium"
            >
              שירותים
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary ios-nav font-medium"
            >
              ביקורות
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary ios-nav font-medium"
            >
              צור קשר
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <HeroButton 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="ios-button"
            >
              <div className="w-6 h-6 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20 flex items-center justify-center mr-2">
                <Phone className="w-4 h-4" />
              </div>
              צור קשר
            </HeroButton>
            <HeroButton 
              variant="whatsapp" 
              size="sm"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="ios-button"
            >
              <div className="w-6 h-6 bg-green-400/10 backdrop-blur-sm rounded-lg border border-green-400/20 flex items-center justify-center mr-2">
                <MessageCircle className="w-4 h-4" />
              </div>
              וואטסאפ
            </HeroButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary ios-nav"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ios-nav overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 ios-nav-enter' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-background/95 backdrop-blur-lg rounded-b-2xl border border-border mt-2 ios-modal">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="block w-full text-right px-4 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              בית
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-right px-4 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              שירותים
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-right px-4 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              ביקורות
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-right px-4 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              צור קשר
            </button>
            
            <div className="flex flex-col gap-3 px-4 pt-4 border-t border-border">
              <HeroButton 
                variant="outline" 
                size="sm"
                onClick={() => {
                  scrollToSection('contact');
                  setIsOpen(false);
                }}
                className="w-full ios-button"
              >
                <div className="w-6 h-6 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20 flex items-center justify-center mr-2">
                  <Phone className="w-4 h-4" />
                </div>
                צור קשר
              </HeroButton>
              <HeroButton 
                variant="whatsapp" 
                size="sm"
                onClick={() => {
                  window.open(whatsappUrl, '_blank');
                  setIsOpen(false);
                }}
                className="w-full ios-button"
              >
                <div className="w-6 h-6 bg-green-400/10 backdrop-blur-sm rounded-lg border border-green-400/20 flex items-center justify-center mr-2">
                  <MessageCircle className="w-4 h-4" />
                </div>
                וואטסאפ
              </HeroButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;