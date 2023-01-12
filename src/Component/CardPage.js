import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";

function CardPage({ thisTheme }) {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log("CardPage", state.data);
  let borderArr = state?.data?.borders;
  // console.log("thik hai", borderArr);

  const borderCountryNavigate = (item) => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${item}`)
      .then((res) => {
        navigate("/CardPage", { state: { data: res.data[0] } });
      })
      .catch((err) => {
        alert("Enter a valid name");
        // console.log(err);
      });
  };

  return (
    <div className="main" style={{ background: `${thisTheme?.mainBg}` }}>
      <Navbar />
      <div className="searchSection" id="searchSection2">
        <div className="btn" id="backBtn" onClick={() => navigate(-1)}>
          <div className="backBtnIcon"></div>
          <span>Back</span>
        </div>
      </div>
      <div className="content">
        <div
          className="bigFlag"
          style={{ backgroundImage: `url(${state?.data?.flags?.png})` }}
        ></div>
        <div className="detailedComponent">
          <div className="counntryName">{state?.data?.name?.common}</div>
          <div className="subdetailedComponent">
            <div>
              <div className="countryDetailTitle">
                <span>Native Name: </span>
                <span>
                  {state?.data?.name?.nativeName
                    ? Object.values(state?.data?.name?.nativeName)[0].common
                    : state?.data?.name}
                </span>
              </div>
              <div className="countryDetailTitle">
                <span>Population: </span>
                <span>{state?.data?.population}</span>
              </div>
              <div className="countryDetailTitle">
                <span>Region: </span>
                <span>{state?.data?.region}</span>
              </div>
              <div className="countryDetailTitle">
                <span>Sub Region: </span>
                <span>{state?.data?.subregion}</span>
              </div>
              <div className="countryDetailTitle">
                <span>Capital: </span>
                <span>{state?.data?.capital[0]}</span>
              </div>
            </div>
            <div>
              <div className="countryDetailTitle">
                <span>Top Level Domain: </span>
                <span>{state?.data?.tld}</span>
              </div>
              <div className="countryDetailTitle">
                <span>Currencies: </span>
                <span>
                  {state?.data?.currencies
                    ? Object.values(state?.data?.currencies)[0].name
                    : state?.data?.currencies}
                </span>
              </div>
              <div className="countryDetailTitle">
                <span>Laguages: </span>
                <span>{Object.values(state?.data?.languages).join(", ")}</span>
              </div>
            </div>
          </div>
          <div className="featureBtn">
            <span>Border Countries:</span>
            <div className="featureBtnModle">
              {state?.data?.borders
                ? borderArr?.map((item, index) => (
                    <button
                      className="btn"
                      key={index}
                      onClick={() => borderCountryNavigate(item)}
                    >
                      {item}
                    </button>
                  ))
                : "No Border Countries"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
