import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { LeafDecoration, MushroomDecoration, BranchDecoration } from "@/components/DecorativeElements";
import { Award, Target, Eye, Users, Shield, Heart, Building2, Check, TrendingUp } from "lucide-react";
import productionFacility from "@/assets/production-facility.jpg";
import packingImage from "@/assets/VII.-Packing2.jpg";
import empresa3 from "@/assets/Empresa3.jpg";
import hongos1 from "@/assets/hongos1.png";

  const bulletPoints = [
    { icon: TrendingUp, text: "Producción continua todo el año" },
    { icon: Award, text: "Procesos certificados y trazabilidad" },
    { icon: Building2, text: "Operación sustentable" }
  ];


const values = [
  { icon: Award, title: "Excelencia", description: "Compromiso con los más altos estándares de calidad" },
  { icon: Heart, title: "Pasión", description: "Amor por lo que hacemos en cada etapa del proceso" },
  { icon: Shield, title: "Integridad", description: "Actuamos con ética y transparencia en todo momento" },
  { icon: Users, title: "Trabajo en Equipo", description: "Colaboración y respeto entre todos los colaboradores" },
];

const certifications = [
  { name: "HACCP", description: "Sistema de Análisis de Peligros y Puntos Críticos de Control" },
  { name: "BRC Food Safety", description: "Certificación de seguridad alimentaria global" },
  { name: "ISO 22000", description: "Gestión de inocuidad alimentaria" },
  { name: "GLOBALG.A.P.", description: "Buenas prácticas agrícolas" },
];

const Nosotros = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
        <LeafDecoration className="absolute top-10 left-0 w-32 h-auto text-cream opacity-[0.04]" />
        <div className="container-narrow relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
              Nosotros
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-accent italic text-xl text-cream/75 max-w-2xl">
              Más de tres décadas cultivando champiñones de la más alta calidad
            </p>
          </AnimateOnScroll>
        </div>
      </section>

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

      {/* Misión y Visión */}
      <section id="mision" className="section-padding bg-secondary relative overflow-hidden scroll-mt-20">
        <BranchDecoration className="absolute top-0 left-0 w-48 h-auto text-foreground opacity-[0.03]" />
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-10">
            <AnimateOnScroll animation="fade-up">
              <div className="bg-background p-8 rounded-sm shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4">Misión</h3>
                <p className="font-body text-foreground/75 leading-relaxed">
                  Producir champiñones de la más alta calidad, aplicando tecnología de vanguardia 
                  y prácticas sustentables, para satisfacer las necesidades de nuestros clientes 
                  y contribuir al bienestar de nuestra comunidad.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-background p-8 rounded-sm shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4">Visión</h3>
                <p className="font-body text-foreground/75 leading-relaxed">
                  Ser reconocidos como la empresa líder en producción de champiñones en Latinoamérica, 
                  destacando por nuestra calidad, innovación y compromiso con la sustentabilidad.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-narrow">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">
              Nuestros Valores
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimateOnScroll key={value.title} animation="fade-up" delay={index * 80}>
                <div className="text-center p-6 bg-secondary rounded-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section id="certificaciones" className="section-padding bg-secondary relative overflow-hidden scroll-mt-20">
        <div className="container-narrow">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-4">
              Certificaciones
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-accent italic text-lg text-primary text-center mb-12 max-w-2xl mx-auto">
              Calidad avalada por los más exigentes estándares internacionales
            </p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, index) => (
              <AnimateOnScroll key={cert.name} animation="fade-up" delay={index * 80}>
                <div className="bg-background p-6 rounded-sm shadow-sm text-center hover:shadow-md transition-shadow">
                  <h3 className="font-heading text-xl text-primary mb-2">{cert.name}</h3>
                  <p className="font-body text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
