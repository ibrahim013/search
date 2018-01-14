import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="info">
      <div className="about">
        <Link to="/aboutus"> About PriceBay </Link>
      </div>
      <div >
        <Link to="/terms"> Terms and Conditions</Link> |
        <Link to="/privacy"> Privacy Policy</Link> |
        <Link to="/cookies"> Cookies Policy</Link>
      </div>
    </div>
  </footer>
);
export default Footer;
