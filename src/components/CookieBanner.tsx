import { useState, useEffect } from "react";
import { X, Cookie, Shield, Settings } from "lucide-react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] pointer-events-none">
      {/* Elegant, compact banner */}
      <div className={`pointer-events-auto transition-all duration-500 ${
        showBanner ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        
        {/* Main Banner Content */}
        {!showPreferences ? (
          <div className="bg-charcoal shadow-2xl border-t-4 border-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4 md:py-5">
                
                {/* Left side: Icon & Text */}
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cookie className="w-5 h-5 text-primary" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg md:text-xl text-white font-bold mb-1">
                      Utilizamos Cookies
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
                      Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas su uso.{" "}
                      <a 
                        href="/politica-privacidad" 
                        className="text-accent hover:text-accent/80 font-semibold transition-colors underline"
                      >
                        Más información
                      </a>
                    </p>
                  </div>
                </div>

                {/* Right side: Buttons */}
                <div className="flex flex-wrap items-center gap-2 md:gap-3 md:flex-shrink-0">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-4 py-2 bg-white/10 text-white font-heading font-medium text-sm rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2"
                  >
                    <Settings className="w-3.5 h-3.5" strokeWidth={2.5} />
                    <span className="hidden sm:inline">Personalizar</span>
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 bg-white/10 text-white font-heading font-medium text-sm rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Rechazar
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-5 py-2 bg-primary text-white font-sans text-sm tracking-wide font-semibold hover:bg-primary/90 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Preferences Panel */
          <div className="bg-charcoal shadow-2xl border-t-4 border-primary max-h-[80vh] overflow-y-auto">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-heading text-xl text-white font-bold">
                    Preferencias de Cookies
                  </h3>
                </div>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white/80" strokeWidth={2} />
                </button>
              </div>

              <p className="text-sm text-white/70 mb-5">
                Gestiona tus preferencias de cookies. Las cookies necesarias son esenciales para el funcionamiento del sitio.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-3 mb-5">
                {/* Necessary */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <h4 className="font-heading text-base text-white font-semibold">
                        Cookies Necesarias
                      </h4>
                      <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-heading font-semibold rounded">
                        Siempre activas
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-white/60">
                    Esenciales para el funcionamiento del sitio web.
                  </p>
                </div>

                {/* Analytics */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-heading text-base text-white font-semibold">
                      Cookies de Análisis
                    </h4>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                        preferences.analytics ? 'bg-primary' : 'bg-white/20'
                      }`}
                    >
                      <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-md ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                  <p className="text-sm text-white/60">
                    Ayudan a entender cómo interactúas con el sitio.
                  </p>
                </div>

                {/* Marketing */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-heading text-base text-white font-semibold">
                      Cookies de Marketing
                    </h4>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                        preferences.marketing ? 'bg-primary' : 'bg-white/20'
                      }`}
                    >
                      <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-md ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                  <p className="text-sm text-white/60">
                    Muestran anuncios relevantes según tus intereses.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-5 py-2.5 bg-primary text-white font-sans text-sm tracking-wide font-semibold hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
                >
                  Guardar Preferencias
                </button>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="flex-1 px-5 py-2.5 bg-white/10 text-white font-heading font-medium text-sm rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CookieBanner;
