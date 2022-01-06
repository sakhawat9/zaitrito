import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import FaqArea from "../components/containers/FaqArea";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";

const Faq = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Frequently Asked Questions" />
      <FaqArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default Faq;
