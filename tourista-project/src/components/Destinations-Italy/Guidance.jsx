import React from "react";
import "./Guidance.css";
import icon from "../../assets/images/Frame.png";
import icon1 from "../../assets/images/Frame(1).png";
import icon2 from "../../assets/images/Frame(2).png";
import Content from "../Global-Components/Content";

const Guidance = () => {
  const guidanceTexts = [
    "Italy has so many delights to offer its visitors, it's hard to know where to start. Here's our pick of the best experiences Italy has to offer you.",
    "With so many attractions, it's hard to know where to begin with a trip to Italy. Here's some local insight into the essential things to know before you go.",
    "Your guide to traveling independently across Italy, from the Alps to the islands.",
  ];

  const contentItems = guidanceTexts.map((text, index) => ({
    contentImg: index % 3 === 0 ? icon : index % 3 === 1 ? icon1 : icon2,
    paragraph:
      index % 3 === 0
        ? "Best Things to Do"
        : index % 3 === 1
        ? "Things to Know"
        : "Transportation",
    guidanceText: text,
  }));

  return (
    <div className="guidance">
      <h2 className="title">Expert guidance to help you plan your trip</h2>
      <div className="container">
        <div className="contents">
          {contentItems.map((item, index) => (
            <Content key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guidance;
