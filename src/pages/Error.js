import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import ErrorArea from "../components/containers/ErrorArea";
import Footer from "../components/containers/Footer";

const Error = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Error" />
      <ErrorArea />
      <Footer />
    </div>
  );
};

export default Error;
