import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import EmpresaSection from "@/components/nosotros/EmpresaSection";
import MisionVisionSection from "@/components/nosotros/MisionVisionSection";
import CertificacionesSection from "@/components/nosotros/CertificacionesSection";
import ResponsabilidadSection from "@/components/nosotros/ResponsabilidadSection";
import CodigoEticaSection from "@/components/nosotros/CodigoEticaSection";
import PoliticaSeguridadSection from "@/components/nosotros/PoliticaSeguridadSection";
import empresa3 from "@/assets/unsplash/mushroom8.jpg";

const Nosotros = () => {
  return (
    <Layout>
      {/* Hero Section con Imagen de Fondo */}
      <section className="relative h-[580px] overflow-hidden pt-24 lg:pt-28">
        {/* Background Image - Full Height including Navbar */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${empresa3})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/20" />
        
        {/* Ondas Blancas Superiores */}
        <div className="absolute top-0 left-0 right-0 h-32">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              fill="white"
            />
          </svg>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center pb-20">
          <div className="w-full px-4 md:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              
              <AnimateOnScroll animation="fade-up">
                {/* Simple Top Line - Centered */}
                <div className="mb-6 flex justify-center">
                  <div className="h-1 w-44 bg-white" />
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4">
                  Nosotros
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <p className="font-accent italic text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto">
                  Más de tres décadas cultivando champiñones de la más alta calidad
                </p>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      <EmpresaSection />
      <MisionVisionSection />
      <CertificacionesSection />
      <ResponsabilidadSection />
      <CodigoEticaSection />
      <PoliticaSeguridadSection />
    </Layout>
  );
};

export default Nosotros;
