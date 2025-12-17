import AnimateOnScroll from "@/components/AnimateOnScroll";
import empresa1 from "@/assets/Empresa1.jpg";
import empresa2 from "@/assets/unsplash/mushroom-faci.jpg";
import hongos2 from "@/assets/hongos2.png";
import { Building2, Users, Award, Leaf, Target, Shield } from "lucide-react";

const highlights = [
  { icon: Building2, text: "Líderes en Latinoamérica" },
  { icon: Users, text: "+200 trabajadores especializados" },
  { icon: Award, text: "Modelo de cultivo holandés" },
  { icon: Leaf, text: "Calidad premium garantizada" },
  { icon: Target, text: "Desde 1983" },
  { icon: Shield, text: "Certificaciones de calidad" },
];

const EmpresaSection = () => {
  return (
    <section id="empresa" className="py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative Background */}
      <div className="absolute -top-20 -right-20 z-0 opacity-6">
        <img 
          src={hongos2} 
          alt="" 
          className="w-96 h-96 lg:w-[500px] lg:h-[500px] object-contain transform -rotate-12"
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Nuestra Historia
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                  Champiñones <span className="font-accent italic text-primary">Abrantes.</span>
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
            
            {/* Text Content - Reducido */}
            <AnimateOnScroll animation="fade-right">
              <div className="space-y-5">
                <p className="text-lg text-charcoal/80 leading-relaxed font-medium">
                  Especialistas en el cultivo de champiñones blancos para el mercado en fresco, 
                  combinamos tradición familiar con innovación tecnológica.
                </p>
                <p className="text-base text-charcoal/70 leading-relaxed">
                  Fundada en 1983 y reinventada tras el terremoto de 2010, adoptamos el 
                  <strong className="text-primary"> modelo de cultivo holandés</strong> con la última 
                  tecnología disponible a nivel mundial.
                </p>
                <p className="text-base text-charcoal/70 leading-relaxed">
                  Nuestro equipo de más de 200 expertos y nuestra inversión en innovación nos 
                  posicionan como <strong className="text-primary">líderes en Latinoamérica</strong>, 
                  entregando calidad certificada a los hogares chilenos.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Image */}
            <AnimateOnScroll animation="fade-left" delay={100}>
              <div className="relative group">
                <div className="aspect-[4/3] overflow-hidden shadow-xl rounded-lg">
                  <img
                    src={empresa1}
                    alt="Instalaciones Abrantes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/20 via-transparent to-primary/10" />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Second Image Full Width con Highlights Overlay */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="mt-12 relative overflow-hidden rounded-xl shadow-xl max-w-6xl mx-auto">
              <div className="aspect-[21/8] lg:aspect-[21/7] relative">
                <img
                  src={empresa2}
                  alt="Planta de producción Abrantes"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay para mejor legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                
                {/* Highlights sobre la imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
                    {highlights.map((item, index) => (
                      <div 
                        key={index}
                        className="bg-white/90 backdrop-blur-sm rounded-lg p-3 lg:p-4 text-center hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary mx-auto mb-1 lg:mb-2" strokeWidth={1.5} />
                        <p className="text-xs lg:text-sm font-medium text-charcoal leading-tight">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Título sobre imagen */}
                <div className="absolute top-6 left-6 lg:top-8 lg:left-8">
                  <h3 className="font-heading text-xl lg:text-2xl text-white font-bold">
                    Innovación y Tradición
                  </h3>
                  <p className="text-white/80 text-sm lg:text-base">
                    Más de 40 años de excelencia
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default EmpresaSection;