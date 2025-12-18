import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import mushrooms3 from "@/assets/13.webp";
import mushrooms4 from "@/assets/unsplash/mushrooms5.jpg";
import cevicheImg from "@/assets/recetas/Ceviche-de-champiñones.jpg";
import ensaladaImg from "@/assets/recetas/Ensalada-fresca-mediterranea.jpg";
import delMarImg from "@/assets/recetas/Champiñon-del-mar.jpg";
import orientalImg from "@/assets/recetas/Champiñon-Oriental.jpg";
import naturistaImg from "@/assets/recetas/Champiñon-Naturista.jpg";
import capresseImg from "@/assets/recetas/Champiñon-Capresse.jpg";

interface RecetaSlide {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

const recetas: RecetaSlide[] = [
  {
    id: "ceviche-champinones",
    nombre: "Ceviche de Champiñones",
    descripcion: "Con cilantro y pimentón",
    imagen: cevicheImg
  },
  {
    id: "ensalada-mediterranea",
    nombre: "Ensalada Fresca Mediterránea",
    descripcion: "Con champiñones, tocino crispy, pimentón y roquefort",
    imagen: ensaladaImg
  },
  {
    id: "champinones-del-mar",
    nombre: "Champiñones del Mar",
    descripcion: "Rellenos con jaiba y queso brie",
    imagen: delMarImg
  },
  {
    id: "champinones-orientales",
    nombre: "Champiñones Orientales",
    descripcion: "Rellenos con pollo al curry",
    imagen: orientalImg
  },
  {
    id: "champinones-naturista",
    nombre: "Champiñones Naturista",
    descripcion: "Rellenos con espinaca y queso",
    imagen: naturistaImg
  },
  {
    id: "champinones-capresse",
    nombre: "Champiñones Capresse",
    descripcion: "Rellenos con tomate cherry, albahaca y mozzarella",
    imagen: capresseImg
  }
];

const RecetasSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === recetas.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? recetas.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === recetas.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="recetas" className="relative min-h-[60vh] w-full overflow-hidden bg-white scroll-mt-28">
      
      {/* Background Image - Full Width */}
      <div className="absolute inset-0 z-0">
        <img
          src={mushrooms4}
          alt=""
          className="w-full h-[40vh] object-cover"
        />
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 h-[40vh] bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-6 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header - Mantener igual */}
          <div className="text-center mb-12 lg:mb-16">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-4">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold uppercase tracking-wide">
                  Recetas Gourmet
                </h2>
                <p className="text-lg text-white font-semibold max-w-3xl mx-auto">
                  Instituto Internacional de Artes Culinarias y Servicios
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto mb-12 lg:mb-16">
            
            {/* Carousel Slide */}
            <div className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[550px] py-8">
              
              {/* Recipe Image - Protagonista */}
              <div className="relative w-full max-w-[500px] lg:max-w-[600px] h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
                <img
                  src={recetas[currentSlide].imagen}
                  alt={recetas[currentSlide].nombre}
                  className="w-full h-full object-contain transition-all duration-700 ease-in-out drop-shadow-2xl cursor-pointer hover:scale-105"
                  onClick={() => navigate(`/recetas/${recetas[currentSlide].id}`)}
                />
              </div>

              {/* Recipe Info - Debajo de la imagen */}
              <div className="mt-6 lg:mt-8 text-center max-w-2xl">
                <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl text-charcoal mb-2 tracking-wide">
                  {recetas[currentSlide].nombre}
                </h3>
                <p className="font-sans text-base md:text-lg text-charcoal/70">
                  {recetas[currentSlide].descripcion}
                </p>
              </div>

            </div>

            {/* Navigation Arrows */}
<button
  onClick={handlePrevSlide}
  aria-label="Anterior"
  className="absolute left-0 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 group"
>
  <span className="block w-10 h-[2px] bg-charcoal relative transition-all duration-300 group-hover:opacity-70">
    <span className="absolute left-0 top-[-4px] w-3 h-[2px] bg-charcoal rotate-[-45deg]" />
    <span className="absolute left-0 top-[4px] w-3 h-[2px] bg-charcoal rotate-[45deg]" />
  </span>
</button>

<button
  onClick={handleNextSlide}
  aria-label="Siguiente"
  className="absolute right-0 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 group"
>
  <span className="block w-10 h-[2px] bg-charcoal relative transition-all duration-300 group-hover:opacity-70">
    <span className="absolute right-0 top-[-4px] w-3 h-[2px] bg-charcoal rotate-[45deg]" />
    <span className="absolute right-0 top-[4px] w-3 h-[2px] bg-charcoal rotate-[-45deg]" />
  </span>
</button>

          </div>

          {/* CTA Button - Centrado debajo del carousel */}
          <AnimateOnScroll animation="fade-up">
            <div className="flex justify-center">
              <button
                onClick={() => navigate(`/recetas/${recetas[currentSlide].id}`)}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-charcoal text-charcoal font-heading text-base hover:bg-charcoal hover:text-white transition-all duration-300 group"
              >
                Ver receta completa
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </button>
            </div>
          </AnimateOnScroll>

        </div>
      </div>

    </section>
  );
};

export default RecetasSection;
