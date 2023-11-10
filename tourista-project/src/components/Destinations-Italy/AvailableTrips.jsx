import React from "react";
import "./AvailableTrips.css";
import card_image from "../../assets/images/card_img.png";
import card_image1 from "../../assets/images/card_img(1).png";
import Card from "../Global-Components/Card";

const tripData = [
  {
    cardImg: card_image1,
    saveIcon: false,
    countryName: "ITALY",
    day: "12",
    infoContent: "International Italy",
    price: "$1299.00",
    available: true,
  },
  {
    cardImg: card_image,
    saveIcon: false,
    countryName: "PORTUGAL",
    day: "54",
    infoContent: "International Portugal",
    price: "$450.00",
    available: true,
  },
  {
    cardImg: card_image,
    saveIcon: false,
    countryName: "ICELAND",
    day: "31",
    infoContent: "International Iceland",
    price: "$150.00",
    available: true,
  },
  {
    cardImg: card_image,
    saveIcon: false,
    countryName: "Argentina",
    day: "54",
    infoContent: "International Argentina",
    price: "$850.00",
    available: true,
  },
  {
    cardImg: card_image1,
    saveIcon: false,
    countryName: "ITALY",
    day: "22",
    infoContent: "International Italy",
    price: "$1299.00",
    available: true,
  },
  {
    cardImg: card_image,
    saveIcon: false,
    countryName: "Russia",
    day: "34",
    infoContent: "International Russia",
    price: "$250.00",
    available: true,
  },
];

const AvailableTrips = () => {
  return (
    <div className="available-trips">
      <h2 className="title">Available Trips</h2>
      <div className="container">
        <div className="card-wrapper">
          {tripData.map((trip, index) => (
            <Card key={index} {...trip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableTrips;
