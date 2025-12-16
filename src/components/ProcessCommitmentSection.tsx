import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import mushroomBg from "@/assets/unsplash/mushroom1.jpg";
import abrantesLogo from "@/assets/abrantes_logo2.png";

const ProcessCommitmentSection = () => {
  return (
    <section className="relative min-h-[400px] lg:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 md:bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${mushroomBg})` }}
      />
      
      {/* Overlay suave - más oscuro para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/50 to-black/40" />

      {/* Content Container */}
      <div className="relative h-full min-h-[400px] lg:min-h-[600px] w-full px-4 md:px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto h-full flex items-center">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-20">
            
            {/* Left Side - Logo */}
            <AnimateOnScroll animation="fade-right">
              <div className="flex justify-center lg:justify-start">
                <img 
                  src={abrantesLogo} 
                  alt="Abrantes Premium Design" 
                  className="w-64 md:w-80 lg:w-96 h-auto opacity-90"
                />
              </div>
            </AnimateOnScroll>

            {/* Right Side - Content */}
            <div className="space-y-8 text-white">
              
              <AnimateOnScroll animation="fade-left">
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Enfoque en proceso y consistencia
                  </h2>
                  
                  <p className="font-heading text-xl md:text-2xl text-white/90 italic">
                    Calidad que no depende del azar.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay={100}>
                <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                  En Abrantes trabajamos con <strong>procesos controlados</strong> y <span className="font-accent italic">producción continua</span>, garantizando frescura, seguridad y un estándar constante en cada entrega.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay={200}>
                <Link 
                  to="/productos"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/80 text-white font-heading text-base hover:bg-white hover:text-charcoal transition-all duration-300 group"
                >
                  <span>Nuestros productos</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </Link>
              </AnimateOnScroll>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessCommitmentSection;
