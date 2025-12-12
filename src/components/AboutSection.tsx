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
      
      {/* Decorative Logo - Top right corner, blue tinted, MORE POSITIONED */}
      <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 z-0">
        <img 
          src={hongos1} 
          alt="" 
          className="w-64 h-64 lg:w-96 lg:h-96 object-contain opacity-25"
          style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(28%) saturate(1392%) hue-rotate(165deg) brightness(92%) contrast(89%)' }}
        />
      </div>
      
      {/* Elegant gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-[1600px] mx-auto">
          {/* Image - Left Side - Reduced width to 5/12 */}
          <AnimateOnScroll animation="fade-right" delay={100} className="lg:col-span-6">
            <div className="relative group">
              {/* Main Image - More compact with elegant shadow */}
              <div className="relative aspect-[6/4] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
                <img
                  src={packingImage}
                  alt="Proceso de empaque Abrantes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/30 via-transparent to-primary/10" />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transform transition-all duration-1000" />
              </div>

              
              {/* Decorative floating elements */}
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tl from-beige/40 to-transparent rounded-full blur-2xl -z-10" />
              
              {/* Modern corner accent with animation */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-2 border-primary/30 rounded-3xl -z-10 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-2 border-accent/20 rounded-2xl -z-10 group-hover:border-accent/40 group-hover:scale-110 transition-all duration-500" />
            </div>
          </AnimateOnScroll>

          {/* Text Content - Right Side - Expanded to 7/12 */}
          <div className="space-y-6 lg:col-span-6 lg:pl-8">
            <AnimateOnScroll animation="fade-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3.5 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl shadow-lg border border-primary/10">
                  <Building2 className="w-8 h-8 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-primary/60 text-sm font-semibold tracking-wider uppercase mb-1">Nuestra Empresa</p>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
                    Sobre Abrantes
                  </h2>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="space-y-5 font-body text-base md:text-lg text-charcoal/85 leading-relaxed bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                <p className="relative pl-4 border-l-4 border-primary/30">
                  <span className="font-semibold text-charcoal">Abrantes</span> es una empresa chilena dedicada al <strong>cultivo, producción y distribución</strong> de champiñones frescos, 
                  siguiendo estándares estrictos de <strong>calidad, inocuidad y sustentabilidad</strong>.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Bullet Points - Enhanced design */}
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="space-y-3 mt-8">
                {bulletPoints.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 py-3.5 px-4 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60 hover:border-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:from-primary/25 group-hover:to-primary/10 group-hover:scale-110 transition-all duration-300 shadow-md">
                      <item.icon className="w-5 h-5 text-primary" strokeWidth={2.5} />
                    </div>
                    <p className="font-body text-charcoal font-semibold text-base md:text-lg">
                      {item.text}
                    </p>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Check className="w-5 h-5 text-primary" strokeWidth={2.5} />
                    </div>
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
