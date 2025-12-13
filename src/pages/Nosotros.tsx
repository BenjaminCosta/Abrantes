import Layout from "@/components/Layout";
import EmpresaSection from "@/components/nosotros/EmpresaSection";
import MisionVisionSection from "@/components/nosotros/MisionVisionSection";
import CertificacionesSection from "@/components/nosotros/CertificacionesSection";
import ProcesoProductivoSection from "@/components/nosotros/ProcesoProductivoSection";
import ResponsabilidadSection from "@/components/nosotros/ResponsabilidadSection";
import CodigoEticaSection from "@/components/nosotros/CodigoEticaSection";
import PoliticaSeguridadSection from "@/components/nosotros/PoliticaSeguridadSection";

const Nosotros = () => {
  return (
    <Layout>
      <EmpresaSection />
      <MisionVisionSection />
      <CertificacionesSection />
      <ProcesoProductivoSection />
      <ResponsabilidadSection />
      <CodigoEticaSection />
      <PoliticaSeguridadSection />
    </Layout>
  );
};

export default Nosotros;
