import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";
import ProductArea02 from "../components/containers/Product-area-02";

const ProductsAreaV03 = () => {
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

export default ProductsAreaV03;
