import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import AboutUsPage from "../components/containers/AboutUsPage";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";
import ServiceArea from "../components/containers/ServiceArea";

const AboutUs = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="About Us" />
      <AboutUsPage />
      <ServiceArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default AboutUs;
