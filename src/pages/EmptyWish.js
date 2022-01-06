import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import EmptyWishList from "../components/containers/EmptyWishList";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";

const EmptyWish = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Wish List" />
      <EmptyWishList />
      <MapArea />
      <Footer />
    </div>
  );
};

export default EmptyWish;
