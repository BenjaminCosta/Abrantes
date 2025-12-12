import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { LeafDecoration, MushroomDecoration, BranchDecoration } from "@/components/DecorativeElements";
import { Award, Target, Eye, Users, Shield, Heart } from "lucide-react";
import productionFacility from "@/assets/production-facility.jpg";
import mushroomsCloseup from "@/assets/mushrooms-closeup.jpg";

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

      {/* Empresa Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <MushroomDecoration className="absolute bottom-20 right-0 w-24 h-auto text-accent opacity-[0.05]" />
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateOnScroll animation="fade-up">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Nuestra Empresa
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="space-y-4 font-body text-foreground/80 leading-relaxed">
                  <p>
                    Abrantes es líder en la producción de champiñones en Chile, con una trayectoria 
                    de más de 30 años en el mercado. Nuestra planta productiva, ubicada en Buin, 
                    Región Metropolitana, cuenta con tecnología de punta y procesos certificados.
                  </p>
                  <p>
                    Formamos parte del Grupo Sutil, un holding empresarial con presencia en diversos 
                    sectores agroindustriales, lo que nos respalda con solidez financiera y experiencia 
                    en el desarrollo de negocios sustentables.
                  </p>
                  <p>
                    Nuestro compromiso es entregar productos frescos y de calidad superior, 
                    satisfaciendo las necesidades de nuestros clientes en todo el país.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fade-left" delay={150}>
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                <img 
                  src={productionFacility} 
                  alt="Planta productiva Abrantes" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimateOnScroll>
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
