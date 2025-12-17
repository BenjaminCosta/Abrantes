import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Heart, Zap, Shield, TrendingUp, Droplet, Sun } from "lucide-react";
import mushroomsCloseup from "@/assets/mushrooms-closeup.jpg";


const nutritionalData = [
  { label: "ENERGÍA (kcal)", per100g: "25", per50g: "12,5" },
  { label: "PROTEÍNAS (g)", per100g: "2,1", per50g: "1,05" },
  { label: "GRASA TOTAL (g)", per100g: "0,33", per50g: "0,165" },
  { label: "HIDRATOS DE CARBONO (g)", per100g: "4,7", per50g: "2,35" },
  { label: "SODIO (g)", per100g: "4", per50g: "2" },
  { label: "AZÚCARES TOTALES (g)", per100g: "0,0", per50g: "0,0" },
];

const ventajas = [
  {
    icon: TrendingUp,
    title: "Bajo contenido calórico",
    description: "Beneficioso para la pérdida de peso"
  },
  {
    icon: Heart,
    title: "Bajos niveles de purinas",
    description: "Ideal para personas con gota o reuma"
  },
  {
    icon: Droplet,
    title: "Bajo nivel de glucosa",
    description: "Favorable para personas con diabetes"
  },
  {
    icon: Shield,
    title: "Baja concentración de Sodio",
    description: "Indicado para presión arterial alta"
  },
  {
    icon: Sun,
    title: "Alto contenido de vitaminas B2 y D",
    description: "Cubre parte significativa de la cantidad diaria recomendada"
  },
  {
    icon: Zap,
    title: "Rico en Selenio",
    description: "Excelente antioxidante natural"
  },
];

const vitaminas = [
  {
    nombre: "Vitamina C",
    descripcion: "Se requiere para el crecimiento y reparación de tejidos del cuerpo"
  },
  {
    nombre: "Vitamina D",
    descripcion: "Ayuda a absorber el calcio y mantener niveles adecuados de calcio y fósforo en sangre"
  },
  {
    nombre: "Vitaminas B (B1, B2, B3, B5 y B6)",
    descripcion: "Actúan en común para conseguir que nuestro organismo manifieste una buena salud"
  },
];

const minerales = [
  {
    nombre: "Fósforo",
    descripcion: "Interviene en la formación y mantenimiento de huesos, desarrollo de dientes, secreción de leche materna y metabolismo celular"
  },
  {
    nombre: "Magnesio",
    descripcion: "Componente del sistema óseo, participa en transmisión de impulsos nerviosos y metabolismo energético"
  },
  {
    nombre: "Hierro",
    descripcion: "Interviene en la formación de hemoglobina y glóbulos rojos, como en la actividad enzimática del organismo"
  },
  {
    nombre: "Selenio",
    descripcion: "100-150 gramos de champiñones cubren el 36% al 67% de la cantidad diaria recomendada (5.2 microgramos)"
  },
];

const InformacionNutricionalSection = () => {
  return (
    <section id="informacion-nutricional" className="py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden scroll-mt-24">

      <div className="w-full px-4 md:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <div className="space-y-3">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide">
                  Salud y Nutrición
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold uppercase tracking-wide">
                  Información Nutricional
                </h2>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Tabla Nutricional */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 p-8 lg:p-12 mb-16 max-w-4xl mx-auto">
              <h3 className="font-heading text-2xl md:text-3xl text-charcoal font-bold mb-8 text-center">
                Valores Nutricionales
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-primary/20">
                      <th className="text-left py-4 px-4 font-medium text-base md:text-lg text-charcoal font-semibold">
                        Nutriente
                      </th>
                      <th className="text-center py-4 px-4 font-medium text-base md:text-lg text-charcoal font-semibold">
                        100 g
                      </th>
                      <th className="text-center py-4 px-4 font-medium text-base md:text-lg text-charcoal font-semibold">
                        Porción (50 g)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutritionalData.map((item, index) => (
                      <tr key={index} className="border-b border-primary/5 hover:bg-white/50 transition-colors">
                        <td className="py-4 px-4 font-normal text-sm md:text-base text-charcoal/80">
                          {item.label}
                        </td>
                        <td className="py-4 px-4 text-center font-normal text-sm md:text-base text-charcoal font-semibold">
                          {item.per100g}
                        </td>
                        <td className="py-4 px-4 text-center font-normal text-sm md:text-base text-charcoal font-semibold">
                          {item.per50g}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Ventajas del Consumo */}
          <div id="ventajas" className="mb-16 scroll-mt-28">
            <AnimateOnScroll animation="fade-up">
              <h3 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-4 text-center">
                Ventajas del Consumo
              </h3>
              <p className="text-lg text-charcoal/70 text-center max-w-4xl mx-auto mb-12">
                Los champiñones se deben considerar como alimentos valiosos para el mantenimiento de una buena 
                salud y prevención de enfermedades
              </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {ventajas.map((ventaja, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 50}>
                  <div className="bg-white border border-primary/10 rounded-2xl p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <ventaja.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                    <h4 className="font-heading text-lg text-charcoal font-bold mb-2">
                      {ventaja.title}
                    </h4>
                    <p className="text-sm text-charcoal/60 leading-relaxed">
                      {ventaja.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Componentes: Vitaminas y Minerales */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Vitaminas */}
            <AnimateOnScroll animation="fade-right">
              <div className="bg-gradient-to-br from-secondary/30 to-beige/30 border border-primary/10 rounded-3xl p-8 lg:p-10">
                <h3 className="font-heading text-2xl md:text-3xl text-charcoal font-bold mb-6">
                  Vitaminas
                </h3>
                <div className="space-y-6">
                  {vitaminas.map((vitamina, index) => (
                    <div key={index} className="pb-6 border-b border-charcoal/10 last:border-0 last:pb-0">
                      <h4 className="font-heading text-lg text-primary font-semibold mb-2">
                        {vitamina.nombre}
                      </h4>
                      <p className="text-sm text-charcoal/70 leading-relaxed">
                        {vitamina.descripcion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Minerales */}
            <AnimateOnScroll animation="fade-left" delay={100}>
              <div className="bg-gradient-to-br from-secondary/30 to-beige/30 border border-primary/10 rounded-3xl p-8 lg:p-10">
                <h3 className="font-heading text-2xl md:text-3xl text-charcoal font-bold mb-6">
                  Minerales
                </h3>
                <div className="space-y-6">
                  {minerales.map((mineral, index) => (
                    <div key={index} className="pb-6 border-b border-charcoal/10 last:border-0 last:pb-0">
                      <h4 className="font-heading text-lg text-petrol-blue font-semibold mb-2">
                        {mineral.nombre}
                      </h4>
                      <p className="text-sm text-charcoal/70 leading-relaxed">
                        {mineral.descripcion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

          </div>

          {/* Image Footer */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="mt-16 relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <div className="aspect-[21/9]">
                <img
                  src={mushroomsCloseup}
                  alt="Champiñones Abrantes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-heading text-2xl md:text-3xl font-bold mb-2">
                    Calidad Nutricional Superior
                  </p>
                  <p className="text-base md:text-lg text-white/90">
                    Champiñones cultivados con los más altos estándares de calidad
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default InformacionNutricionalSection;
