import React from 'react'
import BannerItaly from '../components/Destinations-Italy/BannerItaly'
import AvailableTrips from '../components/Destinations-Italy/AvailableTrips'
import MapItaly from '../components/Destinations-Italy/MapItaly'
import MustSee from '../components/Destinations-Italy/MustSee'
import Feedback from '../components/Home/Feedback'
import feedbackImg from '../assets/images/italy_feedback.png';
import Guidance from '../components/Destinations-Italy/Guidance'
import OurDestinations from '../components/Home/OurDestinations'
import JoinRev from '../components/Home/JoinRev'

const DestinationsItaly = () => {
  const craftedBy = "Vivian Lim"
  const infoText = "We have a very good time all the way. The Capri boat ride is excellent and so much fun with the crew! They are awesome."
  return (
    <>
    <BannerItaly/>
    <AvailableTrips/>
    <MapItaly/>
    <MustSee/>
    <Feedback backImg={feedbackImg} date={true} iconTrue={true} onlyInfo={false} craftedBy={craftedBy} infoText={infoText}/>
    <Guidance/>
    <OurDestinations/>
    <JoinRev/>
    </>
  )
}

export default DestinationsItaly