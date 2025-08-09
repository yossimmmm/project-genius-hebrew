import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import { ThemeToggle } from "./ThemeToggle";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? 'glass backdrop-blur-md border-b border-white/20 h-14'
          : 'bg-transparent h-16'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'var(--accent-gradient)' }}
            >
              SOS פרויקטים
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              בית
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              שירותים
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              ביקורות
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary font-medium transition-colors"
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
              className=""
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
              className=""
            >
              <div className="w-6 h-6 bg-green-400/10 backdrop-blur-sm rounded-lg border border-green-400/20 flex items-center justify-center mr-2">
                <MessageCircle className="w-4 h-4" />
              </div>
              וואטסאפ
            </HeroButton>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 glass rounded-xl text-foreground transition-all duration-300 flex items-center justify-center"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 glass rounded-b-2xl mt-2">
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
            
            <div className="flex flex-col gap-3 px-4 pt-4 border-t border-white/20">
              <HeroButton
                variant="outline"
                size="sm"
                onClick={() => {
                  scrollToSection('contact');
                  setIsOpen(false);
                }}
                className="w-full"
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
                className="w-full"
              >
                <div className="w-6 h-6 bg-green-400/10 backdrop-blur-sm rounded-lg border border-green-400/20 flex items-center justify-center mr-2">
                  <MessageCircle className="w-4 h-4" />
                </div>
                וואטסאפ
              </HeroButton>
              <ThemeToggle className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;