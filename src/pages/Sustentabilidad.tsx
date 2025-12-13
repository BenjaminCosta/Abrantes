import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Leaf, Droplets, Recycle, Sun, TreePine, Factory, Play } from "lucide-react";
import sustentabilidadImg from "@/assets/sustentabilidad.jpg";
import compost from "@/assets/compost.jpg";
import empresa2 from "@/assets/Empresa2.jpg";

const initiatives = [
  {
    icon: Droplets,
    title: "Gestión del Agua",
    description: "Implementamos sistemas de riego por goteo y reciclaje de aguas industriales, reduciendo nuestro consumo hídrico en un 40%.",
  },
  {
    icon: Recycle,
    title: "Economía Circular",
    description: "El sustrato utilizado en el cultivo se transforma en compost de alta calidad para la agricultura local.",
  },
  {
    icon: Sun,
    title: "Energía Renovable",
    description: "Transición progresiva hacia paneles solares y otras fuentes de energía limpia en nuestras instalaciones.",
  },
  {
    icon: Leaf,
    title: "Reducción de Emisiones",
    description: "Medimos y reducimos continuamente nuestra huella de carbono con metas anuales de mejora.",
  },
  {
    icon: TreePine,
    title: "Biodiversidad",
    description: "Mantenemos áreas verdes y corredores biológicos en nuestras instalaciones.",
  },
  {
    icon: Factory,
    title: "Producción Limpia",
    description: "Procesos optimizados para minimizar residuos y maximizar eficiencia.",
  },
];

const Sustentabilidad = () => {
  return (
    <Layout>
      {/* Hero Section con Imagen de Fondo */}
      <section className="relative h-[580px] overflow-hidden -mt-20">
        {/* Background Image - Full Height including Navbar */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sustentabilidadImg})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center pt-20">
          <div className="w-full px-4 md:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              
              <AnimateOnScroll animation="fade-up">
                {/* Simple Top Line - Centered */}
                <div className="mb-6 flex justify-center">
                  <div className="h-1 w-44 bg-white" />
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4">
                  Sustentabilidad
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <p className="font-accent italic text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto">
                  Comprometidos con el medio ambiente y las generaciones futuras
                </p>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Intro with Image */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left - Text */}
            <AnimateOnScroll animation="fade-up">
              <div>
                <div className="h-1 w-16 bg-primary mb-6" />
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                  Nuestro Compromiso Ambiental
                </h2>
                <div className="space-y-4 font-body text-charcoal/70 text-lg leading-relaxed">
                  <p>
                    En Abrantes entendemos que la sustentabilidad no es una opción, sino una responsabilidad. 
                    Trabajamos día a día para reducir nuestro impacto ambiental mientras mantenemos los más 
                    altos estándares de calidad en nuestros productos.
                  </p>
                  <p>
                    Desde la gestión responsable del agua hasta la transformación de nuestros residuos en 
                    recursos valiosos, cada decisión que tomamos refleja nuestro compromiso con el planeta 
                    y las generaciones futuras.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right - Image */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                <img 
                  src={compost} 
                  alt="Sustentabilidad Abrantes" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Video Section 1 - Water Management */}
      <section className="section-padding bg-beige/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Video Mockup */}
            <AnimateOnScroll animation="fade-up">
              <div className="relative aspect-video rounded-sm overflow-hidden shadow-xl bg-charcoal/90 group cursor-pointer">
                <img 
                  src={empresa2} 
                  alt="Video - Gestión del Agua" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-heading text-white text-lg">Gestión Responsable del Agua</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Text */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Droplets className="w-6 h-6 text-primary" />
                  <h3 className="font-heading text-2xl md:text-3xl text-charcoal">
                    Gestión del Agua
                  </h3>
                </div>
                <p className="font-body text-charcoal/70 text-lg leading-relaxed mb-6">
                  Implementamos sistemas de riego por goteo y reciclaje de aguas industriales, 
                  reduciendo nuestro consumo hídrico en un 40%. Cada gota cuenta en nuestro 
                  compromiso con la conservación de este recurso vital.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="font-heading text-4xl text-primary">40%</p>
                    <p className="font-body text-sm text-charcoal/60">Reducción en consumo</p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl text-primary">100%</p>
                    <p className="font-body text-sm text-charcoal/60">Agua reciclada</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Video Section 2 - Circular Economy (Reversed Layout) */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text */}
            <AnimateOnScroll animation="fade-up" className="lg:order-1">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Recycle className="w-6 h-6 text-primary" />
                  <h3 className="font-heading text-2xl md:text-3xl text-charcoal">
                    Economía Circular
                  </h3>
                </div>
                <p className="font-body text-charcoal/70 text-lg leading-relaxed mb-6">
                  El sustrato utilizado en el cultivo se transforma en compost de alta calidad 
                  para la agricultura local. Ningún residuo se desperdicia, todo se convierte 
                  en un recurso valioso para la comunidad agrícola.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="font-heading text-4xl text-primary">100%</p>
                    <p className="font-body text-sm text-charcoal/60">Sustrato reciclado</p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl text-primary">0</p>
                    <p className="font-body text-sm text-charcoal/60">Residuos a vertedero</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Video Mockup */}
            <AnimateOnScroll animation="fade-up" delay={100} className="lg:order-2">
              <div className="relative aspect-video rounded-sm overflow-hidden shadow-xl bg-charcoal/90 group cursor-pointer">
                <img 
                  src={compost} 
                  alt="Video - Economía Circular" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-heading text-white text-lg">De Residuo a Recurso</p>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="section-padding bg-beige/20">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <div className="h-1 w-16 bg-primary mx-auto mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-4">
                Más Iniciativas Sustentables
              </h2>
              <p className="font-accent italic text-lg text-charcoal/70 max-w-2xl mx-auto">
                Cada acción cuenta en nuestro camino hacia un futuro más verde
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-charcoal mb-3">Energía Renovable</h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  Transición progresiva hacia paneles solares y energía limpia
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={80}>
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-charcoal mb-3">Huella de Carbono</h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  Medición y reducción continua con metas anuales de mejora
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={160}>
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-charcoal mb-3">Biodiversidad</h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  Áreas verdes y corredores biológicos en nuestras instalaciones
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={240}>
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Factory className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-charcoal mb-3">Producción Limpia</h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  Procesos optimizados para minimizar residuos y maximizar eficiencia
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sustentabilidad;
