import Layout from "@/components/Layout";
import ChampinonesSection from "@/components/productos/ChampinonesSection";
import SustratoSection from "@/components/productos/SustratoSection";
import InformacionNutricionalSection from "@/components/productos/InformacionNutricionalSection";

const Productos = () => {
  return (
    <Layout>
      <ChampinonesSection />
      <SustratoSection />
      <InformacionNutricionalSection />
    </Layout>
  );
};

export default Productos;
