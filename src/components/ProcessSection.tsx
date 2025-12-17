import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Link } from "react-router-dom";
import mushroomsMacro from "@/assets/proceso/2..jpg";
import mushroom4 from "@/assets/unsplash/mushrooms4.jpg";
import empresa2 from "@/assets/unsplash/mushroom-faci2.jpg";
import hongos3 from "@/assets/hongos3.png";

const ProcessSection = () => {
  return (
    <>
    <section className="py-32 md:py-40 lg:py-48 bg-white relative">
      

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Side - Content - Más simple */}
            <div className="space-y-10">
              <AnimateOnScroll animation="fade-up">
                <div className="space-y-6">
                  <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                    Nuestro Proceso
                  </p>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                    Un proceso <br />
                    <span className="font-accent italic text-primary">preciso.</span>
                  </h2>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <p className="text-lg text-charcoal/75 leading-relaxed">
                  Compostaje, cultivo, cosecha y envasado, con <strong>trazabilidad total</strong>.
                </p>
              </AnimateOnScroll>

              {/* CTA Button */}
              <AnimateOnScroll animation="fade-up" delay={200}>
                <Link 
                  to="/nosotros#proceso"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-sans text-base tracking-wide hover:bg-primary/90 transition-all duration-300"
                >
                  <span>Conoce más detalles</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </Link>
              </AnimateOnScroll>
            </div>

            {/* Right Side - Collage asimétrico de imágenes */}
            <AnimateOnScroll animation="fade-left" delay={100}>
              <div className="relative h-[500px] lg:h-[600px]">
                
                {/* Imagen principal - más grande y dominante */}
                <div className="absolute top-0 left-0 w-[70%] h-[75%] overflow-hidden shadow-2xl z-10">
                  <img
                    src={mushroom4}
                    alt="Detalle macro del cultivo de champiñones"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Imagen secundaria - más chica, solapada en la esquina inferior derecha */}
                <div className="absolute bottom-0 right-0 w-[55%] h-[50%] overflow-hidden shadow-xl z-20">
                  <img
                    src={mushroomsMacro}
                    alt="Proceso de cultivo"
                    className="w-full h-full object-cover"
                  />
                </div>

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
