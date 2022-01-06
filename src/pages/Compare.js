import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import CompareArea from "../components/containers/CompareArea";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";

const Compare = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Compare" />
      <CompareArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default Compare;
