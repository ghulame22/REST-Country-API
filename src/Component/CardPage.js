import React from "react";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";

function CardPage() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <Navbar />
      <div className="searchSection">
        <div className="btn" onClick={() => navigate(-1)}>
          <div className="backBtnIcon"></div>
          <span>Back</span>
        </div>
      </div>
      <div className="content">
        <div className="bigFlag">a</div>
        <div className="detailedComponent">
          <div className="counntryName">Germany</div>
          <div className="subdetailedComponent">
            <div>
              <div className="countryDetailTitle">
                <span>Native Name: </span>
                <span>Belgié</span>
              </div>
              <div className="countryDetailTitle">
                <span>Population: </span>
                <span>11.319.511</span>
              </div>
              <div className="countryDetailTitle">
                <span>Region: </span>
                <span>Europe</span>
              </div>
              <div className="countryDetailTitle">
                <span>Sub Region: </span>
                <span>Western Europe</span>
              </div>
              <div className="countryDetailTitle">
                <span>Capital: </span>
                <span>Brussels</span>
              </div>
            </div>
            <div>
              <div className="countryDetailTitle">
                <span>Top Level Domain: </span>
                <span>be</span>
              </div>
              <div className="countryDetailTitle">
                <span>Currencies: </span>
                <span>Euro</span>
              </div>
              <div className="countryDetailTitle">
                <span>Laguages: </span>
                <span>Dutch. French. German</span>
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
