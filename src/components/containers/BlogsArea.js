/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Blogs from "../common/Blogs";

const BlogsArea = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="blog-area blog-page-area section-padding">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-12 gap-4">
          {blogs.map((blog) => (
            <Blogs blog={blog} key={blog.id} />
          ))}
          {/* <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
            <div className="single-grid-blog">
              <div className="blog-thumbnail">
                <a href="single-blog.html">
                  <img
                    className="thumbnail-image"
                    src="assets/images/blog-2.jpg"
                    alt="blog"
                  />
                </a>
              </div>
              <div className="blog-info">
                <ul className="blog-category">
                  <li className="single-category">
                    <a className="category-text" href="single-blog.html">
                      Hot
                    </a>
                  </li>
                  <li className="single-category">
                    <a className="category-text" href="single-blog.html">
                      Collection
                    </a>
                  </li>
                </ul>
                <h3 className="blog-title">
                  <a className="blog-link" href="single-blog.html">
                    New line of office products
                  </a>
                </h3>
                <p className="blog-content">
                  Over the last several months we have been working with
                  leather, wood and metal artisans develop something special.
                  Today we are excited to debut our{" "}
                </p>
                <a className="blog-btn" href="single-blog.html">
                  See Details
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
            <div className="single-grid-blog">
              <div className="blog-thumbnail">
                <a href="single-blog.html">
                  <img
                    className="thumbnail-image"
                    src="assets/images/blog-3.jpg"
                    alt="blog"
                  />
                </a>
              </div>
              <div className="blog-info">
                <ul className="blog-category">
                  <li className="single-category">
                    <a className="category-text" href="single-blog.html">
                      Cloths
                    </a>
                  </li>
                  <li className="single-category">
                    <a className="category-text" href="single-blog.html">
                      INTERVIEW
                    </a>
                  </li>
                </ul>
                <h3 className="blog-title">
                  <a className="blog-link" href="single-blog.html">
                    Fashion Week desk office
                  </a>
                </h3>
                <p className="blog-content">
                  Over the last several months we have been working with
                  leather, wood and metal artisans develop something special.
                  Today we are excited to debut our{" "}
                </p>
                <a className="blog-btn" href="single-blog.html">
                  See Details
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
            <div className="single-grid-blog">
              <div className="blog-thumbnail">
                <a href="single-blog.html">
                  <img
                    className="thumbnail-image"
                    src="assets/images/blog-4.jpg"
                    alt="blog"
                  />
                </a>
              </div>
              <div className="blog-info">
                <ul className="blog-category">
                  <li className="single-category">
                    <a className="category-text" href="single-blog.html">
                      Bag
                    </a>
                  </li>
                  <li className="single-category">
                    <a className="category-text" href="single-blog.html">
                      New Collection
                    </a>
                  </li>
                </ul>
                <h3 className="blog-title">
                  <a className="blog-link" href="single-blog.html">
                    Your best winter collection
                  </a>
                </h3>
                <p className="blog-content">
                  Over the last several months we have been working with
                  leather, wood and metal artisans develop something special.
                  Today we are excited to debut our{" "}
                </p>
                <a className="blog-btn" href="single-blog.html">
                  See Details
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
            <div className="single-grid-blog">
              <div className="blog-thumbnail">
                <a href="single-blog.html">
                  <img
                    className="thumbnail-image"
                    src="assets/images/blog-5.jpg"
                    alt="blog"
                  />
                </a>
              </div>
              <div className="blog-info">
                <ul className="blog-category">
                  <li className="single-category">
                    <a className="category-text" href="single-blog.html">
                      sale
                    </a>
                  </li>
                  <li className="single-category">
                    <a className="category-text" href="single-blog.html">
                      Hot
                    </a>
                  </li>
                </ul>
                <h3 className="blog-title">
                  <a className="blog-link" href="single-blog.html">
                    Hot collection of the Week
                  </a>
                </h3>
                <p className="blog-content">
                  Over the last several months we have been working with
                  leather, wood and metal artisans develop something special.
                  Today we are excited to debut our{" "}
                </p>
                <a className="blog-btn" href="single-blog.html">
                  See Details
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
            <div className="single-grid-blog">
              <div className="blog-thumbnail">
                <a href="single-blog.html">
                  <img
                    className="thumbnail-image"
                    src="assets/images/blog-6.jpg"
                    alt="blog"
                  />
                </a>
              </div>
              <div className="blog-info">
                <ul className="blog-category">
                  <li className="single-category">
                    <a className="category-text" href="single-blog.html">
                      Fashion
                    </a>
                  </li>
                  <li className="single-category">
                    <a className="category-text" href="single-blog.html">
                      Weekly Product
                    </a>
                  </li>
                </ul>
                <h3 className="blog-title">
                  <a className="blog-link" href="single-blog.html">
                    Top Fashion Collectionfestival
                  </a>
                </h3>
                <p className="blog-content">
                  Over the last several months we have been working with
                  leather, wood and metal artisans develop something special.
                  Today we are excited to debut our{" "}
                </p>
                <a className="blog-btn" href="single-blog.html">
                  See Details
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <div className="gap-4 grid grid-cols-12">
          <div className="pagination-area mt-30">
            <ul className="paginations text-center">
              <li className="pagination-page">
                <a href="#" className="pagination-link">
                  <i className="fas fa-angle-double-left"></i>
                </a>
              </li>
              <li className="pagination-page active">
                <a href="#" className="pagination-link">
                  1
                </a>
              </li>
              <li className="pagination-page">
                <a href="#" className="pagination-link">
                  2
                </a>
              </li>
              <li className="pagination-page">
                <a href="#" className="pagination-link">
                  3
                </a>
              </li>
              <li className="pagination-page">
                <a href="#" className="pagination-link">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsArea;
