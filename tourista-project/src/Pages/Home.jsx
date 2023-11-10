import React from "react";
import Banner from "../components/Home/Banner";
import Trending from "../components/Home/Trending";
import BrandNew from "../components/Home/BrandNew";
import WhyUs from "../components/Home/WhyUs";
import LocalExperts from "../components/Home/LocalExperts";
import Feedback from "../components/Home/Feedback";
import EuropeCards from "../components/Home/EuropeCards";
import AsiaCards from "../components/Home/AsiaCards";
import OurDestinations from "../components/Home/OurDestinations";
import JoinRev from "../components/Home/JoinRev";
import background_vid from "../assets/videos/Homepage.mp4";
import feedback_bg from "../assets/images/feedback.png";


const Home = () => {
  const title = 'We create trips you love';
  const text = "Trips you couldn't plan, even if you wanted to";
  return (
    <>
      <Banner background_vid={background_vid} title={title} text={text} haveInput={true} />
      <Trending />
      <BrandNew />
      <WhyUs />
      <LocalExperts />
      <Feedback backImg={feedback_bg} onlyInfo={true}/>
      <EuropeCards />
      <AsiaCards />
      <OurDestinations />
      <JoinRev/>
    </>
  );
};

export default Home;
