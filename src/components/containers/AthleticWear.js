import React from "react";
import BreadcrumbArea from "../common/BreadcrumbArea";
import MobileHeader from "../common/MobileHeader";
import ProductAreaHeader from "../common/ProductAreaHeader";
import Footer from "./Footer";
import MapArea from "./MapArea";

const AthleticWear = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default AthleticWear;
