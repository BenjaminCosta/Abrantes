import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import cevicheImg from "@/assets/recipe-risotto.jpg";
import ensaladaImg from "@/assets/recipe-soup.jpg";
import delMarImg from "@/assets/recipe-stuffed.jpg";
import orientalImg from "@/assets/recetas/Champiñon-Oriental.jpg";
import mushroom8 from "@/assets/unsplash/mushroom8.jpg";
import hongos11 from "@/assets/hongos9.webp";

const RecipesSection = () => {
  return (
    <> {/* Full Width Premium Product Section con overflow visible */}
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
                      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white uppercase font-bold tracking-wide">
                        Consumo Diario<br />
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
                          to="/productos#recetas"
                          className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/80 text-white font-heading text-base hover:bg-white hover:text-charcoal transition-all duration-300 group"
                        >
                          <span>Conoce nuestras recetas</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                        </Link>
                      </AnimateOnScroll>
    
                    </div>
                  </AnimateOnScroll>
    
                </div>
              </div>
            </div>
          </section>
    <section className="py-32 md:py-40 lg:py-48 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header - Simple */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-6">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Inspiración Culinaria
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold uppercase tracking-wide">
                  Cocina con Abrantes
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Layout Asimétrico - Dos Columnas */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 mb-16">
            
            {/* Columna Izquierda - Receta Destacada */}
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-right">
                <Link to="/recetas" className="group block">
                  <article>
                    {/* Imagen con título superpuesto - Mismo height que las 2 de la derecha */}
                    <div className="relative h-[600px] lg:h-[700px] overflow-hidden bg-cream">
                      <img
                        src={cevicheImg}
                        alt="Ceviche de Champiñones"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>
            </div>

            {/* Columna Derecha - 2 Recetas Secundarias (Stack Vertical) */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-8">
              
              {/* Receta Secundaria 1 */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <Link to="/recetas" className="group block flex-1">
                  <article className="h-full">
                    <div className="relative h-[280px] lg:h-[330px] overflow-hidden bg-cream">
                      <img
                        src={ensaladaImg}
                        alt="Ensalada Mediterránea"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>

              {/* Receta Secundaria 2 */}
              <AnimateOnScroll animation="fade-left" delay={200}>
                <Link to="/recetas" className="group block flex-1">
                  <article className="h-full">
                    <div className="relative h-[280px] lg:h-[330px] overflow-hidden bg-cream">
                      <img
                        src={delMarImg}
                        alt="Champiñón del Mar"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>

            </div>

          </div>

          {/* CTA - Fondo blanco, borde rojo, texto rojo */}
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="text-center">
              <Link 
                to="/recetas"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white font-sans text-base tracking-wide transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>Ver todas las recetas</span>
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </Link>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
    </>
  );
};

export default RecipesSection;
