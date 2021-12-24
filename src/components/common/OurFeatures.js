import React from "react";

const OurFeatures = () => {
  return (
    <div class="our-features-area section-padding-t section-padding-secondary-b">
      <div class="container mx-auto px-8">
        <div class="section-header-area text-center">
          <h3 class="sub-title">Our Features</h3>
          <h2 class="section-title">Why choose us</h2>
        </div>
        <div class="grid gap-4 grid-cols-12">
          <div class="lg:col-span-1"></div>
          <div class="lg:col-span-10">
            <div class="grid gap-4 grid-cols-12">
              <div class="lg:col-span-4 md:col-span-4 col-span-6">
                <div class="single-features text-center">
                  <div class="features-icon">
                    <img
                      src="http://zairito-html.zainiktheme.com/demo/assets/images/features-icon-1.png"
                      alt="features-icon"
                    />
                  </div>
                  <h3 class="features-title">Men's collection</h3>
                  <p class="features-content">
                    We believe getting dressed should be the easiest part of
                    your day.
                  </p>
                </div>
              </div>
              <div class="lg:col-span-4 md:col-span-4 col-span-6">
                <div class="single-features text-center">
                  <div class="features-icon">
                    <img
                      src="http://zairito-html.zainiktheme.com/demo/assets/images/features-icon-2.png"
                      alt="features-icon"
                    />
                  </div>
                  <h3 class="features-title">Innovative solutions</h3>
                  <p class="features-content">
                    We believe getting dressed should be the easiest part of
                    your day.
                  </p>
                </div>
              </div>
              <div class="lg:col-span-4 md:col-span-4 col-span-6">
                <div class="single-features text-center">
                  <div class="features-icon">
                    <img
                      src="http://zairito-html.zainiktheme.com/demo/assets/images/features-icon-3.png"
                      alt="features-icon"
                    />
                  </div>
                  <h3 class="features-title">Choose products</h3>
                  <p class="features-content">
                    We believe getting dressed should be the easiest part of
                    your day.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
