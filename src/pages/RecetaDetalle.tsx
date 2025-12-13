import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Clock, Users, ChevronLeft } from "lucide-react";
import mushroomsCloseup from "@/assets/mushrooms-closeup.jpg";

interface Recipe {
  id: string;
  nombre: string;
  descripcion: string;
  tiempo: string;
  porciones: string;
  imagen: string;
  ingredientes: {
    categoria?: string;
    items: string[];
  }[];
  preparacion: string[];
}

const recetas: Record<string, Recipe> = {
  "ceviche-champinones": {
    id: "ceviche-champinones",
    nombre: "Ceviche de Champiñones",
    descripcion: "Con cilantro y pimentón",
    tiempo: "25 minutos",
    porciones: "4 porciones",
    imagen: mushroomsCloseup,
    ingredientes: [
      {
        items: [
          "300 g de champiñones frescos, en cubos de 1 cm",
          "30 g de mostaza estilo Dijon",
          "100 ml de jugo de limón de pica",
          "pizca de jengibre fresco, rallado",
          "¼ pimentón rojo, picado fino",
          "¼ pimentón amarillo, picado fino",
          "3 cucharadas de cilantro, picado fino"
        ]
      },
      {
        categoria: "Para el aliño:",
        items: [
          "½ taza (60 ml) de aceite de oliva",
          "2 cucharadas de vino blanco",
          "sal y pimienta"
        ]
      }
    ],
    preparacion: [
      "En un bol mezclar el jugo de limón de pica, mostaza y jengibre. Colocar los champiñones. Dejar marinar mínimo 1 hora en el refrigerador.",
      "Retirar los champiñones del refrigerador y colar. Reservar el líquido de la marinada y los champiñones por separado. Colocar los pimentones y cilantro con los champiñones, mezclar y reservar.",
      "Preparar el aliño. En un bol mezclar el líquido de la marinada reservado, el aceite y el vino. Sazonar con sal y pimienta y mezclar.",
      "En pocillos individuales, distribuir los champiñones reservados, verter encima el aliño y servir."
    ]
  },
  "ensalada-mediterranea": {
    id: "ensalada-mediterranea",
    nombre: "Ensalada Fresca Mediterránea",
    descripcion: "Con champiñones, tocino crispy, pimentón y roquefort",
    tiempo: "15 minutos",
    porciones: "4 porciones",
    imagen: mushroomsCloseup,
    ingredientes: [
      {
        categoria: "Para la vinagreta:",
        items: [
          "¼ taza de aceite de oliva",
          "4 cucharadas de aceto balsámico",
          "1 cucharada de sésamo tostado",
          "4 cucharadas de jugo de limón"
        ]
      },
      {
        categoria: "Para la ensalada:",
        items: [
          "400 g de mix de hojas verdes",
          "4 láminas de tocino, picado fino",
          "200 g de champiñones, limpios y en láminas",
          "1 pimentón rojo, en bastones",
          "80 g de queso roquefort, picado en trozos"
        ]
      }
    ],
    preparacion: [
      "Preparar la vinagreta. En un bol colocar el aceite de oliva, aceto balsámico, jugo de limón y sésamo. Batir con un batidor de alambre hasta obtener una vinagreta homogénea. Sazonar con sal y reservar.",
      "Preparar la ensalada. En un sartén colocar el tocino y cocinar a fuego medio hasta que bote su aceite y el tocino esté duro.",
      "En 4 bowls individuales distribuir las hojas verdes, champiñones, pimentón rojo, queso roquefort y tocino crispy. Servir con la vinagreta reservada."
    ]
  },
  "champinones-del-mar": {
    id: "champinones-del-mar",
    nombre: "Champiñones del Mar",
    descripcion: "Rellenos con jaiba y queso brie",
    tiempo: "15 minutos",
    porciones: "4 porciones",
    imagen: mushroomsCloseup,
    ingredientes: [
      {
        items: [
          "8 champiñones grandes",
          "1 cucharada de aceite de oliva",
          "¼ taza de queso brie, en cubos de ½ cm",
          "200 g de jaiba",
          "4 cucharadas de pimentón rojo, picado fino",
          "3 cucharadas de cilantro, picado fino",
          "¼ taza de crema",
          "sal y pimienta"
        ]
      }
    ],
    preparacion: [
      "Sacar el tronco del champiñón y con la ayuda de una cuchara ahuecar el fondo. Con un cuchillo afilado pelar el champiñón y reservar.",
      "En un sartén calentar el aceite de oliva, agregar la jaiba y pimentón, cocinar 1 minuto, añadir el cilantro y crema, sazonar con sal y pimienta. Cocinar 1 minuto más, retirar del fuego y dejar entibiar. Agregar el queso brie, mezclar y reservar.",
      "Precalentar el horno a temperatura media. Rellenar los champiñones ahuecados con la mezcla anterior. Colocar sobre una lata de horno, 5-10 minutos o hasta que el champiñón esté cocido y el queso derretido. Servir de inmediato."
    ]
  },
  "champinones-orientales": {
    id: "champinones-orientales",
    nombre: "Champiñones Orientales",
    descripcion: "Rellenos con pollo al curry",
    tiempo: "20 minutos",
    porciones: "4 porciones",
    imagen: mushroomsCloseup,
    ingredientes: [
      {
        items: [
          "8 champiñones grandes",
          "1 pechuga de pollo, deshuesada y en cubos de ½ cm",
          "1 cucharada de curry",
          "½ taza de leche de coco",
          "1 cebollín, picado fino",
          "1 cucharada de aceite maravilla",
          "8 hojas de perejil, para decorar"
        ]
      }
    ],
    preparacion: [
      "Sacar el tronco del champiñón y con la ayuda de una cuchara ahuecar el fondo. Con un cuchillo afilado pelar el champiñón y reservar.",
      "En un sartén calentar el aceite, agregar el cebollín y cocinar 1 minuto, luego añadir el pollo y cocer 1 minuto más y verter la leche de coco y curry, llevar a ebullición, sazonar con sal. Retirar del fuego y reservar.",
      "Precalentar el horno a temperatura media. Rellenar los champiñones ahuecados con la mezcla anterior. Colocar sobre una lata de horno y hornear 5-10 minutos o hasta que el champiñón esté cocido. Decorar con las hojas de perejil y servir de inmediato."
    ]
  },
  "champinones-naturista": {
    id: "champinones-naturista",
    nombre: "Champiñones Naturista",
    descripcion: "Rellenos con espinaca y queso",
    tiempo: "20 minutos",
    porciones: "4 porciones",
    imagen: mushroomsCloseup,
    ingredientes: [
      {
        items: [
          "8 champiñones grandes",
          "2 cucharadas de aceite de oliva",
          "½ cebolla picada fina",
          "200 g de espinacas, cocida, estilada y picada fina",
          "¼ taza de crema",
          "sal y pimienta",
          "¼ taza de queso mantecoso, rallado"
        ]
      }
    ],
    preparacion: [
      "Sacar el tronco del champiñón y con la ayuda de una cuchara ahuecar el fondo. Con un cuchillo afilado pelar el champiñón y reservar.",
      "Picar finamente los troncos del champiñón, reservar. En un sartén calentar el aceite de oliva, agregar la cebolla y cocinar 5 minutos o hasta que esté transparente, añadir el champiñón picado reservado y cocinar 1 minuto, agregar la espinaca y crema, sazonar con sal y pimienta. Cocinar 1 minuto más, retirar el fuego y dejar entibiar.",
      "Precalentar el horno a temperatura media. Rellenar los champiñones ahuecados con la mezcla anterior. Colocar sobre una lata de horno, espolvorear con el queso mantecoso y hornear 10 minutos o hasta que el champiñón esté cocido y el queso derretido. Servir de inmediato."
    ]
  },
  "champinones-capresse": {
    id: "champinones-capresse",
    nombre: "Champiñones Capresse",
    descripcion: "Rellenos con tomate cherry, albahaca y mozzarella",
    tiempo: "15 minutos",
    porciones: "4 porciones",
    imagen: mushroomsCloseup,
    ingredientes: [
      {
        items: [
          "8 champiñones grandes",
          "4 cucharadas de aceite de oliva",
          "¾ taza de hojas de albahaca",
          "sal y pimienta",
          "1 diente de ajo, pelado",
          "200 g de tomate cherry, lavados y en cuartos",
          "4 quesos mozzarella chicos, en mitades"
        ]
      }
    ],
    preparacion: [
      "Sacar el tronco del champiñón y con la ayuda de una cuchara ahuecar el fondo. Con un cuchillo afilado pelar el champiñón y reservar.",
      "En una procesadora colocar 3 cucharadas de aceite de oliva y la albahaca, sazonar con sal y pimienta y procesar hasta formar un pesto. Reservar.",
      "En un sartén calentar el resto del aceite de oliva, agregar el diente de ajo, y cocinar 1 minuto, añadir los tomates y cocinar 5 minutos o hasta cocer completamente, verter el pesto reservado, sacar el ajo, sazonar con sal y pimienta. Retirar del fuego y reservar.",
      "Precalentar el horno a temperatura media. Rellenar los champiñones ahuecados con la mezcla anterior. Colocar sobre una lata de horno, distribuir encima queso mozzarella y hornear 5-10 minutos o hasta que el champiñón esté cocido y el queso derretido. Servir de inmediato."
    ]
  }
};

const RecetaDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const receta = id ? recetas[id] : null;

  if (!receta) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-charcoal font-bold mb-4">Receta no encontrada</h2>
            <button
              onClick={() => navigate('/recetas')}
              className="text-primary hover:text-primary/80 font-heading font-semibold"
            >
              Volver a recetas
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-beige via-white to-beige/50">
        <div className="w-full px-4 md:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Back Button */}
            <AnimateOnScroll animation="fade-up">
              <button
                onClick={() => navigate('/recetas')}
                className="flex items-center gap-2 text-primary hover:text-primary/80 font-heading font-semibold mb-8 transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Volver a Recetas
              </button>
            </AnimateOnScroll>

            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <AnimateOnScroll animation="fade-up">
                <p className="font-accent italic text-primary/70 text-sm md:text-base tracking-wide mb-3">
                  Recetas
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold mb-4">
                  {receta.nombre}
                </h1>
                <p className="font-body text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
                  {receta.descripcion}
                </p>
              </AnimateOnScroll>
            </div>

            {/* Image and Info */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              
              {/* Image */}
              <AnimateOnScroll animation="fade-right">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
                  <img
                    src={receta.imagen}
                    alt={receta.nombre}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </AnimateOnScroll>

              {/* Info Cards */}
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div className="space-y-6">
                  <div className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-heading text-sm text-charcoal/60 font-semibold">Tiempo</p>
                        <p className="font-heading text-xl text-charcoal font-bold">{receta.tiempo}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-heading text-sm text-charcoal/60 font-semibold">Porciones</p>
                        <p className="font-heading text-xl text-charcoal font-bold">{receta.porciones}</p>
                      </div>
                    </div>
                  </div>

                  {/* Ingredientes */}
                  <div className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 lg:p-8">
                    <h3 className="font-heading text-2xl text-charcoal font-bold mb-4">Ingredientes</h3>
                    <div className="space-y-4">
                      {receta.ingredientes.map((grupo, idx) => (
                        <div key={idx}>
                          {grupo.categoria && (
                            <p className="font-heading text-base text-primary font-semibold mb-2">
                              {grupo.categoria}
                            </p>
                          )}
                          <ul className="space-y-2">
                            {grupo.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span className="font-body text-sm text-charcoal/70">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Preparación */}
            <AnimateOnScroll animation="fade-up">
              <div className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 lg:p-10">
                <h3 className="font-heading text-3xl text-charcoal font-bold mb-8">Preparación</h3>
                <div className="space-y-6">
                  {receta.preparacion.map((paso, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-lg text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="font-body text-base text-charcoal/80 leading-relaxed flex-1 pt-1.5">
                        {paso}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecetaDetalle;
