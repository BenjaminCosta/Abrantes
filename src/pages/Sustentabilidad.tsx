import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Leaf, Droplets, Recycle, Sun, TreePine, Factory, Sprout, Award, ArrowRight } from "lucide-react";
import sustentabilidadImg from "@/assets/sustentabilidad.jpg";
import sustainability from "@/assets/sustainability.jpg";
import compost from "@/assets/compost.jpg";
import empresa2 from "@/assets/Empresa2.jpg";
import hongos3 from "@/assets/hongos3.png";
import hongos4 from "@/assets/hongos4.png";

const Sustentabilidad = () => {
  return (
    <Layout>
      {/* Hero Section con Imagen de Fondo */}
      <section className="relative h-[580px] overflow-hidden -mt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sustentabilidadImg})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center pt-20">
          <div className="w-full px-4 md:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              
              <AnimateOnScroll animation="fade-up">
                {/* Simple Top Line */}
                <div className="mb-6 flex justify-center">
                  <div className="h-1 w-44 bg-white" />
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4">
                  Sustentabilidad
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <p className="font-accent italic text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto">
                  Comprometidos con el medio ambiente y las generaciones futuras
                </p>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Petrol Blue Background */}
      <section className="py-20 md:py-24 lg:py-32 bg-[#315C7C] relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${sustainability})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#315C7C]/95 via-[#315C7C]/90 to-[#315C7C]/95" />

        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 lg:-top-16 lg:-right-16 z-0 opacity-15">
          <img 
            src={hongos3} 
            alt="" 
            className="w-80 h-80 lg:w-[450px] lg:h-[450px] object-contain transform -rotate-12"
            style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(12%) saturate(1015%) hue-rotate(38deg) brightness(95%) contrast(88%)' }}
          />
        </div>

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left - Text */}
              <AnimateOnScroll animation="fade-right">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-accent/20 rounded-2xl">
                      <Leaf className="w-6 h-6 text-accent" strokeWidth={2} />
                    </div>
                    <p className="font-accent italic text-accent/90 text-sm md:text-base tracking-wide">
                      Nuestro Compromiso
                    </p>
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
                    Sustentabilidad <br />
                    <span className="font-accent italic text-accent">en cada etapa.</span>
                  </h2>
                  <div className="space-y-4 font-body text-white/90 text-lg leading-relaxed">
                    <p>
                      En Abrantes entendemos que la <span className="font-semibold text-accent">sustentabilidad no es una opción</span>, 
                      sino una responsabilidad. Trabajamos día a día para reducir nuestro impacto ambiental mientras mantenemos 
                      los más altos estándares de calidad.
                    </p>
                    <p className="text-white/80">
                      Desde la gestión responsable del agua hasta la transformación de nuestros residuos en recursos valiosos, 
                      cada decisión refleja nuestro compromiso con el planeta.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Right - Stats Cards */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <p className="font-heading text-4xl lg:text-5xl text-accent font-bold mb-2">40%</p>
                    <p className="font-body text-sm text-white/80">Reducción consumo de agua</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <p className="font-heading text-4xl lg:text-5xl text-accent font-bold mb-2">100%</p>
                    <p className="font-body text-sm text-white/80">Sustrato reciclado</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <p className="font-heading text-4xl lg:text-5xl text-accent font-bold mb-2">0</p>
                    <p className="font-body text-sm text-white/80">Residuos a vertedero</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <p className="font-heading text-4xl lg:text-5xl text-accent font-bold mb-2">+25</p>
                    <p className="font-body text-sm text-white/80">Años de compromiso</p>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Water Management Section - Light Background with Image */}
      <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-beige via-white to-beige/50 relative overflow-hidden">
        <div className="absolute -bottom-12 -left-12 lg:-bottom-20 lg:-left-20 z-0 opacity-8">
          <img 
            src={hongos4} 
            alt="" 
            className="w-96 h-96 lg:w-[500px] lg:h-[500px] object-contain transform rotate-6"
          />
        </div>

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Image */}
              <AnimateOnScroll animation="fade-right">
                <div className="relative group">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
                    <img 
                      src={empresa2} 
                      alt="Gestión del Agua" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                        <Droplets className="w-6 h-6 text-primary" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-charcoal text-sm">Agua Reciclada</p>
                        <p className="font-body text-xs text-charcoal/60">Sistema certificado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Text */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Droplets className="w-7 h-7 text-primary" strokeWidth={2} />
                    <p className="font-accent italic text-primary/70 text-sm tracking-wide">Recurso Vital</p>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mb-6">
                    Gestión Responsable del <span className="font-accent italic text-primary">Agua.</span>
                  </h3>
                  <div className="space-y-4 font-body text-charcoal/80 text-lg leading-relaxed mb-8">
                    <p>
                      Implementamos <span className="font-semibold text-charcoal">sistemas de riego por goteo</span> y 
                      reciclaje de aguas industriales, reduciendo nuestro consumo hídrico en un 40%.
                    </p>
                    <p className="text-charcoal/70">
                      Cada gota cuenta en nuestro compromiso con la conservación de este recurso vital. 
                      Monitoreamos y optimizamos constantemente nuestros procesos para maximizar la eficiencia.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-xl p-4">
                      <p className="font-heading text-3xl text-primary font-bold">40%</p>
                      <p className="font-body text-sm text-charcoal/60">Reducción en consumo</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-xl p-4">
                      <p className="font-heading text-3xl text-primary font-bold">100%</p>
                      <p className="font-body text-sm text-charcoal/60">Agua reciclada</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Waste to Resource Section - Petrol Blue with Video */}
      <section className="py-20 md:py-24 lg:py-32 bg-[#315C7C] relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${compost})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#315C7C]/95 via-[#315C7C]/90 to-[#315C7C]/95" />

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Text - Left */}
              <AnimateOnScroll animation="fade-right">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Recycle className="w-7 h-7 text-accent" strokeWidth={2} />
                    <p className="font-accent italic text-accent/90 text-sm tracking-wide">Economía Circular</p>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
                    De Residuo a <span className="font-accent italic text-accent">Recurso.</span>
                  </h3>
                  <div className="space-y-4 font-body text-white/90 text-lg leading-relaxed mb-8">
                    <p>
                      El sustrato agotado de nuestros cultivos <span className="font-semibold text-accent">no es desecho</span>, 
                      es el inicio de un nuevo ciclo productivo. Lo transformamos en compost orgánico de alta calidad.
                    </p>
                    <p className="text-white/80">
                      Este proceso cierra el ciclo, reduciendo residuos a cero y generando valor agregado para 
                      la agricultura sustentable.
                    </p>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Sprout className="w-3.5 h-3.5 text-accent" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="font-heading text-white font-semibold">100% del sustrato reciclado</p>
                        <p className="font-body text-sm text-white/70">Transformado en compost orgánico certificado</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <TreePine className="w-3.5 h-3.5 text-accent" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="font-heading text-white font-semibold">Cero residuos a vertedero</p>
                        <p className="font-body text-sm text-white/70">Todo material es reutilizado en el proceso</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Video Mock - Right */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div className="relative group">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-br from-charcoal/50 to-charcoal/30 backdrop-blur-sm">
                    {/* Video Mock Placeholder */}
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                          <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                        </div>
                        <p className="font-heading text-white/90 text-sm font-semibold">Proceso de Compostaje</p>
                        <p className="font-body text-white/60 text-xs mt-1">Video demostrativo</p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative badge */}
                  <div className="absolute -bottom-4 -left-4 bg-accent/95 backdrop-blur-sm rounded-2xl shadow-xl px-5 py-3 border border-white/20">
                    <p className="font-heading text-white text-sm font-bold">Economía Circular</p>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Energy & Carbon Section - Light Background with Video */}
      <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-beige via-white to-beige/50 relative overflow-hidden">
        <div className="absolute top-20 -right-20 z-0 opacity-6">
          <img 
            src={hongos3} 
            alt="" 
            className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] object-contain transform rotate-12"
          />
        </div>

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Video Mock - Left */}
              <AnimateOnScroll animation="fade-right">
                <div className="relative group">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-white backdrop-blur-sm">
                    {/* Video Mock Placeholder */}
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/5 to-transparent" />
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                          <div className="w-0 h-0 border-l-[16px] border-l-primary border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                        </div>
                        <p className="font-heading text-charcoal/90 text-sm font-semibold">Eficiencia Energética</p>
                        <p className="font-body text-charcoal/60 text-xs mt-1">Video demostrativo</p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-5 py-3 border border-primary/10">
                    <p className="font-heading text-primary text-sm font-bold">Energía Limpia</p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Text - Right */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sun className="w-7 h-7 text-primary" strokeWidth={2} />
                    <p className="font-accent italic text-primary/70 text-sm tracking-wide">Energía Sustentable</p>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mb-6">
                    Reducción de Huella de <span className="font-accent italic text-primary">Carbono.</span>
                  </h3>
                  <div className="space-y-4 font-body text-charcoal/80 text-lg leading-relaxed mb-8">
                    <p>
                      Optimizamos constantemente nuestros <span className="font-semibold text-charcoal">procesos energéticos</span>, 
                      implementando tecnologías eficientes y evaluando fuentes de energía renovable.
                    </p>
                    <p className="text-charcoal/70">
                      Nuestro objetivo es minimizar las emisiones en cada etapa de producción, desde el cultivo 
                      hasta la distribución final.
                    </p>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Sun className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="font-heading text-charcoal font-semibold">Monitoreo continuo</p>
                        <p className="font-body text-sm text-charcoal/70">Control de consumo energético en tiempo real</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Factory className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="font-heading text-charcoal font-semibold">Tecnología eficiente</p>
                        <p className="font-body text-sm text-charcoal/70">Equipos de última generación de bajo consumo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Petrol Blue */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#315C7C] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${sustainability})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#315C7C]/95 via-[#315C7C]/90 to-[#315C7C]/95" />

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll animation="fade-up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-accent/20 rounded-2xl">
                  <Award className="w-6 h-6 text-accent" strokeWidth={2} />
                </div>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
                Juntos por un Futuro <span className="font-accent italic text-accent">Sustentable</span>
              </h2>
              <p className="font-body text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Conoce más sobre nuestras certificaciones y compromisos ambientales
              </p>
              <a 
                href="/nosotros#certificaciones"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/95 backdrop-blur-sm text-[#315C7C] font-heading font-semibold text-base rounded-2xl border border-white/40 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <span>Ver Certificaciones</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Sustentabilidad;
