import React from "react";
import Slug from "../pages/Slug";
import HomePage from "../pages/HomePage";
import logo from "../../aserts/logo.jpg";
import Footer from "../pages/Footer";
import Categories from "../pages/Categories";

const IndexLayout = () => (
  <div className="container">
    <div className="midlevel">
      <div className="content">
        <div className="toplevel">
          <img alt="logo" src={logo} />
        </div>
        <HomePage />
        <Slug />
      </div>
      <div className="cat">
      <Categories />
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
);
export default IndexLayout;
;
