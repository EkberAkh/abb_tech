import "./Countries.css";
import CountryBox from "./CountryBox";

const countryTitles = ["Europe", "Asia", "Africa", "C/America", "S/America"];

const Countries = () => {
  return (
    <div className="countries">
      <div className="container">
        <div className="countries-wrapper">
          {countryTitles.map((title, index) => (
            <CountryBox key={index} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
