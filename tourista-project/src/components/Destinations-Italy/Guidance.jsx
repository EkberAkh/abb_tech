import React from 'react';
import './Guidance.css'
import icon from "../../assets/images/Frame.png";
import icon1 from "../../assets/images/Frame(1).png";
import icon2 from "../../assets/images/Frame(2).png";
import Content from '../Global-Components/Content';

const Guidance = () => {
    const guidanceText1 = "Italy has so many delights to offer its visitors, it's hard to know where to start. Here's our pick of the best experiences Italy has to offer you."
    const guidanceText2 = "With so many attractions, it's hard to know where to begin with a trip to Italy. Here's some local insight into the essential things to know before you go."
    const guidanceText3 = "Your guide to traveling independently across Italy, from the Alps to the islands."
  return (
    <div className="guidance">
    <h2 className="title">Expert guidance to help you
plan your trip</h2>
    <div className="container">
      <div className="contents">
        <Content
          contentImg={icon}
          paragraph="Best Things to Do"
          guidanceText={guidanceText1}
        />
        <Content
          contentImg={icon1}
          paragraph="Things to Know"
          guidanceText={guidanceText2}
        />
        <Content
          contentImg={icon2}
          paragraph="Transportation"
          guidanceText={guidanceText3}
        />
         <Content
          contentImg={icon}
          paragraph="Best Things to Do"
          guidanceText={guidanceText1}
        />
        <Content
          contentImg={icon1}
          paragraph="Things to Know"
          guidanceText={guidanceText2}
        />
        <Content
          contentImg={icon2}
          paragraph="Transportation"
          guidanceText={guidanceText3}
        />
      </div>
    </div>
  </div>
  )
}

export default Guidance