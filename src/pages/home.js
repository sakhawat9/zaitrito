import React from "react";
import BrandsArea from "../components/containers/BrandsArea";
import FeaturedProducts from "../components/containers/FeaturedProducts";
import Footer from "../components/containers/Footer";
import Hero from "../components/containers/Hero";
import ImageGallery from "../components/containers/ImageGallery";
import PopularCategories from "../components/containers/PopularCategories";
import RecommendProduct from "../components/containers/RecommendProduct";
import SpecialOffer from "../components/containers/SpecialOffer";
import Testimonial from "../components/containers/Testimonial";
import Header from "../layout/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BrandsArea />
      <PopularCategories />
      <FeaturedProducts />
      <SpecialOffer />
      <RecommendProduct />
      <Testimonial />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default Home;
