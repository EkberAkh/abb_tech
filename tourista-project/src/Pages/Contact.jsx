import React from "react";
import contact_banner from "../assets/images/contact_bann.jpg";
import BannerThin from "../components/Global-Components/BannerThin";
import ContactInfo from "../components/Contact/ContactInfo";
import OurDestinations from "../components/Home/OurDestinations";
import JoinRev from "../components/Home/JoinRev";

const Contact = () => {
  return (
    <>
      <BannerThin
        banner_img={contact_banner}
        banner_title="Contact us"
        banner_par="Your Journey Begins with a Conversation - Reach Out to Us Today!"
      />
      <ContactInfo />
      <OurDestinations />
      <JoinRev />
    </>
  );
};

export default Contact;
