import React from "react";
import "./BlogCards.css";
import ItalyCard from "../Destinations-Italy/ItalyCard";
import blogImg from "../../assets/images/blog.png";
import blogImg1 from "../../assets/images/blog(1).png";
import blogImg2 from "../../assets/images/blog(2).png";
import blogImg3 from "../../assets/images/blog(3).png";
import blogImg4 from "../../assets/images/blog(4).png";

const BlogCards = () => {
  const cardText1 =
    "Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…";
  const cardText2 =
    "Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by the...";
  const cardText3 =
    "In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica.";
  const title1 = "Food & Drink";
  const title2 = "See & Do";
  const title3 = "Inspiration";
  const title4 = "Travel Tips";
  return (
    <div className="blog-cards">
      <div className="container">
        <div className="blog-cards-wrapper">
            <div className="blog-cards-first">

          <ItalyCard
            cardImg={blogImg}
            cardText={cardText1}
            haveTitle={true}
            cardTitle={title1}
          />
          <ItalyCard
            cardImg={blogImg1}
            cardText={cardText2}
            haveTitle={true}
            cardTitle={title2}
          />
            </div>
            <div className="blog-cards-second">

          <ItalyCard
            cardImg={blogImg2}
            cardText={cardText3}
            haveTitle={true}
            cardTitle={title3}
          />
          <ItalyCard
            cardImg={blogImg3}
            cardText={cardText1}
            haveTitle={true}
            cardTitle={title4}
          />
          <ItalyCard
            cardImg={blogImg4}
            cardText={cardText2}
            haveTitle={true}
            cardTitle={title1}
          />
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
