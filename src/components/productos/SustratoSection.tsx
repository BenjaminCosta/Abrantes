import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Download, Sprout, Leaf, Recycle } from "lucide-react";
import sustainability from "@/assets/sustainability.jpg";
import compost from "@/assets/compost.jpg";
import hongos3 from "@/assets/hongos3.png";

const SustratoSection = () => {
  return (
    <section id="sustrato" className="py-32 md:py-40 lg:py-48 bg-white relative scroll-mt-28">
      

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Economía Circular
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold uppercase tracking-wide">
                  Sustrato Vegetal Orgánico
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Content Grid with Image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            
            {/* Text Content */}
            <AnimateOnScroll animation="fade-right">
              <div className="space-y-8">
                <div className="bg-white border border-charcoal/10 rounded-2xl p-8 lg:p-10 shadow-md">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Recycle className="w-7 h-7 text-primary" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl text-charcoal font-bold mb-4">
                        Compost Premium
                      </h3>
                      <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                        Luego de ser usado en nuestra producción, queda un <span className="text-primary font-semibold">compost 
                        rico en nutrientes</span> muy útil para ser utilizado en el mejoramiento de suelos agrícolas y en la 
                        preparación de áreas verdes.
                      </p>
                      <p className="text-base text-charcoal/70 leading-relaxed">
                        Este producto es acopiado en terrenos habilitados donde se hacen los manejos necesarios para obtener 
                        un producto lo más homogéneo posible.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Leaf, title: "Rico en Nutrientes" },
                    { icon: Sprout, title: "Mejora Suelos" },
                    { icon: Recycle, title: "100% Orgánico" },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white border border-charcoal/10 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300"
                    >
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-2" strokeWidth={1.5} />
                      <p className="font-heading text-xs text-charcoal font-semibold">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Image */}
            <AnimateOnScroll animation="fade-left" delay={100}>
              <div className="relative group">
                <div className="aspect-[4/3] overflow-hidden shadow-lg">
                  <img
                    src={compost}
                    alt="Sustrato vegetal orgánico"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </AnimateOnScroll>

          </div>

          {/* Downloads */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="bg-white border border-charcoal/10 rounded-2xl p-8 lg:p-10 max-w-5xl mx-auto shadow-md">
              <h3 className="font-heading text-2xl text-charcoal font-bold mb-6 text-center">
                Análisis Sustrato Vegetal Agrolab
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <a
                    key={num}
                    href="#"
                    className={`flex items-center justify-center gap-2 px-6 py-3 font-sans text-sm tracking-wide hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group ${
                      num === 2 || num === 4 
                        ? '"inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal hover:text-white border border-charcoal font-sans text-sm tracking-wide hover:bg-charcoal hover:shadow-lg transition-all duration-300 group"' 
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  >
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
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
