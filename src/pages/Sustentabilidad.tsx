import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Leaf, Droplets, Recycle, Sun, TreePine, Factory, Sprout, Award, ArrowRight, Play, FileText, Download } from "lucide-react";
import sustentabilidadImg from "@/assets/sustentabilidad.jpg";
import sustainability from "@/assets/sustainability.jpg";
import compost from "@/assets/compost.jpg";
import empresa2 from "@/assets/Empresa2.jpg";
import hongos3 from "@/assets/hongos3.png";
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
      <section className="relative h-[580px] overflow-hidden -mt-20">
        {/* Background Image */}
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

      {/* Indicadores que Transforman 2025 - Petrol Blue with Video */}
      <section className="py-20 md:py-24 lg:py-32 bg-[#315C7C] relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${compost})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#315C7C]/95 via-[#315C7C]/90 to-[#315C7C]/95" />

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Text - Left */}
              <AnimateOnScroll animation="fade-right">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-7 h-7 text-accent" strokeWidth={2} />
                    <p className="font-accent italic text-accent/90 text-sm tracking-wide">Indicadores que Transforman</p>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
                    Logros y desafíos <span className="font-accent italic text-accent">2025</span>
                  </h3>
                  <div className="space-y-4 font-body text-white/90 text-lg leading-relaxed">
                    <p>
                      Presentamos nuestros <span className="font-semibold text-accent">indicadores de impacto</span> del año 2025, 
                      mostrando avances concretos en sustentabilidad, eficiencia operativa y compromiso social.
                    </p>
                    <p className="text-white/80">
                      Cada métrica refleja nuestro trabajo constante por mejorar, innovar y generar valor 
                      compartido con todas nuestras partes interesadas.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Video Mock - Right */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div className="relative group">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent/20 to-white/10 border-2 border-accent/30">
                    <div 
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${sustainability})` }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/50 transition-all duration-300" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl cursor-pointer">
                          <Play className="w-10 h-10 text-[#315C7C] ml-1" strokeWidth={2} fill="currentColor" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal/80 backdrop-blur-sm rounded-lg">
                        <p className="font-heading text-white text-sm font-medium">03:52</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Indicadores que Transforman 2024 - Light Background with Video */}
      <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-beige via-white to-beige/50 relative overflow-hidden">
        <div className="absolute top-20 -right-20 z-0 opacity-6">
          <img 
            src={hongos3} 
            alt="" 
            className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] object-contain transform rotate-12"
          />
        </div>

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Video Mock - Left */}
              <AnimateOnScroll animation="fade-right">
                <div className="relative group">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-white/50 border-2 border-primary/20">
                    <div 
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${empresa2})` }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/40 transition-all duration-300" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl cursor-pointer">
                          <Play className="w-10 h-10 text-primary ml-1" strokeWidth={2} fill="currentColor" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal/80 backdrop-blur-sm rounded-lg">
                        <p className="font-heading text-white text-sm font-medium">03:15</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Text - Right */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-7 h-7 text-primary" strokeWidth={2} />
                    <p className="font-accent italic text-primary/70 text-sm tracking-wide">Indicadores que Transforman</p>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mb-6">
                    Logros y desafíos <span className="font-accent italic text-primary">2024</span>
                  </h3>
                  <div className="space-y-4 font-body text-charcoal/80 text-lg leading-relaxed">
                    <p>
                      Revisamos los <span className="font-semibold text-charcoal">logros alcanzados</span> durante el año 2024, 
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
      <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-br from-beige/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 opacity-5">
          <img src={hongos3} alt="" className="w-72 h-72 object-contain" />
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-5">
          <img src={hongos4} alt="" className="w-72 h-72 object-contain" />
        </div>

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12 lg:mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <FileText className="w-7 h-7 text-primary" strokeWidth={2} />
                  <p className="font-accent italic text-primary/70 text-sm tracking-wide">Transparencia y Compromiso</p>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold mb-6">
                  Reportes de <span className="font-accent italic text-primary">Sustentabilidad</span>
                </h2>
                <p className="font-body text-lg md:text-xl text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
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
                    className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-charcoal/5 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <Download className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="font-heading text-2xl text-charcoal font-bold mb-2">
                          Año {year}
                        </h3>
                        <p className="font-body text-sm text-charcoal/60 mb-4">
                          Reporte de Sustentabilidad
                        </p>
                        <div className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          <span>Ver Reporte</span>
                          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
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
      <section className="py-20 md:py-24 lg:py-28 bg-charcoal relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        
        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12 lg:mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Leaf className="w-7 h-7 text-accent" strokeWidth={2} />
                  <p className="font-accent italic text-accent/90 text-sm tracking-wide">Compromiso Climático</p>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
                  Carbono <span className="font-accent italic text-accent">Neutral</span>
                </h2>
                <p className="font-body text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
                  Champiñones Abrantes ha reducido a cero sus emisiones de CO₂e de acuerdo a los requerimientos del CarbonNeutral Protocol.
                </p>
                <p className="font-body text-base text-white/75 max-w-3xl mx-auto leading-relaxed">
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
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="aspect-square bg-white rounded-xl overflow-hidden mb-3">
                        <img
                          src={cert.img}
                          alt={`Certificación Carbono Neutral ${cert.year}`}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <p className="font-heading text-sm text-white/80 text-center font-medium">
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-heading font-medium text-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-accent/50 transition-all duration-300 group"
                >
                  <Download className="w-4 h-4 text-accent" strokeWidth={2.5} />
                  <span>Certificación 2020</span>
                </a>
                <a
                  href="#certificacion-2021"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-heading font-medium text-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-accent/50 transition-all duration-300 group"
                >
                  <Download className="w-4 h-4 text-accent" strokeWidth={2.5} />
                  <span>Certificación 2021</span>
                </a>
                <a
                  href="#certificacion-2022"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-heading font-medium text-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-accent/50 transition-all duration-300 group"
                >
                  <Download className="w-4 h-4 text-accent" strokeWidth={2.5} />
                  <span>Certificación 2022</span>
                </a>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Comunidad Section - Video Mock */}
      <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-br from-beige/40 to-white relative overflow-hidden">
        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Video Mock - Left */}
              <AnimateOnScroll animation="fade-right">
                <div className="relative group">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-charcoal/10 border-2 border-primary/20">
                    <div 
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${empresa2})` }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/40 transition-all duration-300" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl cursor-pointer">
                          <Play className="w-10 h-10 text-primary ml-1" strokeWidth={2} fill="currentColor" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal/80 backdrop-blur-sm rounded-lg">
                        <p className="font-heading text-white text-sm font-medium">03:39</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Text - Right */}
              <AnimateOnScroll animation="fade-left">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sprout className="w-7 h-7 text-primary" strokeWidth={2} />
                    <p className="font-accent italic text-primary/70 text-sm tracking-wide">Impacto Social</p>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal font-bold mb-6">
                    Comunidad
                  </h3>
                  <div className="space-y-4 font-body text-charcoal/80 text-lg leading-relaxed">
                    <p>
                      Nuestro compromiso va más allá de la producción. <span className="font-semibold text-charcoal">Trabajamos activamente</span> 
                      con las comunidades locales, generando empleo digno y contribuyendo al desarrollo sostenible de la región.
                    </p>
                    <p>
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

      {/* Energía Limpia Section - Video Mock */}
      <section className="py-20 md:py-24 lg:py-28 bg-[#315C7C] relative overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${sustainability})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#315C7C]/95 via-[#315C7C]/90 to-[#315C7C]/95" />

        <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Text - Left */}
              <AnimateOnScroll animation="fade-right">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sun className="w-7 h-7 text-accent" strokeWidth={2} />
                    <p className="font-accent italic text-accent/90 text-sm tracking-wide">Energía Renovable</p>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
                    Energía <span className="font-accent italic text-accent">Limpia</span>
                  </h3>
                  <div className="space-y-4 font-body text-white/90 text-lg leading-relaxed">
                    <p>
                      Hemos invertido en <span className="font-semibold text-accent">tecnología de energía renovable</span> para 
                      reducir nuestra dependencia de combustibles fósiles y minimizar nuestra huella de carbono.
                    </p>
                    <p>
                      Nuestro compromiso con la energía limpia no solo beneficia al medio ambiente, sino que también 
                      nos permite operar de manera más eficiente y sostenible a largo plazo.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Video Mock - Right */}
              <AnimateOnScroll animation="fade-left">
                <div className="relative group">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent/20 to-white/10 border-2 border-accent/30">
                    <div 
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${sustainability})` }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/50 transition-all duration-300" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl cursor-pointer">
                          <Play className="w-10 h-10 text-[#315C7C] ml-1" strokeWidth={2} fill="currentColor" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal/80 backdrop-blur-sm rounded-lg">
                        <p className="font-heading text-white text-sm font-medium">02:45</p>
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
