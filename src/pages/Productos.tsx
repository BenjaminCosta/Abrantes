import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ChampinonesSection from "@/components/productos/ChampinonesSection";
import ProcesoProductivoSection from "@/components/productos/ProcesoProductivoSection";
import InformacionNutricionalSection from "@/components/productos/InformacionNutricionalSection";
import RecetasSection from "@/components/productos/RecetasSection";
import SustratoSection from "@/components/productos/SustratoSection";
import productosImg from "@/assets/unsplash/muchroom7.jpg";

const Productos = () => {
  return (
    <Layout>
      {/* Hero Section con Imagen de Fondo */}
      <section className="relative h-[580px] overflow-hidden pt-24 lg:pt-28">
        {/* Background Image - Full Height including Navbar */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${productosImg})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/20" />
        
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
                  Nuestros Productos
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <p className="font-accent italic text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto">
                  Frescura y calidad premium en cada variedad
                </p>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* CHAMPIÑONES */}
      <ChampinonesSection />
      <ProcesoProductivoSection />
      <InformacionNutricionalSection />
      <RecetasSection />
      
      {/* SUSTRATO VEGETAL ORGÁNICO */}
      <SustratoSection />
    </Layout>
  );
};

export default Productos;
