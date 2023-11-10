import React from "react";
import "./WhyUs.css";
import Content from "../Global-Components/Content";
import icon from "../../assets/images/Frame.png";
import icon1 from "../../assets/images/Frame(1).png";
import icon2 from "../../assets/images/Frame(2).png";

const WhyUs = () => {
  return (
    <div className="why-us">
      <h2 className="title">Why Us?</h2>
      <div className="container">
        <div className="contents">
          <Content
            contentImg={icon}
            paragraph="More than 149 travel titles currently in print"
          />
          <Content
            contentImg={icon1}
            paragraph="Supporting millions of travellers since 1982"
          />
          <Content
            contentImg={icon2}
            paragraph="Our utstanding customer satisfaction"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
