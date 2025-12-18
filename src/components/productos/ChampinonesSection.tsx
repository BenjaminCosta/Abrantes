import AnimateOnScroll from "@/components/AnimateOnScroll";
import hongos2 from "@/assets/hongos12.webp";
import blanco200g from "@/assets/productos/Champiñon-Blanco-200-gramos.jpg";
import blanco400g from "@/assets/productos/Champiñon-Blanco-400-gramos.jpg";
import blancoRoyal from "@/assets/productos/Champiñon-Blanco-Royal-clamshell.jpg";
import blancoClamshell from "@/assets/productos/Champiñon-Blanco-clamshell-1.5-e1539093512171.jpg";
import blancoPrimera from "@/assets/productos/Champiñon-Blanco-granel-primera-selección.jpg";
import blancoSegunda from "@/assets/productos/Champiñon-Blanco-granel-segunda-selección.jpg";
import blancoGrandeGranel from "@/assets/productos/Champiñon-Blanco-granel-grande.jpg";

const productos = [
  {
    nombre: "CHAMPIÑÓN BLANCO",
    formato: "200 gramos",
    image: blanco200g,
  },
  {
    nombre: "CHAMPIÑÓN BLANCO",
    formato: "400 gramos",
    image: blanco400g,
  },
  {
    nombre: "CHAMPIÑÓN BLANCO",
    formato: "Royal clamshell",
    image: blancoRoyal,
  },
  {
    nombre: "CHAMPIÑÓN BLANCO",
    formato: "Clamshell 1.5 KG",
    image: blancoClamshell,
  },
  {
    nombre: "CHAMPIÑÓN BLANCO",
    formato: "Primera selección",
    image: blancoPrimera,
  },
  {
    nombre: "CHAMPIÑÓN BLANCO",
    formato: "Segunda selección",
    image: blancoSegunda,
  },
  {
    nombre: "CHAMPIÑÓN BLANCO",
    formato: "Granel Royal",
    image: blancoGrandeGranel,
  },
];

const ChampinonesSection = () => {
  return (
    <section id="champinones" className="py-20 md:py-24 lg:py-28 bg-white relative overflow-y-hidden">
      {/* Decorative Background */}
      <div className="absolute hidden md:block -bottom-20 -right-20 z-0 opacity-6">
        <img 
          src={hongos2} 
          alt="" 
          className="w-96 h-96 lg:w-[500px] lg:h-[500px] 2xl:w-[550px] 2xl:h-[550px] object-contain transform -rotate-12"
        />
      </div>
  

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header - Manteniendo el estilo original */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Nuestra Línea
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold uppercase tracking-wide">
                  Champiñones <span className="text-primary">Premium</span>
                </h2>
                <p className="text-lg text-charcoal/70 max-w-3xl mx-auto pt-2">
                  Frescura y calidad en cada formato para satisfacer todas tus necesidades
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Products Grid - 4 columnas en desktop (2 filas con 4 + 3 centrados) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {productos.map((producto, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 50}>
                <div className="group bg-transparent hover:bg-cream/20 transition-all duration-300 p-2 md:p-3">
                  {/* Imagen minimalista - más grande */}
                  <div className="aspect-square overflow-hidden mb-3 bg-transparent">
                    <img
                      src={producto.image}
                      alt={`${producto.nombre} ${producto.formato}`}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Contenido minimalista */}
                  <div>
                    <div className="flex flex-col items-center text-center space-y-1">
                      <h3 className="text-xs font-sans font-medium text-charcoal/80 uppercase tracking-wide leading-tight">
                        {producto.nombre}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-charcoal/50 font-normal leading-tight">
                        {producto.formato}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
            
            {/* Espaciador para centrar la segunda fila de 3 productos */}
            <div className="hidden lg:block"></div>
          </div>

          {/* Nota informativa */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="mt-16 text-center">
              <div className="inline-block px-4 py-2">
                <p className="text-xs text-charcoal/40">
                  Productos disponibles en múltiples formatos para retail y gastronomía profesional
                </p>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default ChampinonesSection;