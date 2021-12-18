import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import image1 from "../../assets/images/home-2-gallery-1.jpg";
import image2 from "../../assets/images/home-2-gallery-2.jpg";
import image3 from "../../assets/images/home-2-gallery-3.jpg";
import image4 from "../../assets/images/home-2-gallery-4.jpg";
import image5 from "../../assets/images/home-2-gallery-5.jpg";
import image6 from "../../assets/images/home-2-gallery-6.jpg";

const ImageGallery = () => {
  return (
    <>
      <div className="section-padding-t section-padding-secondary-b">
        <div className="container mx-auto px-8">
          <div className="section-header-two text-center">
            <div className="featured-products__header">
              <h2>
                Zairito Gallery <br /> For Online Experience
              </h2>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-12">
            <div className="md:col-span-8 col-span-12">
              <div className="grid gap-4 grid-cols-12">
                <div className="lg:col-span-12">
                  <div className="single-gallery single-gallery__left">
                    <img src={image1} alt="gallery" />
                    <div className="popup-overlay">
                      <a href={image1}>
                        <BsFillEyeFill />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="single-gallery single-gallery__bottom">
                    <img src={image2} alt="gallery" />
                    <div className="popup-overlay">
                      <a href={image2}>
                        <BsFillEyeFill />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="single-gallery">
                    <img src={image3} alt="gallery" />
                    <div className="popup-overlay">
                      <a href={image3}>
                        <BsFillEyeFill />
                      </a>
                    </div>
                  </div>
                  <div className="single-gallery">
                    <img src={image4} alt="gallery" />
                    <div className="popup-overlay">
                      <a href={image4}>
                        <BsFillEyeFill />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12">
              <div className="single-gallery single-gallery__top">
                <img src={image5} alt="gallery" />
                <div className="popup-overlay">
                  <a href={image5}>
                    <BsFillEyeFill />
                  </a>
                </div>
              </div>
              <div className="single-gallery">
                <img src={image6} alt="gallery" />
                <div className="popup-overlay">
                  <a href={image6}>
                    <BsFillEyeFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
