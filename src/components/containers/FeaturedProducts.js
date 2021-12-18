/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import SingleProduct from "../common/SingleProduct";

const FeaturedProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="featured-products section-padding-t section-padding-secondary-b">
      <div className="container px-8 mx-auto">
        <div className="featured-products__header">
          <h2>Featured Products</h2>
        </div>
        <div className="featured-products__items">
          {data.slice(0, 3).map((featuredProduct) => (
            <SingleProduct
              featuredProduct={featuredProduct}
              key={featuredProduct.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
