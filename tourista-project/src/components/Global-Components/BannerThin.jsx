import React from "react";
import "./BannerThin.css";

const BannerThin = ({ banner_img, banner_title, banner_par }) => {
  return (
    <div className="banner-thin">
      <div className="container">
        <div className="banner-thin-wrapper">
          <img src={banner_img} alt="banner" />
          <div className="banner-content">
            <h2 className="banner-title">{banner_title}</h2>
            <p className="banner-paragraph">{banner_par}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerThin;
