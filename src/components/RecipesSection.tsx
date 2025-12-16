import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import cevicheImg from "@/assets/recipe-risotto.jpg";
import ensaladaImg from "@/assets/recipe-soup.jpg";
import delMarImg from "@/assets/recipe-stuffed.jpg";
import orientalImg from "@/assets/recetas/Champiñon-Oriental.jpg";

const RecipesSection = () => {
  return (
    <section className="py-32 md:py-40 lg:py-48 bg-cream">
      <div className="w-full px-4 md:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header - Simple */}
          <div className="text-center mb-20 lg:mb-24">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-6">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Inspiración Culinaria
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                  Cocina con <span className="font-accent italic text-primary">Abrantes.</span>
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
  );
};

export default RecipesSection;
