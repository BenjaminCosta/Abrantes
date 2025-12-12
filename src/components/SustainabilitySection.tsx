import { Leaf, Droplets, Recycle, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { LeafDecoration, OrganicCircles } from "@/components/DecorativeElements";

const sustainabilityItems = [
  {
    icon: Droplets,
    title: "Uso Eficiente del Agua",
    description: "Sistemas de riego optimizados y reciclaje de aguas industriales",
  },
  {
    icon: Recycle,
    title: "Economía Circular",
    description: "Compostaje del sustrato utilizado para agricultura local",
  },
  {
    icon: Sun,
    title: "Energías Limpias",
    description: "Transición hacia fuentes de energía renovable",
  },
  {
    icon: Leaf,
    title: "Huella de Carbono",
    description: "Medición y reducción continua de emisiones",
  },
];

const SustainabilitySection = () => {
  return (
    <section className="section-padding bg-petrol-blue relative overflow-hidden">
      {/* Decorative Elements */}
      <LeafDecoration className="absolute top-10 left-0 w-28 md:w-40 h-auto text-accent opacity-[0.08]" />
      <OrganicCircles className="absolute bottom-0 right-0 w-40 md:w-56 h-auto text-cream opacity-[0.04]" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
              Sustentabilidad
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-accent italic text-lg md:text-xl text-cream/75 max-w-3xl mx-auto">
              Comprometidos con el medio ambiente y las generaciones futuras
            </p>
          </AnimateOnScroll>
        </div>

        {/* Items Grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {sustainabilityItems.map((item, index) => (
            <AnimateOnScroll key={item.title} animation="fade-up" delay={index * 80}>
              <div className="flex items-start gap-4 p-5 bg-cream/5 rounded-sm border border-cream/10 hover:bg-cream/8 transition-colors duration-300">
                <div className="flex-shrink-0 w-11 h-11 bg-accent/20 rounded-sm flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-base text-cream mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-cream/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="text-center">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/sustentabilidad">Conoce Nuestro Compromiso</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default SustainabilitySection;
