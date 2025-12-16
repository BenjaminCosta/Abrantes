import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import champinonGranel from "@/assets/productos/Champiñon-Blanco-granel-primera-selección.jpg";
import champinonClamshell from "@/assets/productos/Champiñon-Blanco-Royal-clamshell.jpg";
import champiñon200g from "@/assets/productos/Champiñon-Blanco-200-gramos.jpg";
import hongos2 from "@/assets/hongos2.png";

const products = [
  {
    name: "Champiñón Granel",
    image: champinonGranel,
  },
  {
    name: "Champiñón Royal",
    image: champinonClamshell,
  },
  {
    name: "Champiñón 200g",
    image: champiñon200g,
  },
];

const ProductsSection = () => {
  return (
    <section className="py-32 md:py-40 lg:py-48 bg-beige/30 relative overflow-y-hidden">
      
      {/* Hongo decorativo sutil - z-0 para que no se corte */}
      <div className="absolute -bottom-20 -right-20 opacity-3 pointer-events-none z-0">
        <img 
          src={hongos2} 
          alt="" 
          className="w-[450px] h-[450px] object-contain transform rotate-12"
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header - Centrado y simple */}
          <div className="text-center mb-20 lg:mb-24">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-6">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Nuestra Línea
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                  Nuestros <span className="font-accent italic text-primary">champiñones.</span>
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Products Grid - Foco en producto, sin decoraciones */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <AnimateOnScroll key={product.name} animation="fade-up" delay={index * 100}>
                <Link 
                  to="/productos"
                  className="group block"
                >
                  <div className="relative max-w-[280px] md:max-w-none mx-auto">
                    {/* Image Container - Clean y simple */}
                    <div className="relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                      <div className="aspect-square overflow-hidden bg-white">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    </div>
                    
                    {/* Product Name - Minimalista */}
                    <div className="mt-6 text-center">
                      <h3 className="font-heading text-lg md:text-xl text-charcoal group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
