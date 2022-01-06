import React from "react";
import ProductImage1 from "../../assets/images/product-image-1.png";
import ProductImage2 from "../../assets/images/product-image-2.png";
import ProductImage3 from "../../assets/images/product-image-3.png";

const CompareArea = () => {
  return (
    <section className="compare-page-area section-padding">
      <div className="container mx-auto px-8">
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-12">
            <div className="table_page table-responsive compare-table">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="first-column">Product</td>

                    <td className="product-image-title">
                      <div className="products-top">
                        <a href="single-product.html" className="image">
                          <img
                            src={ProductImage1}
                            alt="Compare Product"
                          />
                        </a>
                      </div>
                      <div>
                        <a href="shop-grid-left-sidebar.html" className="category">
                          Bag
                        </a>
                        <h5>
                          <a href="single-product.html" className="title">
                            Rosmo Namino Milancelos
                          </a>
                        </h5>
                      </div>
                    </td>

                    <td className="product-image-title">
                      <div className="products-top">
                        <a href="single-product-v2.html" className="image">
                          <img
                            src={ProductImage2}
                            alt="Compare Product"
                          />
                        </a>
                      </div>
                      <div>
                        <a href="shop-grid-left-sidebar.html" className="category">
                          Shoe
                        </a>
                        <h5>
                          <a href="single-product-v2.html" className="title">
                            Tailored Fit Mesh-Panel Polo
                          </a>
                        </h5>
                      </div>
                    </td>

                    <td className="product-image-title">
                      <div className="products-top">
                        <a href="single-product-v3.html" className="image">
                          <img
                            src={ProductImage3}
                            alt="Compare Product"
                          />
                        </a>
                      </div>
                      <div>
                        <a href="shop-grid-left-sidebar.html" className="category">
                          Wearable
                        </a>
                        <h5>
                          <a href="single-product-v3.html" className="title">
                            Rosmo Namino Milancelos
                          </a>
                        </h5>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="first-column">Description</td>
                    <td className="pro-desc">
                      <p className="text-3xl">
                        We have this product in United States warehouse. If
                        destination means you can receive the parcel faster and
                        earlier than expected.
                      </p>
                    </td>
                    <td className="pro-desc">
                      <p className="text-3xl">
                        We have this product in United States warehouse. If
                        destination means you can receive the parcel faster and
                        earlier than expected.
                      </p>
                    </td>
                    <td className="pro-desc">
                      <p className="text-3xl">
                        We have this product in United States warehouse. If
                        destination means you can receive the parcel faster and
                        earlier than expected.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="first-column">Price</td>
                    <td className="pro-price">$295</td>
                    <td className="pro-price">$275</td>
                    <td className="pro-price">$395</td>
                  </tr>
                  <tr>
                    <td className="first-column">Color</td>
                    <td className="pro-color">Black</td>
                    <td className="pro-color">Black</td>
                    <td className="pro-color">Black</td>
                  </tr>
                  <tr>
                    <td className="first-column">Stock</td>
                    <td className="pro-stock">In Stock</td>
                    <td className="pro-stock">In Stock</td>
                    <td className="pro-stock">In Stock</td>
                  </tr>
                  <tr>
                    <td className="first-column">Add to cart</td>
                    <td className="pro-addtocart">
                      <a href="cart.html" className="primary-btn">
                        <span>ADD TO CART</span>
                      </a>
                    </td>
                    <td className="pro-addtocart">
                      <a href="cart.html" className="primary-btn">
                        <span>ADD TO CART</span>
                      </a>
                    </td>
                    <td className="pro-addtocart">
                      <a href="cart.html" className="primary-btn">
                        <span>ADD TO CART</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="first-column">Delete</td>
                    <td className="pro-remove">
                      <button
                        className="bg-transparent border-0"
                        title="Delete Item"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                    <td className="pro-remove">
                      <button
                        className="bg-transparent border-0"
                        title="Delete Item"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                    <td className="pro-remove">
                      <button
                        className="bg-transparent border-0"
                        title="Delete Item"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="first-column">Rating</td>
                    <td className="pro-ratting">
                      <ul className="product-review">
                        <li className="review-item active">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item active">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item active">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item">
                          <i className="flaticon-star"></i>
                        </li>
                      </ul>
                    </td>
                    <td className="pro-ratting">
                      <ul className="product-review">
                        <li className="review-item active">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item">
                          <i className="flaticon-star"></i>
                        </li>
                      </ul>
                    </td>
                    <td className="pro-ratting">
                      <ul className="product-review">
                        <li className="review-item active">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item active">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item">
                          <i className="flaticon-star"></i>
                        </li>
                        <li className="review-item">
                          <i className="flaticon-star"></i>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareArea;
