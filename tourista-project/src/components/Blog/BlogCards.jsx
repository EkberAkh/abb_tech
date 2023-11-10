import React from "react";
import "./BlogCards.css";
import ItalyCard from "../Destinations-Italy/ItalyCard";
import blogImg from "../../assets/images/blog.png";
import blogImg1 from "../../assets/images/blog(1).png";
import blogImg2 from "../../assets/images/blog(2).png";
import blogImg3 from "../../assets/images/blog(3).png";
import blogImg4 from "../../assets/images/blog(4).png";

const cardData = [
  {
    cardImg: blogImg,
    cardText: "Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…",
    haveTitle: true,
    cardTitle: "Food & Drink"
  },
  {
    cardImg: blogImg1,
    cardText: "Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by the...",
    haveTitle: true,
    cardTitle: "See & Do"
  },
  {
    cardImg: blogImg2,
    cardText: "In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica.",
    haveTitle: true,
    cardTitle: "Inspiration"
  },
  {
    cardImg: blogImg3,
    cardText: "Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…",
    haveTitle: true,
    cardTitle: "Travel Tips"
  },
  {
    cardImg: blogImg4,
    cardText: "Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by the...",
    haveTitle: true,
    cardTitle: "Food & Drink"
  },
];

const BlogCards = () => {
  return (
    <div className="blog-cards">
      <div className="container">
        <div className="blog-cards-wrapper">
          <div className="blog-cards-first">
            {cardData.slice(0, 2).map((card, index) => (
              <ItalyCard key={index} {...card} />
            ))}
          </div>
          <div className="blog-cards-second">
            {cardData.slice(2).map((card, index) => (
              <ItalyCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
