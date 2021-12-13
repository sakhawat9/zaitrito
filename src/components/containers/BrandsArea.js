import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const data = [
  "https://res.cloudinary.com/medsy/image/upload/v1639411794/hex-lab_gb3wqd.png",
  "https://res.cloudinary.com/medsy/image/upload/v1639411794/zairito-home-two_qkcs7e.png",
  "https://res.cloudinary.com/medsy/image/upload/v1639411793/circle_jpg8im.png",
  "https://res.cloudinary.com/medsy/image/upload/v1639411794/zoo-tv_t8oynp.png",
  "https://res.cloudinary.com/medsy/image/upload/v1639411793/treva_i2mrzm.png",
  "https://res.cloudinary.com/medsy/image/upload/v1639411793/kanba_d2juyu.png",
  "https://res.cloudinary.com/medsy/image/upload/v1639411793/code-lab_nnj03o.png",
];

const carouselProperties = {
  slidesToShow: 3,
  centerMode: true,
  infinite: true,
  autoplay: true,
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
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div className="section-padding">
      <div className="border-t border-b py-14 carousel ">
        <div className="container px-8 mx-auto text-center ">
          <Slider {...carouselProperties}>
            {data.map((item, index) => (
              <div>
                <div className="inline-flex bg-white">
                  <img
                    className="object-cover w-full h-full"
                    src={item}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
