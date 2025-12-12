import { Sprout, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Link } from "react-router-dom";
import mushroomsMacro from "@/assets/mushrooms-closeup.jpg";
import empresa2 from "@/assets/Empresa2.jpg";
import hongos2 from "@/assets/hongos2.png";
import hongos3 from "@/assets/hongos3.png";

const ProcessSection = () => {
  return (
    <>
    <section className="py-20 md:py-28 lg:py-36 bg-[#F5F1E8] relative overflow-hidden">
      {/* Decorative Background Images */}
      {/* Hongos2 - Top Left, Blue Tinted */}
      <div className="absolute -top-8 -left-8 lg:-top-12 lg:-left-12 z-0 opacity-20">
        <img 
          src={hongos2} 
          alt="" 
          className="w-72 h-72 lg:w-96 lg:h-96 object-contain transform rotate-12"
          style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(28%) saturate(1392%) hue-rotate(165deg) brightness(92%) contrast(89%)' }}
        />
      </div>

      {/* Hongos3 - Bottom Right, Blue Tinted */}
      <div className="absolute -bottom-10 -right-10 lg:-bottom-16 lg:-right-16 z-0 opacity-20">
        <img 
          src={hongos3} 
          alt="" 
          className="w-80 h-80 lg:w-[450px] lg:h-[450px] object-contain transform -rotate-12"
          style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(28%) saturate(1392%) hue-rotate(165deg) brightness(92%) contrast(89%)' }}
        />
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-8 lg:pr-8">
              <AnimateOnScroll animation="fade-up">
                <div className="space-y-4">
                  <p className="font-accent text-primary/70 text-sm md:text-base tracking-wide">
                    Nuestro Proceso
                  </p>
                  <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-charcoal font-bold leading-tight">
                    Un proceso <br />
                    <span className="font-accent italic text-primary">preciso.</span>
                  </h2>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl">
                  <span className="font-accent text-charcoal">Compostaje, cultivo, cosecha y envasado</span>, con <strong className="text-charcoal">trazabilidad total</strong>.
                </p>
              </AnimateOnScroll>

              {/* CTA Button */}
              <AnimateOnScroll animation="fade-up" delay={200}>
                <Link 
                  to="/proceso-productivo"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-heading font-semibold text-base md:text-lg rounded-2xl hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span>Conoce más detalles</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                </Link>
              </AnimateOnScroll>

              {/* Simple stats or features */}
              <AnimateOnScroll animation="fade-up" delay={300}>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-charcoal/10">
                  <div className="text-center lg:text-left">
                    <p className="font-heading text-3xl md:text-4xl font-bold text-primary">100%</p>
                    <p className="font-body text-sm text-charcoal/60 mt-1">Trazable</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="font-heading text-3xl md:text-4xl font-bold text-primary">365</p>
                    <p className="font-body text-sm text-charcoal/60 mt-1">Días al año</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="font-heading text-3xl md:text-4xl font-bold text-primary">+25</p>
                    <p className="font-body text-sm text-charcoal/60 mt-1">Años exp.</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Side - Image (Smaller & Subtle) */}
            <AnimateOnScroll animation="fade-left" delay={100}>
              <div className="relative group max-w-md mx-auto lg:ml-auto lg:mr-0">
                {/* Main Image - Smaller and more subtle */}
                <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/20">
                  <img
                    src={mushroomsMacro}
                    alt="Detalle macro del cultivo de champiñones"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/10 via-transparent to-primary/5" />
                </div>
              
                {/* Floating badge - Smaller */}
                <div className="absolute -bottom-6 -left-6 bg-white/55 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-primary/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                      <Sprout className="w-5 h-5 text-primary" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-charcoal text-sm">Cultivo Premium</p>
                      <p className="font-body text-xs text-charcoal/60">100% Trazable</p>
                    </div>
                  </div>
                </div>

                {/* Subtle decorative elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-tl from-beige/25 to-transparent rounded-full blur-xl -z-10" />
                
                {/* Corner accent - subtle */}
                <div className="absolute -top-2 -right-2 w-16 h-16 border-2 border-primary/20 rounded-2xl -z-10 group-hover:border-primary/35 group-hover:scale-105 transition-all duration-500" />
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </div>
    </section>

    {/* Full Width Image Section - Empresa2 */}
    <section className="relative overflow-hidden">
      <AnimateOnScroll animation="fade-up">
        <div className="relative w-full h-[280px] lg:h-[550px]">
          <img
            src={empresa2}
            alt="Instalaciones Abrantes"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for elegance */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
        </div>
      </AnimateOnScroll>
    </section>
    </>
  );
};

export default ProcessSection;
