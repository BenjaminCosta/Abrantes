import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, User, MessageSquare, Building } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactoImg from "@/assets/unsplash/mush1.jpg";
import mushroomBg from "@/assets/unsplash/mushroom-faci3.jpg";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section con Imagen de Fondo y Ondas */}
<section className="relative h-[580px] overflow-hidden pt-24 lg:pt-28">
  {/* Background Image - Full Height including Navbar */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${contactoImg})` }}
  />
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/20" />
  
 {/* Ondas Blancas Superiores - Variante Moderna */}
<div className="absolute top-0 left-0 right-0 h-32">
  <svg 
    viewBox="0 0 1200 120" 
    preserveAspectRatio="none" 
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
      fill="white"
    />
  </svg>
</div>
  
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
      {/* Formulario Mejorado - Nueva sección separada */}
      <section id="formulario-contacto" className="section-padding bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                  <div className="h-1 w-20 bg-primary" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
                  Contáctanos directamente
                </h2>
                <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
                  Completa el formulario y nuestro equipo se pondrá en contacto contigo a la brevedad
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-charcoal/10">
                <div className="p-8 md:p-12 lg:p-16">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Información Personal */}
                    <div className="space-y-6">
                      <h3 className="font-heading text-xl text-charcoal flex items-center gap-3">
                        <User className="w-5 h-5 text-primary" />
                        Información personal
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Nombre */}
                        <div className="space-y-3">
                          <label className="block text-sm font-medium text-charcoal">
                            Nombre completo *
                          </label>
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/30">
                              <User className="w-4 h-4" />
                            </div>
                            <Input
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              className="h-12 pl-10 text-base border-charcoal/15 focus:border-primary bg-white/50"
                              placeholder="Tu nombre completo"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-3">
                          <label className="block text-sm font-medium text-charcoal">
                            Email *
                          </label>
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/30">
                              <Mail className="w-4 h-4" />
                            </div>
                            <Input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              className="h-12 pl-10 text-base border-charcoal/15 focus:border-primary bg-white/50"
                              placeholder="tu@email.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Teléfono */}
                        <div className="space-y-3">
                          <label className="block text-sm font-medium text-charcoal">
                            Teléfono
                          </label>
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/30">
                              <Phone className="w-4 h-4" />
                            </div>
                            <Input
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="h-12 pl-10 text-base border-charcoal/15 focus:border-primary bg-white/50"
                              placeholder="+56 9 1234 5678"
                            />
                          </div>
                        </div>

                        {/* Empresa */}
                        <div className="space-y-3">
                          <label className="block text-sm font-medium text-charcoal">
                            Empresa
                          </label>
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/30">
                              <Building className="w-4 h-4" />
                            </div>
                            <Input
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="h-12 pl-10 text-base border-charcoal/15 focus:border-primary bg-white/50"
                              placeholder="Nombre de tu empresa"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Asunto y Mensaje */}
                    <div className="space-y-6">
                      <h3 className="font-heading text-xl text-charcoal flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        Tu consulta
                      </h3>

                      {/* Asunto */}
                      <div className="space-y-3">
                        <label className="block text-sm font-medium text-charcoal">
                          Asunto *
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          className="w-full h-12 px-4 text-base border border-charcoal/15 rounded-md focus:border-primary bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
                        >
                          <option value="">Selecciona el motivo de tu contacto</option>
                          <option value="consulta-general">Consulta general</option>
                          <option value="pedido">Realizar un pedido</option>
                          <option value="cotizacion">Solicitar cotización</option>
                          <option value="distribuidor">Ser distribuidor</option>
                          <option value="proveedor">Ser proveedor</option>
                          <option value="trabajo">Trabajar con nosotros</option>
                          <option value="otros">Otro asunto</option>
                        </select>
                      </div>

                      {/* Mensaje */}
                      <div className="space-y-3">
                        <label className="block text-sm font-medium text-charcoal">
                          Mensaje *
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={6}
                          className="text-base border-charcoal/15 focus:border-primary bg-white/50 resize-none"
                          placeholder="Describe tu consulta o solicitud con detalle..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full h-14 px-10 text-base bg-charcoal hover:bg-charcoal/90 text-white transition-all duration-300 font-sans tracking-wide font-semibold rounded-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                      >
                        <span>Enviar mensaje</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <p className="text-sm text-charcoal/50 text-center mt-4">
                        * Campos obligatorios
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Sección Contacto Institucional (MANTENIDA COMO ESTABA) */}
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
                    href="#formulario-contacto"
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

      {/* Mapa debajo de la sección institucional - Ancho completo */}
      <section className="w-full">
        <AnimateOnScroll animation="fade-up">
          <div className="h-[400px] lg:h-[500px] w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.234567890123!2d-70.7421!3d-33.8567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUxJzI0LjEiUyA3MMKwNDQnMzEuNiJX!5e0!3m2!1ses!2scl!4v1600000000000!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Abrantes - Paine"
              className="absolute inset-0"
            />
            {/* Overlay sutil para mejor visualización */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/5 via-transparent to-white/5" />
          </div>
        </AnimateOnScroll>
      </section>

      
    </Layout>
  );
};

export default Contacto;