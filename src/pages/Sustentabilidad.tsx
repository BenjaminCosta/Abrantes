import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Play, Download } from "lucide-react";
import { Link } from "react-router-dom";
import sustentabilidadImg from "@/assets/unsplash/mushroooms6.jpg";
import sustainability from "@/assets/sustainability.jpg";
import empresa2 from "@/assets/Empresa2.jpg";
import hongos4 from "@/assets/hongos4.png";
import video1 from "@/assets/unsplash/mushroom-faci3.jpg";
import video2 from "@/assets/unsplash/farm.jpg";
// Certificados Carbono Neutral
import cert2023_1 from "@/assets/sustentanbilidad/6410_Sello1_Huella_2023-300x300.png";
import cert2023_2 from "@/assets/sustentanbilidad/541_Sello2_Huella_2023-300x300.png";
import cert2023_5 from "@/assets/sustentanbilidad/5618_Sello5_Huella_2023-300x300.png";
import cert2023_6 from "@/assets/sustentanbilidad/132_Sello6_Huella_2023-300x300.png";
import cert2022_1 from "@/assets/sustentanbilidad/6370_Sello1_Huella_2022-300x300.png";

const Sustentabilidad = () => {
  return (
    <Layout>
      {/* Hero Section con Imagen de Fondo */}
      <section className="relative h-[580px] overflow-hidden pt-24 lg:pt-28">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sustentabilidadImg})` }}
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
                {/* Simple Top Line */}
                <div className="mb-6 flex justify-center">
                  <div className="h-1 w-44 bg-white" />
                </div>

                <h1 className="font-heading text-4xl md:text-5xl font-semibold uppercase tracking-wide lg:text-6xl xl:text-7xl text-white mb-4">
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

      {/* Indicadores que Transforman - Combined Section */}
      <section className="py-32 md:py-40 lg:py-48 bg-white relative">
        <div className="w-full px-4 md:px-6 lg:px-12 relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-16 lg:mb-20">
                <p className="font-accent italic text-primary/70 text-sm tracking-wide mb-4">Indicadores que Transforman</p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal uppercase tracking-wide font-bold mb-4">
                  Logros y desafíos
                </h2>
              </div>
            </AnimateOnScroll>

            {/* Two Column Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* 2025 Column */}
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="space-y-6">
                  
                  {/* Video 2025 */}
                  <div className="relative group">
                    <div className="aspect-video overflow-hidden shadow-lg bg-white">
                      <div 
                        className="w-full h-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${video1})` }}
                      >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/50 transition-all duration-300" />
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer">
                            <Play className="w-8 h-8 text-primary ml-1" strokeWidth={2} fill="currentColor" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal/80">
                          <p className="font-heading text-white text-sm">03:52</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text 2025 */}
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl text-charcoal font-bold mb-4">
                      Año <span className="font-accent italic text-primary">2025</span>
                    </h3>
                    <p className="text-base text-charcoal/75 leading-relaxed">
                      Presentamos nuestros <span className="text-charcoal font-medium">indicadores de impacto</span> del año 2025, 
                      mostrando avances concretos en sustentabilidad, eficiencia operativa y compromiso social.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* 2024 Column */}
              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="space-y-6">
                  
                  {/* Video 2024 */}
                  <div className="relative group">
                    <div className="aspect-video overflow-hidden shadow-lg bg-white">
                      <div 
                        className="w-full h-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${video2})` }}
                      >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/40 transition-all duration-300" />
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer">
                            <Play className="w-8 h-8 text-primary ml-1" strokeWidth={2} fill="currentColor" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal/80">
                          <p className="font-heading text-white text-sm">03:15</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text 2024 */}
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl text-charcoal font-bold mb-4">
                      Año <span className="font-accent italic text-primary">2024</span>
                    </h3>
                    <p className="text-base text-charcoal/75 leading-relaxed">
                      Revisamos los <span className="text-charcoal font-medium">logros alcanzados</span> durante el año 2024, 
                      un periodo marcado por avances significativos en nuestras metas de sustentabilidad.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Reportes de Sustentabilidad Section */}
      <section className="py-12 md:py-16 bg-white relative overflow-y-hidden">
        

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-20 lg:mb-24">
                <p className="font-accent italic text-primary/70 text-sm tracking-wide mb-4">Transparencia y Compromiso</p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal uppercase tracking-wide font-bold mb-6">
                  Reportes de <span className="text-primary">Sustentabilidad</span>
                </h2>
                <p className="text-lg text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
                  Anualmente, Champiñones Abrantes presenta los resultados de su gestión productiva, social y medioambiental, 
                  aludiendo al desempeño que la compañía tuvo durante el año inmediatamente anterior, por medio de sus Reportes de Sustentabilidad.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Reports Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[2020, 2021, 2022, 2023].map((year, index) => (
                <AnimateOnScroll key={year} animation="fade-up" delay={index * 100}>
                  <a
                    href={`#reporte-${year}`}
                    className="group block bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-charcoal/5"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <Download className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="font-heading text-2xl text-charcoal font-bold mb-2">
                          Año {year}
                        </h3>
                        <p className="text-sm text-charcoal/60 mb-4">
                          Reporte de Sustentabilidad
                        </p>
                        <div className="inline-flex items-center gap-2 text-primary font-heading text-sm">
                          <span>Ver Reporte</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </AnimateOnScroll>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Carbono Neutral Section */}
      <section className="py-32 md:py-40 lg:py-48 bg-white relative">
        
        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12 lg:mb-16">
                <p className="font-accent italic text-primary/70 text-sm tracking-wide mb-4">Compromiso Climático</p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal uppercase tracking-wide font-bold mb-6">
                  Carbono Neutral
                </h2>
                <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-4">
                  Champiñones Abrantes ha reducido a cero sus emisiones de CO₂e de acuerdo a los requerimientos del CarbonNeutral Protocol.
                </p>
                <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                  Además de los esfuerzos realizados por disminuir la emisión de gases de efecto invernadero en la operación, 
                  el remanente de emisiones fue neutralizado mediante la adquisición de créditos verificados de Carbono 
                  desde un portafolio de proyectos basados en la naturaleza.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Certificates Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {[
                { img: cert2023_1, year: "2023", label: "Certificación 1" },
                { img: cert2023_2, year: "2023", label: "Certificación 2" },
                { img: cert2022_1, year: "2022", label: "Huella 2022" },
                { img: cert2023_5, year: "2023", label: "Certificación 5" },
                { img: cert2023_6, year: "2023", label: "Certificación 6" },
              ].map((cert, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 80}>
                  <div className="group">
                    <div className="bg-white  p-4 border border-charcoal/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="aspect-square bg-beige/30 overflow-hidden mb-3">
                        <img
                          src={cert.img}
                          alt={`Certificación Carbono Neutral ${cert.year}`}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <p className="font-heading text-sm text-charcoal text-center">
                        Huella {cert.year}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Download Links */}
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#certificacion-2020"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary hover:text-white border border-primary font-sans text-sm tracking-wide hover:bg-primary hover:shadow-lg transition-all duration-300 group"
                >
                  <Download className="w-4 h-4" strokeWidth={2.5} />
                  <span>Certificación 2020</span>
                </a>
                <a
                  href="#certificacion-2021"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal border border-charcoal font-sans text-sm tracking-wide hover:bg-charcoal hover:text-white hover:shadow-lg transition-all duration-300 group shadow-sm"
                >
                  <Download className="w-4 h-4" strokeWidth={2.5} />
                  <span>Certificación 2021</span>
                </a>
                <a
                  href="#certificacion-2022"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary hover:text-white border border-primary font-sans text-sm tracking-wide hover:bg-primary hover:shadow-lg transition-all duration-300 group"
                >
                  <Download className="w-4 h-4" strokeWidth={2.5} />
                  <span>Certificación 2022</span>
                </a>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Comunidad Section - Split Hero */}
      <section className="min-h-[50vh] lg:min-h-[60vh] flex flex-col lg:flex-row">
        
        {/* Video Column - Left */}
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-auto relative group">
          <div 
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${empresa2})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/40 transition-all duration-300" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer">
                <Play className="w-10 h-10 text-primary ml-1" strokeWidth={2} fill="currentColor" />
              </div>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-charcoal/80">
              <p className="font-heading text-white text-sm">03:39</p>
            </div>
          </div>
        </div>

        {/* Text Column - Right */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center py-16 lg:py-20 px-6 md:px-12 lg:px-16">
          <AnimateOnScroll animation="fade-left">
            <div className="max-w-xl">
              <p className="font-accent italic text-primary/70 text-sm tracking-wide mb-6">Impacto Social</p>
              
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal uppercase tracking-wide font-bold mb-8 leading-tight">
                Comunidad
              </h2>
              
              <div className="space-y-6 text-charcoal/80 text-lg text-justify leading-relaxed mb-10">
                <p>
                  Nuestro compromiso va más allá de la producción. <span className="text-charcoal font-medium">Trabajamos activamente</span> 
                  con las comunidades locales, generando empleo digno y contribuyendo al desarrollo sostenible de la región.
                </p>
                <p className="text-charcoal/70">
                  A través de programas de educación, capacitación y apoyo comunitario, buscamos crear un impacto 
                  positivo duradero en las vidas de quienes nos rodean.
                </p>
              </div>

              <Link
                to="/nosotros#responsabilidad-social"
                className="inline-flex items-center gap-3 px-10 py-4 border-2 border-charcoal text-charcoal font-sans text-base tracking-wide hover:bg-charcoal hover:text-white transition-all duration-300 group"
              >
                <span>Nuestros productos</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

      </section>

      {/* Energía Limpia Section - Split Hero */}
      <section className="min-h-[50vh] lg:min-h-[60vh] flex flex-col lg:flex-row">
        
        {/* Text Column - Left */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center py-16 lg:py-20 px-6 md:px-12 lg:px-16 order-2 lg:order-1">
          <AnimateOnScroll animation="fade-right">
            <div className="max-w-xl">
              <p className="font-accent italic text-primary/70 text-sm tracking-wide mb-6">Energía Renovable</p>
              
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal uppercase tracking-wide font-bold mb-8 leading-tight">
                Energía Limpia
              </h2>
              
              <div className="space-y-6 text-charcoal/80 text-lg text-justify leading-relaxed mb-10">
                <p>
                  Hemos invertido en <span className="text-charcoal font-medium">tecnología de energía renovable</span> para 
                  reducir nuestra dependencia de combustibles fósiles y minimizar nuestra huella de carbono.
                </p>
                <p className="text-charcoal/70">
                  Nuestro compromiso con la energía limpia no solo beneficia al medio ambiente, sino que también 
                  nos permite operar de manera más eficiente y sostenible a largo plazo.
                </p>
              </div>

              <Link
                to="/nosotros#responsabilidad-social"
                className="inline-flex items-center gap-3 px-10 py-4 border-2 border-charcoal text-charcoal font-sans text-base tracking-wide hover:bg-charcoal hover:text-white transition-all duration-300 group"
              >
                <span>Nuestros productos</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Video Column - Right */}
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-auto relative group order-1 lg:order-2">
          <div 
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${sustainability})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/50 transition-all duration-300" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer">
                <Play className="w-10 h-10 text-primary ml-1" strokeWidth={2} fill="currentColor" />
              </div>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-charcoal/80">
              <p className="font-heading text-white text-sm">02:45</p>
            </div>
          </div>
        </div>

      </section>
      
    </Layout>
  );
};

export default Sustentabilidad;
