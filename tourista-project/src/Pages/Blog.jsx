import React from "react";
import BannerThin from "../components/Global-Components/BannerThin";
import plane_banner from "../assets/images/plane_bann.png";
import Articles from "../components/Blog/Articles";
import BlogCards from "../components/Blog/BlogCards";
import OurDestinations from '../components/Home/OurDestinations'
import JoinRev from '../components/Home/JoinRev'

const Blog = () => {
  return (
    <>
      <BannerThin
        banner_img={plane_banner}
        banner_title="Blog"
        banner_par="Blog articles for Inspiration"
      />
      <Articles />
      <BlogCards/>
      <OurDestinations/>
      <JoinRev/>
    </>
  );
};

export default Blog;
