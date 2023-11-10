import React from 'react';
import "./BannerItaly.css"
import banner_italy from '../../assets/images/Italy.png';
import calendar from '../../assets/images/fi-rr-calendar.png';
import sun from '../../assets/images/sun.png';
import earth from '../../assets/images/earth.png';
import dollar_sign from '../../assets/images/dollar-sign.png';
import person_spk from '../../assets/images/person_spk.png';

const BannerItaly = () => {
  return (
    <div className="banner">
    <div className="container">
      <div className="banner-wrapper">
        <img className="background-img" src={banner_italy} alt='banner'/>
        
        <div className="banner-content">
          <h1 className="title">Italy</h1>
          <p>Trips you couldn't plan, even if you wanted to.</p>
         <button type='button' className='create-trip'>Create a trip</button>
        </div>
        <div className="country-infos">
          <div className="info-item">
            <div className="info-head">
              <img src={calendar} alt="icon" />
              <h3 className="info-title">BEST TIME TO VISIT</h3>
            </div>
            <p className="info-content">High s/ May-Sept</p>
          </div>
          <div className="info-item">
            <div className="info-head">
              <img src={sun} alt="icon" />
              <h3 className="info-title">CLIMATE</h3>
            </div>
            <p className="info-content">High 32°C</p>
            <p className="info-content">Low 0°C</p>
          </div>
          <div className="info-item">
            <div className="info-head">
              <img src={earth} alt="icon" />
              <h3 className="info-title">TIMEZONE</h3>
            </div>
            <p className="info-content">Central European</p>
            <p className="info-content">Time (UTC +1)</p>
          </div>
          <div className="info-item">
            <div className="info-head">
              <img src={dollar_sign} alt="icon" />
              <h3 className="info-title">CURRENCY</h3>
            </div>
            <p className="info-content">Euro</p>
            <p className="info-content">Dollar</p>
          </div>
          <div className="info-item">
            <div className="info-head">
              <img src={person_spk} alt="icon" />
              <h3 className="info-title">LOCAL LANGUAGE</h3>
            </div>
            <p className="info-content">Italian</p>
            <p className="info-content">English</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BannerItaly