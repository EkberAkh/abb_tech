import React from 'react';
import './OurDestinations.css';
import right_arrow from '../../assets/images/Chevron_Right.png';
import { Link } from 'react-router-dom';

const OurDestinations = () => {
  return (
    <div className="our-destinations">
      <div className="wrapper">
        <p>Looking to go elsewhere?</p>
        <Link className='link' to="/destinations">Our destinations <img src={right_arrow} alt="rightArr" /></Link>
      </div>
    </div>
  )
}

export default OurDestinations