import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import TermConditionsArea from "../components/common/TermConditionsArea";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";

const TermConditions = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Term & Conditions" />
      <TermConditionsArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default TermConditions;
