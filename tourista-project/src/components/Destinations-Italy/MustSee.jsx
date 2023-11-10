import React from "react";
import "./MustSee.css";
import ItalyCard from "./ItalyCard";
import italyImg1 from "../../assets/images/italy(1).png";
import italyImg2 from "../../assets/images/italy(2).png";
import italyImg3 from "../../assets/images/italy(3).png";

const cardData = [
  {
    cardImg: italyImg1,
    cardText:
      "Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…",
    haveTitle: true,
    cardTitle: "Vatican museums",
  },
  {
    cardImg: italyImg2,
    cardText:
      "Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by the...",
    haveTitle: true,
    cardTitle: "Colosseum",
  },
  {
    cardImg: italyImg3,
    cardText:
      "In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica.",
    haveTitle: true,
    cardTitle: "St Peter’s basilica",
  },
];

const MustSee = () => {
  return (
    <div className="must-see">
      <h2 className="title">Must-see attractions for your itinerary</h2>
      <div className="container">
        <div className="card-wrapper">
          {cardData.map((card, index) => (
            <ItalyCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MustSee;
