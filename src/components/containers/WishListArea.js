import React from "react";
import { AiFillStar, AiOutlinePlusCircle } from "react-icons/ai";
import close from "../../assets/images/close.svg";
import productImage1 from "../../assets/images/product-image-1.png";
import productImage2 from "../../assets/images/product-image-2.png";
import productImage5 from "../../assets/images/product-image-5.png";
import productImage6 from "../../assets/images/product-image-6.png";

const WishListArea = () => {
  return (
    <div className="wish-list-area section-padding">
      <div className="container mx-auto px-8">
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-12 wish-list-table">
            <div className="table-responsive">
              <table className="table border">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="product-image">
                        <a href="single-product.html">
                          <img
                            className="product-thumbnal"
                            src={productImage2}
                            alt="product"
                          />
                        </a>
                        <div className="product-flags">
                          <span className="product-flag sale">SALE</span>
                          <span className="product-flag discount">-15%</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-info text-center">
                        <h4 className="product-catagory">ELLA - HALOTHEMES</h4>
                        <h3 className="product-name">
                          <a
                            className="product-link"
                            href="single-product.html"
                          >
                            Premier Cropped Jean
                          </a>
                        </h3>
                        <ul className="product-review">
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
                          <li className="review-item">
                            <AiFillStar />
                          </li>
                        </ul>
                        <div className="variable-single-item color-switch">
                          <div className="product-variable-color">
                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                                checked=""
                              />
                              <span className="product-color-black"></span>
                            </label>
                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-tomato"></span>
                            </label>

                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-gray"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-price text-center">
                        <h4 className="regular-price">$220.88</h4>
                        <h3 className="price">$278.58</h3>
                      </div>
                    </td>
                    <td>
                      <div className="action-area">
                        <a
                          href="cart.html"
                          title="Add to cart"
                          className="add-cart action-btn p-5"
                        >
                          Add To Cart
                          <AiOutlinePlusCircle className="icon fas"/>
                        </a>
                        <a
                          className="buy-btn action-btn mt-6"
                          href="checkout.html"
                        >
                          Buy Now
                        </a>
                      </div>
                    </td>
                    <td>
                      <button className="delet-btn" title="Delete Item">
                        <img src={close} alt="close" />
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="product-image">
                        <a href="single-product.html">
                          <img
                            className="product-thumbnal"
                            src={productImage5}
                            alt="product"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="product-info text-center">
                        <h4 className="product-catagory">Hot - Product</h4>
                        <h3 className="product-name">
                          <a
                            className="product-link"
                            href="single-product.html"
                          >
                            Rosmo Namino Milancelos
                          </a>
                        </h3>
                        <ul className="product-review">
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
                          <li className="review-item">
                            <AiFillStar />
                          </li>
                        </ul>
                        <div className="variable-single-item color-switch">
                          <div className="product-variable-color">
                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                                checked=""
                              />
                              <span className="product-color-black"></span>
                            </label>
                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-tomato"></span>
                            </label>

                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-gray"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-price text-center">
                        <h4 className="regular-price">$220.88</h4>
                        <h3 className="price">$278.58</h3>
                      </div>
                    </td>
                    <td>
                      <div className="action-area">
                        <a
                          href="cart.html"
                          title="Add to cart"
                          className="add-cart action-btn p-5"
                        >
                          Add To Cart{" "}
                          <AiOutlinePlusCircle className="icon fas"/>
                        </a>
                        <a
                          className="buy-btn action-btn mt-6"
                          href="checkout.html"
                        >
                          Buy Now
                        </a>
                      </div>
                    </td>
                    <td>
                      <button className="delet-btn" title="Delete Item">
                        <img src={close} alt="close" />
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="product-image">
                        <a href="single-product.html">
                          <img
                            className="product-thumbnal"
                            src={productImage6}
                            alt="product"
                          />
                        </a>
                        <div className="product-flags">
                          <span className="product-flag sale">SALE</span>
                          <span className="product-flag discount">-15%</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-info text-center">
                        <h4 className="product-catagory">Bag - Collection</h4>
                        <h3 className="product-name">
                          <a
                            className="product-link"
                            href="single-product.html"
                          >
                            Midi Dress
                          </a>
                        </h3>
                        <ul className="product-review">
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
                          <li className="review-item">
                            <AiFillStar />
                          </li>
                        </ul>
                        <div className="variable-single-item color-switch">
                          <div className="product-variable-color">
                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                                checked=""
                              />
                              <span className="product-color-black"></span>
                            </label>
                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-tomato"></span>
                            </label>

                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-gray"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-price text-center">
                        <h4 className="regular-price">$220.88</h4>
                        <h3 className="price">$278.58</h3>
                      </div>
                    </td>
                    <td>
                      <div className="action-area">
                        <a
                          href="cart.html"
                          title="Add to cart"
                          className="add-cart action-btn p-5"
                        >
                          Add To Cart
                          <AiOutlinePlusCircle className="icon fas"/>
                        </a>
                        <a
                          className="buy-btn action-btn mt-6"
                          href="checkout.html"
                        >
                          Buy Now
                        </a>
                      </div>
                    </td>
                    <td>
                      <button className="delet-btn" title="Delete Item">
                        <img src={close} alt="close" />
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="product-image">
                        <a href="single-product.html">
                          <img
                            className="product-thumbnal"
                            src={productImage1}
                            alt="product"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="product-info text-center">
                        <h4 className="product-catagory">New - Collection</h4>
                        <h3 className="product-name">
                          <a
                            className="product-link"
                            href="single-product.html"
                          >
                            Fit-Flare Dress
                          </a>
                        </h3>
                        <ul className="product-review">
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
                          <li className="review-item">
                            <AiFillStar />
                          </li>
                        </ul>
                        <div className="variable-single-item color-switch">
                          <div className="product-variable-color">
                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                                checked=""
                              />
                              <span className="product-color-black"></span>
                            </label>
                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-tomato"></span>
                            </label>

                            <label>
                              <input
                                name="modal-product-color"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-gray"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-price text-center">
                        <h4 className="regular-price">$220.88</h4>
                        <h3 className="price">$278.58</h3>
                      </div>
                    </td>
                    <td>
                      <div className="action-area">
                        <a
                          href="cart.html"
                          title="Add to cart"
                          className="add-cart action-btn p-5"
                        >
                          Add To Cart{" "}
                          <AiOutlinePlusCircle className="icon fas"/>
                        </a>
                        <a
                          className="buy-btn action-btn mt-6"
                          href="checkout.html"
                        >
                          Buy Now
                        </a>
                      </div>
                    </td>
                    <td>
                      <button className="delet-btn" title="Delete Item">
                        <img src={close} alt="close" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListArea;
