import React from "react";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";

function CardPage({ index }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("CardPage", state.data);
  console.log("currency", state.data.currencies);

  return (
    <div className="main">
      <Navbar />
      <div className="searchSection">
        <div className="btn" id="backBtn" onClick={() => navigate(-1)}>
          <div className="backBtnIcon"></div>
          <span>Back</span>
        </div>
      </div>
      <div className="content">
        <div className="bigFlag">a</div>
        <div className="detailedComponent">
          <div className="counntryName">{state?.data?.name?.common}</div>
          <div className="subdetailedComponent">
            <div>
              <div className="countryDetailTitle">
                <span>Native Name: </span>
                <span>
                  {state?.data?.name?.nativeName
                    ? Object.values(state?.data?.name?.nativeName)[0].common
                    : state?.data?.name}{" "}
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
                {/* <span>Euro {Object.values(state?.data?.currencies[0].name)}</span> */}
              </div>
              <div className="countryDetailTitle">
                <span>Laguages: </span>
                <span>
                  {Object.values(state?.data?.languages)[0] + " " +
                    Object.values(state?.data?.languages)[1] + " " +
                    Object.values(state?.data?.languages)[2]}  
                </span>
              </div>
            </div>
          </div>
          <div className="featureBtn">
            <span>Border Countries:</span>
            <div className="featureBtnModle">
              <button className="btn">France</button>
              <button className="btn">Germany</button>
              <button className="btn">Netherlands</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
