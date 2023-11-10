import React from "react";
import "./Banner.css";
import search from "../../assets/images/Search_Magnifying_Glass.png";

const Banner = ({ background_vid, title, text, haveInput, tripButton }) => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-wrapper">
          <video className="background-video" autoPlay muted loop>
            <source src={background_vid} type="video/mp4" />
          </video>
          <div className="banner-content">
            <h1 className="title">{title}</h1>
            <p>{text}</p>
            {haveInput ? (
              <div className="input-box">
                <input placeholder="Where do you want to go?" type="text" />
                <img className="search" src={search} alt="search" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
