import AnimateOnScroll from "@/components/AnimateOnScroll";
import empresa1 from "@/assets/Empresa1.jpg";
import empresa2 from "@/assets/unsplash/mushroom-faci.jpg";
import hongos2 from "@/assets/hongos11.webp";
import abrantesLogo from "@/assets/abrantes_logo2.png";
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
    <section id="empresa" className="pt-20 md:pt-24 lg:pt-28 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative Background */}
      <div className="absolute hidden md:block -top-20 -right-20 z-0 opacity-6">
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
            
            {/* Text Content - Consistente */}
            <AnimateOnScroll animation="fade-right">
              <div className="space-y-6">
                <p className="text-base text-charcoal/70 leading-relaxed">
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

            {/* Image con efecto de borde irregular orgánico */}
            <AnimateOnScroll animation="fade-left" delay={100}>
              <div className="relative group">
                {/* Contenedor con forma orgánica irregular */}
                <div className="relative aspect-[4/3]">
                  {/* Fondo decorativo para crear el efecto de borde orgánico */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-[40%_60%_70%_30%_/_40%_50%_60%_70%] transform rotate-2" />
                  
                  {/* Contenedor principal de la imagen con clip-path orgánico */}
                  <div className="relative w-full h-full overflow-hidden rounded-[35%_65%_65%_35%_/_45%_55%_45%_55%] shadow-xl">
                    <img
                      src={empresa1}
                      alt="Instalaciones Abrantes"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/15 via-transparent to-primary/10" />
                  </div>
                  
                  {/* Elementos decorativos adicionales para acentuar la forma */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/10 rounded-full blur-sm" />
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-accent/10 rounded-full blur-sm" />
                  
                  {/* Efecto de brillo sutil */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>

      {/* Second Image Full Width */}
      <AnimateOnScroll animation="fade-up" delay={150}>
        <div className="relative w-full mt-12">
          <div className="aspect-[21/8] lg:aspect-[21/7] relative">
            <img
              src={empresa2}
              alt="Planta de producción Abrantes"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay para mejor legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
            
            {/* Logo Abrantes centrado en la parte superior */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex flex-col items-center">
                <img 
                  src={abrantesLogo} 
                  alt="Abrantes Logo" 
                  className="h-16 md:h-24 lg:h-32 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
                />
              </div>
            </div>
            
            {/* Highlights sobre la imagen */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="max-w-7xl mx-auto">
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
            </div>
            
            {/* Título sobre imagen */}
            <div className="absolute top-4 left-4 md:left-6 lg:top-4 lg:left-8">
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

    </section>
  );
};

export default EmpresaSection;