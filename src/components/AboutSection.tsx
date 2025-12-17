import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import empresa3 from "@/assets/Empresa3.jpg";
import hongos1 from "@/assets/hongos1.png";

const menuItems = [
  { label: "Empresa", href: "/nosotros" },
  { label: "Misión", href: "/nosotros#mision" },
  { label: "Visión", href: "/nosotros#vision" },
  { label: "Certificaciones", href: "/nosotros#certificaciones" },
  { label: "Proceso", href: "/nosotros#proceso" },
  { label: "Historia", href: "/nosotros#historia" },
];

const AboutSection = () => {
  return (
    <section className="py-32 md:py-40 lg:py-48 bg-cream relative overflow-hidden">
      
      {/* Hongos decorativo sutil - solo 1 */}
      <div className="absolute -bottom-20 -right-20 opacity-4 pointer-events-none">
        <img 
          src={hongos1} 
          alt="" 
          className="w-[400px] h-[400px] object-contain"
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Right Side - Title & Subtitle (Editorial Style) - Primero en mobile */}
            <div className="lg:col-span-7 lg:order-2 text-center lg:text-left">
              <AnimateOnScroll animation="fade-up">
                <div className="space-y-6">
                  {/* Title - Editorial Style */}
                  <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl text-charcoal font-bold tracking-tight leading-none">
                    NOSOTROS
                  </h2>
                  
                  {/* Decorative Line */}
                  <div className="w-24 h-1 bg-primary mx-auto lg:mx-0" />
                  
                  {/* Subtitle - Italic & Elegant */}
                  <p className="font-accent italic text-2xl md:text-3xl lg:text-4xl text-charcoal/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Calidad que se cultiva cada día.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Left Side - Navigation Menu - Segundo en mobile */}
            <div className="lg:col-span-5 lg:order-1">
              <AnimateOnScroll animation="fade-right">
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <AnimateOnScroll key={item.label} animation="fade-right" delay={index * 50}>
                      <Link
                        to={item.href}
                        className="group flex items-center justify-between py-4 px-6 rounded-xl hover:bg-white/40 transition-all duration-300 border-l-4 border-transparent hover:border-primary"
                      >
                        <span className="font-heading text-lg md:text-xl text-charcoal/70 group-hover:text-primary font-medium transition-colors duration-300">
                          {item.label}
                        </span>
                        <ChevronRight className="w-5 h-5 text-charcoal/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" strokeWidth={2.5} />
                      </Link>
                    </AnimateOnScroll>
                  ))}
                </nav>
              </AnimateOnScroll>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
