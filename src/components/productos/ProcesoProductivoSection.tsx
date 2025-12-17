import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Factory, Thermometer, Sprout, Eye, Flower2, Scissors, Package } from "lucide-react";
import hongos3 from "@/assets/hongos9.webp";
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
    <section id="procesos" className="py-16 md:py-20 lg:py-24 bg-white relative overflow-y-hidden">
      
      {/* Hongo decorativo sutil */}
      <div className="absolute -bottom-10 -left-20 z-0 opacity-3 pointer-events-none">
        <img 
          src={hongos3} 
          alt="" 
          className="w-[400px] h-[400px] object-contain"
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header más compacto */}
          <div className="text-center mb-12 lg:mb-16">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-2">
                <p className="text-primary/70 text-sm tracking-wide font-accent italic">
                  Excelencia en Cada Paso
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold leading-tight">
                  Proceso <span className="font-accent italic text-primary">Productivo.</span>
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Process Steps - Más compacto */}
          <div className="space-y-10 lg:space-y-12">
            {processSteps.map((step, index) => (
              <AnimateOnScroll 
                key={index} 
                animation={index % 2 === 0 ? "fade-right" : "fade-left"} 
                delay={30}
              >
                <div className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Content más compacto */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-cream/20 border border-charcoal/5 rounded-2xl p-6 lg:p-8 hover:bg-cream/40 hover:border-primary/15 hover:shadow-lg transition-all duration-500 group">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                          <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="font-heading text-4xl lg:text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                          {step.number}
                        </span>
                      </div>
                      
                      <h3 className="font-heading text-xl lg:text-2xl text-charcoal font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm lg:text-base text-charcoal/60 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Step indicator más pequeño */}
                      <div className="mt-4 pt-4 border-t border-primary/10">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1 bg-primary/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500 group-hover:w-full"
                              style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                            />
                          </div>
                          <span className="font-heading text-xs text-primary/50 font-medium">
                            {index + 1}/{processSteps.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image con bordes orgánicos irregulares */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative group/img transition-transform duration-700 hover:scale-105">
                      {/* Contenedor con forma orgánica irregular */}
                      <div className="relative aspect-[4/3]">
                        {/* Fondo decorativo para crear el efecto de borde orgánico */}
                        <div className="absolute -inset-3 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-[40%_60%_70%_30%_/_40%_50%_60%_70%] transform rotate-1" />
                        
                        {/* Contenedor principal de la imagen con clip-path orgánico */}
                        <div className="relative w-full h-full overflow-hidden rounded-[35%_65%_65%_35%_/_45%_55%_45%_55%] shadow-lg border border-charcoal/5">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/15 via-transparent to-primary/10 group-hover/img:from-charcoal/10 transition-colors duration-500" />
                          
                          {/* Floating step number on image - adaptado a la forma */}
                          <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] flex items-center justify-center shadow-md">
                            <span className="font-heading text-lg font-bold text-primary">
                              {step.number}
                            </span>
                          </div>
                        </div>
                        
                        {/* Elementos decorativos para acentuar la forma */}
                        <div className={`absolute -z-10 w-56 h-56 bg-primary/5 rounded-full blur-xl transition-all duration-500 group-hover/img:bg-primary/10 ${
                          index % 2 === 0 ? '-bottom-6 -right-6' : '-top-6 -left-6'
                        }`} />
                      </div>
                    </div>
                  </div>

                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcesoProductivoSection;