import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";
import RefundPolicyArea from "../components/containers/RefundPolicyArea";

const RefundPolicy = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Refund Policy" />
      <RefundPolicyArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default RefundPolicy;
