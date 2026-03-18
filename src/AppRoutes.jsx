import React from "react";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import App from './containers/App'
import Home from "./containers/Home";
import About from "./containers/About";
import Cart from "./containers/Cart";
import Wishlist from "./containers/Wishlist";
import Checkout from "./containers/Checkout";
import Confirm from "./containers/Confirm";
import Products from "./containers/Products";
import SingleProduct from './containers/SingleProduct'
import MensProducts from "./containers/MensProducts";
import WomensProducts from "./containers/WomensProducts";
import GearProducts from './containers/GearProducts'
import YogaProducts from './containers/YogaProducts'
import Blog from "./containers/Blog";
import LumaPlus from "./containers/LumaPlus";

const AppRoutes = () => {
  const location = useLocation(); // Get current route

  // Define meta tags dynamically based on the route
  const getMetaInfo = (pathname) => {
    switch (pathname) {
      case "/":
        return { title: "Home | My App", description: "Welcome to our homepage!" };
      case "/about":
        return { title: "About Us | My App", description: "Learn more about us." };
      case "/cart":
        return { title: "Your Cart | My App", description: "View and manage your cart." };
      default:
        return { title: "My App", description: "An awesome React app!" };
    }
  };

  const { title, description } = getMetaInfo(location.pathname);

  return (
    <App>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </App>
  );
};

export default AppRoutes;