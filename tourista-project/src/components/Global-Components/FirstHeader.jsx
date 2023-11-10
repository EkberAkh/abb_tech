import React, { useState } from "react";
import currencyArrow from "../../assets/images/Unfold_More.png";
import { Link } from "react-router-dom";
import "./FirstHeader.css";
const Header = () => {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const clickHandler = ()=>{
    setCurrencyOpen(!currencyOpen);
  }
  const currencySelect = (e)=>{
    const mainCurrency = document.querySelector('.main-cur');

  mainCurrency.textContent = e.target.dataset.value


  }
  return (
    <div className="first-header">
      <div className="container">
        <div className="header-wrapper">
          <ul className="links">
            <li>
              <Link className="link" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="link" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="link" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div onClick={clickHandler} className="currency">
            <div className="main-currency">
              <span className="main-cur">US $</span>
              <img src={currencyArrow} alt="currency" />
            </div>
            <div className={`other-currencies-close ${currencyOpen ? 'other-currencies-open' : '' }`}>
              <div className="currency-box-wrapper">

              <div onClick={currencySelect} className="currency-box">
                <span data-value='AZN ₼' className="currency">AZN</span>
                <span >₼</span>
              </div>
              <div onClick={currencySelect} className="currency-box">
                <span data-value='EURO €' className="currency">EURO</span>
                <span >€</span>
              </div>
              <div onClick={currencySelect} className="currency-box">
                <span data-value='RUBLE ₽' className="currency">RUBLE</span>
                <span >₽</span>
              </div>
              <div onClick={currencySelect} className="currency-box">
                <span data-value='US $' className="currency">US</span>
                <span >$</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
