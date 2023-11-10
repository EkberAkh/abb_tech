import React, { useState } from "react";
import "./Countries.css";

import CountryBox from "./CountryBox";

const Countries = () => {
   
  return (
    <div className="countries">
      <div className="container">
        <div className="countries-wrapper">
          <CountryBox title="Europe"/>
          <CountryBox title="Asia"/>
          <CountryBox title="Africa"/>
          <CountryBox title="C/America"/>
          <CountryBox title="S/America"/>
        </div>
      </div>
    </div>
  );
};

export default Countries;
