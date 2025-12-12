import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CornerVines } from "@/components/DecorativeElements";
import productionFacility from "@/assets/production-facility.jpg";
import mushroomsCloseup from "@/assets/mushrooms-closeup.jpg";

const products = [
  {
    name: "Champiñón Blanco",
    description: "Fresco y versátil, ideal para cualquier preparación culinaria",
    image: mushroomsCloseup,
    formats: ["Bandeja 200g", "Bandeja 400g", "Granel"],
  },
  {
    name: "Champiñón Portobello",
    description: "Sabor intenso y textura carnosa, perfecto para parrillas",
    image: productionFacility,
    formats: ["Bandeja 250g", "Granel"],
  },
  {
    name: "Champiñón Laminado",
    description: "Corte preciso listo para usar, máxima practicidad",
    image: mushroomsCloseup,
    formats: ["Bandeja 200g", "Bolsa 500g"],
  },
];

const ProductsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <CornerVines className="absolute top-0 right-0 w-32 md:w-48 h-auto text-accent opacity-[0.05]" flip />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Nuestros Productos
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-accent italic text-lg md:text-xl text-primary max-w-2xl mx-auto">
              Frescura y calidad premium en cada variedad
            </p>
          </AnimateOnScroll>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <AnimateOnScroll key={product.name} animation="fade-up" delay={index * 100}>
              <div className="group bg-secondary rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-400">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.formats.map((format) => (
                      <span
                        key={format}
                        className="text-xs font-heading bg-background px-2.5 py-1 rounded-sm text-muted-foreground"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary group/btn">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" delay={350}>
          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <Link to="/productos">Ver Catálogo Completo</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProductsSection;
