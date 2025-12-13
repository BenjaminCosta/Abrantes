import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactoImg from "@/assets/contacto.jpg";
import empresa1 from "@/assets/Empresa1.jpg";

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
      <section className="relative h-[580px] overflow-hidden -mt-20">
        {/* Background Image - Full Height including Navbar */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactoImg})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center pt-20">
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
      <section className="section-padding bg-background">
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
                  <p className="font-body text-charcoal/70">
                    Completa el formulario y nos pondremos en contacto contigo
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label className="block font-heading text-sm text-charcoal mb-2">
                      Nombre
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 font-body text-base border-charcoal/20 focus:border-primary bg-white"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-heading text-sm text-charcoal mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 font-body text-base border-charcoal/20 focus:border-primary bg-white"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block font-heading text-sm text-charcoal mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="font-body text-base border-charcoal/20 focus:border-primary resize-none bg-white"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto h-12 px-10 font-heading text-base bg-primary hover:bg-primary/90 text-white transition-all duration-300"
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
                        <p className="font-body text-charcoal leading-relaxed">
                          RESERVA PERALILLO, HIJUELA 4 Y 5, PAINE
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-body text-charcoal">+56222158858</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-body text-charcoal">PGARATE@ABRANTES.CL</p>
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
    </Layout>
  );
};

export default Contacto;
