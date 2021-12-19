import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";
import ProductArea from "../components/containers/Product-area";
import Header from "../layout/Header/Header";

const WeedingDress = () => {
  return (
    <div>
      <Header />
      <BreadcrumbArea />
      <ProductArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default WeedingDress;
