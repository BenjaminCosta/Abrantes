import AnimateOnScroll from "@/components/AnimateOnScroll";
import heroCultivation from "@/assets/hero-cultivation.jpg";
import productos from "@/assets/productos.jpg";

const MisionVisionSection = () => {
  return (
    <section
      id="mision-vision"
      className="py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden scroll-mt-24"
    >
      {/* Menos márgenes laterales SOLO desktop */}
      <div className="w-full px-4 md:px-6 lg:px-6 xl:px-8 2xl:px-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header - igual */}
          <div className="text-center mb-20 lg:mb-24">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="text-primary/70 text-sm md:text-base font-accent italic tracking-wide">
                  Nuestro Propósito
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold uppercase tracking-wide">
                  Misión & Visión
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* ===== Fila 1 - MISIÓN ===== */}
          <div className="mb-20 lg:mb-28">
            <div
              className="
                grid
                lg:grid-cols-[1fr_1fr_1fr]
                items-center
                gap-y-10
                lg:gap-y-0
                lg:gap-x-14
                xl:gap-x-16
              "
            >
              {/* Columna izquierda - Título (centrado dentro de su columna en desktop) */}
              <div className="lg:pt-8 lg:flex lg:justify-center">
                <AnimateOnScroll animation="fade-right">
                  <h3 className="font-heading text-4xl md:text-5xl lg:text-5xl text-charcoal font-light uppercase tracking-wide mb-8 lg:mb-0 lg:text-center">
                    Misión
                  </h3>
                </AnimateOnScroll>
              </div>

              {/* Columna central - Texto */}
              <div className="lg:pt-8">
                <AnimateOnScroll animation="fade-up" delay={100}>
                  <p className="font-sans text-lg md:text-xl text-charcoal/80 leading-relaxed text-justify">
                    Satisfacer a los clientes con champiñones de primera calidad cultivados de manera
                    cuidadosa con el medio ambiente, valorizando subproductos de otras actividades agrícolas
                    y haciendo un uso sostenible de agua.
                  </p>
                </AnimateOnScroll>
              </div>

              {/* Columna derecha - Imagen (mismo tamaño real) */}
              <div className="lg:pt-8">
                <AnimateOnScroll animation="fade-left" delay={200}>
                  <div className="w-full aspect-[4/3] min-h-[240px] md:min-h-[260px] lg:min-h-[240px]">
                    <img
                      src={heroCultivation}
                      alt="Cultivo de champiñones"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>

          {/* ===== Fila 2 - VISIÓN ===== */}
          <div>
            <div
              className="
                grid
                lg:grid-cols-[1fr_1fr_1fr]
                items-center
                gap-y-10
                lg:gap-y-0
                lg:gap-x-14
                xl:gap-x-16
              "
            >
              {/* Columna izquierda - Imagen (mismo tamaño real) */}
              <div className="order-3 lg:order-1 lg:pt-8">
                <AnimateOnScroll animation="fade-right">
                  <div className="w-full aspect-[4/3] min-h-[240px] md:min-h-[260px] lg:min-h-[240px]">
                    <img
                      src={productos}
                      alt="Productos Abrantes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Columna central - Texto */}
              <div className="order-2 lg:pt-8">
                <AnimateOnScroll animation="fade-up" delay={100}>
                  <p className="font-sans text-lg md:text-xl text-charcoal/80 leading-relaxed text-justify">
                    Ser líderes de nuestra industria en calidad y servicio, así como en el uso de
                    tecnologías de vanguardia en eficiencia productiva, y relación con nuestro entorno.
                  </p>
                </AnimateOnScroll>
              </div>

              {/* Columna derecha - Título (centrado dentro de columna, pero alineado derecha como lo tenías) */}
              <div className="order-1 lg:order-3 lg:pt-8 lg:flex lg:justify-center">
                <AnimateOnScroll animation="fade-left" delay={200}>
                  <h3 className="font-heading text-4xl md:text-5xl lg:text-5xl text-charcoal font-light uppercase tracking-wide mb-8 lg:mb-0 lg:text-right w-full">
                    Visión
                  </h3>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisionVisionSection;
