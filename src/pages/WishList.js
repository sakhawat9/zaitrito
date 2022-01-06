import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";
import WishListArea from "../components/containers/WishListArea";

const WishList = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Wish List" />
      <WishListArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default WishList;
