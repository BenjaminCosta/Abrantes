import { useNavigate } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Clock, Users, ChevronRight } from "lucide-react";
import cevicheImg from "@/assets/recetas/Ceviche-de-champiñones.jpg";
import ensaladaImg from "@/assets/recetas/Ensalada-fresca-mediterranea.jpg";
import delMarImg from "@/assets/recetas/Champiñon-del-mar.jpg";
import orientalImg from "@/assets/recetas/Champiñon-Oriental.jpg";
import naturistaImg from "@/assets/recetas/Champiñon-Naturista.jpg";
import capresseImg from "@/assets/recetas/Champiñon-Capresse.jpg";
import hongos2 from "@/assets/hongos2.png";

interface RecetaCard {
  id: string;
  nombre: string;
  descripcion: string;
  tiempo: string;
  porciones: string;
  imagen: string;
}

const recetas: RecetaCard[] = [
  {
    id: "ceviche-champinones",
    nombre: "Ceviche de Champiñones",
    descripcion: "Con cilantro y pimentón",
    tiempo: "25 min",
    porciones: "4",
    imagen: cevicheImg
  },
  {
    id: "ensalada-mediterranea",
    nombre: "Ensalada Fresca Mediterránea",
    descripcion: "Con champiñones, tocino crispy, pimentón y roquefort",
    tiempo: "15 min",
    porciones: "4",
    imagen: ensaladaImg
  },
  {
    id: "champinones-del-mar",
    nombre: "Champiñones del Mar",
    descripcion: "Rellenos con jaiba y queso brie",
    tiempo: "15 min",
    porciones: "4",
    imagen: delMarImg
  },
  {
    id: "champinones-orientales",
    nombre: "Champiñones Orientales",
    descripcion: "Rellenos con pollo al curry",
    tiempo: "20 min",
    porciones: "4",
    imagen: orientalImg
  },
  {
    id: "champinones-naturista",
    nombre: "Champiñones Naturista",
    descripcion: "Rellenos con espinaca y queso",
    tiempo: "20 min",
    porciones: "4",
    imagen: naturistaImg
  },
  {
    id: "champinones-capresse",
    nombre: "Champiñones Capresse",
    descripcion: "Rellenos con tomate cherry, albahaca y mozzarella",
    tiempo: "15 min",
    porciones: "4",
    imagen: capresseImg
  }
];

const RecetasSection = () => {
  const navigate = useNavigate();

  return (
    <section id="recetas" className="py-32 md:py-40 lg:py-48 bg-white relative scroll-mt-28">
      
      {/* Hongo decorativo sutil - z-0 para que no se corte */}
      <div className="absolute top-20 -right-20 opacity-3 pointer-events-none z-0">
        <img 
          src={hongos2} 
          alt="" 
          className="w-[450px] h-[450px] object-contain transform rotate-12"
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 lg:mb-24">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-4">
                <p className="text-primary/70 text-sm md:text-base tracking-wide font-accent italic">
                  Desarrolladas en conjunto con el
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                  Recetas <span className="font-accent italic text-primary">Gourmet.</span>
                </h2>
                <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                  Instituto Internacional de Artes Culinarias y Servicios
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Recetas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recetas.map((receta, index) => (
              <AnimateOnScroll key={receta.id} animation="fade-up" delay={index * 50}>
                <div 
                  onClick={() => navigate(`/recetas/${receta.id}`)}
                  className="bg-white border border-charcoal/10 overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer group"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={receta.imagen}
                      alt={receta.nombre}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover Icon */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ChevronRight className="w-6 h-6 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl lg:text-2xl text-charcoal font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {receta.nombre}
                    </h3>
                    <p className="text-sm text-charcoal/60 mb-4 leading-relaxed">
                      {receta.descripcion}
                    </p>

                    {/* Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary/70" strokeWidth={2} />
                        <span className="font-heading text-sm text-charcoal/70 font-semibold">
                          {receta.tiempo}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary/70" strokeWidth={2} />
                        <span className="font-heading text-sm text-charcoal/70 font-semibold">
                          {receta.porciones} porciones
                        </span>
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

export default RecetasSection;
