import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import cevicheImg from "@/assets/recetas/Ceviche-de-champiñones.jpg";
import ensaladaImg from "@/assets/recetas/Ensalada-fresca-mediterranea.jpg";
import delMarImg from "@/assets/recetas/Champiñon-del-mar.jpg";
import orientalImg from "@/assets/recetas/Champiñon-Oriental.jpg";
import hongosTexture from "@/assets/hongos_texture.png";
import hongosHoja from "@/assets/hongos_hoja.png";

const recipes = [
  {
    title: "Ceviche de Champiñones",
    image: cevicheImg,
    subtitle: "Fresco y original",
  },
  {
    title: "Ensalada Mediterránea",
    image: ensaladaImg,
    subtitle: "Saludable y deliciosa",
  },
  {
    title: "Champiñón del Mar",
    image: delMarImg,
    subtitle: "Sabor único",
  },
  {
    title: "Champiñón Oriental",
    image: orientalImg,
    subtitle: "Exótico y aromático",
  },
];

const RecipesSection = () => {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Background Texture with Heavy Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${hongosTexture})` }}
      />
      
      {/* Strong overlay to maintain background color */}
      <div className="absolute inset-0 bg-secondary/90" />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-secondary/92" />
      
      {/* Decorative Hongos Hoja Elements */}
      <div className="absolute -top-10 -left-10 lg:-top-16 lg:-left-16 z-0 opacity-8">
        <img 
          src={hongosHoja} 
          alt="" 
          className="w-72 h-72 lg:w-96 lg:h-96 object-contain transform rotate-12"
        />
      </div>
      
      <div className="absolute -bottom-12 -right-12 lg:-bottom-20 lg:-right-20 z-0 opacity-8">
        <img 
          src={hongosHoja} 
          alt="" 
          className="w-80 h-80 lg:w-[420px] lg:h-[420px] object-contain transform -rotate-12"
        />
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header - Editorial Style */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-4">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Inspiración Culinaria
                </p>
                <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-charcoal font-bold leading-tight">
                  Cocina con <span className="font-accent italic text-primary">Abrantes.</span>
                </h2>
                <p className="font-body text-lg md:text-xl text-charcoal/75 max-w-2xl mx-auto pt-2">
                  Ideas simples para todos los días.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Recipes Grid - 4 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {recipes.map((recipe, index) => (
              <AnimateOnScroll key={recipe.title} animation="fade-up" delay={index * 80}>
                <Link 
                  to="/recetas"
                  className="group block"
                >
                  <article className="relative max-w-[280px] md:max-w-none mx-auto">
                    {/* Image Container */}
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 mb-4">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Corner accent */}
                      <div className="absolute top-3 right-3 w-10 h-10 border-2 border-white/40 rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    
                    {/* Text Content - Outside image */}
                    <div className="space-y-2 text-center md:text-left">
                      <h3 className="font-heading text-xl md:text-2xl text-charcoal font-semibold group-hover:text-primary transition-colors duration-300">
                        {recipe.title}
                      </h3>
                      <p className="font-body text-sm md:text-base text-charcoal/60">
                        {recipe.subtitle}
                      </p>
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          {/* CTA - Elegant */}
          <AnimateOnScroll animation="fade-up" delay={350}>
            <div className="text-center">
              <Link 
                to="/recetas"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-heading font-semibold text-base md:text-lg rounded-2xl hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <span>Ver Todas las Recetas</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
              </Link>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
