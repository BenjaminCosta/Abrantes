import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Download, Sprout, Leaf, Recycle } from "lucide-react";
import sustainability from "@/assets/sustainability.jpg";
import compost from "@/assets/compost.jpg";
import hongos3 from "@/assets/hongos3.png";

const SustratoSection = () => {
  return (
    <section id="sustrato" className="py-20 md:py-24 lg:py-28 bg-[#315C7C] relative overflow-hidden scroll-mt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${sustainability})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#315C7C]/95 via-[#315C7C]/90 to-[#315C7C]/95" />

      {/* Decorative Background */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 z-0 opacity-15">
        <img 
          src={hongos3} 
          alt="" 
          className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] object-contain transform rotate-12"
          style={{ filter: 'hue-rotate(80deg) saturate(1.2) brightness(1.3)' }}
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-accent/90 text-sm md:text-base tracking-wide">
                  Economía Circular
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
                  Sustrato Vegetal <span className="font-accent italic text-accent">Orgánico.</span>
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Content Grid with Image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            
            {/* Text Content */}
            <AnimateOnScroll animation="fade-right">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Recycle className="w-7 h-7 text-accent" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl text-white font-bold mb-4">
                        Compost Premium
                      </h3>
                      <p className="font-body text-lg text-white/90 leading-relaxed mb-4">
                        Luego de ser usado en nuestra producción, queda un <span className="font-semibold text-accent">compost 
                        rico en nutrientes</span> muy útil para ser utilizado en el mejoramiento de suelos agrícolas y en la 
                        preparación de áreas verdes.
                      </p>
                      <p className="font-body text-base text-white/80 leading-relaxed">
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
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300"
                    >
                      <item.icon className="w-8 h-8 text-accent mx-auto mb-2" strokeWidth={1.5} />
                      <p className="font-heading text-xs text-white font-semibold">
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
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <img
                    src={compost}
                    alt="Sustrato vegetal orgánico"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#315C7C]/40 via-transparent to-accent/20" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              </div>
            </AnimateOnScroll>

          </div>

          {/* Downloads */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-10 max-w-5xl mx-auto">
              <h3 className="font-heading text-2xl text-white font-bold mb-6 text-center">
                Análisis Sustrato Vegetal Agrolab
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <a
                    key={num}
                    href="#"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 font-heading font-semibold text-sm rounded-xl hover:bg-accent hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
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
