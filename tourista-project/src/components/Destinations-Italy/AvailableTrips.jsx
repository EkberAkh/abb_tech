import React from "react";
import "./AvailableTrips.css";
import card_image from "../../assets/images/card_img.png";
import card_image1 from "../../assets/images/card_img(1).png";
import Card from "../Global-Components/Card";
const AvailableTrips = () => {
  return  <div className="available-trips">
  <h2 className="title">Available Trips</h2>
  <div className="container">
    <div className="card-wrapper">
      <Card
        cardImg={card_image1}
        saveIcon={false}
        countryName="ITALY"
        day="12"
        infoContent="International Italy"
        price="$1299.00"
        available={true}
        
      />
      <Card
        cardImg={card_image}
        saveIcon={false}
        countryName="PORTUGAL"
        day="54"
        infoContent="International Portugal"
        price="$250.00"
        available={true}

      />
      <Card
        cardImg={card_image1}
        saveIcon={false}
        countryName="Turkey"
        day="19"
        infoContent="International Turkey"
        price="$400.00"
        available={true}
      />
       <Card
        cardImg={card_image}
        saveIcon={false}
        countryName="ICELAND"
        day="10"
        infoContent="International Iceland"
        price="$1299.00"
        available={true}
        
      />
      <Card
        cardImg={card_image1}
        saveIcon={false}
        countryName="COSTA RICA"
        day="54"
        infoContent="International Costa Rica"
        price="$250.00"
        available={true}

      />
      <Card
        cardImg={card_image}
        saveIcon={false}
        countryName="Argentina"
        day="19"
        infoContent="International Argentina"
        price="$400.00"
        available={true}
      />
    </div>
  </div>
</div>;
};

export default AvailableTrips;
