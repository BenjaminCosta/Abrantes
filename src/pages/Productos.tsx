import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CornerVines, MushroomDecoration } from "@/components/DecorativeElements";
import { Button } from "@/components/ui/button";
import mushroomsCloseup from "@/assets/mushrooms-closeup.jpg";
import productionFacility from "@/assets/production-facility.jpg";

const products = [
  {
    name: "Champiñón Blanco Entero",
    description: "Nuestro producto estrella. Champiñones frescos de tamaño uniforme, perfectos para cualquier preparación.",
    image: mushroomsCloseup,
    formats: ["Bandeja 200g", "Bandeja 400g", "Granel 1kg", "Granel 5kg"],
    features: ["Fresco", "Sin conservantes", "Alto valor nutricional"],
  },
  {
    name: "Champiñón Portobello",
    description: "Champiñones de gran tamaño con sabor intenso y textura carnosa. Ideal para parrillas y rellenos.",
    image: productionFacility,
    formats: ["Bandeja 250g", "Granel 1kg"],
    features: ["Sabor intenso", "Gran tamaño", "Textura firme"],
  },
  {
    name: "Champiñón Laminado",
    description: "Champiñones cortados en láminas uniformes, listos para usar. Máxima practicidad sin sacrificar frescura.",
    image: mushroomsCloseup,
    formats: ["Bandeja 200g", "Bolsa 500g"],
    features: ["Listo para usar", "Corte uniforme", "Ahorra tiempo"],
  },
  {
    name: "Champiñón Cremini",
    description: "Variedad marrón con sabor más profundo que el blanco. Excelente para salsas y guisos.",
    image: productionFacility,
    formats: ["Bandeja 200g", "Granel 1kg"],
    features: ["Sabor profundo", "Versátil", "Color característico"],
  },
];

const Productos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
        <MushroomDecoration className="absolute top-10 right-10 w-28 h-auto text-cream opacity-[0.04]" />
        <div className="container-narrow relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
              Nuestros Productos
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-accent italic text-xl text-cream/75 max-w-2xl">
              Frescura y calidad premium en cada variedad
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background relative overflow-hidden">
        <CornerVines className="absolute bottom-0 left-0 w-40 h-auto text-accent opacity-[0.04]" />
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <AnimateOnScroll key={product.name} animation="fade-up" delay={index * 100}>
                <div className="bg-secondary rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-foreground mb-2">{product.name}</h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.features.map((feature) => (
                        <span key={feature} className="text-xs font-heading bg-primary/10 text-primary px-2.5 py-1 rounded-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-heading text-muted-foreground uppercase tracking-wider mb-2">Formatos disponibles</p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.formats.map((format) => (
                          <span key={format} className="text-xs font-body bg-background px-2 py-1 rounded-sm text-foreground/75">
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Formatos Section */}
      <section id="formatos" className="section-padding bg-secondary scroll-mt-20">
        <div className="container-narrow">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-4">
              Formatos y Presentaciones
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-body text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Ofrecemos diferentes formatos para adaptarnos a las necesidades de hogares, 
              restaurantes y la industria alimentaria.
            </p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-3 gap-6">
            <AnimateOnScroll animation="fade-up" delay={150}>
              <div className="bg-background p-6 rounded-sm text-center">
                <h3 className="font-heading text-lg text-foreground mb-2">Hogar</h3>
                <p className="font-body text-sm text-muted-foreground">Bandejas de 200g y 400g</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-background p-6 rounded-sm text-center">
                <h3 className="font-heading text-lg text-foreground mb-2">Food Service</h3>
                <p className="font-body text-sm text-muted-foreground">Bolsas y cajas de 1kg a 5kg</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={250}>
              <div className="bg-background p-6 rounded-sm text-center">
                <h3 className="font-heading text-lg text-foreground mb-2">Industrial</h3>
                <p className="font-body text-sm text-muted-foreground">Granel y formatos especiales</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-narrow text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl text-cream mb-4">¿Necesitas un formato especial?</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-body text-cream/70 mb-8">Contáctanos para conocer todas nuestras opciones</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <Button variant="hero" size="lg">Solicitar Cotización</Button>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Productos;
