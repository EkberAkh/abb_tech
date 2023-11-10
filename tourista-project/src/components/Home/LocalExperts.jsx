import React from "react";
import "./LocalExperts.css";
import expertImg from "../../assets/images/Callcenter.png";
import expertImg1 from "../../assets/images/Callcenter(1).png";
import text_blank from "../../assets/images/text_blank.png";
import text_blank1 from "../../assets/images/text_blank1.png";
import resp_img from "../../assets/images/localExp_resp.png";

const LocalExperts = () => {
  return (
    <div className="local-experts">
      <div className="title">Our Local Experts</div>
      <div className="container">
        <div className="experts-wrapper">
          <img src={resp_img} alt="" className="resp d-none" />
          <div className="first-photo">
            <img src={expertImg} alt="expertImg" />

            <div className="text">
              <div className="text-inner">
                <img src={text_blank} alt="text" />
                <p>
                  Why trust Gary in Florida to plan your trip to South Africa?
                </p>
              </div>
            </div>
          </div>
          <div className="second-photo">
          <img src={expertImg1} alt="expertImg1" />

            <div className="text">
              <div className="text-inner">
                <img src={text_blank1} alt="text" />
                <p>When Angela in Johannesburg knows best.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalExperts;
