import React from "react";

const OurFeatures = () => {
  return (
    <div className="our-features-area section-padding-t section-padding-secondary-b">
      <div className="container mx-auto px-8">
        <div className="section-header-area text-center">
          <h3 className="sub-title">Our Features</h3>
          <h2 className="section-title">Why choose us</h2>
        </div>
        <div className="grid gap-4 grid-cols-12">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-10">
            <div className="grid gap-4 grid-cols-12">
              <div className="lg:col-span-4 md:col-span-4 col-span-6">
                <div className="single-features text-center">
                  <div className="features-icon">
                    <img
                      src="http://zairito-html.zainiktheme.com/demo/assets/images/features-icon-1.png"
                      alt="features-icon"
                    />
                  </div>
                  <h3 className="features-title">Men's collection</h3>
                  <p className="features-content">
                    We believe getting dressed should be the easiest part of
                    your day.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-4 col-span-6">
                <div className="single-features text-center">
                  <div className="features-icon">
                    <img
                      src="http://zairito-html.zainiktheme.com/demo/assets/images/features-icon-2.png"
                      alt="features-icon"
                    />
                  </div>
                  <h3 className="features-title">Innovative solutions</h3>
                  <p className="features-content">
                    We believe getting dressed should be the easiest part of
                    your day.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-4 col-span-6">
                <div className="single-features text-center">
                  <div className="features-icon">
                    <img
                      src="http://zairito-html.zainiktheme.com/demo/assets/images/features-icon-3.png"
                      alt="features-icon"
                    />
                  </div>
                  <h3 className="features-title">Choose products</h3>
                  <p className="features-content">
                    We believe getting dressed should be the easiest part of
                    your day.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
