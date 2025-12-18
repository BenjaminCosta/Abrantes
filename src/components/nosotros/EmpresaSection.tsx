import AnimateOnScroll from "@/components/AnimateOnScroll";
import empresa1 from "@/assets/unsplash/mushrooom.jpg";
import empresa2 from "@/assets/unsplash/food facility.jpg";
import empresa3 from "@/assets/unsplash/mushroom-faci.jpg";
import hongos2 from "@/assets/hongos11.webp";
import abrantesLogo from "@/assets/abrantes_logo2.png";
import { Building2, Users, Award, Leaf, Target, Shield } from "lucide-react";



const EmpresaSection = () => {
  return (
    <section id="empresa" className="pt-20 md:pt-24 lg:pt-28 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative Background */}
      <div className="absolute hidden md:block -top-28 -right-20 z-0 opacity-6">
        <img 
          src={hongos2} 
          alt="" 
          className="w-96 h-96 lg:w-[450px] lg:h-[450px] 2xl:w-[500px] 2xl:h-[500px] object-contain transform -rotate-12"
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Nuestra Historia
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold uppercase tracking-wide">
                  Champiñones <span className="text-primary">Abrantes</span>
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-28 items-center mb-16">
            
            {/* Text Content - Consistente */}
            <AnimateOnScroll animation="fade-right">
              <div className="space-y-6 text-justify ">
                <p className="text-lg text-charcoal/70 leading-relaxed">
                  Especialistas en el cultivo de champiñones blancos para el mercado en fresco, 
                  combinamos tradición familiar con innovación tecnológica.
                </p>
                <p className="text-lg text-charcoal/70 leading-relaxed">
                  Fundada en 1983 y reinventada tras el terremoto de 2010, adoptamos el 
                  <strong className="text-primary"> modelo de cultivo holandés</strong> con la última 
                  tecnología disponible a nivel mundial.
                </p>
                <p className="text-lg text-charcoal/70 leading-relaxed">
                  Nuestro equipo de más de 200 expertos y nuestra inversión en innovación nos 
                  posicionan como <strong className="text-primary">líderes en Latinoamérica</strong>, 
                  entregando calidad certificada a los hogares chilenos.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Right Side - Collage asimétrico de imágenes */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div className="relative h-[400px] lg:h-[500px]">
                  
                  {/* Imagen principal */}
                  <div className="absolute bottom-0 right-0 w-[70%] h-[75%] overflow-hidden shadow-2xl z-10">
                    <img
                      src={empresa2}
                      alt="Detalle macro del cultivo de champiñones"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Imagen secundaria */}
                  <div className="absolute top-0 left-0 w-[55%] h-[50%] overflow-hidden shadow-xl z-20">
                    <img
                      src={empresa1}
                      alt="Proceso de cultivo"
                      className="w-full h-full object-cover"
                    />
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
              src={empresa3}
              alt="Planta de producción Abrantes"
              className="w-full h-[300px] lg:h-full object-cover"
            />
            
            {/* Overlay para mejor legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
            
            {/* Logo Abrantes centrado en la parte superior */}
            <div className="absolute top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex flex-col items-center">
                <img 
                  src={abrantesLogo} 
                  alt="Abrantes Logo" 
                  className="h-16 md:h-24 lg:h-40 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
                />
              </div>
            </div>

            
            {/* Título sobre imagen */}
            <div className="absolute top-4 left-4 md:left-6 lg:top-4 lg:left-8">
              <h3 className="font-heading text-xl lg:text-2xl text-white font-bold">
                Innovación y Tradición
              </h3>
              <p className="text-white/80 text-sm lg:text-base font-semibold">
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