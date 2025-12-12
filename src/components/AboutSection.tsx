import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Check, Building2, TrendingUp, Award } from "lucide-react";
import packingImage from "@/assets/VII.-Packing2.jpg";
import empresa3 from "@/assets/Empresa3.jpg";
import hongos1 from "@/assets/hongos1.png";

const AboutSection = () => {
  const bulletPoints = [
    { icon: TrendingUp, text: "Producción continua todo el año" },
    { icon: Award, text: "Procesos certificados y trazabilidad" },
    { icon: Building2, text: "Operación sustentable" }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Image with Strong Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${empresa3})` }}
      />
      
      {/* Beige overlay - darker but edges visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige/90 via-beige/80 to-beige/85" />
      <div className="absolute inset-0 bg-gradient-to-tr from-beige75 via-transparent to-beige/60" />
      
      {/* Decorative Logo - Top right corner, blue tinted, LARGER */}
      <div className="absolute top-6 right-6 lg:top-8 lg:right-8 z-0">
        <img 
          src={hongos1} 
          alt="" 
          className="w-56 h-56 lg:w-80 lg:h-80 object-contain opacity-30"
          style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(28%) saturate(1392%) hue-rotate(165deg) brightness(92%) contrast(89%)' }}
        />
      </div>

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-[1600px] mx-auto">
          {/* Image - Left Side - Takes 5/8 width */}
          <AnimateOnScroll animation="fade-right" delay={100} className="lg:col-span-7">
            <div className="relative group">
              {/* Main Image - Rectangular with more width */}
              <div className="relative aspect-[12/7] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-charcoal/10">
                <img
                  src={packingImage}
                  alt="Proceso de empaque Abrantes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
              
              {/* Modern corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-primary/20 rounded-2xl -z-10 group-hover:border-primary/40 transition-colors duration-500" />
            </div>
          </AnimateOnScroll>

          {/* Text Content - Right Side - Takes 3/8 width */}
          <div className="space-y-6 lg:col-span-5">
            <AnimateOnScroll animation="fade-up">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Building2 className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                  Sobre Abrantes
                </h2>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="space-y-5 font-body text-base md:text-lg text-charcoal/85 leading-relaxed">
                <p>
                  <span className="font-semibold text-charcoal">Abrantes</span> es una empresa chilena dedicada al <strong>cultivo, producción y distribución</strong> de champiñones frescos, 
                  siguiendo estándares estrictos de <strong>calidad, inocuidad y sustentabilidad</strong>.
                </p>
                <p>
                  Pertenecemos al <span className="font-bold text-primary">Grupo Empresas Sutil</span>, asegurando una gestión responsable, 
                  cadena de valor sólida y <strong>compromiso permanente</strong> con la sustentabilidad.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Bullet Points - Same size as text */}
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="space-y-3 mt-6">
                {bulletPoints.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary" strokeWidth={2.5} />
                    </div>
                    <p className="font-body text-charcoal/90 font-medium text-base md:text-lg">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
