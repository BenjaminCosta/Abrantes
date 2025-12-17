import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import mush4 from "@/assets/unsplash/mush4.jpg";
import hongos14 from "@/assets/hongos14.webp";
import hongos11 from "@/assets/hongos11.webp";
import hongos13 from "@/assets/13.webp";
import hongos15 from "@/assets/hongos15.webp";

interface ProductSlide {
  image: string;
  concept: string;
}

const slides: ProductSlide[] = [
  {
    image: hongos14,
    concept: "Frescura diaria",
  },
  {
    image: hongos11,
    concept: "Calidad controlada",
  },
  {
    image: hongos13,
    concept: "Producción continua",
  },
  {
    image: hongos15,
    concept: "Origen confiable",
  },
];

const ProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel cada 3.5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-white">
      
      {/* Background Image - Full Width */}
      <div className="absolute inset-0 z-0 md:bg-fixed">
        <img
          src={mush4}
          alt=""
          className="w-full h-[40vh] object-cover"
        />
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-black/40 h-[40vh]" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-6 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header - Mantener igual */}
          <div className="text-center mb-12 lg:mb-16">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-6">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold uppercase tracking-wide">
                  Nuestros champiñones
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto mb-12 lg:mb-26">
            
            {/* Carousel Slide */}
            <div className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[550px]">
              
              {/* Product Image - PNG transparente protagonista */}
              <div className="relative w-full max-w-[500px] lg:max-w-[600px] h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].concept}
                  className="w-full h-full object-contain transition-all duration-700 ease-in-out drop-shadow-2xl"
                />
              </div>
     

              {/* Concept Text - Debajo de la imagen */}
              <div className="">
                <p className="font-sans text-2xl md:text-3xl lg:text-4xl text-charcoal font-bold uppercase text-center tracking-wide">
                  {slides[currentSlide].concept}
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
              <Link
                to="/productos"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-charcoal/40 bg-white text-charcoal font-sans text-base tracking-wide hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
              >
                Ver nuestros productos
              </Link>
            </div>
          </AnimateOnScroll>

        </div>
      </div>

    </section>
  );
};

export default ProductsSection;