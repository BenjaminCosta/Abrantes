import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Heart, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Heart, title: "Bienestar", description: "Seguro de salud y programas de bienestar" },
  { icon: TrendingUp, title: "Desarrollo", description: "Capacitación continua y oportunidades de crecimiento" },
  { icon: Users, title: "Equipo", description: "Ambiente colaborativo y respetuoso" },
  { icon: Briefcase, title: "Estabilidad", description: "Empresa sólida con más de 30 años de trayectoria" },
];

const TrabajaConNosotros = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Postulación enviada",
      description: "Hemos recibido tu postulación. Te contactaremos pronto.",
    });
    setFormData({ name: "", email: "", phone: "", position: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
        <div className="container-narrow relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
              Trabaja con Nosotros
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="font-accent italic text-xl text-cream/75 max-w-2xl">
              Únete a un equipo comprometido con la excelencia
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl text-foreground text-center mb-12">
              ¿Por qué trabajar en Abrantes?
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <AnimateOnScroll key={benefit.title} animation="fade-up" delay={index * 80}>
                <div className="text-center p-6 bg-secondary rounded-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <h2 className="font-heading text-3xl text-foreground text-center mb-4">
                Postula Aquí
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="font-body text-muted-foreground text-center mb-10">
                Completa el formulario y adjunta tu CV para postular
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={150}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-heading text-foreground mb-2">Nombre completo</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-heading text-foreground mb-2">Teléfono</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading text-foreground mb-2">Cargo de interés</label>
                    <Input
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      placeholder="Ej: Operador de planta"
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-heading text-foreground mb-2">Mensaje (opcional)</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Cuéntanos sobre ti..."
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Enviar Postulación
                </Button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrabajaConNosotros;
