import React from "react";
import "./Card.css";
import bookmark from "../../assets/images/bookmark.png";

const Card = ({
  cardImg,
  lovedTxt,
  saveIcon,
  countryName,
  infoContent,
  day,
  price,
  iconImg,
  available,
}) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-img-container">
          <img src={cardImg} alt="card-img" />
          <div className="card-img-content">
            <div className={lovedTxt ? "loved" : ""}>
              <span className="loved-txt">
                {" "}
                <img src={iconImg} alt="" />
                {lovedTxt}
              </span>
            </div>
            <div className="bookmark">
              {saveIcon ? (
                <img className="bookmark-img" src={bookmark} alt="bookmark" />
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
        <div className="card-info">
          <span className="country-name">{countryName} Trip</span>
          <p>{infoContent}</p>
          <div className="date-price">
            <span className="day">{day} {available ? 'available trip plans' : 'days'}</span>
            <span className="price">
              from <b>{price}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
