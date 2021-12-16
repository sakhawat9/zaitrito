import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
  {
    id: 4,
    img: "https://res.cloudinary.com/medsy/image/upload/v1639537188/home-two-product-image-2_chzcap.png",
    sale: "sale",
    discount: 15,
    category: "ELLA - HALOTHEMES",
    name: "Plaid Cotton Oxford Shirt",
    regularprice: 770.18,
    price: 700.08,
    size: ["xl", "SMALL", "large"],
  },
  {
    id: 5,
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
    id: 6,
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

const carouselProperties = {
  slidesToShow: 3,
  centerMode: true,
  autoplay: true,
  // centerPadding: "200px",
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
  ],
};

const RecommendProduct = () => {
  return (
    <div className="recommend-product carousel">
      <div className="recommend-product__nav">
        <div className="featured-products__header">
          <h2>Featured Products</h2>
          <ul className="recommend-product__nav__wrapper">
            <li>NEW ARRIVAL</li>
            <li>BEST SELLING</li>
            <li>ON SELL</li>
            <li>FEATURED ITEMS</li>
            <li>PRODUCTS YOU MAY LIKE</li>
          </ul>
        </div>
      </div>
      <Slider {...carouselProperties}>
        {featuredProducts.map((item, index) => (
          <SingleProduct featuredProduct={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

// const Card = ({ item }) => {
//   return (
//     <div className="p-2 m-3 text-center shadow-lg">
//       <div className="">
//         <img
//           width="100%"
//           height="100%"
//           className="object-cover"
//           src={item.img}
//           alt={item.name}
//         />
//       </div>
//       <h3 className="pt-3 text-2xl">{item.name}</h3>
//       <p className="text-sm text-justify">{item.description}</p>
//       <ul className="flex mt-3">
//         <li>
//           <AiOutlineStar className="text-2xl text-yellow-400" />
//         </li>
//         <li>
//           <AiOutlineStar className="text-2xl text-yellow-400" />
//         </li>
//         <li>
//           <AiOutlineStar className="text-2xl text-yellow-400" />
//         </li>
//         <li>
//           <AiOutlineStar className="text-2xl text-yellow-400" />
//         </li>
//         <li>
//           <AiOutlineStar className="text-2xl text-yellow-400" />
//         </li>
//       </ul>
//     </div>
//   );
// };

export default RecommendProduct;
