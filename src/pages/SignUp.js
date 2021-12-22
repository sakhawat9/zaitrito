import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import Footer from "../components/containers/Footer";
import SignUpPage from "../components/containers/SignUpPage";

const SignUp = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Sign Up" />
      <SignUpPage />
      <Footer />
    </div>
  );
};

export default SignUp;
