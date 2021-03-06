import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Cart from "./pages/Cart";
import Checkout from "./pages/checkout";
import Compare from "./pages/Compare";
import Contact from "./pages/contact";
import EmptyWish from "./pages/EmptyWish";
import Error from "./pages/Error";
import Faq from "./pages/Faq";
import Home from "./pages/home";
import HomeV1 from "./pages/HomeV1";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductDetails from "./pages/productDetails";
import ProductAreaV01 from "./pages/productsArea-v01";
import ProductsAreaV02 from "./pages/productsArea-v02";
import ProductsAreaV03 from "./pages/productsArea-v03";
import RefundPolicy from "./pages/RefundPolicy";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TermConditions from "./pages/TermConditions";
import WishList from "./pages/WishList";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home-v1">
          <HomeV1 />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/ProductAreaV01">
          <ProductAreaV01 />
        </Route>
        <Route path="/productsAreaV02">
          <ProductsAreaV02 />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/productsAreaV03">
          <ProductsAreaV03 />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/blogs/:id">
          <Blogs />
        </Route>
        <Route path="/term-conditions">
          <TermConditions />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/refund-policy">
          <RefundPolicy />
        </Route>
        <Route path="/error-page">
          <Error />
        </Route>
        <Route path="/compare">
          <Compare />
        </Route>
        <Route path="/wish-list">
          <WishList />
        </Route>
        <Route path="/empty-wish-list">
          <EmptyWish />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
