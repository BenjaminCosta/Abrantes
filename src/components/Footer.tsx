import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logoAbrantes from "@/assets/abrantes_logo2.png";
import sistemaB from "@/assets/sistema_B.webp";
import logoSutil from "@/assets/sutil2.png";

const footerLinks = {
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Productos", href: "/productos" },
    { label: "Recetas", href: "/recetas" },
    { label: "Sustentabilidad", href: "/sustentabilidad" },
  ],
  contacto: [
    { label: "Contacto", href: "/contacto" },
    { label: "Trabaja con Nosotros", href: "/trabaja-con-nosotros" },
    { label: "Canal de Denuncias", href: "https://empresassutil.eticaenlinea.cl/denuncias", external: true },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Brand & Certification */}
          <div className="lg:col-span-5 lg:pr-8 lg:border-r border-white/10">
            <img
              src={logoAbrantes}
              alt="Abrantes"
              className="h-10 lg:h-12 w-auto mb-8 brightness-0 invert"
            />
            <p className="text-white/60 leading-relaxed max-w-md mb-12 text-sm lg:text-base">
              Cultivando excelencia desde 1989. Champiñones premium que transforman 
              cada platillo en una experiencia única.
            </p>

            {/* Sistema B Certification - Destacado */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={sistemaB}
                  alt="Certificación Sistema B"
                  className="h-12 w-auto"
                />
                <div>
                  <p className="font-heading text-white text-sm">
                    Empresa Certificada
                  </p>
                  <p className="text-white/60 text-xs font-sans">
                    Sistema B
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                Comprometidos con generar un impacto positivo en la sociedad y el medio ambiente.
              </p>
            </div>
          </div>

          {/* Middle Column - Links */}
          <div className="lg:col-span-4 lg:px-8 grid grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h4 className="font-heading text-white mb-6 text-sm tracking-wider uppercase">
                Navegación
              </h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-white mb-6 text-sm tracking-wider uppercase">
                Información
              </h4>
              <ul className="space-y-3">
                {footerLinks.contacto.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-white transition-colors duration-300 block"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-300 block text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Social & Contact */}
          <div className="lg:col-span-3 lg:pl-8 lg:border-l border-white/10">
            <h4 className="font-heading text-white mb-6 text-sm tracking-wider uppercase">
              Síguenos
            </h4>
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-11 h-11 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-white/10 to-transparent mb-6" />

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-white/40 text-xs mb-1">Email</p>
                <a 
                  href="mailto:contacto@abrantes.cl"
                  className="text-white/80 hover:text-white text-sm transition-colors duration-300"
                >
                  contacto@abrantes.cl
                </a>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">Teléfono</p>
                <a 
                  href="tel:+56000000000"
                  className="text-white/80 hover:text-white text-sm transition-colors duration-300"
                >
                  +56 (00) 000 0000
                </a>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-white/10 to-transparent mb-6" />

            {/* Grupo Sutil - Esquinado a la derecha */}
            <div className="flex items-center justify-end gap-2">
              <p className="text-white/40 text-xs">Parte de</p>
              <a 
                href="https://www.empresassutil.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logoSutil}
                  alt="Grupo Sutil"
                  className="h-7 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Abrantes Premium. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/privacidad"
                className="text-white/40 hover:text-white/60 text-xs transition-colors duration-300"
              >
                Privacidad
              </Link>
              <Link 
                to="/terminos"
                className="text-white/40 hover:text-white/60 text-xs transition-colors duration-300"
              >
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
