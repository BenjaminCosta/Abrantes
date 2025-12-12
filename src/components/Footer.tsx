import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logoAbrantes from "@/assets/logo-abrantes.png";

const footerLinks = {
  empresa: [
    { label: "Sobre Nosotros", href: "/empresa" },
    { label: "Misión y Visión", href: "/mision-vision" },
    { label: "Certificaciones", href: "/certificaciones" },
    { label: "Trabaja con Nosotros", href: "/trabaja-con-nosotros" },
  ],
  productos: [
    { label: "Catálogo", href: "/catalogo" },
    { label: "Formatos", href: "/formatos" },
    { label: "Fichas Técnicas", href: "/fichas-tecnicas" },
    { label: "Recetas", href: "/recetas" },
  ],
  legal: [
    { label: "Código de Ética", href: "/codigo-etica" },
    { label: "Canal de Denuncias", href: "/denuncias" },
    { label: "Política de Privacidad", href: "/privacidad" },
    { label: "Términos y Condiciones", href: "/terminos" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-narrow section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logoAbrantes}
              alt="Abrantes"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="font-body text-sm text-cream/70 leading-relaxed max-w-sm mb-6">
              Más de tres décadas cultivando champiñones de la más alta calidad, 
              con compromiso sustentable y excelencia en cada producto.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-cream/10 rounded-sm flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-cream/50">
              © {new Date().getFullYear()} Abrantes. Todos los derechos reservados.
            </p>
            <p className="font-body text-sm text-cream/50">
              Una empresa del Grupo Sutil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
