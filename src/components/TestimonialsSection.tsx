import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { HeroButton } from "@/components/ui/hero-button";
import testimonialsImage from "@/assets/testimonials-bg.jpg";

const testimonials = [
  {
    name: "דניאל כהן",
    role: "סטודנט למדעי המחשב, אוניברסיטת תל אביב",
    text: "הפרויקט שלי בפייתון היה מושלם! קיבלתי 95 ולא האמנתי שיכול להיות ככה טוב. הצוות מקצועי ונגיש 24/7.",
    rating: 5,
    project: "פרויקט Python בינה מלאכותית"
  },
  {
    name: "יעל לוי",
    role: "סטודנטית לכלכלה, האוניברסיטה העברית",
    text: "העבודה שלי בסטטיסטיקה הייתה מעבר לציפיות! הסברים ברורים, ניתוח מעמיק וציון מעולה. ממליצה בחום!",
    rating: 5,
    project: "עבודת גמר בסטטיסטיקה"
  },
  {
    name: "אמיר גולדברג",
    role: "סטודנט להנדסת תוכנה, הטכניון",
    text: "בניית האפליקציה שלי הייתה מדויקת לחלוטין. קוד נקי, תיעוד מושלם ואפילו הוספו פיצ'רים שלא חשבתי עליהם!",
    rating: 5,
    project: "אפליקציית React Native"
  },
  {
    name: "נועה שמואל",
    role: "סטודנטית לפסיכולוגיה, אוניברסיטת בן גוריון",
    text: "הליווי שקיבלתי בקורס שיטות מחקר היה פנטסטי. עברתי מציון 60 ל-89! תודה על הסבלנות והמקצועיות.",
    rating: 5,
    project: "ליווי בקורס שיטות מחקר"
  },
  {
    name: "רון אבני",
    role: "סטודנט למנהל עסקים, המרכז האקדמי לב",
    text: "האתר שבנו לי לפרויקט הגמר זכה להערכה מיוחדת של המנחה. עיצוב מושלם ופונקציונליות מתקדמת!",
    rating: 5,
    project: "אתר e-commerce מתקדם"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const whatsappMessage = encodeURIComponent("היי, ראיתי את הטסטימוניאלים ואני מעוניין לשמוע עוד");
  const whatsappUrl = `https://wa.me/972509888175?text=${whatsappMessage}`;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${testimonialsImage})`
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 ios-page-enter">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 ios-text-reveal">
            הלקוחות שלנו <span className="text-gradient">מספרים</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto ios-text-reveal-delay">
            ביקורות אמיתיות מסטודנטים שהצליחו איתנו
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto ios-scale-enter">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden ios-card transition-all duration-500">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-20">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-8 h-8 bg-yellow-400/10 backdrop-blur-sm rounded-lg border border-yellow-400/20 flex items-center justify-center hover:bg-yellow-400/15 transition-all duration-300">
                    <Star 
                      className={`w-5 h-5 ${
                        star <= currentTestimonial.rating 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300'
                      } transition-colors duration-300`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-center mb-8 leading-relaxed font-medium">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Project Info */}
            <div className="text-center mb-6">
              <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-6 py-2">
                <span className="text-primary font-semibold">{currentTestimonial.project}</span>
              </div>
            </div>

            {/* Author Info */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary mb-2">{currentTestimonial.name}</h4>
              <p className="text-muted-foreground">{currentTestimonial.role}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-card/40 backdrop-blur-sm rounded-full border border-border/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ios-button"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-6 h-6 backdrop-blur-sm rounded-lg border transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary/80 border-primary/60 scale-125' 
                        : 'bg-card/40 border-border/30 hover:bg-card/60 hover:border-primary/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-card/40 backdrop-blur-sm rounded-full border border-border/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ios-button"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-card border border-border rounded-2xl ios-card ios-stagger-enter ios-stagger-1">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">200+</div>
            <div className="text-muted-foreground">לקוחות מרוצים</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-2xl ios-card ios-stagger-enter ios-stagger-2">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">4.9/5</div>
            <div className="text-muted-foreground">ממוצע ביקורות</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-2xl ios-card ios-stagger-enter ios-stagger-3">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">60+</div>
            <div className="text-muted-foreground">סטודנטים שסיימו תואר איתנו</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl mb-6 text-muted-foreground">
            רוצה להיות הבא שמצליח איתנו?
          </p>
          <HeroButton 
            variant="whatsapp" 
            size="xl"
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="group ios-button"
          >
            <span className="flex items-center gap-3">
              בואו נתחיל את המסע שלך
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
            </span>
          </HeroButton>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;