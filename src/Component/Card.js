import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="flag">Flag</div>
      <div className="countryDetail">
        <div>
          <span>Germany</span>
        </div>
        <div className="countryDetailTitle">
          <span>Population: </span>
          <span>81,770,900</span>
        </div>
        <div className="countryDetailTitle">
          <span>Region: </span>
          <span>Europe</span>
        </div>
        <div className="countryDetailTitle">
          <span>Capital: </span>
          <span>Berlin</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
