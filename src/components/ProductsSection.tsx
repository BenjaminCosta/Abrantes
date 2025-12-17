import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import mush1 from "@/assets/unsplash/mush1.jpg";
import mush2 from "@/assets/unsplash/mush2.jpg";
import mush3 from "@/assets/unsplash/mush3.jpg";
import mush4 from "@/assets/unsplash/mush4.jpg";
import mush5 from "@/assets/unsplash/mush5.jpg";
import mush6 from "@/assets/unsplash/mush6.jpg";
import mushroom8 from "@/assets/unsplash/mushroom8.jpg";
import hongos11 from "@/assets/hongos9.webp";

interface ProductInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

const products: ProductInfo[] = [
  {
    id: "champinones",
    title: "CHAMPIÑONES",
    subtitle: "200 g / 5 kg",
    description: "Presentaciones retail en bandejas de 200 g y 400 g. Opciones gastronómicas en cajas y bolsas de 5 kg. Disponibles enteros y laminados.",
    images: [mush1, mush2],
  },
  {
    id: "portobellos",
    title: "PORTOBELLOS",
    subtitle: "Selección gastronómica",
    description: "Variedad de mayor tamaño y textura firme. Orientados a gastronomía profesional. Presentación en granel y cajas especiales.",
    images: [mush3, mush4],
  },
  {
    id: "envasados",
    title: "ENVASADOS",
    subtitle: "Practicidad y rendimiento",
    description: "Productos listos para usar. Procesados bajo estándares de calidad. Ideales para cocinas profesionales.",
    images: [mush5, mush6],
  },
];

const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProductChange = (index: number) => {
    setActiveProduct(index);
    setCurrentImageIndex(0);
  };

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === products[activeProduct].images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [activeProduct]);

  return (
    <>
      {/* Full Width Premium Product Section con overflow visible */}
      <section className="relative overflow-visible bg-charcoal">
        {/* Background Image with Overlay - con overflow hidden solo para esta parte */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={mushroom8}
            alt="Fondo de champiñones frescos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>

        {/* Elemento decorativo - POSICIONADO FUERA del fondo */}
        <div className="absolute left-0 -bottom-32 z-40 w-[200px] md:w-[280px] lg:w-[350px] xl:w-[400px] pointer-events-none">
          <img 
            src={hongos11} 
            alt="" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Contenido principal - con padding-bottom extra para espacio */}
        <div className="relative w-full px-4 md:px-6 ">
          <div className="max-w-[1400px] mx-auto py-12 md:py-16 lg:py-20">
            <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[450px]">
              
              {/* Text Content - Centered */}
              <AnimateOnScroll animation="fade-up">
                <div className="text-center max-w-3xl mx-auto space-y-6 px-4 md:px-8">
                  
                  {/* Main Title */}
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold tracking-tight leading-[1.1]">
                    Consumo Diario,<br />
                    Calidad Natural
                  </h2>

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-accent tracking-wide font-light italic">
                    Champiñones frescos producidos bajo procesos controlados.
                  </p>

                  {/* Bullets */}
                  <div className="space-y-3 pt-4 max-w-2xl mx-auto">
                    <p className="text-base md:text-lg text-white/85 leading-relaxed">
                      + Producción continua durante todo el año.
                    </p>
                    <p className="text-base md:text-lg text-white/85 leading-relaxed">
                      + Bajo en grasas y naturalmente nutritivo.
                    </p>
                    <p className="text-base md:text-lg text-white/85 leading-relaxed">
                      + Calidad y frescura garantizadas.
                    </p>
                  </div>

                  {/* CTA */}
                  <AnimateOnScroll animation="fade-left" delay={200}>
                    <Link 
                      to="/productos"
                      className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/80 text-white font-heading text-base hover:bg-white hover:text-charcoal transition-all duration-300 group"
                    >
                      <span>Conocé nuestros productos</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                    </Link>
                  </AnimateOnScroll>

                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* ProductsSection - Empieza normalmente */}
      <section className="py-28  md:py-32 bg-white relative">
        <div className="w-full px-4 md:px-6 lg:px-12">
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

            {/* Desktop Layout - 3 Columns */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-6 xl:gap-8 relative">
              
              {/* Left Column - Product Selector (smaller ~20%) */}
              <div className="col-span-2 space-y-3">
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductChange(index)}
                    className={`w-full text-left px-5 py-4 font-heading text-base xl:text-lg tracking-wide transition-all duration-300 rounded-lg ${
                      activeProduct === index
                        ? 'bg-charcoal text-white'
                        : 'bg-transparent text-charcoal/70 hover:bg-charcoal/5 border border-charcoal/10'
                    }`}
                  >
                    {product.title}
                  </button>
                ))}
              </div>

              {/* Center Column - Image Carousel (larger ~65%) */}
              <div className="col-span-8 relative">
                <div className="relative aspect-[4/3] bg-cream overflow-hidden">
                  <img
                    src={products[activeProduct].images[currentImageIndex]}
                    alt={products[activeProduct].title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  
                  {/* Dots Indicator - Modern & Rounded */}
                  {products[activeProduct].images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {products[activeProduct].images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`rounded-full transition-all duration-300 ${
                            currentImageIndex === idx 
                              ? 'w-8 h-2.5 bg-white' 
                              : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/70'
                          }`}
                          aria-label={`Ir a imagen ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Info Card Overlay - Moverla aquí dentro del contenedor de imagen */}
                <div className="absolute top-8 -right-16 z-20">
                  <div className="bg-cream/90 backdrop-blur-sm p-6 xl:p-8 space-y-4 max-w-[280px] shadow-lg rounded-lg">
                    <div className="space-y-3">
                      <h3 className="font-heading text-xl xl:text-2xl text-charcoal font-bold tracking-tight">
                        {products[activeProduct].title}
                      </h3>
                      <p className="font-sans text-xs xl:text-sm text-charcoal/60 tracking-wide uppercase">
                        {products[activeProduct].subtitle}
                      </p>
                    </div>
                    
                    <p className="text-sm xl:text-base text-charcoal/75 leading-relaxed">
                      {products[activeProduct].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-8">
              
              {/* Image Carousel */}
              <AnimateOnScroll animation="fade-up">
                <div className="relative aspect-[4/3] bg-cream overflow-hidden">
                  <img
                    src={products[activeProduct].images[currentImageIndex]}
                    alt={products[activeProduct].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Dots Indicator - Modern & Rounded */}
                  {products[activeProduct].images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {products[activeProduct].images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`rounded-full transition-all duration-300 ${
                            currentImageIndex === idx 
                              ? 'w-8 h-2.5 bg-white' 
                              : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/70'
                          }`}
                          aria-label={`Ir a imagen ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </AnimateOnScroll>

              {/* Info Card */}
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="bg-cream/80 backdrop-blur-sm p-6 md:p-8 space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl md:text-3xl text-charcoal font-bold tracking-tight">
                      {products[activeProduct].title}
                    </h3>
                    <p className="font-sans text-sm text-charcoal/60 tracking-wide uppercase">
                      {products[activeProduct].subtitle}
                    </p>
                  </div>
                  
                  <p className="text-base text-charcoal/75 leading-relaxed">
                    {products[activeProduct].description}
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Product Selector */}
              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="space-y-3">
                  {products.map((product, index) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductChange(index)}
                      className={`w-full text-left px-6 py-4 font-heading text-base md:text-lg tracking-wide transition-all duration-300 rounded-lg ${
                        activeProduct === index
                          ? 'bg-charcoal text-white'
                          : 'bg-transparent text-charcoal/70 hover:bg-charcoal/5 border border-charcoal/10'
                      }`}
                    >
                      {product.title}
                    </button>
                  ))}
                </div>
              </AnimateOnScroll>

            </div>

            {/* CTA Button - Below everything, aligned right */}
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="mt-16 lg:mt-20 flex justify-end">
                <Link
                  to="/productos"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-charcoal text-charcoal font-sans text-base tracking-wide hover:bg-charcoal hover:text-white transition-all duration-300"
                >
                  <span>Ver todos nuestros productos</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </Link>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;