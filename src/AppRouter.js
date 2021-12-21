import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AthleticWear from "./components/containers/AthleticWear";
import Home from "./pages/home";
import ProductDetails from "./pages/productDetails";
import SignIn from "./pages/SignIn";
import WeedingDress from "./pages/WeedingDress";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/weedingDress">
          <WeedingDress />
        </Route>
        <Route path="/athleticWear">
          <AthleticWear />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
