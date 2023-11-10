import React from "react";
import "./Feedback.css";
import walking from "../../assets/images/walking.png";
import stars from "../../assets/images/Stars_tour.png";

const Feedback = ({backImg,onlyInfo,infoText,craftedBy,iconTrue,date}) => {
  const defaultInfo ="Tiago put together an epic itinerary for me and my friends. He showed us some hidden hiking trails and amazing local food spots. He even met us for a coffee to make sure we had everything we needed"
  return (
    <div className="feedback">
      <img src={backImg} alt="feedbackbg" />
    <div className="feedbacks">
        <div className="feedback-comment">
          <p>
           {infoText? infoText : defaultInfo}
          </p>
          {onlyInfo?<div className="author-about">
          <span className="thank">Thanks Tiago!”</span>
          <span className="info">
            Charlie, rappelling down a 370-foot waterfall
          </span>
          <span className="location">The Azores</span>

          </div>:''}
        </div>
        <div className="feedback-author">
          <div className="feedback-logo">
            <img src={walking} alt="walking" />
          </div>
          <div className="author-info">
            <span className="crafted-by">{craftedBy}</span>
            <div className="author-info-content">

              <span className="author-name">{iconTrue ?<img src={stars} alt="stars" />:'Tiago' }</span>
              <div className="line"></div>
              <span className="author-position">{date?'18 June 2024':'Local expert in Portugal'}</span>
            </div>
          </div>
        </div>

    </div>
      </div>
  );
};

export default Feedback;
