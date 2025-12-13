import AnimateOnScroll from "@/components/AnimateOnScroll";
import empresa1 from "@/assets/Empresa1.jpg";
import empresa2 from "@/assets/Empresa2.jpg";
import hongos2 from "@/assets/hongos2.png";
import { Building2, Users, Award } from "lucide-react";

const highlights = [
  { icon: Building2, text: "Líderes en Latinoamérica" },
  { icon: Users, text: "Más de 200 trabajadores especializados" },
  { icon: Award, text: "Modelo de cultivo holandés" },
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
          <div className="text-center mb-16 lg:mb-20">
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            
            {/* Text Content */}
            <AnimateOnScroll animation="fade-right">
              <div className="space-y-6">
                <p className="font-body text-lg text-charcoal/80 leading-relaxed">
                  Champiñones Abrantes es una empresa especialista en el cultivo de champiñones blancos 
                  para el mercado en fresco.
                </p>
                <p className="font-body text-base text-charcoal/70 leading-relaxed">
                  La compañía fue creada y administrada familiarmente desde 1983 hasta el terremoto del 
                  27 de Febrero del 2010. Luego, con el ingreso de nuevos socios se construyó una nueva 
                  planta en la zona de Aculeo, la cual adoptó el <span className="font-semibold text-primary">modelo de cultivo Holandés</span>.
                </p>
                <p className="font-body text-base text-charcoal/70 leading-relaxed">
                  En esta nueva construcción se incorporó lo último en metodologías y equipos disponibles 
                  en el mundo para el cultivo del champiñón.
                </p>
                <p className="font-body text-base text-charcoal/70 leading-relaxed">
                  La empresa se preocupó de mantener a parte importante del personal. Hoy cuenta con más 
                  de 200 trabajadores todos ellos de experiencia invaluable en el cultivo. Gracias a nuestro 
                  capital humano y a la gran inversión tecnológica, <span className="font-semibold text-primary">Abrantes se posiciona 
                  como una empresa líder en el cultivo de champiñones blancos en Latinoamérica</span>.
                </p>
                <p className="font-body text-base text-charcoal/70 leading-relaxed">
                  Nuestros productos cuentan con las principales normas de certificación e higiene. Lo anterior 
                  nos da garantía de poder entregar día a día la mejor calidad a los hogares de Chile.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Image */}
            <AnimateOnScroll animation="fade-left" delay={100}>
              <div className="relative group">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
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

          {/* Highlights */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center hover:bg-secondary/50 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-3" strokeWidth={1.5} />
                  <p className="font-heading text-sm md:text-base text-charcoal font-semibold">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Second Image - Full Width */}
          <AnimateOnScroll animation="fade-up" delay={250}>
            <div className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <div className="aspect-[21/9]">
                <img
                  src={empresa2}
                  alt="Planta Abrantes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default EmpresaSection;
