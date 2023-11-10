import React from "react";
import "./Content.css";

const Content = ({contentImg,paragraph,guidanceText}) => {
  return (
    <div className="content">
      <div className="content-img">
        <img src={contentImg} alt="icon" />
      </div>
      <div className="guidance-box">
      <p className="guidance-head">{paragraph}</p>
        <p className="guidance-text">{guidanceText}</p>
      </div>
    </div>
  );
};

export default Content;
