import React from "react";
import Details from "../components/containers/Details";
import FeaturedProducts from "../components/containers/FeaturedProducts";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";
import SingleDetailsSubHeader from "../components/containers/SingleDetailsSubHeader";
import Header from "../layout/Header/Header";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <SingleDetailsSubHeader />
      <Details />
      <FeaturedProducts />
      <MapArea />
      <Footer />
    </div>
  );
};

export default ProductDetails;
