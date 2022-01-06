/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PageMenu from "../common/PageMenu";

const RefundPolicyArea = () => {
  return (
    <div className="refund-policy-area section-padding">
      <div className="container mx-auto px-8">
        <div className="grid gap-6 grid-cols-12">
          <div className="lg:col-span-3 md:col-span-4">
            <PageMenu />
          </div>
          <div className="lg:col-span-9 md:col-span-8">
            <div className="refund-policy-info">
              <div className="single-refund-policy">
                <h3 className="refund-policy-title">Our Refund policy</h3>
                <p className="refund-policy-text">
                  We have a 30-day return policy, which means you have 30 days
                  after receiving your item to request a return. To be eligible
                  for a return, your item must be in the same condition that you
                  received it, unworn or unused, with tags, and in its original
                  packaging. You’ll also need the receipt or proof of purchase.
                  To start a return, you can contact us at{" "}
                  <a className="refund-policy-link" href="#">
                    hi@zainikcom.com
                  </a>{" "}
                  If your return is accepted, we’ll send you a return shipping
                  label, as well as instructions on how and where to send your
                  package. Items sent back to us without first requesting a
                  return will not be accepted. You can always contact us for any
                  return question at{" "}
                  <a className="refund-policy-link" href="#">
                    hi@zainikcom.com
                  </a>
                </p>
              </div>
              <div className="single-refund-policy">
                <h3 className="refund-policy-title">
                  Exceptions / Non-returnable items
                </h3>
                <p className="refund-policy-text">
                  Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
                  accumsan tincidunt. Vivamus magna justo, lacinia eget
                  consectetur sed, convallis at tellus. Vivamus suscipit tortor
                  eget felis porttitor volutpat. Curabitur non nulla sit amet
                  nisl tempus convallis quis ac lectus. Nulla quis lorem ut
                  libero malesuada feugiat. Sed porttitor lectus nibh. Vivamus
                  magna justo, lacinia eget consectetur sed, convallis at
                  tellus. Proin{" "}
                </p>
                <p className="refund-policy-text">
                  Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula. Nulla quis lorem ut libero
                  malesuada feugiat. Vestibulum ac diam sit amet eget felis
                  porttitor volutpat. Nulla quis lorem ut libero malesuada
                  feugiat.
                </p>
              </div>
              <div className="single-refund-policy">
                <h3 className="refund-policy-title">Exchanges</h3>
                <p className="refund-policy-text">
                  Cras ultricies ligula sed magna dictum porta. Vivamus suscipit
                  tortor eget felis porttitor volutpat. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi. Quisque velit
                  nisi, pretium ut lacinia in, elementum id enim. Sed porttitor
                  lectus nibh. Vivamus magna justo, lacinia eget consectetur
                  sed, convallis at tellus.
                </p>
              </div>
              <div className="single-refund-policy">
                <h3 className="refund-policy-title">Damages and issues</h3>
                <p className="refund-policy-text">
                  Donec sollicitudin molestie malesuada. Pellentesque in ipsum
                  id orci porta dapibus. Mauris blandit aliquet elit, eget
                  tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id
                  imperdiet et, porttitor at sem. Vivamus magna justo, lacinia
                  eget consectetur sed, convallis at tellus. Mauris blandit
                  aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Praesent sapien
                  massa, convallis a pellentesque nec, egestas non nisi. Nulla
                  porttitor accumsan tincidunt. Cras ultricies ligula sed magna
                  dictum porta. Nulla porttitor accumsan tincidunt. Quisque
                  velit nisi, pretium ut lacinia in, elementum id enim.
                </p>
              </div>
              <div className="single-refund-policy">
                <h3 className="refund-policy-title">Refunds</h3>
                <p className="refund-policy-text">
                  Nulla quis lorem ut libero malesuada feugiat. Pellentesque in
                  ipsum id orci porta dapibus. Curabitur aliquet quam id dui
                  posuere blandit. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia Curae; Donec velit neque,
                  auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyArea;
