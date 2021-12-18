import React from "react";
import { GrView } from "react-icons/gr";
import image1 from "../../assets/images/home-2-gallery-1.jpg";
import image2 from "../../assets/images/home-2-gallery-2.jpg";
import image3 from "../../assets/images/home-2-gallery-3.jpg";
import image4 from "../../assets/images/home-2-gallery-4.jpg";
import image5 from "../../assets/images/home-2-gallery-5.jpg";
import image6 from "../../assets/images/home-2-gallery-6.jpg";

const ImageGallery = () => {
  return (
    <>
      <div className="image-gallery-area-v2 section-padding-t section-padding-secondary-b">
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
                  <div className="single-gallery border-left">
                    <img
                      className="gallery-image"
                      src={image1}
                      alt="gallery"
                    />
                    <div className="popuo-overlay">
                      <a
                        className="popup-image"
                        href={image1}
                      >
                        <GrView />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="single-gallery border-bottom">
                    <img
                      className="gallery-image"
                      src={image2}
                      alt="gallery"
                    />
                    <div className="popuo-overlay">
                      <a
                        className="popup-image"
                        href={image2}
                      >
                        <GrView />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="single-gallery">
                    <img
                      className="gallery-image"
                      src={image3}
                      alt="gallery"
                    />
                    <div className="popuo-overlay">
                      <a
                        className="popup-image"
                        href={image3}
                      >
                        <GrView />
                      </a>
                    </div>
                  </div>
                  <div className="single-gallery">
                    <img
                      className="gallery-image"
                      src={image4}
                      alt="gallery"
                    />
                    <div className="popuo-overlay">
                      <a
                        className="popup-image"
                        href={image4}
                      >
                        <GrView />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12">
              <div className="single-gallery border-top">
                <img
                  className="gallery-image"
                  src={image5}
                  alt="gallery"
                />
                <div className="popuo-overlay">
                  <a
                    className="popup-image"
                    href={image5}
                  >
                    <GrView />
                  </a>
                </div>
              </div>
              <div className="single-gallery">
                <img
                  className="gallery-image"
                  src={image6}
                  alt="gallery"
                />
                <div className="popuo-overlay">
                  <a
                    className="popup-image"
                    href={image6}
                  >
                    <GrView />
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
