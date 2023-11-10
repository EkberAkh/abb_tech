import React from "react";
import "./SocialMedia.css";
import google from "../../assets/images/google.png";
import apple from "../../assets/images/apple.png";
import fb from "../../assets/images/fb.png";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <span>or use one of this</span>
      <div className="media-icons">
        <div className="google icon ">
          <img src={google} alt="google" />
        </div>
        <div className="apple icon ">
          <img src={apple} alt="apple" />
        </div>
        <div className="fb icon ">
          <img src={fb} alt="fb" />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
