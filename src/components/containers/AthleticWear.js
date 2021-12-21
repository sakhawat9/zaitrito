import React from "react";
import BreadcrumbArea from "../common/BreadcrumbArea";
import MobileHeader from "../common/MobileHeader";
import ProductAreaHeader from "../common/ProductAreaHeader";
import Footer from "./Footer";
import MapArea from "./MapArea";
import ProductArea02 from "./Product-area-02";

const AthleticWear = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Product Collections" />
      <ProductArea02 />
      <MapArea />
      <Footer />
    </div>
  );
};

export default AthleticWear;
