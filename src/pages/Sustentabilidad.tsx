import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { LeafDecoration, OrganicCircles } from "@/components/DecorativeElements";
import { Leaf, Droplets, Recycle, Sun, TreePine, Factory } from "lucide-react";

const initiatives = [
  {
    icon: Droplets,
    title: "Gestión del Agua",
    description: "Implementamos sistemas de riego por goteo y reciclaje de aguas industriales, reduciendo nuestro consumo hídrico en un 40%.",
  },
  {
    icon: Recycle,
    title: "Economía Circular",
    description: "El sustrato utilizado en el cultivo se transforma en compost de alta calidad para la agricultura local.",
  },
  {
    icon: Sun,
    title: "Energía Renovable",
    description: "Transición progresiva hacia paneles solares y otras fuentes de energía limpia en nuestras instalaciones.",
  },
  {
    icon: Leaf,
    title: "Reducción de Emisiones",
    description: "Medimos y reducimos continuamente nuestra huella de carbono con metas anuales de mejora.",
  },
  {
    icon: TreePine,
    title: "Biodiversidad",
    description: "Mantenemos áreas verdes y corredores biológicos en nuestras instalaciones.",
  },
  {
    icon: Factory,
    title: "Producción Limpia",
    description: "Procesos optimizados para minimizar residuos y maximizar eficiencia.",
  },
];

const Sustentabilidad = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-petrol-blue overflow-hidden">
        <LeafDecoration className="absolute top-10 left-0 w-36 h-auto text-accent opacity-[0.08]" />
        <OrganicCircles className="absolute bottom-0 right-0 w-48 h-auto text-cream opacity-[0.04]" />
        <div className="container-narrow relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
              Sustentabilidad
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-accent italic text-xl text-cream/75 max-w-2xl">
              Comprometidos con el medio ambiente y las generaciones futuras
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll animation="fade-up">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Nuestro Compromiso Ambiental
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="font-body text-lg text-foreground/75 leading-relaxed">
                En Abrantes entendemos que la sustentabilidad no es una opción, sino una responsabilidad. 
                Trabajamos día a día para reducir nuestro impacto ambiental mientras mantenemos los más 
                altos estándares de calidad en nuestros productos.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-narrow">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">
              Iniciativas Sustentables
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item, index) => (
              <AnimateOnScroll key={item.title} animation="fade-up" delay={index * 80}>
                <div className="bg-background p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-petrol-blue">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <AnimateOnScroll animation="fade-up">
              <div>
                <p className="font-heading text-5xl text-accent mb-2">40%</p>
                <p className="font-body text-cream/75">Reducción en consumo de agua</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div>
                <p className="font-heading text-5xl text-accent mb-2">100%</p>
                <p className="font-body text-cream/75">Sustrato reciclado como compost</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div>
                <p className="font-heading text-5xl text-accent mb-2">25%</p>
                <p className="font-body text-cream/75">Energía de fuentes renovables</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sustentabilidad;
