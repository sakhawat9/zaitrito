import React from "react";
import BreadcrumbArea from "../components/common/BreadcrumbArea";
import MobileHeader from "../components/common/MobileHeader";
import ProductAreaHeader from "../components/common/ProductAreaHeader";
import BlogsArea from "../components/containers/BlogsArea";
import Footer from "../components/containers/Footer";
import MapArea from "../components/containers/MapArea";

const Blog = () => {
  return (
    <div>
      <ProductAreaHeader />
      <MobileHeader />
      <BreadcrumbArea title="Product Collections" />
      <BlogsArea />
      <MapArea />
      <Footer />
    </div>
  );
};

export default Blog;
