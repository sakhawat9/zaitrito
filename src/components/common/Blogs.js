/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Blogs = ({ blog }) => {
  const { img, title, subtitle, id } = blog;
  return (
    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
      <div className="single-grid-blog">
        <div className="blog-thumbnail">
          <a href={`/blogs/${id}`}>
            <img className="thumbnail-image" src={img} alt="blog" />
          </a>
        </div>
        <div className="blog-info">
          <ul className="blog-category">
            <li className="single-category">
              <a className="category-text" href={`/blogs/${id}`}>
                Fashion
              </a>
            </li>
            <li className="single-category">
              <a className="category-text" href={`/blogs/${id}`}>
                LAUNCH
              </a>
            </li>
          </ul>
          <h3 className="blog-title">
            <a className="blog-link" href={`/blogs/${id}`}>
              {title}
            </a>
          </h3>
          <p className="blog-content">{subtitle}</p>
          <a className="blog-btn" href={`/blogs/${id}`}>
            See Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
