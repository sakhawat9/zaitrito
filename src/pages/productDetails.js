import React from "react";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import Details from "../components/containers/Details";
import FeaturedProducts from "../components/containers/FeaturedProducts";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";
import SingleDetailsSubHeader from "../components/containers/SingleDetailsSubHeader";

const ProductDetails = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <SingleDetailsSubHeader />
      <Details />
      <FeaturedProducts />
      <MapArea />
      <Footer />
    </div>
  );
};

export default ProductDetails;
