import React from 'react'
import BannerThin from '../components/Global-Components/BannerThin'
import bannerImg from "../assets/images/faq.jpg";
import Questions from '../components/Faq/Questions';

const Faq = () => {
  return (
    <>
      <BannerThin
        banner_img={bannerImg}
        banner_title="FAQ"
        banner_par="Unlocking the Mysteries of Travel: Your Questions, Our Journey."
      />
      <Questions/>
    </>
  )
}

export default Faq