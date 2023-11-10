import React from "react";
import "./SignInPage.css";
import signInImg from "../../assets/images/signin.png";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo_tour.png";
import prevArr from "../../assets/images/chevron-left.png";

import LoginPage from "./LoginPage";
import ForgotPass from "./ForgotPass";
import CreateAcc from "./CreateAcc";

const SignInPage = () => {
  const location = useLocation();

  const prevClick = () => {
    window.history.back();
  };

  return (
    <div className="sign-in">
      <img src={signInImg} alt="signInImg" />

      <div className="sign-in-right">
        <div className="container">
          <div className="sign-in-right-inner">
            <div className="right-head">
              {location.pathname === "/forgot-password" && (
                <div onClick={prevClick} className="prev-arrow">
                  <img src={prevArr} alt="prevArr" />
                </div>
              )}
              {location.pathname === "/create-acc" && (
                <div onClick={prevClick} className="prev-arrow">
                  <img src={prevArr} alt="prevArr" />
                </div>
              )}
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            {location.pathname === "/sign-in" && <LoginPage />}
            {location.pathname === "/forgot-password" && <ForgotPass />}
            {location.pathname === "/create-acc" && <CreateAcc />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
