import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import ProductDetails from "./pages/productDetails";
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
      </Switch>
    </Router>
  );
};

export default AppRouter;
