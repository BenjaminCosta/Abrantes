import AnimateOnScroll from "@/components/AnimateOnScroll";

const ResponsabilidadSection = () => {
  return (
    <section id="responsabilidad-social" className="py-20 md:py-24 lg:py-28 bg-charcoal relative overflow-hidden scroll-mt-24">
      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Text Column - Left */}
            <AnimateOnScroll animation="fade-right">
              <div className="flex items-center h-full">
                <div>
                  <p className="text-white text-sm md:text-base tracking-wide font-accent italic mb-4">
                    Compromiso con la Comunidad
                  </p>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold uppercase tracking-wide mb-6">
                    Responsabilidad Social Empresarial
                  </h2>
                  <p className="text-lg text-white text-justify leading-relaxed">
                    En Abrantes creemos firmemente en retribuir a nuestra comunidad. Nuestro compromiso 
                    con la responsabilidad social empresarial se refleja en cada una de nuestras acciones, 
                    desde el trato con nuestros colaboradores hasta nuestro impacto en el entorno.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Video Column - Right */}
            <AnimateOnScroll animation="fade-left" delay={100}>
              <div className="relative overflow-hidden shadow-2xl h-full">
                <div className="aspect-video lg:h-full lg:aspect-auto bg-charcoal/50">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dqmlsWMJnpY"
                    title="Responsabilidad Social Abrantes"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </AnimateOnScroll>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ResponsabilidadSection;
