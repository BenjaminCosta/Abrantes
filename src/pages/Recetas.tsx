import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Clock, Users, ChevronRight } from "lucide-react";
import hongos2 from "@/assets/hongos2.png";
import heroCultivation from "@/assets/hero-cultivation.jpg";
import cevicheImg from "@/assets/recetas/Ceviche-de-champiñones.jpg";
import ensaladaImg from "@/assets/recetas/Ensalada-fresca-mediterranea.jpg";
import delMarImg from "@/assets/recetas/Champiñon-del-mar.jpg";
import orientalImg from "@/assets/recetas/Champiñon-Oriental.jpg";
import naturistaImg from "@/assets/recetas/Champiñon-Naturista.jpg";
import capresseImg from "@/assets/recetas/Champiñon-Capresse.jpg";

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

const Recetas = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section con Imagen de Fondo */}
      <section className="relative h-[580px] overflow-hidden -mt-20">
        {/* Background Image - Full Height including Navbar */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCultivation})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center pt-20">
          <div className="w-full px-4 md:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              
              <AnimateOnScroll animation="fade-up">
                {/* Simple Top Line - Centered */}
                <div className="mb-6 flex justify-center">
                  <div className="h-1 w-44 bg-white" />
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4">
                  Recetas
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <p className="font-accent italic text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto">
                  Inspiración culinaria para disfrutar nuestros champiñones
                </p>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-beige via-white to-beige/50 relative overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute top-20 -right-20 z-0 opacity-6">
          <img 
            src={hongos2} 
            alt="" 
            className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] object-contain transform rotate-12"
          />
        </div>

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16 lg:mb-20">
              <AnimateOnScroll animation="fade-up">
                <div className="space-y-4">
                  <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                    Desarrolladas en conjunto con el
                  </p>
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                    Recetas <span className="font-accent italic text-primary">Gourmet.</span>
                  </h1>
                  <p className="font-body text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
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
                    className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer group"
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
                      <p className="font-body text-sm text-charcoal/60 mb-4 leading-relaxed">
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
    </Layout>
  );
};

export default Recetas;
