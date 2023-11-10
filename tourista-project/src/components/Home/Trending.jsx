import React, { useEffect, useState } from "react";
import "./Trending.css";
import Card from "../Global-Components/Card";
import card_image from "../../assets/images/card_img.png";
import card_image1 from "../../assets/images/card_img(1).png";
import card_image2 from "../../assets/images/card_img(2).png";
import sparkles from "../../assets/images/sparkles.png";
import heart from "../../assets/images/player-heart.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Trending = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 936);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 936);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const cards = [
    {
      cardImg: card_image,
      saveIcon: true,
      lovedTxt: "Loved by over 40s",
      countryName: "Spain",
      day: "12",
      infoContent: "Magical Madrid To Marrakech By Train",
      price: "$1299.00",
      iconImg: sparkles,
    },
    {
      cardImg: card_image1,
      saveIcon: true,
      lovedTxt: "Loved by couples",
      countryName: "Italy",
      day: "5",
      infoContent: "Spectacular Sicily",
      price: "$250.00",
      iconImg: heart,
    },
    {
      cardImg: card_image2,
      saveIcon: true,
      countryName: "Turkey",
      day: "7",
      infoContent: "International Istanbul",
      price: "$400.00",
    },
  ];

  const renderCards = () =>
    cards.map((card) => <Card key={card.countryName} {...card} />);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 936 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 935, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="trending">
      <h2 className="title">Trending now</h2>
      <div className="container">
        {isMobile ? (
          <Carousel infinite swipeable responsive={responsive}>
            {renderCards()}
          </Carousel>
        ) : (
          <div className="card-wrapper">{renderCards()}</div>
        )}
      </div>
    </div>
  );
};

export default Trending;
