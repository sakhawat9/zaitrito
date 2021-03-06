import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";
import ProductAreaV03 from "../components/containers/Product-area-v03";

const  ProductsAreaV03 = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Product Collections" />
      <ProductAreaV03 />
      <MapArea />
      <Footer />
    </div>
  );
};

export default ProductsAreaV03;
