/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import CommentsAuthor01 from "../../assets/images/comments-author-1.png";
import CommentsAuthor02 from "../../assets/images/comments-author-2.png";
import Comments from "./Comments";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState([]);
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, []);

  const exactData = blogDetails.filter((td) => td.id === id);

  return (
    <div className="blog-single-area section-padding-b">
      <div className="container mx-auto px-8">
        <div className="blog-single-top">
          <div className="blog-thumbnail">
            <img
              className="blog-image"
              src={exactData[0]?.bannerImg}
              alt="blog-single-image"
            />
            <div className="blog-info">
              <div className="blog-info-wrap">
                <ul className="blog-meta">
                  <li className="single-meta">
                    <span className="blog-date">May 12, 2019</span>
                  </li>
                  <li className="single-meta">
                    <span className="blog-category">DIGITAL PRODUCT</span>
                  </li>
                </ul>
                <h2 className="blog-title">
                  In Look Designed Her Best Friend, Vera Farmiga Lit Up The Many
                  Saints Of Newark Premiere Pro Shorts To All
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-10 col-span-12">
            <div className="blog-meta-box">
              <div className="post-author">
                <img className="author-image" src={exactData[0]?.userImg} alt="post-author" />
                <div className="author-info">
                  <h3 className="author-name">{exactData[0]?.userName}</h3>
                  <p className="author-designation">{exactData[0]?.userTitle}</p>
                </div>
              </div>
              <div className="">
                <ul className="media-lsit">
                  <li className="medi-item">
                    <a href="#" className="soshal-media">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="medi-item">
                    <a href="#" className="soshal-media">
                      <FaSkype />
                    </a>
                  </li>
                  <li className="medi-item">
                    <a href="#" className="soshal-media">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="medi-item">
                    <a href="#" className="soshal-media">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="blog-content has-dropcap">
            {exactData[0]?.description}
            </p>
            <p className="blog-content">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Curabitur aliquet quam id dui posuere blandit. Mauris
              blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
              aliquet quam id dui posuere blandit. Curabitur non nulla sit amet
              nisl tempus convallis quis ac lectus. Nulla porttitor accumsan
              tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis
              ac lectus.Cras ultricies ligula sed magna dictum porta. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus. Curabitur
              Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula
              sed magna ut lacinia in, elementum id enim. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula. Proin eget tortor risus.
            </p>
            <p className="blog-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              non nulla sit amet nisl tempus convallis quis ac lectus. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Donec
              sollicitudin molestie malesuada. Cras ultricies ligula sed magna
              dictum porta. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi. Donec rutrum congue leo eget malesuada. Mauris
              blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              Pellentesque in ipsum id orci porta{" "}
            </p>
            <div className="blockquote-area">
              <p className="blockquote-text">
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id
                orci porta dapibus. Donec sollicitudin molestie malesuada.
                Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam
                sit amet quam vehicula elementum sed sit amet dui. Curabitur
                aliquet quam id dui posuere blandit. Donec sollicitudin molestie
                malesuada. Proin eget tortor risus. Vestibulum ac diam sit amet
                quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit
                amet quam vehicula elementum sed sit amet dui. Vivamus magna
                justo, lacinia eget{" "}
              </p>
            </div>
            <p className="blog-content">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Curabitur aliquet quam id dui posuere blandit. Mauris
              blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
              aliquet quam id dui posuere blandit. Curabitur non nulla sit amet
              nisl tempus convallis quis ac lectus. Nulla porttitor accumsan
              tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis
              ac lectus.Cras ultricies ligula sed magna dictum porta. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus. Curabitur
              Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula
              sed magna ut lacinia in, elementum id enim. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula. Proin eget tortor risus.
            </p>
            <p className="blog-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              non nulla sit amet nisl tempus convallis quis ac lectus. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Donec
              sollicitudin molestie malesuada. Cras ultricies ligula sed magna
              dictum porta. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi. Donec rutrum congue leo eget malesuada. Mauris
              blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              Pellentesque in ipsum id orci porta dapibus. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi. Nulla
              porttitor accumsan tincidunt. Nulla porttitor accuan sit amet dui.
              Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam
              sit amet quam vehicula elementum sed sit amet dui. Vestibulum amet
              ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
              a.
            </p>
            <div className="comments-area mb-40">
              <h3 className="comments-title">4 COMMENTS</h3>
              <ul className="comment-list">
                <li className="single-comment">
                  <div className="comment-meta">
                    <img
                      className="comments-author-image"
                      src={CommentsAuthor01}
                      alt="comments-author"
                    />
                    <div className="comment-meta-info">
                      <h4 className="author-name">Mitchel Cummins</h4>
                      <span className="comment-time">October 31, 2017</span>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p className="comment-text">
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. sit amet nisl tempus convallis quis
                      ac lectus.Cras ultricies ligula sed magna dictum porta.
                      Vestibulum ac
                    </p>
                  </div>
                  <a href="#" className="reply">
                    Replay
                  </a>
                  <ul className="children">
                    <li className="single-comment">
                      <div className="comment-meta">
                        <img
                          className="comments-author-image"
                          src={CommentsAuthor02}
                          alt="comments-author"
                        />
                        <div className="comment-meta-info">
                          <h4 className="author-name">John Cummins</h4>
                          <span className="comment-time">October 31, 2017</span>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p className="comment-text">
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Vivamus magna justo, lacinia eget
                          consectetur sed, convallis at tellus. sit amet nisl
                          tempus convallis quis ac lectus.Cras ultricies ligula
                          sed magna dictum porta. Vestibulum ac
                        </p>
                      </div>
                      <a href="#" className="reply">
                        Replay
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="single-comment">
                  <div className="comment-meta">
                    <img
                      className="comments-author-image"
                      src={CommentsAuthor01}
                      alt="comments-author"
                    />
                    <div className="comment-meta-info">
                      <h4 className="author-name">James Doe</h4>
                      <span className="comment-time">October 31, 2017</span>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p className="comment-text">
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. sit amet nisl tempus convallis quis
                      ac lectus.Cras ultricies ligula sed magna dictum porta.
                      Vestibulum ac
                    </p>
                  </div>
                  <a href="#" className="reply">
                    Replay
                  </a>
                </li>
              </ul>
            </div>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
