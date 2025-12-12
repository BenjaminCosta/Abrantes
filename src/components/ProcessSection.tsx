import { Leaf, Thermometer, Package, Truck, FlaskConical, CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { BranchDecoration } from "@/components/DecorativeElements";

const processSteps = [
  {
    icon: FlaskConical,
    title: "Preparación",
    description: "Sustrato de alta calidad con controles microbiológicos",
  },
  {
    icon: Leaf,
    title: "Siembra",
    description: "Inoculación con semillas seleccionadas y certificadas",
  },
  {
    icon: Thermometer,
    title: "Incubación",
    description: "Control preciso de temperatura, humedad y CO2",
  },
  {
    icon: CheckCircle,
    title: "Cosecha",
    description: "Recolección manual en el punto óptimo de madurez",
  },
  {
    icon: Package,
    title: "Empaque",
    description: "Envasado en atmósfera controlada",
  },
  {
    icon: Truck,
    title: "Distribución",
    description: "Cadena de frío garantizada",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <BranchDecoration className="absolute top-10 left-0 w-48 md:w-64 h-auto text-foreground opacity-[0.04]" />
      <BranchDecoration className="absolute bottom-10 right-0 w-48 md:w-64 h-auto text-foreground opacity-[0.04] rotate-180" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Proceso Productivo
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-accent italic text-lg md:text-xl text-primary max-w-2xl mx-auto">
              Cada paso controlado para garantizar la máxima calidad
            </p>
          </AnimateOnScroll>
        </div>

        {/* Process Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <AnimateOnScroll key={step.title} animation="fade-up" delay={index * 80}>
              <div className="group bg-background p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-heading text-muted-foreground uppercase tracking-widest">
                      Paso {index + 1}
                    </span>
                    <h3 className="font-heading text-lg text-foreground mt-1 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
