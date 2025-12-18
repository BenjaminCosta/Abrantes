import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Download, Sprout, Leaf, Recycle } from "lucide-react";
import compost from "@/assets/sustrato.jpg";

const SustratoSection = () => {
  return (
    <section id="sustrato" className="py-32 md:py-40 lg:py-48 bg-white relative scroll-mt-28">

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Editorial - Full Width */}
          <div className="text-center mb-16 lg:mb-24">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-4">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Economía Circular
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold uppercase tracking-wide">
                  Sustrato Vegetal Orgánico
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Bloque Principal - 2 Columnas: 60% contenido / 40% imagen */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-20 lg:mb-24">
            
            {/* Izquierda - Contenido (60%) */}
            <div className="lg:col-span-3 space-y-8 lg:space-y-16">
              
              {/* Card Compost Premium */}
              <AnimateOnScroll animation="fade-right">
                <div className="bg-white border border-charcoal/10 p-8 lg:p-10">
                  <h3 className="font-heading text-2xl md:text-3xl text-charcoal font-bold mb-6 uppercase tracking-wide">
                    Compost Premium
                  </h3>
                  <p className="text-md md:text-lg text-charcoal/80 leading-relaxed mb-4">
                    Luego de ser usado en nuestra producción, queda un <span className="text-primary font-semibold">compost 
                    rico en nutrientes</span> muy útil para ser utilizado en el mejoramiento de suelos agrícolas y en la 
                    preparación de áreas verdes.
                  </p>
                  <p className="text-base md:text-lg text-charcoal/80 leading-relaxed">
                    Este producto es acopiado en terrenos habilitados donde se hacen los manejos necesarios para obtener 
                    un producto lo más homogéneo posible.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Íconos Resumen - 1 fila, estilo sutil */}
              <AnimateOnScroll animation="fade-up" delay={50}>
                <div className="flex gap-6 lg:gap-8">
                  {[
                    { icon: Leaf, title: "Rico en Nutrientes" },
                    { icon: Sprout, title: "Mejora Suelos" },
                    { icon: Recycle, title: "100% Orgánico" },
                  ].map((item, index) => (
                    <div key={index} className="flex-1 text-center">
                      <div className="flex justify-center mb-3">
                        <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} />
                      </div>
                      <p className="font-heading text-xs md:text-sm text-charcoal/80 font-medium">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Derecha - Imagen (40%) */}
            <div className="lg:col-span-2 order-first lg:order-last">
              <AnimateOnScroll animation="fade-left">
                <div className="w-full h-[350px] lg:h-full">
                  <img
                    src={compost}
                    alt="Sustrato vegetal orgánico"
                    className="w-full h-auto lg:h-[55vh] 2xl:h-[40vh] object-cover"
                  />
                </div>
              </AnimateOnScroll>
            </div>

          </div>

          {/* Bloque Análisis Agrolab - Full Width */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-white border border-primary/10 p-8 md:p-12 lg:p-16">
              <h3 className="font-heading text-2xl md:text-3xl text-charcoal font-bold mb-8 text-center uppercase tracking-wide">
                Análisis Sustrato Vegetal Agrolab
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {[1, 2, 3, 4].map((num) => (
                  <a
                    key={num}
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-charcoal border border-charcoal/30 font-sans text-sm tracking-wide hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
                  >
                    <Download className="w-4 h-4" strokeWidth={2} />
                    <span>Análisis {num}</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default SustratoSection;
