import React from "react";
import "./SignInPage.css";
import signInImg from "../../assets/images/signin.png";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo_tour.png";

import InputBox from "./InputBox";
import SocialMedia from "./SocialMedia";
import SignInDown from "./SignInDown";
import LoginPage from "./LoginPage";
import ForgotPass from "./ForgotPass";
import CreateAcc from "./CreateAcc";

const SignInPage = () => {
const location = useLocation()

  return (
    <div className="sign-in">
      <img src={signInImg} alt="signInImg" />

      <div className="sign-in-right">
        <div className="container">
          <div className="sign-in-right-inner">
            <div className="right-head">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            {location.pathname === '/sign-in' && <LoginPage/>}
            {location.pathname === '/forgot-password' && <ForgotPass/>}
            {location.pathname === '/create-acc' && <CreateAcc/>}
          
        

            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
