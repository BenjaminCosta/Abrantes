import AnimateOnScroll from "@/components/AnimateOnScroll";

const ResponsabilidadSection = () => {
  return (
    <section id="responsabilidad-social" className="py-20 md:py-24 lg:py-28 bg-charcoal relative overflow-hidden scroll-mt-24">
      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="text-beige/70 text-sm md:text-base tracking-wide font-sans">
                  Compromiso con la Comunidad
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream font-bold leading-tight">
                  Responsabilidad Social <span className="font-accent italic text-cream">Empresarial.</span>
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* YouTube Video Container */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="relative overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <div className="aspect-video bg-charcoal/50">
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

          {/* Description */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-lg text-beige/80 leading-relaxed">
                En Abrantes creemos firmemente en retribuir a nuestra comunidad. Nuestro compromiso 
                con la responsabilidad social empresarial se refleja en cada una de nuestras acciones, 
                desde el trato con nuestros colaboradores hasta nuestro impacto en el entorno.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default ResponsabilidadSection;
