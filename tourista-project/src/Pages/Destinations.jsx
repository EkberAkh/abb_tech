import React from "react";
import Banner from "../components/Home/Banner";
import background_video from "../assets/videos/Destinations.mp4";
import Countries from "../components/Destinations/Countries";
import TopDestinations from "../components/Destinations/TopDestinations";
import feedback_img from '../assets/images/feedback_dest.png'; 
import Feedback from "../components/Home/Feedback";
import JoinRev from "../components/Home/JoinRev";

const Destinations = () => {
  const text = "Destinations";
  const title = "Explore places on Tourista";
  return (
    <>
      <Banner
        background_vid={background_video}
        haveInput={false}
        text={text}
        title={title}
      />
      <Countries />
      <TopDestinations/>
      <Feedback backImg={feedback_img} onlyInfo={true} craftedBy={"Trip crafted by"} />
      <JoinRev/>
    </>
  );
};

export default Destinations;
