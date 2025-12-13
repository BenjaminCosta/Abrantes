import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Play } from "lucide-react";
import videoPlaceholder from "@/assets/hero-video.mp4";

const ResponsabilidadSection = () => {
  return (
    <section id="responsabilidad-social" className="py-20 md:py-24 lg:py-28 bg-charcoal relative overflow-hidden scroll-mt-24">
      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Compromiso con la Comunidad
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
                  Responsabilidad Social <span className="font-accent italic text-primary">Empresarial.</span>
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Video Container */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group max-w-4xl mx-auto">
              <div className="aspect-video bg-charcoal/50">
                {/* Video placeholder - Por ahora muestra el hero video como ejemplo */}
                <video
                  className="w-full h-full object-cover"
                  poster=""
                  controls
                  preload="metadata"
                >
                  <source src={videoPlaceholder} type="video/mp4" />
                </video>
                
                {/* Play Button Overlay (opcional, se oculta cuando se reproduce) */}
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Description */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="font-body text-lg text-white/80 leading-relaxed">
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
