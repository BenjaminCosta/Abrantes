import { Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const SustainabilitySection = () => {
  return (
    <section className="py-32 md:py-40 lg:py-48 bg-beige/30 relative">
      <div className="w-full px-4 md:px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
            
            {/* Header - Simple y claro */}
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-6">
                <div className="flex items-center justify-center mb-4">
                  <Leaf className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Nuestro Compromiso Ambiental
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                  Sustentabilidad <br />
                  <span className="font-accent italic text-primary">en cada etapa.</span>
                </h2>
              </div>
            </AnimateOnScroll>

            {/* Main Text */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="text-lg text-charcoal/75 leading-relaxed">
                <span className="font-accent italic">Uso eficiente de recursos</span> y manejo responsable de residuos.
              </p>
            </AnimateOnScroll>

            {/* CTA Button */}
            <AnimateOnScroll animation="fade-up" delay={200}>
              <Link 
                to="/sustentabilidad"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-charcoal border border-charcoal/20 hover:border-charcoal/40 font-sans text-base tracking-wide hover:bg-white/90 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>Conoce nuestro compromiso</span>
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </Link>
            </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
