import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Leaf, Sprout, Sun, Play, FileText, Download, Award } from "lucide-react";
import sustentabilidadImg from "@/assets/hero-cultivation.jpg";
import sustainability from "@/assets/sustainability.jpg";
import empresa2 from "@/assets/Empresa2.jpg";
import hongos4 from "@/assets/hongos4.png";
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
      <section className="relative h-[680px] overflow-hidden pt-24 lg:pt-28">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sustentabilidadImg})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full px-4 md:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              
              <AnimateOnScroll animation="fade-up">
                {/* Simple Top Line */}
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

      {/* Indicadores que Transforman 2025 - Clean Background */}
      <section className="py-32 md:py-40 lg:py-48 bg-white relative">
        <div className="w-full px-4 md:px-6 lg:px-12 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Text - Left */}
              <AnimateOnScroll animation="fade-right">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-6 h-6 text-primary" strokeWidth={2} />
                    <p className="font-accent italic text-primary/70 text-sm tracking-wide">Indicadores que Transforman</p>
                  </div>
                  <h3 className="font-heading text-4xl md:text-5xl text-charcoal font-bold mb-6">
                    Logros y desafíos <span className="font-accent italic text-primary">2025</span>
                  </h3>
                  <div className="space-y-4 text-charcoal/80 text-lg leading-relaxed">
                    <p>
                      Presentamos nuestros <span className="text-charcoal">indicadores de impacto</span> del año 2025, 
                      mostrando avances concretos en sustentabilidad, eficiencia operativa y compromiso social.
                    </p>
                    <p className="text-charcoal/70">
                      Cada métrica refleja nuestro trabajo constante por mejorar, innovar y generar valor 
                      compartido con todas nuestras partes interesadas.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Video - Right */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div className="relative group">
                  <div className="aspect-video overflow-hidden shadow-lg bg-white">
                    <div 
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${sustainability})` }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/50 transition-all duration-300" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer">
                          <Play className="w-10 h-10 text-primary ml-1" strokeWidth={2} fill="currentColor" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal/80 rounded-lg">
                        <p className="font-heading text-white text-sm">03:52</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Indicadores que Transforman 2024 - Clean Beige Background */}
      <section className="py-32 md:py-40 lg:py-48 bg-beige/30 relative">
        <div className="w-full px-4 md:px-6 lg:px-12 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Video - Left */}
              <AnimateOnScroll animation="fade-right">
                <div className="relative group">
                  <div className="aspect-video overflow-hidden shadow-lg bg-white">
                    <div 
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${empresa2})` }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/40 transition-all duration-300" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer">
                          <Play className="w-10 h-10 text-primary ml-1" strokeWidth={2} fill="currentColor" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal/80 rounded-lg">
                        <p className="font-heading text-white text-sm">03:15</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Text - Right */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-6 h-6 text-primary" strokeWidth={2} />
                    <p className="font-accent italic text-primary/70 text-sm tracking-wide">Indicadores que Transforman</p>
                  </div>
                  <h3 className="font-heading text-4xl md:text-5xl text-charcoal font-bold mb-6">
                    Logros y desafíos <span className="font-accent italic text-primary">2024</span>
                  </h3>
                  <div className="space-y-4 text-charcoal/80 text-lg leading-relaxed">
                    <p>
                      Revisamos los <span className="text-charcoal">logros alcanzados</span> durante el año 2024, 
                      un periodo marcado por avances significativos en nuestras metas de sustentabilidad.
                    </p>
                    <p className="text-charcoal/70">
                      Los desafíos enfrentados nos permitieron fortalecer nuestro compromiso con la mejora continua 
                      y la innovación responsable.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Reportes de Sustentabilidad Section */}
      <section className="py-32 md:py-40 lg:py-48 bg-white relative">
        
        {/* Hongo decorativo sutil - z-0 para que no se corte */}
        <div className="absolute -bottom-10 -right-10 opacity-3 pointer-events-none z-0">
          <img src={hongos4} alt="" className="w-[400px] h-[400px] object-contain" />
        </div>

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-20 lg:mb-24">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <FileText className="w-6 h-6 text-primary" strokeWidth={2} />
                  <p className="font-accent italic text-primary/70 text-sm tracking-wide">Transparencia y Compromiso</p>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold mb-6">
                  Reportes de <span className="font-accent italic text-primary">Sustentabilidad</span>
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
                    className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-charcoal/5"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
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
      <section className="py-32 md:py-40 lg:py-48 bg-cream relative">
        
        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12 lg:mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Leaf className="w-7 h-7 text-primary" strokeWidth={2} />
                  <p className="font-accent italic text-primary/70 text-sm tracking-wide">Compromiso Climático</p>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold mb-6">
                  Carbono <span className="font-accent italic text-primary">Neutral</span>
                </h2>
                <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-4">
                  Champiñones Abrantes ha reducido a cero sus emisiones de CO₂e de acuerdo a los requerimientos del CarbonNeutral Protocol.
                </p>
                <p className="text-base text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
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
                    <div className="bg-white rounded-2xl p-4 border border-charcoal/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-sans text-sm tracking-wide hover:bg-primary/90 hover:shadow-lg transition-all duration-300 group"
                >
                  <Download className="w-4 h-4" strokeWidth={2.5} />
                  <span>Certificación 2020</span>
                </a>
                <a
                  href="#certificacion-2021"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal border border-charcoal/20 hover:border-charcoal/40 font-sans text-sm tracking-wide hover:bg-white/90 hover:shadow-lg transition-all duration-300 group shadow-sm"
                >
                  <Download className="w-4 h-4" strokeWidth={2.5} />
                  <span>Certificación 2021</span>
                </a>
                <a
                  href="#certificacion-2022"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-sans text-sm tracking-wide hover:bg-primary/90 hover:shadow-lg transition-all duration-300 group"
                >
                  <Download className="w-4 h-4" strokeWidth={2.5} />
                  <span>Certificación 2022</span>
                </a>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Comunidad Section */}
      <section className="py-32 md:py-40 lg:py-48 bg-white relative">
        <div className="w-full px-4 md:px-6 lg:px-12 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Video - Left */}
              <AnimateOnScroll animation="fade-right">
                <div className="relative group">
                  <div className="aspect-video overflow-hidden shadow-lg bg-white">
                    <div 
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${empresa2})` }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/40 transition-all duration-300" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer">
                          <Play className="w-10 h-10 text-primary ml-1" strokeWidth={2} fill="currentColor" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal/80 rounded-lg">
                        <p className="font-heading text-white text-sm">03:39</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Text - Right */}
              <AnimateOnScroll animation="fade-left">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sprout className="w-6 h-6 text-primary" strokeWidth={2} />
                    <p className="font-accent italic text-primary/70 text-sm tracking-wide">Impacto Social</p>
                  </div>
                  <h3 className="font-heading text-4xl md:text-5xl text-charcoal font-bold mb-6">
                    Comunidad
                  </h3>
                  <div className="space-y-4 text-charcoal/80 text-lg leading-relaxed">
                    <p>
                      Nuestro compromiso va más allá de la producción. <span className="text-charcoal">Trabajamos activamente</span> 
                      con las comunidades locales, generando empleo digno y contribuyendo al desarrollo sostenible de la región.
                    </p>
                    <p className="text-charcoal/70">
                      A través de programas de educación, capacitación y apoyo comunitario, buscamos crear un impacto 
                      positivo duradero en las vidas de quienes nos rodean.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Energía Limpia Section - Clean Background */}
      <section className="py-32 md:py-40 lg:py-48 bg-beige/30 relative">
        <div className="w-full px-4 md:px-6 lg:px-12 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Text - Left */}
              <AnimateOnScroll animation="fade-right">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sun className="w-6 h-6 text-primary" strokeWidth={2} />
                    <p className="font-accent italic text-primary/70 text-sm tracking-wide">Energía Renovable</p>
                  </div>
                  <h3 className="font-heading text-4xl md:text-5xl text-charcoal font-bold mb-6">
                    Energía <span className="font-accent italic text-primary">Limpia</span>
                  </h3>
                  <div className="space-y-4 text-charcoal/80 text-lg leading-relaxed">
                    <p>
                      Hemos invertido en <span className="text-charcoal">tecnología de energía renovable</span> para 
                      reducir nuestra dependencia de combustibles fósiles y minimizar nuestra huella de carbono.
                    </p>
                    <p className="text-charcoal/70">
                      Nuestro compromiso con la energía limpia no solo beneficia al medio ambiente, sino que también 
                      nos permite operar de manera más eficiente y sostenible a largo plazo.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Video - Right */}
              <AnimateOnScroll animation="fade-left">
                <div className="relative group">
                  <div className="aspect-video overflow-hidden shadow-lg bg-white">
                    <div 
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${sustainability})` }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/50 transition-all duration-300" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer">
                          <Play className="w-10 h-10 text-primary ml-1" strokeWidth={2} fill="currentColor" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal/80 rounded-lg">
                        <p className="font-heading text-white text-sm">02:45</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  );
};

export default Sustentabilidad;
