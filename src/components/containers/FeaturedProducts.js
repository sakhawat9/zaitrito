/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SingleProduct from "../common/SingleProduct";

const featuredProducts = [
  {
    id: 1,
    img: "https://res.cloudinary.com/medsy/image/upload/v1639537188/home-two-product-image-2_chzcap.png",
    sale: "sale",
    discount: 15,
    category: "New - Collection",
    name: "Rosmo Namino Milancelos",
    regularprice: 770.18,
    price: 700.08,
    size: ["xl", "SMALL", "large"],
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/medsy/image/upload/v1639537188/home-two-product-image-3_icsfmu.png",
    sale: "sale",
    discount: 15,
    category: "HOT - Collection",
    name: "Midi Dress",
    regularprice: 270.18,
    price: 100.08,
    size: ["xl", "SMALL", "large"],
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/medsy/image/upload/v1639537188/home-two-product-image-1_dvbxn2.png",
    sale: "sale",
    discount: 15,
    category: "New - Collection",
    name: "Black T-Shirt For Woman",
    regularprice: 800.18,
    price: 600.08,
    size: ["xl", "SMALL", "large"],
  },
];
console.log(featuredProducts);
const FeaturedProducts = () => {
  return (
    <div className="featured-products section-padding-t section-padding-secondary-b">
      <div className="container px-8 mx-auto">
        <div className="featured-products__header">
          <h2>Featured Products</h2>
        </div>
        <div className="featured-products__items">
          {featuredProducts.map((featuredProduct) => (
            <SingleProduct featuredProduct={featuredProduct} key={featuredProduct.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
