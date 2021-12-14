/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const PopularCategories = () => {
  return (
    <div className="section-padding">
      {/* <PopularCategoriesCircle left="-20vh" /> */}
      <div className="container flex items-center px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="flex items-center col-span-5">
            <div className=" category-left">
              <h2>Most Popular/Trending Categories</h2>
              <a href="#" className="primary-btn">
                View All Categories
              </a>
            </div>
          </div>
          <div className="flex items-center col-span-7 ">
            <div className="w-full">
              <ul className="category-list">
                <li>
                  <a class="catatory-link " href="#">
                    Weeding Dress
                    <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Athletic Wear <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Weeding Dress <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Medial Mask <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Weeding Dress <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Medial Mask <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Athletic Wear <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Beach Wear <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Athletic Wear <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Athletic Wear <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Medial Mask <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Athletic Wear <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Beach Wear <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Athletic Wear <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Beach Wear <IoIosArrowForward />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
