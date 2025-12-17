import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Shield, AlertTriangle, Lock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CanalDenuncias = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Denuncia enviada",
      description: "Tu denuncia ha sido recibida y será tratada con confidencialidad.",
    });
    setFormData({ type: "", description: "", email: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
        <div className="container-narrow relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
              Canal de Denuncias
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-xl text-cream/75 font-sans max-w-2xl">
              Un espacio seguro y confidencial para reportar irregularidades
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center p-6 bg-secondary rounded-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">Confidencialidad</h3>
                <p className="text-sm text-muted-foreground">
                  Tu identidad será protegida en todo momento
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="text-center p-6 bg-secondary rounded-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">Seguridad</h3>
                <p className="text-sm text-muted-foreground">
                  Canal encriptado y seguro para tu protección
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="text-center p-6 bg-secondary rounded-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">Sin Represalias</h3>
                <p className="text-sm text-muted-foreground">
                  Garantizamos protección contra represalias
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <h2 className="font-heading text-2xl text-foreground text-center mb-8">
                Realizar una Denuncia
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tipo de denuncia
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    required
                    className="w-full h-11 px-3 rounded bg-secondary border border-border text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="etica">Violación código de ética</option>
                    <option value="acoso">Acoso laboral</option>
                    <option value="fraude">Fraude o corrupción</option>
                    <option value="seguridad">Seguridad laboral</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Descripción detallada
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={6}
                    placeholder="Describe la situación con el mayor detalle posible..."
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email de contacto (opcional)
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Para seguimiento de tu denuncia"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Enviar Denuncia
                </Button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CanalDenuncias;
