import React from "react";
import BreadcrumbArea from "../common/BreadcrumbArea";
import MobileHeader from "../common/MobileHeader";
import ProductAreaHeader from "../common/ProductAreaHeader";
import TermConditionsArea from "../common/TermConditionsArea";
import Footer from "./Footer";
import MapArea from "./MapArea";

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
