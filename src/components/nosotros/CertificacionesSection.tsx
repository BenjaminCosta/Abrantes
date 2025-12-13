import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Award, Download, Shield, CheckCircle } from "lucide-react";
import hongos4 from "@/assets/hongos4.png";

const CertificacionesSection = () => {
  return (
    <section id="certificaciones" className="py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative Background */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 z-0 opacity-6">
        <img 
          src={hongos4} 
          alt="" 
          className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] object-contain"
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Calidad Garantizada
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                  Nuestras <span className="font-accent italic text-primary">Certificaciones.</span>
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Content */}
          <div className="space-y-12">
            
            {/* Introduction */}
            <AnimateOnScroll animation="fade-up">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
                <Shield className="w-16 h-16 text-primary mx-auto mb-6" strokeWidth={1.5} />
                <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6">
                  Al consumir champiñones Abrantes tiene usted la <span className="font-semibold text-primary">garantía 
                  de la inocuidad del producto</span> desde el lugar de origen hasta el punto de consumo.
                </p>
                <p className="font-body text-base text-charcoal/70 leading-relaxed">
                  Champiñones Abrantes tiene el Certificado de Verificación <span className="font-semibold">HACCP</span>, 
                  que es un procedimiento científico de control de procesos, reconocido internacionalmente, que permite 
                  identificar peligros específicos (biológicos, químicos y físicos) y medidas para su control con el 
                  fin de garantizar la inocuidad de los alimentos.
                </p>
              </div>
            </AnimateOnScroll>

            {/* HACCP Certificate Download */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-heading font-semibold text-base md:text-lg rounded-2xl hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
                  <span>Descargar Certificación HACCP</span>
                </a>
              </div>
            </AnimateOnScroll>

            {/* Additional Benefits */}
            <AnimateOnScroll animation="fade-up" delay={150}>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12">
                {[
                  { 
                    icon: CheckCircle, 
                    title: "Trazabilidad Completa",
                    description: "Control desde el origen hasta el consumidor"
                  },
                  { 
                    icon: Award, 
                    title: "Estándares Internacionales",
                    description: "Certificaciones reconocidas mundialmente"
                  },
                  { 
                    icon: Shield, 
                    title: "Seguridad Alimentaria",
                    description: "Procesos validados científicamente"
                  },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center hover:bg-white/80 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
                    <h3 className="font-heading text-lg text-charcoal font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-charcoal/60">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificacionesSection;
