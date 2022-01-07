import React from "react";
import ServiceIcon01 from "../../assets/images/service-icon-1.png";
import ServiceIcon02 from "../../assets/images/service-icon-2.png";
import ServiceIcon03 from "../../assets/images/service-icon-3.png";
import ServiceIcon04 from "../../assets/images/service-icon-4.png";

const ServiceArea = () => {
  return (
    <div className="service-area">
      <div>
        <div className="grid gap-4 grid-cols-12 items-center g-0">
          <div className="lg:col-span-6 col-span-12">
            <div className="service-left"></div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="service-lsit">
              <div className="grid gap-4 grid-cols-12">
                <div className="md:col-span-6 col-span-6">
                  <div className="single-service">
                    <div className="service-icon">
                      <img
                        src={ServiceIcon01}
                        alt="service-icon"
                      />
                    </div>
                    <div className="service-info">
                      <h3 className="service-title">All Day Comfort</h3>
                      <p className="service-content">
                        We believe getting dressed should be the easiest part of
                        your day.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 col-span-6">
                  <div className="single-service">
                    <div className="service-icon">
                      <img
                        src={ServiceIcon02}
                        alt="service-icon"
                      />
                    </div>
                    <div className="service-info">
                      <h3 className="service-title">All Day Comfort</h3>
                      <p className="service-content">
                        We believe getting dressed should be the easiest part of
                        your day.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 col-span-6">
                  <div className="single-service">
                    <div className="service-icon">
                      <img
                        src={ServiceIcon03}
                        alt="service-icon"
                      />
                    </div>
                    <div className="service-info">
                      <h3 className="service-title">All Day Comfort</h3>
                      <p className="service-content">
                        We believe getting dressed should be the easiest part of
                        your day.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 col-span-6">
                  <div className="single-service">
                    <div className="service-icon">
                      <img
                        src={ServiceIcon04}
                        alt="service-icon"
                      />
                    </div>
                    <div className="service-info">
                      <h3 className="service-title">All Day Comfort</h3>
                      <p className="service-content">
                        We believe getting dressed should be the easiest part of
                        your day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
