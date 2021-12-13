import React from "react";
import BrandsArea from "../components/containers/BrandsArea";
import Hero from "../components/containers/Hero";
import Header from "../layout/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BrandsArea  />
    </div>
  );
};

export default Home;
