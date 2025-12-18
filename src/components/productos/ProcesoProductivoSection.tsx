import { useState, useEffect } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import hongos3 from "@/assets/hongos11.webp";
import proceso1 from "@/assets/proceso/1..jpg";
import proceso2 from "@/assets/proceso/2..jpg";
import proceso3 from "@/assets/proceso/3..jpg";
import proceso4 from "@/assets/proceso/4..jpg";
import proceso5 from "@/assets/proceso/5..jpg";
import proceso6 from "@/assets/proceso/6..jpg";
import proceso7 from "@/assets/proceso/7.jpg";

const ProcesoProductivoSection = () => {
  const processSteps = [
    {
      number: "I",
      title: "Preparación del Sustrato",
      description: "Elaboración de compost específico con nutrientes óptimos para cada etapa del cultivo.",
      image: proceso1,
    },
    {
      number: "II",
      title: "Pasteurización",
      description: "Control térmico preciso para eliminar patógenos y garantizar un ambiente ideal.",
      image: proceso2,
    },
    {
      number: "III",
      title: "Siembra",
      description: "Inoculación del micelio en condiciones asépticas y controladas.",
      image: proceso3,
    },
    {
      number: "IV",
      title: "Incubación",
      description: "Monitoreo constante durante el desarrollo del micelio.",
      image: proceso4,
    },
    {
      number: "V",
      title: "Inducción",
      description: "Ajuste de condiciones ambientales para estimular la fructificación.",
      image: proceso5,
    },
    {
      number: "VI",
      title: "Cosecha",
      description: "Recolección manual en el punto óptimo de maduración.",
      image: proceso6,
    },
    {
      number: "VII",
      title: "Empaque",
      description: "Empaque y distribución bajo estrictas normas de calidad e higiene.",
      image: proceso7,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="procesos" className="py-16 md:py-20 lg:py-24 bg-white relative overflow-y-hidden">
      {/* Anchor for Procesos (same section) */}
      <div id="procesos" className="absolute top-0" />
      
      {/* Hongo decorativo sutil */}
      <div className="absolute md:block hidden -bottom-10 -left-20 z-0 opacity-3 pointer-events-none">
        <img 
          src={hongos3} 
          alt="" 
          className="w-[400px] h-[400px] object-contain"
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header exactamente igual */}
          <div className="text-center mb-12 lg:mb-16">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-2">
                <p className="text-primary/70 text-sm md:text-base tracking-wide font-accent italic">
                  Excelencia en Cada Paso
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold uppercase tracking-wide">
                  Proceso Productivo
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* Carousel Slide */}
            <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[500px] md:min-h-[550px] gap-8 lg:gap-12">
              
              {/* Contenido a la izquierda */}
              <div className="w-full lg:w-1/2 p-6 lg:p-8 transition-all duration-500 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                    <span className="font-heading text-xl font-bold text-primary">
                      {processSteps[currentSlide].number}
                    </span>
                  </div>
                  <span className="font-heading text-4xl lg:text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                    {processSteps[currentSlide].number}
                  </span>
                </div>
                
                <h3 className="font-heading text-2xl lg:text-3xl text-charcoal font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {processSteps[currentSlide].title}
                </h3>
                
                <p className="text-base lg:text-lg text-charcoal/60 leading-relaxed mb-6">
                  {processSteps[currentSlide].description}
                </p>

                {/* Step indicator */}
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-primary/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
                        style={{ width: `${((currentSlide + 1) / processSteps.length) * 100}%` }}
                      />
                    </div>
                    <span className="font-heading text-sm text-primary/50 font-medium">
                      {currentSlide + 1}/{processSteps.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Imagen con bordes rectos */}
              <div className="w-full lg:w-1/2">
                <div className="relative group/img transition-transform duration-700 hover:scale-105">
                  <div className="relative aspect-[4/3]">
                    {/* Contenedor principal con borde recto */}
                    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl border border-charcoal/10">
                      <img
                        src={processSteps[currentSlide].image}
                        alt={processSteps[currentSlide].title}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/10 via-transparent to-primary/5 group-hover/img:from-charcoal/5 transition-colors duration-500" />
                    </div>
                    
                    {/* Efecto de brillo suave */}
                    <div className="absolute -z-10 w-full h-full bg-primary/2 rounded-lg blur-xl transition-all duration-500 " />
                  </div>
                </div>
              </div>

            </div>

            {/* Controles del carousel */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
              
              {/* Flechas de navegación */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevSlide}
                  aria-label="Paso anterior"
                  className="group flex items-center gap-2 text-charcoal/70 hover:text-primary transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full border border-charcoal/30 group-hover:border-primary flex items-center justify-center group-hover:bg-primary/5 transition-all duration-300">
                    <span className="text-lg font-bold">←</span>
                  </div>
                  <span className="text-sm font-medium">Anterior</span>
                </button>
                
                <button
                  onClick={handleNextSlide}
                  aria-label="Siguiente paso"
                  className="group flex items-center gap-2 text-charcoal/70 hover:text-primary transition-colors duration-300"
                >
                  <span className="text-sm font-medium">Siguiente</span>
                  <div className="w-8 h-8 rounded-full border border-charcoal/30 group-hover:border-primary flex items-center justify-center group-hover:bg-primary/5 transition-all duration-300">
                    <span className="text-lg font-bold">→</span>
                  </div>
                </button>
              </div>

              {/* Indicadores de posición */}
              <div className="flex items-center gap-2">
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Ir al paso ${index + 1}`}
                    className="focus:outline-none"
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "w-8 bg-primary" 
                        : "bg-charcoal/30 hover:bg-charcoal/50"
                    }`} />
                  </button>
                ))}
              </div>

              {/* Información del paso */}
              <div className="text-center md:text-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-lg">
                  <span className="font-heading text-primary font-bold text-xl">
                    {processSteps[currentSlide].number}
                  </span>
                  <span className="text-sm text-charcoal/60">
                    Paso {currentSlide + 1} de {processSteps.length}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcesoProductivoSection;