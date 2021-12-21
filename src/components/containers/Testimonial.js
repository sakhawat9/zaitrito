import React from "react";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const carouselProperties = {
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "200px",
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
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
      breakpoint: 991,
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
    img: "https://res.cloudinary.com/medsy/image/upload/v1639645651/testimonial-v2-image-2_ds8k6f.png",
    name: "Darlene Robertson",
    desc: "Quisque velit nisi, pretium lacinia in, Nulla poritor accu msan tinci dunt. Mauris blandit aliquet elit, eget tindunt nibh",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/medsy/image/upload/v1639645651/testimonial-v2-image-1_xdwtez.png",
    name: "Darlene Robertson",
    desc: "Quisque velit nisi, pretium lacinia in, Nulla poritor accu msan tinci dunt. Mauris blandit aliquet elit, eget tindunt nibh",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/medsy/image/upload/v1639645651/testimonial-v2-image-3_aqsugw.png",
    name: "Darlene Robertson",
    desc: "Quisque velit nisi, pretium lacinia in, Nulla poritor accu msan tinci dunt. Mauris blandit aliquet elit, eget tindunt nibh",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/medsy/image/upload/v1639645651/testimonial-v2-image-2_ds8k6f.png",
    name: "Darlene Robertson",
    desc: "Quisque velit nisi, pretium lacinia in, Nulla poritor accu msan tinci dunt. Mauris blandit aliquet elit, eget tindunt nibh",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/medsy/image/upload/v1639645651/testimonial-v2-image-1_xdwtez.png",
    name: "Darlene Robertson",
    desc: "Quisque velit nisi, pretium lacinia in, Nulla poritor accu msan tinci dunt. Mauris blandit aliquet elit, eget tindunt nibh",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/medsy/image/upload/v1639645651/testimonial-v2-image-3_aqsugw.png",
    name: "Darlene Robertson",
    desc: "Quisque velit nisi, pretium lacinia in, Nulla poritor accu msan tinci dunt. Mauris blandit aliquet elit, eget tindunt nibh",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial section-padding">
      <div className="testimonial__wrapper carousel">
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
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div
      className="single-testimonial slick-slide slick-current slick-active"
      tabIndex="0"
      data-slick-index="1"
      aria-hidden="false"
    >
      <div className="testimonial-top">
        <img src={item.img} alt="testimonial" />
      </div>
      <div className="testimonial-body">
        <p>{item.desc}</p>
        <h3>{item.name}</h3>
        <ul>
          <li className=" active">
            <AiFillStar />
          </li>
          <li className=" active">
            <AiFillStar />
          </li>
          <li className=" active">
            <AiFillStar />
          </li>
          <li className="active">
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
