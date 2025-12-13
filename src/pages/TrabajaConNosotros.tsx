import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, Heart, TrendingUp, Users, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import trabajaNosotros from "@/assets/trabaja_nosotros.jpg";

const benefits = [
  { icon: Heart, title: "Bienestar", description: "Seguro de salud y programas de bienestar" },
  { icon: TrendingUp, title: "Desarrollo", description: "Capacitación continua y oportunidades de crecimiento" },
  { icon: Users, title: "Equipo", description: "Ambiente colaborativo y respetuoso" },
  { icon: Briefcase, title: "Estabilidad", description: "Empresa sólida con más de 30 años de trayectoria" },
];

const TrabajaConNosotros = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    comuna: "",
    phone: "",
    cv: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Postulación enviada",
      description: "Hemos recibido tu postulación. Te contactaremos pronto.",
    });
    setFormData({ fullName: "", email: "", address: "", comuna: "", phone: "", cv: null });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  return (
    <Layout>
      {/* Hero Section con Imagen de Fondo */}
      <section className="relative h-[580px] overflow-hidden -mt-20">
        {/* Background Image - Full Height including Navbar */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${trabajaNosotros})` }}
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
                  Trabaja con Nosotros
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <p className="font-accent italic text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto">
                  Únete a un equipo comprometido con la excelencia
                </p>
              </AnimateOnScroll>

            </div>
          </div>
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
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <div className="h-1 w-20 bg-primary" />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
                  Postula Aquí
                </h2>
                <p className="font-accent italic text-lg text-charcoal/70 max-w-xl mx-auto">
                  Completa el formulario y adjunta tu CV para formar parte de nuestro equipo
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre completo */}
                <div>
                  <label className="block font-heading text-sm text-charcoal mb-2">
                    Nombre completo <span className="text-primary">*</span>
                  </label>
                  <Input
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="h-12 font-body text-base border-charcoal/20 focus:border-primary bg-white"
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-heading text-sm text-charcoal mb-2">
                    Email <span className="text-primary">*</span>
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

                {/* Dirección completa */}
                <div>
                  <label className="block font-heading text-sm text-charcoal mb-2">
                    Dirección completa <span className="text-primary">*</span>
                  </label>
                  <Input
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    className="h-12 font-body text-base border-charcoal/20 focus:border-primary bg-white"
                    placeholder="Calle, número, depto/casa"
                  />
                </div>

                {/* Comuna */}
                <div>
                  <label className="block font-heading text-sm text-charcoal mb-2">
                    Comuna <span className="text-primary">*</span>
                  </label>
                  <Input
                    value={formData.comuna}
                    onChange={(e) => setFormData({ ...formData, comuna: e.target.value })}
                    required
                    className="h-12 font-body text-base border-charcoal/20 focus:border-primary bg-white"
                    placeholder="Tu comuna"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block font-heading text-sm text-charcoal mb-2">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 font-body text-base border-charcoal/20 focus:border-primary bg-white"
                    placeholder="+56 9 1234 5678"
                  />
                </div>

                {/* Subir CV */}
                <div>
                  <label className="block font-heading text-sm text-charcoal mb-2">
                    Subir CV
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="cv-upload"
                    />
                    <label
                      htmlFor="cv-upload"
                      className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-charcoal/20 rounded-sm bg-beige/30 hover:bg-beige/50 transition-colors cursor-pointer"
                    >
                      <Upload className="w-8 h-8 text-primary mb-2" />
                      <span className="font-body text-sm text-charcoal/70">
                        {formData.cv ? formData.cv.name : "Click or drag a file to this area to upload"}
                      </span>
                      <span className="font-body text-xs text-charcoal/50 mt-1">
                        PDF, DOC, DOCX (Máx. 5MB)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full h-14 font-heading text-lg bg-primary hover:bg-primary/90 text-white transition-all duration-300"
                >
                  Enviar
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
