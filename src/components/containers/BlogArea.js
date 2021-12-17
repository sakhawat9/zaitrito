/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const BlogArea = () => {
  return (
    <div className="blog-area-v2 section-padding-t section-padding-secondary-b bg-red-50">
      <div className="container mx-auto px-8">
        <div className="blog-area-top">
          <div className="grid gap-4 grid-cols-12 items-center">
            <div className="lg:col-span-5 col-span-12">
              <div className="blog-top-left">
                <h2>
                  News And Views From <br /> The Zairito Blog
                </h2>
                <p>
                  Quisque velit nisi, pretium ut lacinia in, elementum id
                  elementum enim. Nulla porttitor accumssan tincidunt. Donec
                  rutrum congue leo eget malew susada. Cras ultricies ligula sed
                  magna dictum{" "}
                </p>
                <a href="#" className="primary-btn-v2">
                  View All Articles
                </a>
              </div>
            </div>
            <div className="lg:col-span-3"></div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="single-grid-blog-v2">
                <div className="blog-info">
                  <a href="#" className="blog-info__category">
                    LADIES FASHION
                  </a>
                  <h5 className="blog-date">May 11, 2019</h5>
                  <h3 className="blog-title">
                    <a className="blog-info__blog-link" href="#">
                      Lorem ipsum dolor amsp wret, Magna leo alia quet facilisi
                      tem pus dign issim Volu pat, vestib ulum mi quam pulvinar.
                    </a>
                  </h3>
                  <a className="blog-btn" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-12">
          <div className="lg:col-span-4 col-span-12 md:col-span-6">
            <div className="single-grid-blog-v2">
              <div className="blog-info">
                <a href="#" className="blog-category">
                  Man FASHION
                </a>
                <h5 className="blog-date">May 15, 2020</h5>
                <h3 className="blog-title">
                  <a className="blog-link" href="#">
                    Lorem ipsum dolor amsp wret, Magna leo alia quet facilisi
                    tem pus dign issim Volu pat, vestib ulum mi quam pulvinar.
                  </a>
                </h3>
                <a className="blog-btn" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 md:col-span-6">
            <div className="single-grid-blog-v2">
              <div className="blog-info">
                <a href="#" className="blog-category">
                  INNER WEAR
                </a>
                <h5 className="blog-date">Jan 12, 2019</h5>
                <h3 className="blog-title">
                  <a className="blog-link" href="#">
                    Lorem ipsum dolor amsp wret, Magna leo alia quet facilisi
                    tem pus dign issim Volu pat, vestib ulum mi quam pulvinar.
                  </a>
                </h3>
                <a className="blog-btn" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 md:col-span-6">
            <div className="single-grid-blog-v2">
              <div className="blog-info">
                <a href="#" className="blog-category">
                  DIGITAL PRODUCT
                </a>
                <h5 className="blog-date">Feb 10, 2021</h5>
                <h3 className="blog-title">
                  <a className="blog-link" href="#">
                    Lorem ipsum dolor amsp wret, Magna leo alia quet facilisi
                    tem pus dign issim Volu pat, vestib ulum mi quam pulvinar.
                  </a>
                </h3>
                <a className="blog-btn" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
