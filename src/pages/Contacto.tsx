import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactoImg from "@/assets/trabaja_nosotros.jpg";
import empresa1 from "@/assets/Empresa1.jpg";
import mushroomBg from "@/assets/unsplash/mushroom-faci3.jpg";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section con Imagen de Fondo */}
      <section className="relative h-[580px] overflow-hidden pt-24 lg:pt-28">
        {/* Background Image - Full Height including Navbar */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactoImg})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center pb-20">
          <div className="w-full px-4 md:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              
              <AnimateOnScroll animation="fade-up">
                {/* Simple Top Line - Centered */}
                <div className="mb-6 flex justify-center">
                  <div className="h-1 w-44 bg-white" />
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4">
                  Contacto
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <p className="font-accent italic text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto">
                  Estamos aquí para atenderte
                </p>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column - Form */}
            <AnimateOnScroll animation="fade-up">
              <div>
                <div className="mb-8">
                  <div className="h-1 w-16 bg-primary mb-4" />
                  <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-3">
                    Contacto
                  </h2>
                  <p className="text-charcoal/70">
                    Completa el formulario y nos pondremos en contacto contigo
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label className="block text-sm text-charcoal mb-2">
                      Nombre
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 text-base border-charcoal/20 focus:border-primary bg-white"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-charcoal mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 text-base border-charcoal/20 focus:border-primary bg-white"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sm text-charcoal mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="text-base border-charcoal/20 focus:border-primary resize-none bg-white"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto h-12 px-10 text-base bg-white hover:bg-white/90 text-charcoal border border-charcoal/20 hover:border-charcoal/40 transition-all duration-300 font-sans tracking-wide font-semibold"
                  >
                    Enviar
                  </Button>
                </form>
              </div>
            </AnimateOnScroll>

            {/* Right Column - Info & Map */}
            <div className="space-y-8">
              
              {/* Contact Info */}
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div>
                  <h3 className="font-heading text-2xl text-charcoal mb-6">Oficina Central</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-charcoal leading-relaxed">
                          RESERVA PERALILLO, HIJUELA 4 Y 5, PAINE
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-charcoal">+56222158858</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-charcoal">PGARATE@ABRANTES.CL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Map */}
              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="aspect-[4/3] bg-secondary rounded-sm overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.234567890123!2d-70.7421!3d-33.8567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUxJzI0LjEiUyA3MMKwNDQnMzEuNiJX!5e0!3m2!1ses!2scl!4v1600000000000!5m2!1ses!2scl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Abrantes - Paine"
                  />
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto Institucional */}
      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mushroomBg})` }}
        />
        
        {/* Overlay suave */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content Container */}
        <div className="relative w-full px-4 md:px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            
            {/* White Card */}
            <AnimateOnScroll animation="fade-up">
              <div className="bg-white px-8 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 shadow-xl">
                
                {/* Título - Mayúsculas sin negrita */}
                <h2 className="font-heading text-2xl md:text-3xl text-charcoal text-center mb-6 tracking-wider uppercase">
                  Contacto institucional
                </h2>

                {/* Texto descriptivo */}
                <p className="text-base md:text-lg text-charcoal/70 text-center leading-relaxed mb-10 max-w-xl mx-auto">
                  Estamos disponibles para consultas comerciales, información sobre nuestros productos y alianzas estratégicas.
                </p>

                {/* Datos de contacto - Sin emojis ni iconos */}
                <div className="space-y-3 mb-10 text-center">
                  <p className="text-base text-charcoal/80">
                    RESERVA PERALILLO, HIJUELA 4 Y 5, PAINE
                  </p>
                  <p className="text-base text-charcoal/80">
                    +56222158858
                  </p>
                  <p className="text-base text-charcoal/80">
                    PGARATE@ABRANTES.CL
                  </p>
                </div>

                {/* CTA - Outline */}
                <div className="text-center">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white font-sans text-base tracking-wide transition-all duration-300"
                  >
                    Enviar consulta
                  </a>
                </div>

              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
