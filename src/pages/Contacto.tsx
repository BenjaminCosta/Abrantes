import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
        <div className="container-narrow relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
              Contacto
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-accent italic text-xl text-cream/75 max-w-2xl">
              Estamos aquí para atenderte
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <AnimateOnScroll animation="fade-up">
                <h2 className="font-heading text-2xl text-foreground mb-6">Envíanos un mensaje</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={100}>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-heading text-foreground mb-2">Nombre completo</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-heading text-foreground mb-2">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-heading text-foreground mb-2">Teléfono</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-heading text-foreground mb-2">Asunto</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading text-foreground mb-2">Mensaje</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-secondary border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                    Enviar Mensaje
                  </Button>
                </form>
              </AnimateOnScroll>
            </div>

            {/* Contact Info */}
            <div>
              <AnimateOnScroll animation="fade-left">
                <h2 className="font-heading text-2xl text-foreground mb-6">Información de Contacto</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left" delay={100}>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-foreground mb-1">Dirección</h3>
                      <p className="font-body text-sm text-muted-foreground">
                        Camino Las Nieves S/N, Buin<br />
                        Región Metropolitana, Chile
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-foreground mb-1">Teléfono</h3>
                      <p className="font-body text-sm text-muted-foreground">+56 2 2821 7000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-foreground mb-1">Email</h3>
                      <p className="font-body text-sm text-muted-foreground">contacto@abrantes.cl</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-foreground mb-1">Horario</h3>
                      <p className="font-body text-sm text-muted-foreground">Lunes a Viernes: 08:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Map */}
              <AnimateOnScroll animation="fade-left" delay={200}>
                <div className="aspect-video bg-secondary rounded-sm overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.5!2d-70.74!3d-33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQzJzQ4LjAiUyA3MMKwNDQnMjQuMCJX!5e0!3m2!1ses!2scl!4v1600000000000!5m2!1ses!2scl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Abrantes"
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
