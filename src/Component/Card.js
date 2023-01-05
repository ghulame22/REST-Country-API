import React from "react";

function Card({ data , cardPage}) {
  return (
    <div className="card" onClick={cardPage}>
      <div
        className="flag"
        style={{ backgroundImage: `url(${data?.flags?.png})` }}
      ></div>
      <div className="countryDetail">
        <div>
          <span>{data?.name?.common}</span>
        </div>
        <div className="countryDetailTitle">
          <span>Population: </span>
          <span>{data.population}</span>
        </div>
        <div className="countryDetailTitle">
          <span>Region: </span>
          <span>{data.region}</span>
        </div>
        <div className="countryDetailTitle">
          <span>Capital: </span>
          <span>{data.capital} </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
