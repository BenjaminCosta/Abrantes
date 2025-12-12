import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { MushroomDecoration } from "@/components/DecorativeElements";
import { Clock, Users, ChefHat } from "lucide-react";
import recipeRisotto from "@/assets/recipe-risotto.jpg";
import recipeSoup from "@/assets/recipe-soup.jpg";
import recipeStuffed from "@/assets/recipe-stuffed.jpg";

const recipes = [
  {
    title: "Risotto de Champiñones",
    image: recipeRisotto,
    time: "35 min",
    servings: 4,
    difficulty: "Media",
    category: "Plato Principal",
    description: "Un clásico italiano cremoso y reconfortante, perfecto para cenas especiales.",
  },
  {
    title: "Crema de Champiñones",
    image: recipeSoup,
    time: "25 min",
    servings: 6,
    difficulty: "Fácil",
    category: "Sopa",
    description: "Sopa aterciopelada con todo el sabor de nuestros champiñones frescos.",
  },
  {
    title: "Champiñones Rellenos",
    image: recipeStuffed,
    time: "30 min",
    servings: 4,
    difficulty: "Fácil",
    category: "Aperitivo",
    description: "Delicioso aperitivo con queso y hierbas, ideal para compartir.",
  },
  {
    title: "Pasta con Champiñones",
    image: recipeRisotto,
    time: "20 min",
    servings: 4,
    difficulty: "Fácil",
    category: "Plato Principal",
    description: "Pasta con salsa cremosa de champiñones, rápida y deliciosa.",
  },
  {
    title: "Champiñones al Ajillo",
    image: recipeSoup,
    time: "15 min",
    servings: 4,
    difficulty: "Fácil",
    category: "Aperitivo",
    description: "Receta española tradicional con ajo, perejil y un toque de vino.",
  },
  {
    title: "Tarta de Champiñones",
    image: recipeStuffed,
    time: "50 min",
    servings: 8,
    difficulty: "Media",
    category: "Entrada",
    description: "Elegante tarta salada perfecta para brunch o eventos.",
  },
];

const Recetas = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
        <MushroomDecoration className="absolute top-10 right-10 w-28 h-auto text-cream opacity-[0.04]" />
        <div className="container-narrow relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
              Recetas
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-accent italic text-xl text-cream/75 max-w-2xl">
              Inspiración culinaria para disfrutar nuestros champiñones
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recipes.map((recipe, index) => (
              <AnimateOnScroll key={recipe.title} animation="fade-up" delay={index * 80}>
                <article className="group cursor-pointer bg-secondary rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-xs font-heading uppercase tracking-wider bg-primary text-primary-foreground px-2.5 py-1 rounded-sm">
                      {recipe.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                      {recipe.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {recipe.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {recipe.servings}
                      </span>
                      <span className="flex items-center gap-1">
                        <ChefHat className="w-3.5 h-3.5" />
                        {recipe.difficulty}
                      </span>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recetas;
