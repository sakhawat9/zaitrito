/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineCloseSquare, AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MobileMenu from "./MobileMenu";
// import { Store } from "../../utils/Store";
// import Usermenu from "./Usermenu";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // const { state, dispatch } = useContext(Store);
  // const { cart, userInfo } = state;

  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-wrap items-center justify-between p-5 mx-auto">
        <span className="flex items-center hidden mb-4 font-medium text-gray-900 lg:block title-font md:mb-0">
          {/* <Link href="/"> */}
          <a href="#" className="ml-3 text-xl items-center flex">
            <IoIosCall />
            Call Us: +777 2345 7885 (FREE)
          </a>
          {/* </Link> */}
        </span>

        <button
          className="inline-block text-3xl lg:hidden"
          onClick={toggleDrawer}
        >
          <FiMenu />
        </button>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <div
            onClick={toggleDrawer}
            className="p-3 overflow-hidden text-2xl text-right close text-royal-blue"
          >
            <AiOutlineCloseSquare className="float-right" />
          </div>
          <MobileMenu />
        </Drawer>

        <nav className="flex flex-wrap items-center justify-center hidden text-base md:ml-auto md:mr-auto lg:block">
          {/* <Link href="/"> */}
          <a href="#" className="mr-5 hover:text-gray-900">
            Home
          </a>
          {/* </Link> */}

          {/* <Link href="/courses"> */}
          <a href="#" className="mr-5 hover:text-gray-900">
            Courses
          </a>
          {/* </Link> */}
          {/* <Link href="/instractors"> */}
          <a href="#" className="mr-5 hover:text-gray-900">
            Instractors
          </a>
          {/* </Link> */}

          {/* <Link href="/categories"> */}
          <a href="#" className="mr-5 hover:text-gray-900">
            Categories
          </a>
          {/* </Link> */}

          {/* <Link href="/contact"> */}
          <a href="#" className="mr-5 hover:text-gray-900">
            Contact
          </a>
          {/* </Link> */}
        </nav>

        <span className="relative inline-block mr-6">
          {/* <Link href="/cart"> */}
          <a href="#">
            <span className="text-xl cart__ico">
              <AiOutlineShoppingCart />
            </span>
          </a>
          {/* </Link> */}
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-blue">
            {/* {cart.cartItems.length} */}0
          </span>
        </span>

        {/* <Usermenu userInfo={userInfo} /> */}

        {/* <Link href="/login"> */}
        <a href="#">
          <button className="inline-flex items-center px-3 py-1 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
            Login/Registation
          </button>
        </a>
        {/* </Link> */}
      </div>
    </header>
  );
};

export default Header;
