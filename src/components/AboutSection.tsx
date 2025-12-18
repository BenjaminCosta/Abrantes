import AnimateOnScroll from "@/components/AnimateOnScroll";
import { TrendingUp, Settings2, BadgeCheck, Leaf } from "lucide-react";
import hongos1 from "@/assets/hongos10.jpg";

const brandPillars = [
  {
    title: "Producción continua",
    description: "Operación todo el año con planificación y consistencia.",
    icon: TrendingUp,
  },
  {
    title: "Procesos controlados",
    description: "Estándares claros desde cultivo hasta packing.",
    icon: Settings2,
  },
  {
    title: "Calidad y trazabilidad",
    description: "Control, registro y confianza en cada entrega.",
    icon: BadgeCheck,
  },
  {
    title: "Compromiso sostenible",
    description: "Producción responsable en cada etapa.",
    icon: Leaf,
  },
];

const AboutSection = () => {
  return (
    <section className="py-32 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="w-full px-4 md:px-6 lg:px-12 md:pb-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Right Side - Title & Subtitle (Editorial Style) - Primero en mobile */}
            <div className="lg:col-span-7 lg:order-2 text-center lg:text-left">
              <AnimateOnScroll animation="fade-up">
                <div className="space-y-6">
                  <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl text-charcoal font-bold tracking-tight leading-none">
                    NOSOTROS
                  </h2>

                  <div className="w-24 h-1 bg-primary mx-auto lg:mx-0" />

                  <p className="font-accent italic text-2xl md:text-3xl lg:text-4xl text-charcoal/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Calidad que se cultiva cada día.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Left Side - Brand Pillars (sin íconos) */}
<div className="lg:col-span-5 lg:order-1">
  <AnimateOnScroll animation="fade-right">
    <div className="space-y-2">
      {brandPillars.map((item, index) => (
        <AnimateOnScroll
          key={item.title}
          animation="fade-right"
          delay={index * 50}
        >
          <div className="py-4 px-6 rounded-xl transition-all duration-300 border-l-4 border-transparent ">
            <div className="border-l-2 border-primary/30 pl-4">
            <p className="font-heading text-lg md:text-xl text-charcoal font-medium">
              {item.title}
            </p>
            <p className="mt-1 text-sm md:text-base text-charcoal/70 leading-relaxed">
              {item.description}
            </p>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  </AnimateOnScroll>
</div>
          </div>
        </div>
      </div>

      {/* Imagen de hongos abajo ocupando todo el ancho - como en la referencia */}
      <div className="absolute -bottom-16 left-0 right-0 h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden z-0">
        <img
          src={hongos1}
          alt="Hongos decorativos"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
};

export default AboutSection;
