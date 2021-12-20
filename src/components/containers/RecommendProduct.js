import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SingleProduct from "../common/SingleProduct";

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
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="recommend-product section-padding carousel">
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
        {data.map((item, index) => (
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
