import React from 'react'
import './MustSee.css'
import ItalyCard from './ItalyCard';
import italyImg1 from '../../assets/images/italy(1).png';
import italyImg2 from '../../assets/images/italy(2).png';
import italyImg3 from '../../assets/images/italy(3).png';

const MustSee = () => {
    const cardText1 = "Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…"
    const cardText2 = "Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by the..."
    const cardText3 = "In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica."
    const title1 = "Vatican museums"
    const title2 = "Colosseum"
    const title3 = "St Peter’s basilica"
  return (
    <div className="must-see">
    <h2 className="title">Must-see attractions for your itinerary</h2>
    <div className="container">
      <div className="card-wrapper">
       <ItalyCard cardImg={italyImg1} cardText={cardText1} haveTitle={true} cardTitle={title1}/>
       <ItalyCard cardImg={italyImg2} cardText={cardText2} haveTitle={true} cardTitle={title2}/>
       <ItalyCard cardImg={italyImg3} cardText={cardText3} haveTitle={true} cardTitle={title3}/>
       
      </div>
    </div>
  </div>
  )
}

export default MustSee