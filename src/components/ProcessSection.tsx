import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Link } from "react-router-dom";
import mushroomsMacro from "@/assets/proceso/2..jpg";
import mushroom4 from "@/assets/unsplash/mushrooms4.jpg";
import mushroom8 from "@/assets/unsplash/mushroom8.jpg";
import hongos5 from "@/assets/hongos5.png";

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

    {/* Full Width Premium Product Section */}
    <section className="relative overflow-hidden bg-charcoal">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={mushroom8}
          alt="Fondo de champiñones frescos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      <div className="relative w-full px-4 md:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto py-12 md:py-16 lg:py-20">
          <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[450px]">
            
            

            {/* Text Content - Centered */}
            <AnimateOnScroll animation="fade-up">
              <div className="text-center max-w-3xl mx-auto space-y-6 px-4 md:px-8">
                
                {/* Main Title */}
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold uppercase tracking-tight leading-[1.1]">
                  CONSUMO DIARIO,<br />
                  CALIDAD NATURAL
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light italic">
                  Champiñones frescos producidos bajo procesos controlados.
                </p>

                {/* Bullets */}
                <div className="space-y-3 pt-4 max-w-2xl mx-auto">
                  <p className="text-base md:text-lg text-white/85 leading-relaxed">
                    + Producción continua durante todo el año.
                  </p>
                  <p className="text-base md:text-lg text-white/85 leading-relaxed">
                    + Bajo en grasas y naturalmente nutritivo.
                  </p>
                  <p className="text-base md:text-lg text-white/85 leading-relaxed">
                    + Calidad y frescura garantizadas.
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <Link
                    to="/productos"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-charcoal font-sans text-base tracking-wide hover:bg-white/90 transition-all duration-300"
                  >
                    <span>Conocé nuestros productos</span>
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </Link>
                </div>

              </div>
            </AnimateOnScroll>

          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default ProcessSection;
