import React from "react";
import "./ItalyCard.css";

const ItalyCard = ({ cardImg, cardText,haveTitle,cardTitle }) => {
  return (
    <div className="italy-card">
      <div className="card-img">
        <img src={cardImg} alt="cardImg" />
      </div>
      <div className="card-content">
        {haveTitle ? <span className="content-title">{cardTitle}</span> : ''}
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default ItalyCard;
