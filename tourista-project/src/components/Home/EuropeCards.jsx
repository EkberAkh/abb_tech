import React, { useEffect, useState } from 'react';
import './EuropeCards.css';
import europeImg from '../../assets/images/card_img.png';
import europeImg1 from '../../assets/images/card_img(1).png';
import europeImg2 from '../../assets/images/card_img(2).png';
import Card from '../Global-Components/Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

  
  const cards = [
    {
      cardImg: europeImg,
      saveIcon: true,
      countryName: "Iceland",
      day: "7",
      infoContent: "International Iceland",
      price: "$400.00",
    },
    {
      cardImg: europeImg1,
      saveIcon: true,
      countryName: "Turkey",
      day: "7",
      infoContent: "International Istanbul",
      price: "$400.00",
    },
    {
      cardImg: europeImg,
      saveIcon: true,
      countryName: "Moscow",
      day: "7",
      infoContent: "International Moscow",
      price: "$400.00",
    },
  
  ];
  

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

const EuropeCards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 936);
  const renderCards = () =>
  cards.map((card) => <Card key={card.countryName} {...card} />);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 936);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <div className="europe-cards">
      <h2 className="title">Europe</h2>
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

export default EuropeCards