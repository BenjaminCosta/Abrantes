import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Factory, Thermometer, Sprout, Eye, Flower2, Scissors, Package } from "lucide-react";
import hongos5 from "@/assets/hongos7.png";
import hongos8 from "@/assets/hongos8.png";
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
      icon: Factory,
      title: "Preparación del Sustrato",
      description: "Elaboración de compost específico con nutrientes óptimos para cada etapa del cultivo.",
      image: proceso1,
    },
    {
      number: "II",
      icon: Thermometer,
      title: "Pasteurización",
      description: "Control térmico preciso para eliminar patógenos y garantizar un ambiente ideal.",
      image: proceso2,
    },
    {
      number: "III",
      icon: Sprout,
      title: "Siembra",
      description: "Inoculación del micelio en condiciones asépticas y controladas.",
      image: proceso3,
    },
    {
      number: "IV",
      icon: Eye,
      title: "Incubación",
      description: "Monitoreo constante durante el desarrollo del micelio.",
      image: proceso4,
    },
    {
      number: "V",
      icon: Flower2,
      title: "Inducción",
      description: "Ajuste de condiciones ambientales para estimular la fructificación.",
      image: proceso5,
    },
    {
      number: "VI",
      icon: Scissors,
      title: "Cosecha",
      description: "Recolección manual en el punto óptimo de maduración.",
      image: proceso6,
    },
    {
      number: "VII",
      icon: Package,
      title: "Empaque",
      description: "Empaque y distribución bajo estrictas normas de calidad e higiene.",
      image: proceso7,
    },
  ];

  return (
    <section id="proceso-productivo" className="py-20 md:py-24 lg:py-28 bg-gradient-to-br from-white via-beige/30 to-white relative overflow-hidden scroll-mt-24">
      {/* Decorative Background */}
        <div className="absolute top-0 -left-20 z-0 opacity-6">
          <img 
            src={hongos5} 
            alt="" 
            className="w-[600px] h-[600px] lg:w-[700px] lg:h-[700px] object-contain transform "
          />
        </div>
        <div className="absolute -bottom-10 -right-20 z-0 opacity-6">
          <img 
            src={hongos8} 
            alt="" 
            className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-contain transform "
          />
        </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Excelencia en Cada Paso
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                  Proceso <span className="font-accent italic text-primary">Productivo.</span>
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Process Steps - Editorial Layout */}
          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <AnimateOnScroll 
                key={index} 
                animation={index % 2 === 0 ? "fade-right" : "fade-left"} 
                delay={50}
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 lg:p-10 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-500 group">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                          <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="font-heading text-5xl lg:text-6xl font-bold text-primary/15 group-hover:text-primary/25 transition-colors duration-300">
                          {step.number}
                        </span>
                      </div>
                      
                      <h3 className="font-heading text-2xl lg:text-3xl text-charcoal font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="font-body text-base lg:text-lg text-charcoal/70 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Step indicator */}
                      <div className="mt-6 pt-6 border-t border-primary/10">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-1.5 bg-primary/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700 group-hover:w-full"
                              style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                            />
                          </div>
                          <span className="font-heading text-sm text-primary/60 font-semibold">
                            {index + 1}/{processSteps.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative group/img">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity duration-500" />
                        
                        {/* Floating step number on image */}
                        <div className="absolute top-6 left-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="font-heading text-2xl font-bold text-primary">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className={`absolute -z-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl transition-all duration-700 group-hover/img:bg-primary/20 ${
                        index % 2 === 0 ? '-bottom-12 -right-12' : '-top-12 -left-12'
                      }`} />
                    </div>
                  </div>

                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Final CTA */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="mt-20 lg:mt-24 text-center max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10">
                <h3 className="font-heading text-2xl lg:text-3xl text-white font-bold mb-4">
                  Tecnología de Punta y Procesos Controlados
                </h3>
                <p className="font-body text-white/90 text-base lg:text-lg leading-relaxed">
                  Nuestras instalaciones de última generación garantizan la máxima calidad en cada etapa del proceso productivo, 
                  combinando innovación tecnológica con el compromiso de excelencia que nos caracteriza.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default ProcesoProductivoSection;
