import React, { useState } from "react";
import "./MainHeader.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo_tour.png";
import user from "../../assets/images/User_01.png";
import hamburger from "../../assets/images/Hamburger_MD.png";
import x_mark from "../../assets/images/close (2).png";

const MainHeader = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
  const [hamburgerShown, setHamburgerShown] = useState(false);
  const clickHandler = () => {
    setHamburgerShown(!hamburgerShown);
    document.body.classList.toggle("overflow-hidden");
  };
  const backClick = () => {
    setHamburgerShown(!hamburgerShown);
    document.body.classList.toggle("overflow-hidden");

  }
  return (
    <header>
      <div className="container">
        <div className="main-header-wrapper">
          <div className="header-links">
            <button
              onClick={clickHandler}
              className="hamburger-btn"
              type="button"
            >
              <img src={hamburgerShown ? x_mark : hamburger} alt="hamburger" />
            </button>
            <ul>
              <li>
                <NavLink className="link" to="/destinations">
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/destinations-italy">
                  Private trips
                </NavLink>
              </li>
            </ul>
            <div
              className={`hamburger-menu-none ${
                hamburgerShown ? "hamburger-menu-shown" : ""} `}
            >
              <ul className={`d-none ${hamburgerShown ? "ul-shown" : ""}`}>
                <li>
                  <NavLink className="link" to="/destinations">
                    Destinations
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/destinations-italy">
                    Private trips
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/about">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/faq">
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="buttons">
            <Link className="link user" to="/sign-in">
              <img src={user} alt="user" />
            </Link>
            <Link className="link lucky" to="/sign-in">
              I'm Feeling Lucky
            </Link>
            <Link className="link login" to="/sign-in">
              Login
            </Link>
          </div>
          <div onClick={backClick} className={hamburgerShown? 'background-opacity':'d-none'}>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
