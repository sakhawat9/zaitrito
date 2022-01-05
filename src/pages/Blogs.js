import React from "react";
import BlogDetails from "../components/common/BlogDetails";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";

const Blogs = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BlogDetails />
      <MapArea />
      <Footer />
    </div>
  );
};

export default Blogs;
