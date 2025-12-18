import AnimateOnScroll from "@/components/AnimateOnScroll";
import mush1 from "@/assets/unsplash/mush1.jpg";
import mushrooms4 from "@/assets/unsplash/mushrooms4.jpg";

const nutritionalData = [
  { label: "ENERGÍA (kcal)", per100g: "25", per50g: "12,5" },
  { label: "PROTEÍNAS (g)", per100g: "2,1", per50g: "1,05" },
  { label: "GRASA TOTAL (g)", per100g: "0,33", per50g: "0,165" },
  { label: "HIDRATOS DE CARBONO (g)", per100g: "4,7", per50g: "2,35" },
  { label: "SODIO (g)", per100g: "4", per50g: "2" },
  { label: "AZÚCARES TOTALES (g)", per100g: "0,0", per50g: "0,0" },
];

const ventajas = [
  { title: "Bajo contenido calórico", description: "Beneficioso para la pérdida de peso" },
  { title: "Bajos niveles de purinas", description: "Ideal para personas con gota o reuma" },
  { title: "Bajo nivel de glucosa", description: "Favorable para personas con diabetes" },
  { title: "Baja concentración de Sodio", description: "Indicado para presión arterial alta" },
  { title: "Alto contenido de vitaminas B2 y D", description: "Cubre parte significativa de la cantidad diaria recomendada" },
  { title: "Rico en Selenio", description: "Excelente antioxidante natural" },
];

const vitaminas = [
  { nombre: "Vitamina C", descripcion: "Se requiere para el crecimiento y reparación de tejidos del cuerpo" },
  { nombre: "Vitamina D", descripcion: "Ayuda a absorber el calcio y mantener niveles adecuados de calcio y fósforo en sangre" },
  { nombre: "Vitaminas B (B1, B2, B3, B5 y B6)", descripcion: "Actúan en común para conseguir que nuestro organismo manifieste una buena salud" },
];

const minerales = [
  { nombre: "Fósforo", descripcion: "Interviene en la formación y mantenimiento de huesos y metabolismo celular" },
  { nombre: "Magnesio", descripcion: "Participa en transmisión nerviosa y metabolismo energético" },
  { nombre: "Hierro", descripcion: "Interviene en la formación de hemoglobina y glóbulos rojos" },
  { nombre: "Selenio", descripcion: "100–150 g cubren hasta el 67% de la cantidad diaria recomendada" },
];

const InformacionNutricionalSection = () => {
  return (
    <section id="informacion-nutricional" className="py-28 md:py-36 lg:py-40 bg-white scroll-mt-24">
      <div className="w-full">
        <div className="mx-auto">

          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <AnimateOnScroll animation="fade-up">
              <p className="font-accent italic text-primary/70 text-sm md:text-base mb-3">
                Salud y Nutrición
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold uppercase">
                Información Nutricional
              </h2>
            </AnimateOnScroll>
          </div>

          {/* Tabla */}
          <AnimateOnScroll animation="fade-up">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 p-8 lg:p-12 mb-16 max-w-4xl mx-auto">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
                Valores Nutricionales
              </h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-4 px-4">Nutriente</th>
                    <th className="text-center py-4 px-4">100 g</th>
                    <th className="text-center py-4 px-4">50 g</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionalData.map((item, i) => (
                    <tr key={i} className="border-b border-primary/5">
                      <td className="py-4 px-4 text-charcoal/80">{item.label}</td>
                      <td className="py-4 px-4 text-center font-semibold">{item.per100g}</td>
                      <td className="py-4 px-4 text-center font-semibold">{item.per50g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          {/* Ventajas */}
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="order-2 lg:order-1">
              <img src={mush1} alt="" className="w-full h-[300px] lg:h-full object-cover" />
            </div>

            <div className="order-1 lg:order-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <AnimateOnScroll animation="fade-up">
                <h3 className="font-heading text-4xl lg:text-5xl font-bold uppercase mb-4">
                  Ventajas del Consumo
                </h3>
                <p className="text-charcoal/70 mb-8">
                  Los champiñones son alimentos valiosos para la salud y la prevención de enfermedades.
                </p>
              </AnimateOnScroll>

              <div className="space-y-4">
                {ventajas.map((v, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold">{v.title}</h4>
                    <p className="text-charcoal/60 text-sm">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vitaminas y Minerales – pegado y espejado */}
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Texto izquierda */}
            <div className="p-8 md:p-12 lg:p-16">
              <AnimateOnScroll animation="fade-up">
                <h3 className="font-heading text-4xl lg:text-5xl font-bold uppercase mb-10">
                  Vitaminas y Minerales
                </h3>
              </AnimateOnScroll>

              <div className="mb-10 border-b border-charcoal/10 pb-8">
                <h4 className="font-heading text-2xl mb-6 uppercase">Vitaminas</h4>
                <div className="space-y-4">
                  {vitaminas.map((v, i) => (
                    <div key={i} className="border-l-2 border-primary/30 pl-4">
                      <h5 className="font-semibold">{v.nombre}</h5>
                      <p className="text-sm text-charcoal/60">{v.descripcion}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-heading text-2xl mb-6 uppercase">Minerales</h4>
                <div className="space-y-4">
                  {minerales.map((m, i) => (
                    <div key={i} className="border-l-2 border-primary/30 pl-4">
                      <h5 className="font-semibold">{m.nombre}</h5>
                      <p className="text-sm text-charcoal/60">{m.descripcion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Imagen derecha – más baja */}
            <div className="order-2">
              <img
                src={mushrooms4}
                alt=""
                className="w-full h-[300px] lg:h-[80vh] object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default InformacionNutricionalSection;
