import { Code, FileText, Calculator, BookOpen, Eye, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "סטטיקה – חישובי מאמצים",
      category: "הנדסה",
      grade: "94",
      deliveryTime: "3 ימים",
      icon: Calculator,
      type: "academic",
      description: "פתרון מקיף לפרויקט בסטטיקה כולל חישובים וניתוח מאמצים",
    },
    {
      id: 2,
      title: "מערכת ניהול משתמשים - React",
      category: "מדעי המחשב",
      grade: "96",
      deliveryTime: "5 ימים",
      icon: Code,
      type: "coding",
      description: "פיתוח מערכת ניהול משתמשים מלאה עם React ו-Node.js",
    },
    {
      id: 3,
      title: "עבודת גמר - ניתוח נתונים",
      category: "כלכלה",
      grade: "92",
      deliveryTime: "14 ימים",
      icon: FileText,
      type: "thesis",
      description: "עבודת גמר בניתוח נתונים כלכליים עם מחקר מקיף",
    },
    {
      id: 4,
      title: "אלגוריתמים - פתרון מטלות",
      category: "מדעי המחשב",
      grade: "98",
      deliveryTime: "2 ימים",
      icon: BookOpen,
      type: "homework",
      description: "פתרון מטלות באלגוריתמים כולל קוד ומסמכי הסבר",
    },
  ];

  const getGradientClass = (type: string) => {
    switch (type) {
      case 'coding':
        return 'from-blue-500/20 to-purple-500/20';
      case 'academic':
        return 'from-green-500/20 to-teal-500/20';
      case 'thesis':
        return 'from-purple-500/20 to-pink-500/20';
      default:
        return 'from-indigo-500/20 to-blue-500/20';
    }
  };

  return (
    <section className="py-24 relative" id="portfolio" data-animate="ios-page-enter">
      {/* Background Elements */}
      <div className="absolute inset-0 apple-overlay opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 ios-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            דוגמאות עבודות
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            הצצה לעבודות איכות שביצענו עבור הסטודנטים שלנו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.id}
                className={`bg-gradient-to-br ${getGradientClass(project.type)} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 ios-card ios-stagger-${index + 1} group overflow-hidden`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-left">
                      <span className="text-sm text-gray-400 font-medium">{project.category}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-inter group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{project.grade}</div>
                        <div className="text-xs text-gray-400">ציון</div>
                      </div>
                      <div className="w-px h-8 bg-white/20"></div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">{project.deliveryTime}</div>
                        <div className="text-xs text-gray-400">זמן מסירה</div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-8 pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-primary/50 ios-button group"
                  >
                    <Eye className="w-4 h-4 ml-2" />
                    צפייה בדוגמה
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 ios-fade-up-delay">
          <p className="text-lg text-gray-300 mb-6">
            רוצה לראות עוד דוגמאות או לקבל הצעת מחיר?
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl ios-button font-semibold"
            onClick={() => window.open('https://wa.me/972509888175?text=' + encodeURIComponent("היי, אשמח לראות עוד דוגמאות עבודות"), '_blank')}
          >
            בואו נדבר
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;