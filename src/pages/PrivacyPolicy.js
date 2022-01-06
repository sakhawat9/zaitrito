import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";
import PrivacyPolicyArea from "../components/containers/PrivacyPolicyArea";

const PrivacyPolicy = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Product Collections" />
      <PrivacyPolicyArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
