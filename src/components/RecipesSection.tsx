import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { MushroomDecoration } from "@/components/DecorativeElements";
import recipeRisotto from "@/assets/recipe-risotto.jpg";
import recipeSoup from "@/assets/recipe-soup.jpg";
import recipeStuffed from "@/assets/recipe-stuffed.jpg";

const recipes = [
  {
    title: "Risotto de Champiñones",
    image: recipeRisotto,
    time: "35 min",
    servings: 4,
    category: "Plato Principal",
  },
  {
    title: "Crema de Champiñones",
    image: recipeSoup,
    time: "25 min",
    servings: 6,
    category: "Sopa",
  },
  {
    title: "Champiñones Rellenos",
    image: recipeStuffed,
    time: "30 min",
    servings: 4,
    category: "Aperitivo",
  },
];

const RecipesSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Element */}
      <MushroomDecoration className="absolute top-16 right-8 w-20 md:w-28 h-auto text-accent opacity-[0.05] -rotate-12" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Recetas
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-accent italic text-lg md:text-xl text-primary max-w-2xl mx-auto">
              Inspiración culinaria para disfrutar nuestros champiñones
            </p>
          </AnimateOnScroll>
        </div>

        {/* Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {recipes.map((recipe, index) => (
            <AnimateOnScroll key={recipe.title} animation="fade-up" delay={index * 100}>
              <article className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 text-xs font-heading uppercase tracking-widest bg-primary text-primary-foreground px-2.5 py-1 rounded-sm">
                    {recipe.category}
                  </span>
                </div>
                
                <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {recipe.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {recipe.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {recipe.servings} porciones
                  </span>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" delay={350}>
          <div className="text-center mt-10">
            <Button variant="subtle" size="lg" asChild>
              <Link to="/recetas">Ver Todas las Recetas</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default RecipesSection;
