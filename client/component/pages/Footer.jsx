import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="info">
    <ul>
        <li> <Link to="/aboutus">PriceBay </Link></li>
        <li> <Link to="/aboutus">About Us </Link></li>
        <li><Link to="/terms"> Terms of Use</Link></li>
        <li><Link to="/privacy"> Privacy Policy</Link> </li>
        <li> <Link to="/cookies"> Cookies Policy</Link></li>
        <li> &copy; 2017-2025 PriceBay Nigeria</li>
    </ul>     
    </div>
  </footer>
);
export default Footer;