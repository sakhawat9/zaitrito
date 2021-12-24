import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import ContactPage from "../components/containers/ContactPage";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";

const Contact = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Contact Us" />
      <ContactPage />
      <MapArea />
      <Footer />
    </div>
  );
};

export default Contact;
