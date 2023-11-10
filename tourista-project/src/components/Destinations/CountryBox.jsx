import React, { useState } from "react";
import "./CountryBox.css";
import up_chevron from "../../assets/images/up-chevron.png";
import down_chevron from "../../assets/images/down-chevron.png";

const CountryBox = ({title}) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="country-box">
      <div className="countries-item">
        <h2 className="countries-title">{title}</h2>
        <ul>
          <li>Azores</li>
          <li>Croatia</li>
          <li>Georgia</li>
          <li>Germany</li>
          <li>Greece</li>
          <li>Azores</li>
          <li>Croatia</li>
          <li>Georgia</li>
          <li>Germany</li>
          <li>Greece</li>
          <li>Azores</li>
          <li>Croatia</li>
        </ul>
        <div className={`items-resp-close ${isOpen ? "items-resp-open" : ""}`}>
          <ul>
            <li>Azores</li>
            <li>Croatia</li>
            <li>Georgia</li>
            <li>Germany</li>
            <li>Greece</li>
            <li>Azores</li>
          </ul>
          <ul>
            <li>Azores</li>
            <li>Croatia</li>
            <li>Georgia</li>
            <li>Germany</li>
            <li>Greece</li>
            <li>Azores</li>
          </ul>
        </div>
      </div>
      <button onClick={clickHandler} type="button">
        {" "}
        <img
          src={isOpen ? up_chevron : down_chevron}
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </div>
  );
};

export default CountryBox;
