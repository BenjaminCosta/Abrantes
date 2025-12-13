import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Sustentabilidad from "./pages/Sustentabilidad";
import Productos from "./pages/Productos";
import Recetas from "./pages/Recetas";
import RecetaDetalle from "./pages/RecetaDetalle";
import CanalDenuncias from "./pages/CanalDenuncias";
import TrabajaConNosotros from "./pages/TrabajaConNosotros";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/sustentabilidad" element={<Sustentabilidad />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/recetas/:id" element={<RecetaDetalle />} />
          <Route path="/canal-de-denuncias" element={<CanalDenuncias />} />
          <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
