import React from "react";
import "./Footer.css";
import logo from "../../assets/images/Logo_tour.png";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>
              Discover the world's wonders and let us be your trusted guide to
              extraordinary destinations.
            </p>
            <span className="copyright">
            © Copyright 2023 Tourista Ltd. All Rights Reserved.
            </span>
          </div>
          <div className="menu footer-item">
            <h3 className="footer-title">Menu</h3>
            <ul>
                <li><Link className="link" to='/destinations'>Destinations</Link></li>
                <li><Link className="link" to='/destinations'>Private trips</Link></li>
                <li><Link className="link" to='/blog'>Blog</Link></li>
                <li><Link className="link" to='/about'>About us</Link></li>
            </ul>
          </div>
          <div className="support footer-item">
            <h3 className="footer-title">Support</h3>
            <ul>
                <li><Link className="link" to='/contact'>Contact us</Link></li>
                <li><Link className="link" to='/faq'>FAQ</Link></li>
                <li><Link className="link" to='/'>Privacy Policy</Link></li>
                <li><Link className="link" to='/'>Terms of Use</Link></li>
            </ul>
          </div>
          <div className="follow footer-item">
            <h3 className="footer-title">Follow Us</h3>
            <ul>
                <li><Link className="link" to='/'>Instagram</Link></li>
                <li><Link className="link" to='/'>Facebook</Link></li>
                <li><Link className="link" to='/'>Linkedin</Link></li>
                <li><Link className="link" to='/'>Tiktok</Link></li>
            </ul>
          </div>
          <span className="copyright-resp">
            © Copyright 2023 Tourista Ltd. All Rights Reserved.
            </span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
