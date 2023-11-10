import React, { useEffect, useState } from 'react'
import "./BrandNew.css"
import Card from '../Global-Components/Card'
import card_image3 from "../../assets/images/card_img.png";
import card_image4 from "../../assets/images/card_img(1).png";
import card_image5 from "../../assets/images/card_img(2).png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const BrandNew = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 936);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 936);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const cards = [
    {
      cardImg: card_image3,
      saveIcon: true,
      countryName: "Spain",
      day: "12",
      infoContent: "Magical Madrid To Marrakech By Train",
      price: "$1299.00",
    },
    {
      cardImg: card_image4,
      saveIcon: true,
      countryName: "Italy",
      day: "5",
      infoContent: "Spectacular Sicily",
      price: "$250.00",
    },
    {
      cardImg: card_image5,
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
      <div className="brand-new">
      <h2 className="title">Brand new trips</h2>
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

export default BrandNew