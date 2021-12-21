/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Review from "../common/Review";

const Detail = ({ data }) => {
  console.log(data);
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Reviews</Tab>
          <Tab>Shipping & Return</Tab>
          <Tab>Additional Information</Tab>
        </TabList>
        <TabPanel>
          <div
            className="tab-pane fade show active"
            id="Description"
            role="tabpanel"
            aria-labelledby="Description-tab"
          >
            <div className="product-description">
              <p className="description-text text-black text-2xl">
                {data?.desc}
              </p>
              <div className="feature-area mb-8">
                <h3 className="feature-title">Sample Unordered List</h3>
                <ul className="unordered-lsit">
                  {data?.unorderedlist.map((listItems) => (
                    <li className="list-item">{listItems.list}</li>
                  ))}
                </ul>
              </div>
              <div className="feature-area">
                <h3 className="feature-title">Sample Ordered List</h3>
                <ol className="ordered-lsit mb-0">
                  {data?.orderedlist.map((listItem) => (
                    <li className="list-item">{listItem.list}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div
            className="tab-pane fade"
            id="Reviews"
            role="tabpanel"
            aria-labelledby="Reviews-tab"
          >
            <div className="product-reviews">
              <div className="review-top">
                <div className="review-top-left">
                  <h3 className="review-title">Customer Reviews </h3>
                  <div className="review-start-point">
                    <ul className="review-list">
                      <li className="review-item active">
                        <AiFillStar />
                      </li>
                      <li className="review-item active">
                        <AiFillStar />
                      </li>
                      <li className="review-item active">
                        <AiFillStar />
                      </li>
                      <li className="review-item active">
                        <AiFillStar />
                      </li>
                      <li className="review-item">
                        <AiFillStar />
                      </li>
                    </ul>
                    <span className="review-count">
                      Based on ({data?.reviewer?.length}) Reviews{" "}
                    </span>
                  </div>
                </div>
                <div className="review-top-right">
                  <a href="#" className="write-review-btn">
                    Write A Review
                  </a>
                </div>
              </div>
              <div className="reviews-list">
                {data?.reviewer?.map((review) => (
                  <Review review={review} />
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div
            className="tab-pane fade"
            id="Shipping-Return"
            role="tabpanel"
            aria-labelledby="Shipping-Return-tab"
          >
            <div className="shipping-return-area">
              <div className="single-return-policy">
                <h3 className="return-title">RETURNS POLICY</h3>
                <p className="return-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ut blandit risus. Donec mollis nec tellus et rutrum. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Ut consequat quam a purus faucibus
                  scelerisque. Mauris ac dui ante. Pellentesque congue porttitor
                  tempus. Donec sodales dapibus urna sed dictum. Duis congue
                  posuere libero, a aliquam est porta quis.
                </p>
                <p className="return-text">
                  Donec ullamcorper magna enim, vitae fermentum turpis elementum
                  quis. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus.
                </p>
                <p className="return-text">
                  Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam rutrum
                  tempor ex ac rutrum. Maecenas nunc nulla, placerat at eleifend
                  in, viverra etos sem. Nam sagittis lacus metus, dignissim
                  blandit magna euismod eget. Suspendisse a nisl lacus.
                  Phasellus eget augue tincidunt, sollicitudin lectus sed,
                  convallis desto. Pellentesque vitae dui lacinia, venenatis
                  erat sit amet, fringilla felis. Nullam maximus nisi nec mi
                  facilisis.
                </p>
              </div>
              <div className="single-return-policy">
                <h3 className="return-title">SHIPPING</h3>
                <p className="return-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ut blandit risus. Donec mollis nec tellus et rutrum. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Ut consequat quam a purus faucibus
                  scelerisque. Mauris ac dui ante. Pellentesque congue porttitor
                  tempus. Donec sodales dapibus urna sed dictum. Duis congue
                  posuere libero, a aliquam est porta quis.
                </p>
                <p className="return-text">
                  Donec ullamcorper magna enim, vitae fermentum turpis elementum
                  quis. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus.
                </p>
                <p className="return-text">
                  Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam rutrum
                  tempor ex ac rutrum. Maecenas nunc nulla, placerat at eleifend
                  in, viverra etos sem. Nam sagittis lacus metus, dignissim
                  blandit magna euismod eget. Suspendisse a nisl lacus.
                  Phasellus eget augue tincidunt, sollicitudin lectus sed,
                  convallis desto. Pellentesque vitae dui lacinia, venenatis
                  erat sit amet, fringilla felis. Nullam maximus nisi nec mi
                  facilisis.
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div
            className="tab-pane fade"
            id="Additional-Information"
            role="tabpanel"
            aria-labelledby="Additional-Information-tab"
          >
            <div className="additional-information-area">
              <p className="additional-information-text">
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Pellentesque in ipsum id orci porta dapibus. Mauris blandit
                aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
                Curabitur aliquet quam id dui posuere blandit. Praesent sapien
                massa, convallis a pellentesque nec, egestas non nisi. Donec
                sollicitudin molestie malesuada. Nulla quis lorem ut libero
                malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.
                Cras ultricies ligula sed magna dictum porta. Mauris blandit
                aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor
                lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh
                pulvinar a. Nulla quis lorem ut libero malesuada feugiat.{" "}
              </p>
              <ul className="additional-feature">
                <li className="single-feature">
                  <h3 className="feature-title">Comodous:</h3>
                  <p className="feature-text">
                    Comodous in tempor ullamcorper miaculis
                  </p>
                </li>
                <li className="single-feature">
                  <h3 className="feature-title">Mattis laoreet:</h3>
                  <p className="feature-text">
                    Pellentesque vitae neque mollis urna mattis laoreet.
                  </p>
                </li>
                <li className="single-feature">
                  <h3 className="feature-title">Divamus de ametos:</h3>
                  <p className="feature-text">Divamus sit amet purus justo</p>
                </li>
                <li className="single-feature">
                  <h3 className="feature-title">Molestie:</h3>
                  <p className="feature-text">
                    Proin molestie egestas orci ac suscipit risus posuere
                    loremous
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Detail;
