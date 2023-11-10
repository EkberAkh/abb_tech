import React from "react";
import "./InputBox.css";
import eye_icon from "../../assets/images/eye.png";
import { Link } from "react-router-dom";

const InputBox = ({passShown,inputTitle,buttonTitle,paragraphShown}) => {
  const showPass = () => {
    const passwordInput = document.querySelector("#password");
    if (passwordInput.type == "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };
  return (
    <div className="right-inputs">
      <div className="right-inputs-content">

      <h2 className="right-inputs-title">{inputTitle}</h2>
      {paragraphShown ? <p className="right-inputs-text">Enter your email below and we'll send you instructions on how to reset your password.</p> : ''}
      </div>
      <form>
        <div className="input-box-email input-box">
          <label htmlFor="email">Email</label>
          <input
            placeholder="someone@example.com"
            type="email"
            name="email"
            id="email"
          />
        </div>

        {passShown ? <div className="input-box-password input-box">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <img onClick={showPass} id="eyeIcon" src={eye_icon} alt="eyeIcon" />
        </div>: ''}
      </form>
     {passShown ?  <Link to='/forgot-password' className="forgot">
        <span>Forgot password?</span>
      </Link> : ''}
      <button className="sign-in-btn">{buttonTitle}</button>
    </div>
  );
};

export default InputBox;
