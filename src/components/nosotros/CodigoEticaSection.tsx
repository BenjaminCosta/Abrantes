import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Download, FileText, } from "lucide-react";
import hongos6 from "@/assets/hongos3.png";

const documents = [
  {
    title: "Código de Ética y Conducta",
    description: "Versión en Español",
    icon: FileText,
    link: "#",
    language: "ES"
  },
  {
    title: "Code of Ethics and Conduct",
    description: "English Version",
    icon: FileText,
    link: "#",
    language: "EN"
  },
  {
    title: "Manual Modelo Prevención de Delitos",
    description: "Empresas Sutil",
    icon: FileText,
    link: "#",
    language: "ES"
  },
  {
    title: "Política de Prevención de Delitos",
    description: "Normativa vigente",
    icon: FileText,
    link: "#",
    language: "ES"
  },
  {
    title: "Procedimiento de Denuncias",
    description: "Canales disponibles",
    icon: FileText,
    link: "#",
    language: "ES"
  },
];

const CodigoEticaSection = () => {
  return (
    <section id="codigo-etica" className="py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden scroll-mt-24">

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="text-primary/70 text-sm md:text-base tracking-wide font-accent italic">
                  Integridad y Transparencia
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold uppercase tracking-wide">
                  Código de Ética y Conducta
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Introduction */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 p-8 lg:p-12 mb-12 max-w-5xl mx-auto">
              <p className="text-lg text-charcoal/80 text-justifyleading-relaxed mb-6">
                El presente Código de Ética tiene como objeto establecer, definir y dar a conocer los valores, 
                principios éticos y las pautas de conducta que orientan las acciones, relaciones y decisiones de 
                <span className="text-primary"> Empresas Sutil y sus filiales</span> y de sus colaboradores 
                y que son de estricto cumplimiento en el ejercicio de sus funciones tanto al interior de las instalaciones 
                de la empresa como en las actividades que se desarrollen fuera de ella.
              </p>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                Empresas Sutil reconoce que la sumatoria de las conductas éticas individuales y colectivas contribuye a 
                la construcción de la imagen y distinción de Empresas Sutil como una compañía íntegra y confiable.
              </p>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Este documento representa el compromiso de Empresas Sutil con un comportamiento ético en sus relaciones 
                laborales, comerciales y, en general, en todas las actuaciones en que intervenga alguna de las empresas 
                del Grupo y sus colaboradores, en tanto reconoce la <span className="text-primary">ética en 
                los negocios como un pilar fundamental</span> para su desarrollo sostenible en los entornos y mercados en 
                que opera.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Documents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {documents.map((doc, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 50}>
                <a
                  href={doc.link}
                  className="group bg-white rounded-sm p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 block"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <doc.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-heading text-base text-charcoal font-semibold leading-tight">
                          {doc.title}
                        </h3>
                        {doc.language && (
                          <span className="text-xs font-semibold text-primary/60 bg-primary/10 px-2 py-1 rounded-lg flex-shrink-0">
                            {doc.language}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-charcoal/60 mb-4">
                        {doc.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                        <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
                        <span>Descargar PDF</span>
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
  );
};

export default CodigoEticaSection;
