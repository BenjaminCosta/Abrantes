import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logoAbrantes from "@/assets/logo.png";

interface DropdownItem {
  label: string;
  href?: string;
  submenu?: DropdownItem[];
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
  external?: boolean;
}

const navItems: NavItem[] = [
  {
    label: "Nosotros",
    dropdown: [
      { label: "Empresa", href: "/nosotros#empresa" },
      { label: "Misión y Visión", href: "/nosotros#mision-vision" },
      { label: "Certificaciones", href: "/nosotros#certificaciones" },
      { label: "Responsabilidad Social Empresarial", href: "/nosotros#responsabilidad-social" },
      { label: "Código de Ética y Conducta", href: "/nosotros#codigo-etica" },
      { label: "Política de Seguridad de la Información", href: "/nosotros#politica-seguridad" },
    ],
  },
  {
    label: "Productos",
    dropdown: [
      { 
        label: "Champiñones", 
        href: "/productos#champinones",
        submenu: [
          { label: "Procesos", href: "/productos#procesos" },
          { label: "Información Nutricional", href: "/productos#informacion-nutricional" },
          { label: "Ventajas del Consumo", href: "/productos#ventajas" },
          { label: "Recetas", href: "/productos#recetas" },
        ]
      },
      { label: "Sustrato Vegetal Orgánico", href: "/productos#sustrato" },
    ],
  },
  { label: "Sustentabilidad", href: "/sustentabilidad" },
  { label: "Contacto", href: "/contacto" },
  { label: "Canal de Denuncias", href: "https://empresassutil.eticaenlinea.cl/denuncias", external: true },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href?: string) => {
    if (!href) return false;
    return location.pathname === href || location.pathname === href.split('#')[0];
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-charcoal/5">
      
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-24 lg:h-28">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={logoAbrantes} 
              alt="Abrantes - La calidad tiene nombre" 
              className="h-16 lg:h-20 xl:h-22 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-12 2xl:gap-14">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button 
                    className={`relative flex items-center gap-2 text-[15px] xl:text-[16px] font-heading uppercase tracking-[0.08em] transition-all duration-300 py-2 ${
                      item.dropdown.some(sub => isActive(sub.href.split('#')[0])) 
                        ? 'text-abrantes-red' 
                        : 'text-charcoal/80 hover:text-abrantes-red'
                    }`}
                  >
                    <span className="relative">
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 h-[2px] bg-abrantes-red transition-all duration-300 ${
                        item.dropdown.some(sub => isActive(sub.href.split('#')[0])) 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
                      }`} />
                    </span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" strokeWidth={2.5} />
                  </button>
                ) : item.external ? (
                  <a
                    href={item.href || "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-[15px] xl:text-[16px] font-heading uppercase tracking-[0.08em] transition-all duration-300 py-2 text-charcoal/80 hover:text-abrantes-red group"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-abrantes-red transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                ) : (
                  <Link
                    to={item.href || "/"}
                    className={`relative text-[15px] xl:text-[16px] font-heading uppercase tracking-[0.08em] transition-all duration-300 py-2 group ${
                      isActive(item.href || '/') 
                        ? 'text-abrantes-red' 
                        : 'text-charcoal/80 hover:text-abrantes-red'
                    }`}
                  >
                    <span className="relative">
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 h-[2px] bg-abrantes-red transition-all duration-300 ${
                        isActive(item.href || '/') 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
                      }`} />
                    </span>
                  </Link>
                )}

                {/* Dropdown - Premium Style with Nested Submenu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-4 z-[100]">
                    <div className="bg-white border border-charcoal/10 rounded-2xl shadow-2xl min-w-[300px] overflow-visible">
                      {item.dropdown.map((subItem, index) => (
                        <div
                          key={subItem.label}
                          className="relative group/submenu"
                          onMouseEnter={() => subItem.submenu && setActiveSubmenu(subItem.label)}
                          onMouseLeave={() => setActiveSubmenu(null)}
                        >
                          {subItem.submenu ? (
                            <>
                              <Link
                                to={subItem.href || "#"}
                                onClick={(e) => {
                                  if (subItem.href?.includes('#')) {
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
                                className={`flex items-center justify-between px-6 py-4 text-[14px] font-heading text-charcoal/70 hover:text-abrantes-red hover:bg-beige/30 transition-all duration-200 border-l-[3px] border-transparent hover:border-abrantes-red ${
                                  index === 0 ? 'rounded-t-2xl' : ''
                                }`}
                              >
                                {subItem.label}
                                <ChevronDown className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/submenu:rotate-180" strokeWidth={2.5} />
                              </Link>
                              
                              {/* Nested Submenu - Below */}
                              {activeSubmenu === subItem.label && (
                                <div className="pl-6 pb-2">
                                  {subItem.submenu.map((nestedItem, nestedIndex) => (
                                    <Link
                                      key={nestedItem.label}
                                      to={nestedItem.href || "#"}
                                      onClick={(e) => {
                                        if (nestedItem.href?.includes('#')) {
                                          const [path, hash] = nestedItem.href.split('#');
                                          if (location.pathname === path) {
                                            e.preventDefault();
                                            const element = document.getElementById(hash);
                                            if (element) {
                                              element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                          }
                                        }
                                      }}
                                      className="block px-4 py-2.5 text-[13px] font-heading text-charcoal/60 hover:text-abrantes-red hover:bg-beige/20 transition-all duration-200 rounded-lg mt-1"
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              to={subItem.href || "#"}
                              onClick={(e) => {
                                if (subItem.href?.includes('#')) {
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
                              className={`block px-6 py-4 text-[14px] font-heading text-charcoal/70 hover:text-abrantes-red hover:bg-beige/30 transition-all duration-200 border-l-[3px] border-transparent hover:border-abrantes-red ${
                                index === 0 ? 'rounded-t-2xl' : ''
                              } ${
                                index === item.dropdown!.length - 1 ? 'rounded-b-2xl' : ''
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-charcoal p-2 hover:text-abrantes-red transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream border-t border-charcoal/10 shadow-xl">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-3 text-charcoal font-heading text-base hover:text-abrantes-red transition-colors"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <div key={subItem.label}>
                            {subItem.submenu ? (
                              <div>
                                <button
                                  className="flex items-center justify-between w-full py-2.5 text-sm text-charcoal/80 hover:text-abrantes-red transition-colors border-l-2 border-transparent hover:border-abrantes-red pl-3"
                                  onClick={() => {
                                    // Toggle submenu
                                    setActiveSubmenu(activeSubmenu === subItem.label ? null : subItem.label);
                                    // Also navigate to main item
                                    if (subItem.href) {
                                      window.location.href = subItem.href;
                                    }
                                  }}
                                >
                                  {subItem.label}
                                  <ChevronDown className={`w-3 h-3 transition-transform ${activeSubmenu === subItem.label ? 'rotate-180' : ''}`} />
                                </button>
                                {activeSubmenu === subItem.label && (
                                  <div className="pl-4 pt-1 space-y-1">
                                    {subItem.submenu.map((nestedItem) => (
                                      <Link
                                        key={nestedItem.label}
                                        to={nestedItem.href || "#"}
                                        onClick={(e) => {
                                          setMobileMenuOpen(false);
                                          setActiveSubmenu(null);
                                          if (nestedItem.href?.includes('#')) {
                                            const [path, hash] = nestedItem.href.split('#');
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
                                        className="block py-2 text-xs text-charcoal/70 hover:text-abrantes-red transition-colors border-l-2 border-transparent hover:border-abrantes-red pl-3"
                                      >
                                        {nestedItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                to={subItem.href || "#"}
                                onClick={(e) => {
                                  setMobileMenuOpen(false);
                                  if (subItem.href?.includes('#')) {
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
                                className="block py-2.5 text-sm text-charcoal/80 hover:text-abrantes-red transition-colors border-l-2 border-transparent hover:border-abrantes-red pl-3"
                              >
                                {subItem.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.external ? (
                  <a
                    href={item.href || "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 font-heading text-base text-charcoal hover:text-abrantes-red transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href || "/"}
                    className={`block py-3 font-heading text-base ${
                      isActive(item.href || '/') ? 'text-abrantes-red' : 'text-charcoal hover:text-abrantes-red'
                    } transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
