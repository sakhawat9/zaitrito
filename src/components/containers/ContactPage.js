import React from "react";
import image01 from "../../assets/images/contact-info-1.png";
import image02 from "../../assets/images/contact-info-2.png";
import image03 from "../../assets/images/contact-info-3.png";

const ContactPage = () => {
  return (
    <div className="contact-us-area section-bottom">
      <div className="container mx-auto px-8">
        <div className="grid gap-4 grid-cols-12">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-10">
            <div className="contact-us-top">
              <div className="grid gap-4 grid-cols-12">
                <div className="lg:col-span-4 md:col-span-4 col-span-6">
                  <div className="single-contact-info mx-auto border-0 text-center">
                    <img
                      className="single-contact-info__icon"
                      src={image01}
                      alt="contact-info"
                    />
                    <h3 className="single-contact-info__title">Message</h3>
                    <p className="single-contact-info__content">
                      Send us a text &amp; an ambassador will respond
                      1-814-251-9966
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 md:col-span-4 col-span-6">
                  <div className="single-contact-info text-center">
                    <img
                      className="single-contact-info__icon"
                      src={image02}
                      alt="contact-info"
                    />
                    <h3 className="single-contact-info__title">Address</h3>
                    <p className="single-contact-info__content">
                      461 Valencia Street San Francisco, CA 94103 Manhattan NYC{" "}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 md:col-span-4 col-span-6">
                  <div className="single-contact-info text-center">
                    <img
                      className="single-contact-info__icon"
                      src={image03}
                      alt="contact-info"
                    />
                    <h3 className="single-contact-info__title">We're Open</h3>
                    <p className="single-contact-info__content">
                      Our store has opened for shopping, exchanges Every day
                      11am to 7pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-area">
              <div className="contact-form-top text-center">
                <h2>Got any questions?</h2>
                <p>
                  Use the form below to get in touch with the sales team
                </p>
              </div>
              <form>
                <div className="grid gap-4 grid-cols-12">
                  <div className="md:col-span-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="FirstName"
                        name="FirstName"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="LastName"
                        name="LastName"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="EmilAddress"
                        name="EmilAddress"
                        placeholder="Emil Address"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="ContactNumber"
                        name="ContactNumber"
                        placeholder="Contact Number"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div className="form-group">
                      <textarea
                        className="form-control message-box"
                        id="message"
                        name="message"
                        rows="3"
                        placeholder="Type Message Here...."
                      ></textarea>
                    </div>
                    <div className="form-button text-center">
                      <button type="button" className="form-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
