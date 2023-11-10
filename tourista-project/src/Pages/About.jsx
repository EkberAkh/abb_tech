import React from "react";
import BannerThin from "../components/Global-Components/BannerThin";
import bannerImg from "../assets/images/aboutBanner.jpg";
import ChangingWorld from "../components/About/ChangingWorld";
import WhyUs from '../components/Home/WhyUs'
import LocalExperts from '../components/Home/LocalExperts'
import OurDestinations from '../components/Home/OurDestinations'
import JoinRev from '../components/Home/JoinRev'

const About = () => {
  return (
    <>
      <BannerThin
        banner_img={bannerImg}
        banner_title="About us"
        banner_par="Discover Our Passion for Travel and Adventure."
      />
      <ChangingWorld />
      <WhyUs/>
      <LocalExperts/>
      <OurDestinations/>
      <JoinRev/>
      
    </>
  );
};

export default About;
