import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import CheckoutPage from "../components/containers/CheckoutPage";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";

const Checkout = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Checkout" />
      <CheckoutPage />
      <MapArea />
      <Footer />
    </div>
  );
};

export default Checkout;
