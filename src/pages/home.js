import React from "react";
import HeaderV2 from "../components/common/HeaderV2";
import MobileHeader from "../components/common/MobileHeader";
import BlogArea from "../components/containers/BlogArea";
import BrandsArea from "../components/containers/BrandsArea";
import FeaturedProducts from "../components/containers/FeaturedProducts";
import Footer from "../components/containers/Footer";
import Hero from "../components/containers/Hero";
import ImageGallery from "../components/containers/ImageGallery";
import MapArea from "../components/containers/MapArea";
import PopularCategories from "../components/containers/PopularCategories";
import RecommendProduct from "../components/containers/RecommendProduct";
import SpecialOffer from "../components/containers/SpecialOffer";
import Testimonial from "../components/containers/Testimonial";

const Home = () => {
  return (
    <div>
      <HeaderV2 />
      <MobileHeader />
      <Hero />
      <BrandsArea />
      <PopularCategories />
      <FeaturedProducts />
      <SpecialOffer />
      <RecommendProduct />
      <Testimonial />
      <ImageGallery />
      <BlogArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default Home;
