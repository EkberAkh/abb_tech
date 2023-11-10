import React from "react";
import "./MapItaly.css";
import map from "../../assets/images/Map Italy.png";
import ch_right from "../../assets/images/chevron-right.png";
import ch_left from "../../assets/images/chevron-left.png";
import ItalyCard from "./ItalyCard";
import cardImg from "../../assets/images/colosseum.png";

const MapItaly = () => {
  const cardText =
    "Have the drive of your life on the cliff roads of the AAmalfi Coast";
  return (
    <div className="map-italy">
      <img src={map} alt="map" />
      <div className="map-italy-inner">
        <h2 className="map-title">Tops things to do</h2>
        <div className="arrows">
          <img src={ch_left} alt="left" />
          <img src={ch_right} alt="right" />
        </div>
        <div className="map-card">

        <ItalyCard cardImg={cardImg} cardText={cardText}  />
        </div>
      </div>
    </div>
  );
};

export default MapItaly;
