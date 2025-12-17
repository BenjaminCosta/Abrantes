import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Target, Eye } from "lucide-react";
import hongos3 from "@/assets/hongos3.png";

const MisionVisionSection = () => {
  return (
    <section id="mision-vision" className="py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden scroll-mt-24">

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
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

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Misión Card */}
            <AnimateOnScroll animation="fade-right">
              <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl text-charcoal font-bold pt-2">
                    Misión
                  </h3>
                </div>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Satisfacer a los clientes con champiñones de primera calidad cultivados de manera 
                  cuidadosa con el medio ambiente, valorizando subproductos de otras actividades agrícolas 
                  y haciendo un uso sostenible de agua.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Visión Card */}
            <AnimateOnScroll animation="fade-left" delay={100}>
              <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-7 h-7 text-accent" strokeWidth={2} />
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl text-charcoal font-bold pt-2">
                    Visión
                  </h3>
                </div>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Ser líderes de nuestra industria en calidad y servicio, así como en el uso de 
                  tecnologías de vanguardia en eficiencia productiva, y relación con nuestro entorno.
                </p>
              </div>
            </AnimateOnScroll>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MisionVisionSection;
