/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <div className="flex">
          <div>
            <li>
              {/* <Link href="#"> */}
                <a href="#" className="dropdown-link" onClick={() => setClick(false)}>
                  <div className="flex mr-0 w-52 dropdown-link__item">
                    <FaUser className="mr-0" />
                    <div>
                      <h5>24/7 Support</h5>
                      <p>Lorem ipsum dolor sit amet, tur sicing elit</p>
                    </div>
                  </div>
                </a>
              {/* </Link> */}
            </li>
            <li>
              {/* <Link href="#"> */}
                <a href="#" className="dropdown-link" onClick={() => setClick(false)}>
                  <div className="flex mr-0 w-52 dropdown-link__item ">
                    <BiTargetLock className="mr-0" />
                    <div>
                      <h5>100% Taget Filap</h5>
                      <p>Lorem ipsum dolor sit amet, tur sicing elit</p>
                    </div>
                  </div>
                </a>
              {/* </Link> */}
            </li>
            <li>
              {/* <Link href="#"> */}
                <a href="#" className="dropdown-link" onClick={() => setClick(false)}>
                  <div className="flex mr-0 w-52 dropdown-link__item ">
                    <FaUser className="mr-0" />
                    <div>
                      <h5>24/7 Support</h5>
                      <p>Lorem ipsum dolor sit amet, tur sicing elit</p>
                    </div>
                  </div>
                </a>
              {/* </Link> */}
            </li>
          </div>
          <div>
            <li>
              {/* <Link href="#"> */}
                <a href="#" className="dropdown-link" onClick={() => setClick(false)}>
                  <div className="flex mr-0 w-52 dropdown-link__item ">
                    <BiTargetLock className="mr-0" />
                    <div>
                      <h5>100% Taget Filap</h5>
                      <p>Lorem ipsum dolor sit amet, tur sicing elit</p>
                    </div>
                  </div>
                </a>
              {/* </Link> */}
            </li>
            <li>
              {/* <Link href="#"> */}
                <a href="#" className="dropdown-link" onClick={() => setClick(false)}>
                  <div className="flex mr-0 w-52 dropdown-link__item ">
                    <FaUser className="mr-0" />
                    <div>
                      <h5>24/7 Support</h5>
                      <p>Lorem ipsum dolor sit amet, tur sicing elit</p>
                    </div>
                  </div>
                </a>
              {/* </Link> */}
            </li>
            <li>
              {/* <Link href="#"> */}
                <a href="#" className="dropdown-link" onClick={() => setClick(false)}>
                  <div className="flex mr-0 w-52 dropdown-link__item ">
                    <FaUser className="mr-0" />
                    <div>
                      <h5>24/7 Support</h5>
                      <p>Lorem ipsum dolor sit amet, tur sicing elit</p>
                    </div>
                  </div>
                </a>
              {/* </Link> */}
            </li>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Dropdown;
