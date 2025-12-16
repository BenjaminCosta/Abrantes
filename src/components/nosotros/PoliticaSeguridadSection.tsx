import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Download, Shield, Lock, AlertTriangle, FileCheck } from "lucide-react";
import hongos1 from "@/assets/hongos1.png";

const securityPoints = [
  {
    icon: Shield,
    title: "Protección de Datos",
    description: "Resguardo de información sensible de clientes y colaboradores"
  },
  {
    icon: Lock,
    title: "Acceso Controlado",
    description: "Sistemas de autenticación y permisos por niveles"
  },
  {
    icon: AlertTriangle,
    title: "Prevención de Amenazas",
    description: "Monitoreo continuo contra ataques y vulnerabilidades"
  },
  {
    icon: FileCheck,
    title: "Cumplimiento Normativo",
    description: "Adherencia a estándares internacionales de seguridad"
  },
];

const PoliticaSeguridadSection = () => {
  return (
    <section id="politica-seguridad" className="py-20 md:py-24 lg:py-28 bg-gradient-to-br from-secondary via-beige/95 to-secondary relative overflow-hidden scroll-mt-24">
      {/* Decorative Background */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-24 z-0 opacity-6">
        <img 
          src={hongos1} 
          alt="" 
          className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] object-contain transform -rotate-12"
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Protección y Privacidad
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                  Política de Seguridad de la <span className="font-accent italic text-primary">Información.</span>
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Introduction */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 lg:p-12 mb-12 max-w-5xl mx-auto">
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                La presente política describe pautas y disposiciones de <span className="text-primary">Champiñones 
                Abrantes S.A.</span> para reservar la seguridad de su infraestructura de datos y tecnología.
              </p>
              <p className="text-base text-charcoal/70 leading-relaxed mb-6">
                Cuanto más dependemos de la tecnología para recopilar, almacenar y administrar información, más vulnerables 
                nos volvemos a sufrir graves violaciones de seguridad. Los errores humanos, los ataques de piratas informáticos 
                y el mal funcionamiento del sistema podrían causar un gran daño financiero y poner en peligro la reputación de 
                nuestra empresa.
              </p>
              <p className="text-base text-charcoal/70 leading-relaxed">
                Por esta razón, hemos implementado una serie de <span className="text-primary">medidas de seguridad</span>. 
                También hemos preparado instrucciones que pueden ayudar a mitigar los riesgos de seguridad. Hemos esbozado 
                ambas disposiciones en esta política.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Security Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {securityPoints.map((point, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 50}>
                <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center hover:bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <point.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg text-charcoal font-semibold mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Download Button */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-charcoal border border-charcoal/20 hover:border-charcoal/40 font-sans text-base md:text-lg tracking-wide hover:bg-white/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group shadow-sm"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
                <span>Descargar Política de Seguridad de la Información</span>
              </a>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default PoliticaSeguridadSection;
