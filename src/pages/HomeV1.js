import React from "react";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import FooterV1 from "../components/containers/FooterV1";

const HomeV1 = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      This is Home V1
      <FooterV1 />
    </div>
  );
};

export default HomeV1;
