import { Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import sustainabilityImg from "@/assets/sustainability.jpg";
import hongos3 from "@/assets/hongos3.png";
import hongos4 from "@/assets/hongos4.png";

const SustainabilitySection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div 
        className="absolute inset-0 md:bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${sustainabilityImg})` }}
      />
      <div className="absolute inset-0 bg-petrol-blue/70" />
      <div className="absolute inset-0 bg-gradient-to-br from-petrol-blue/85 via-petrol-blue/75 to-petrol-blue/80" />

      {/* Decorative Background Images */}
      {/* Hongos3 - Top Right, Green Tinted */}
      <div className="absolute -top-10 -right-10 lg:-top-16 lg:-right-16 z-0 opacity-15">
        <img 
          src={hongos3} 
          alt="" 
          className="w-80 h-80 lg:w-[450px] lg:h-[450px] object-contain transform -rotate-12"
          style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(12%) saturate(1015%) hue-rotate(38deg) brightness(95%) contrast(88%)' }}
        />
      </div>

      {/* Hongos4 - Bottom Left, Original Colors */}
      <div className="absolute -bottom-12 -left-12 lg:-bottom-20 lg:-left-20 z-0 opacity-10">
        <img 
          src={hongos4} 
          alt="" 
          className="w-96 h-96 lg:w-[500px] lg:h-[500px] object-contain transform rotate-6"
        />
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-tl from-beige/5 to-transparent rounded-full blur-3xl" />

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center space-y-8">
            
            {/* Header */}
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="p-3.5 bg-white/10 backdrop-blur-sm rounded-2xl border border-accent/20 shadow-lg">
                    <Leaf className="w-7 h-7 text-accent" strokeWidth={2} />
                  </div>
                </div>
                <p className="font-accent italic text-accent/90 text-sm md:text-base tracking-wide">
                  Nuestro Compromiso Ambiental
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
                  <span className="text-accent">Sustentabilidad</span> <br />
                  en cada etapa.
                </h2>
              </div>
            </AnimateOnScroll>

            {/* Main Text */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                <span className="font-accent text-accent">Uso eficiente de recursos</span> y manejo responsable de residuos.
              </p>
            </AnimateOnScroll>


            {/* CTA Button - More Elegant */}
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="pt-6">
                <Link 
                  to="/sustentabilidad"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/95 backdrop-blur-sm text-petrol-blue font-heading font-semibold text-base rounded-xl border border-white/40 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <span>Conoce nuestro compromiso</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                </Link>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
