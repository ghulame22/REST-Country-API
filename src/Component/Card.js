import React from "react";

function Card({ data, cardPage, index, thisTheme }) {
  return (
    <div
      className="card"
      style={{
        background: `${thisTheme?.inputBg}`,
        boxShadow: `${thisTheme?.shadow}`,
      }}
      onClick={() => cardPage(index)}
    >
      <div
        className="flag"
        style={{ backgroundImage: `url(${data?.flags?.png})`, borderBottom: `${thisTheme?.borderBottom}` }}
      ></div>
      <div
        className="countryDetail"
        style={{
          color: `${thisTheme?.textColor}`,
        }}
      >
        <div>
          <span>{data?.name?.common}</span>
        </div>
        <div className="countryDetailTitle">
          <span>Population: </span>
          <span
            style={{
              color: `${thisTheme?.textColor}`,
            }}
          >
            {data.population}
          </span>
        </div>
        <div className="countryDetailTitle">
          <span>Region: </span>
          <span
            style={{
              color: `${thisTheme?.textColor}`,
            }}
          >
            {data.region}
          </span>
        </div>
        <div className="countryDetailTitle">
          <span>Capital: </span>
          <span
            style={{
              color: `${thisTheme?.textColor}`,
            }}
          >
            {data.capital}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
