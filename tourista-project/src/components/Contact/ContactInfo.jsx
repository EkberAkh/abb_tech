import React from "react";
import "./ContactInfo.css";
const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="container">
        <div className="contact-info-items">
          <div className="contact-item-left">
            <h2 className="contact-title">Commercial Contacts</h2>
            <div className="contact-item-content">
              <span className="contact-text">To advertise on Tourista:</span>
              <span className="email">advertise@tourista.com</span>
            </div>
            <div className="contact-item-content">
              <span className="contact-text">
                To become an affiliate partner:
              </span>
              <span className="email">affiliate@tourista.com</span>
            </div>
            <div className="contact-item-content">
              <span className="contact-text">To contact the hotels team:</span>
              <span className="email">hotels@tourista.com</span>
            </div>
            <div className="contact-item-content">
              <span className="contact-text">
                Send your request to republish Tourista content:
              </span>
              <span className="email">contentlicensing@tourista.com</span>
            </div>
            <div className="contact-item-content">
              <span className="contact-text">To advertise on Tourista:</span>
              <span className="email">advertise@tourista.com</span>
            </div>
          </div>
          <div className="right-items">
            <div className="contact-item">
              <div className="contact-item-content">
                <h2 className="contact-title">Content Contact</h2>
                <div className="contact-texts">

                <span className="contact-text">
                  To report an issue to our content teams please contact:
                </span>
                <span className="email">corrections@tourista.com</span>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-content">
                <h2 className="contact-title">Press Contact</h2>
                <div className="contact-texts">

                <span className="contact-text">
                  If you’re a journalist / influencer with a press enquiry about
                  Tourista, please contact our press office:
                </span>
                <span className="email">pr@tourista.com</span>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-content">
                <h2 className="contact-title">Partnership Contact</h2>
                <div className="contact-texts">

                <span className="contact-text">
                  For partnership opportunities:
                </span>
                <span className="email">partnerships@tourista.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
