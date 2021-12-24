/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const AboutUsPage = () => {
  return (
    <div class="about-us-area section-padding">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-12 lg:items-center">
          <div class="lg:col-span-5 md:col-span-6 col-span-12">
            <div class="about-us-image">
              <img src="http://zairito-html.zainiktheme.com/demo/assets/images/aboutus-image.png" alt="about us image" />
            </div>
          </div>
          <div className="lg:col-span-1"></div>
          <div class="lg:col-span-5 col-span-12 md:col-span-6">
            <div class="about-us-content">
              <div class="section-header-area">
                <h3 class="sub-title">About Us</h3>
                <h2 class="section-title">
                  Innovative solutions <br /> to boost your projects
                </h2>
              </div>
              <p class="about-us-text">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere consectetur sed, convallis at tellus. Donec rutrum
                congue leo eget malesuada. Curabitur arcu erat, accumsan id
                imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet{" "}
              </p>
              <p class="about-us-text">
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Sed
                porttitor lectus nibh. Nulla porttitor accumsan tincidunt.
                Pellentesque in ipsum id orci porta dapibus. Praesent sapien
                massa, convallis a pellentesque nec,{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
