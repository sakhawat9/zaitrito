import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaLongArrowAltLeft className="p-2 text-4xl font-extrabold text-white rounded-full shadow-lg" />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaLongArrowAltRight className="p-2 text-4xl text-white rounded-full shadow-lg" />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "200px",
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

const Testimonial = () => {
  return (
    <div className="container mx-auto carousel section-padding">
      <div>
        <div className="featured-products__header">
          <h2>
            Featured Products <br /> Saying About Oursalve
          </h2>
        </div>
      </div>
      <Slider {...carouselProperties}>
        {featuredProducts.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="testimonial-slide-two slick-initialized slick-slider">
      <div className="slick-list draggable">
        <div className="slick-track">
          <div
            class="single-testimonial slick-slide slick-active"
            style={{ width: "359px" }}
            tabindex="0"
            data-slick-index="1"
            aria-hidden="false"
          >
            <div class="testimonial-top">
              <img class="testimonial-image" src={item.img} alt="testimonial" />
            </div>
            <div class="testimonial-body">
              <p class="testimonial-content">
                Quisque velit nisi, pretium lacinia in, Nulla poritor accu msan
                tinci dunt. Mauris blandit aliquet elit, eget tindunt nibh{" "}
              </p>
              <h3 class="testimonial-title">Darlene Robertson</h3>
              <ul class="testimonial-review">
                <li class="review-item active">
                  <i class="icon flaticon-star"></i>
                </li>
                <li class="review-item active">
                  <i class="icon flaticon-star"></i>
                </li>
                <li class="review-item active">
                  <i class="icon flaticon-star"></i>
                </li>
                <li class="review-item active">
                  <i class="icon flaticon-star"></i>
                </li>
                <li class="review-item">
                  <i class="icon flaticon-star"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
