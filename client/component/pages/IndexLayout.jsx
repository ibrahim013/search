import React from "react";
import Slug from "../pages/Slug";
import HomePage from "../pages/HomePage";
import logo from "../../aserts/logo.jpg";
import Categories from "../pages/Categories";
import Footer from "../pages/Footer";

const IndexLayout = () => (
  <div className="ui fluid container">
    <div className="toplevel">
      <img alt="logo" src={logo} />
    </div>
    <div>
      <HomePage />
      <Slug />
      <Categories />
    </div>
    <div className="index-footer">
      <Footer />
    </div>
  </div>
);
export default IndexLayout;
