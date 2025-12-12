import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import mushroomsCloseup from "@/assets/mushrooms-closeup.jpg";
import hongos1 from "@/assets/hongos1.png";
import hongos4 from "@/assets/hongos5.png";

const products = [
  {
    name: "Champiñón Blanco",
    image: mushroomsCloseup,
  },
  {
    name: "Portobello",
    image: mushroomsCloseup,
  },
  {
    name: "Laminado",
    image: mushroomsCloseup,
  },
];

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Images */}
      {/* Hongos1 - Top Left, Subtle */}
      <div className="absolute -top-12 -left-12 lg:-top-6 lg:-left-16 z-0 opacity-8">
        <img 
          src={hongos1} 
          alt="" 
          className="w-72 h-72 lg:w-96 lg:h-96 object-contain transform rotate-12"
        />
      </div>

      {/* Hongos4 - Bottom Right, Subtle */}
      <div className="absolute -bottom-16 -right-16 lg:-bottom-20 lg:-right-20 z-0 opacity-8">
        <img 
          src={hongos4} 
          alt="" 
          className="w-80 h-80 lg:w-[420px] lg:h-[420px] object-contain transform -rotate-6"
        />
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header - Centered and Elegant */}
          <div className="text-center mb-12 lg:mb-16">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Nuestra Línea
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                  Nuestros <span className="font-accent italic text-primary">champiñones.</span>
                </h2>
                <p className="font-body text-base md:text-lg text-charcoal/75 max-w-2xl mx-auto pt-1">
                  Frescos, versátiles, en múltiples formatos.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Products Grid - Champiñones como protagonistas */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto mb-10">
            {products.map((product, index) => (
              <AnimateOnScroll key={product.name} animation="fade-up" delay={index * 100}>
                <Link 
                  to="/productos"
                  className="group block"
                >
                  <div className="relative">
                    {/* Image Container - Clean, no background */}
                    <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className="absolute top-3 right-3 w-10 h-10 border-2 border-white/40 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    
                    {/* Product Name - Outside container, elegant */}
                    <div className="mt-5 text-center">
                      <h3 className="font-heading text-xl md:text-2xl text-charcoal font-semibold group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-body text-sm font-medium">Ver detalles</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                      </div>
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
