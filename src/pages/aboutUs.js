import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import OurFeatures from "../components/common/OurFeatures";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import ServiceArea from "../components/common/ServiceArea";
import AboutUsPage from "../components/containers/AboutUsPage";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";

const AboutUs = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="About Us" />
      <AboutUsPage />
      <ServiceArea />
      <OurFeatures />
      <MapArea />
      <Footer />
    </div>
  );
};

export default AboutUs;
