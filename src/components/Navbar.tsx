import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logoAbrantes from "@/assets/logo.png";
import logoSutil from "@/assets/logo_sutil.png";
import sistemaB from "@/assets/sistema_B.webp";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Nosotros",
    dropdown: [
      { label: "Empresa", href: "/nosotros#empresa" },
      { label: "Misión / Visión", href: "/nosotros#mision-vision" },
      { label: "Certificaciones", href: "/nosotros#certificaciones" },
      { label: "Proceso Productivo", href: "/nosotros#proceso-productivo" },
      { label: "Responsabilidad Social Empresarial", href: "/nosotros#responsabilidad-social" },
      { label: "Código de Ética y Conducta Empresas Sutil", href: "/nosotros#codigo-etica" },
      { label: "Política de seguridad de la información", href: "/nosotros#politica-seguridad" },
    ],
  },
  { label: "Sustentabilidad", href: "/sustentabilidad" },
  {
    label: "Productos",
    dropdown: [
      { label: "Champiñones", href: "/productos#champinones" },
      { label: "Sustrato vegetal orgánico", href: "/productos#sustrato" },
      { label: "Información nutricional", href: "/productos#informacion-nutricional" },
    ],
  },
  { label: "Recetas", href: "/recetas" },
  { label: "Trabaja con Nosotros", href: "/trabaja-con-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ease-out ${
      isScrolled 
        ? 'bg-charcoal shadow-2xl' 
        : 'bg-gradient-to-b from-black/70 via-black/50 to-transparent backdrop-blur-[2px]'
    }`}>
      {/* Thin accent line at bottom when scrolled */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 transition-opacity duration-200" />
      )}
      
      <div className="w-full px-8 md:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between h-24 lg:h-28 w-full">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img 
              src={logoAbrantes} 
              alt="Abrantes - La calidad tiene nombre" 
              className="h-14 lg:h-20 w-auto transition-all duration-300"
              style={{ filter: 'brightness(0) saturate(100%) invert(29%) sepia(89%) saturate(2465%) hue-rotate(347deg) brightness(84%) contrast(92%)' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-10 flex-1 justify-end">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button 
                    className={`relative flex items-center gap-1.5 text-base xl:text-lg font-heading font-semibold tracking-wide transition-all duration-300 ${
                      item.dropdown.some(sub => isActive(sub.href.split('#')[0])) 
                        ? 'text-primary' 
                        : 'text-white hover:text-primary'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    {/* Underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    to={item.href || "/"}
                    className={`relative text-base xl:text-lg font-heading font-semibold tracking-wide transition-all duration-300 ${
                      isActive(item.href || '/') ? 'text-primary' : 'text-white hover:text-primary'
                    } inline-block group`}
                  >
                    {item.label}
                    {/* Underline effect */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive(item.href || '/') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-3 z-[100]">
                    <div className="bg-charcoal/95 backdrop-blur-md border border-primary/20 rounded-lg shadow-2xl min-w-[220px] overflow-hidden opacity-0 animate-[fadeIn_0.15s_ease-out_forwards]">
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={(e) => {
                            // Handle anchor navigation
                            if (subItem.href.includes('#')) {
                              const [path, hash] = subItem.href.split('#');
                              if (location.pathname === path) {
                                e.preventDefault();
                                const element = document.getElementById(hash);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }
                            }
                          }}
                          className="relative block px-5 py-3 text-base text-white/90 hover:text-primary hover:bg-primary/5 border-l-4 border-transparent hover:border-primary transition-all duration-150 group"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Canal de Denuncias - External Link */}
            <a
              href="https://empresassutil.eticaenlinea.cl/denuncias"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-base xl:text-lg font-heading font-semibold tracking-wide transition-all duration-300 text-white hover:text-primary inline-block group"
            >
              Canal de Denuncias
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Logos - Sistema B y Sutil */}
            <div className="flex items-center gap-3 ml-2">
              

              {/* Logo Sutil - External Link */}
              <a
                href="https://www.empresassutil.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img 
                  src={logoSutil} 
                  alt="Empresas Sutil" 
                  className="h-5 xl:h-7 w-auto"
                />
              </a>
            </div>
            {/* Logo Sistema B - External Link */}
              <a
                href="https://abrantes.cl/wp-content/uploads/2024/06/Abrantes-Carta-certificacion-Empresa-B-Certificada-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                title="Certificación Empresa B"
              >
                <img 
                  src={sistemaB} 
                  alt="Certificación Sistema B" 
                  className="h-5 xl:h-7 w-auto"
                />
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal/98 backdrop-blur-md border-t border-primary/20 animate-[fadeIn_0.15s_ease-out] shadow-2xl">
          <div className="px-8 md:px-10 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-3 text-white font-heading font-semibold text-base hover:text-primary transition-colors"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 pb-2 space-y-1 animate-[fadeIn_0.15s_ease-out]">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={(e) => {
                              setMobileMenuOpen(false);
                              // Handle anchor navigation
                              if (subItem.href.includes('#')) {
                                const [path, hash] = subItem.href.split('#');
                                if (location.pathname === path) {
                                  e.preventDefault();
                                  setTimeout(() => {
                                    const element = document.getElementById(hash);
                                    if (element) {
                                      element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }, 100);
                                }
                              }
                            }}
                            className="block py-2.5 text-base text-white/80 hover:text-primary transition-colors duration-150 border-l-2 border-transparent hover:border-primary pl-3"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href || "/"}
                    className={`block py-3 font-heading font-semibold text-base ${
                      isActive(item.href || '/') ? 'text-primary' : 'text-white hover:text-primary'
                    } transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Canal de Denuncias - Mobile */}
            <a
              href="https://empresassutil.eticaenlinea.cl/denuncias"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 font-heading font-semibold text-base text-white hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Canal de Denuncias
            </a>

            {/* Logos - Mobile */}
            <div className="pt-4 pb-2 flex items-center justify-center gap-4 border-t border-white/10 mt-4">
              <a
                href="https://abrantes.cl/wp-content/uploads/2024/06/Abrantes-Carta-certificacion-Empresa-B-Certificada-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                onClick={() => setMobileMenuOpen(false)}
                title="Certificación Empresa B"
              >
                <img 
                  src={sistemaB} 
                  alt="Certificación Sistema B" 
                  className="h-6 w-auto"
                />
              </a>
              <a
                href="https://www.empresassutil.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img 
                  src={logoSutil} 
                  alt="Empresas Sutil" 
                  className="h-6 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
