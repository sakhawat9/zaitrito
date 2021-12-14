import React from "react";
import BrandsArea from "../components/containers/BrandsArea";
import Hero from "../components/containers/Hero";
import PopularCategories from "../components/containers/PopularCategories";
import Header from "../layout/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BrandsArea  />
      <PopularCategories />
    </div>
  );
};

export default Home;
