import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";
import ProductArea from "../components/containers/Product-area";

const ProductAreaV01 = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Product Collections" />
      <ProductArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default ProductAreaV01;
