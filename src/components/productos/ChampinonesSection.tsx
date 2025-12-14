import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Package } from "lucide-react";
import hongos1 from "@/assets/hongos1.png";
import hongos2 from "@/assets/hongos2.png";
import blanco200g from "@/assets/productos/Champiñon-Blanco-200-gramos.jpg";
import blanco400g from "@/assets/productos/Champiñon-Blanco-400-gramos.jpg";
import blancoRoyal from "@/assets/productos/Champiñon-Blanco-Royal-clamshell.jpg";
import blancoClamshell from "@/assets/productos/Champiñon-Blanco-clamshell-1.5-e1539093512171.jpg";
import blancoPrimera from "@/assets/productos/Champiñon-Blanco-granel-primera-selección.jpg";
import blancoSegunda from "@/assets/productos/Champiñon-Blanco-granel-segunda-selección.jpg";
import blancoGrandeGranel from "@/assets/productos/Champiñon-Blanco-granel-grande.jpg";

const productos = [
  {
    nombre: "Champiñón Blanco",
    formato: "200 gramos",
    image: blanco200g,
  },
  {
    nombre: "Champiñón Blanco",
    formato: "400 gramos",
    image: blanco400g,
  },
  {
    nombre: "Champiñón Blanco",
    formato: "Royal clamshell (8 unidades)",
    image: blancoRoyal,
  },
  {
    nombre: "Champiñón Blanco",
    formato: "Clamshell 1.5 KG",
    image: blancoClamshell,
  },
  {
    nombre: "Champiñón Blanco",
    formato: "Granel primera selección",
    image: blancoPrimera,
  },
  {
    nombre: "Champiñón Blanco",
    formato: "Granel segunda selección",
    image: blancoSegunda,
  },
  {
    nombre: "Champiñón Blanco",
    formato: "Granel Royal",
    image: blancoGrandeGranel,
  },
];

const ChampinonesSection = () => {
  return (
    <section id="champinones" className="py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative Background */}
      <div className="absolute hidden -top-20 -left-20 z-0 opacity-6">
        <img 
          src={hongos1} 
          alt="" 
          className="w-96 h-96 lg:w-[500px] lg:h-[500px] object-contain transform rotate-12"
        />
      </div>
      
      <div className="absolute bottom-0 -right-24 z-0 opacity-6">
        <img 
          src={hongos2} 
          alt="" 
          className="w-80 h-80 lg:w-[450px] lg:h-[450px] object-contain transform -rotate-12"
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Nuestra Línea
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                  Champiñones <span className="font-accent italic text-primary">Premium.</span>
                </h2>
                <p className="font-body text-lg text-charcoal/70 max-w-3xl mx-auto pt-2">
                  Frescura y calidad en cada formato para satisfacer todas tus necesidades
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {productos.map((producto, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 50}>
                <div className="group bg-white border border-primary/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={producto.image}
                      alt={`${producto.nombre} ${producto.formato}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Package className="w-5 h-5 text-primary" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-charcoal font-bold mb-1">
                          {producto.nombre}
                        </h3>
                        <p className="font-body text-base text-charcoal/60">
                          {producto.formato}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChampinonesSection;
