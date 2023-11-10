import React, { useEffect, useState } from 'react';
import './TopDestinations.css'
import Card from '../Global-Components/Card';
import card_image from "../../assets/images/card_img.png";
import card_image1 from "../../assets/images/card_img(1).png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopDestinations = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 936);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 936);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const cards = [
    {
      cardImg: card_image,
      saveIcon:false,
      countryName: "ITALY",
      day: "12",
      infoContent: "International Italy",
      price: "$1299.00",
      available: true
    },
    {
      cardImg: card_image,
      saveIcon:false,
      countryName: "Portugal",
      day: "12",
      infoContent: "International Portugal",
      price: "$199.00",
      available: true
    },
    {
      cardImg: card_image1,
      saveIcon:false,
      countryName: "Argentina",
      day: "12",
      infoContent: "International Argentina",
      price: "$199.00",
      available: true
    },
    {
      cardImg: card_image,
      saveIcon:false,
      countryName: "ITALY",
      day: "12",
      infoContent: "International Italy",
      price: "$1299.00",
      available: true
    },
    {
      cardImg: card_image1,
      saveIcon:false,
      countryName: "Portugal",
      day: "12",
      infoContent: "International Portugal",
      price: "$199.00",
      available: true
    },
    {
      cardImg: card_image,
      saveIcon:false,
      countryName: "Argentina",
      day: "12",
      infoContent: "International Argentina",
      price: "$199.00",
      available: true
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
    <div className="top-destinations">
    <h2 className="title">Top Destinations</h2>
    <div className="container">
    {isMobile ? (
          <Carousel infinite swipeable  responsive={responsive}>{renderCards()}</Carousel>
        ) : (
          <div className="card-wrapper">{renderCards()}</div>
        )}
    </div>
  </div>
  )
}

export default TopDestinations