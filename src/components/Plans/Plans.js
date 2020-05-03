import React from "react";
import "./Plans.css";

export const Plans = () => {
  return (
    <div className="plans-container">
      <h1 className="header">Choose your plan.</h1>
      <div className="cards">
        <div className="card">
          <div className="bronze-bg card-title">BRONZE</div>
          <div className="bronze card-body-top">$5</div>
          <div className="bronze card-body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="arrow-container">
            <i className="fas fa-caret-down bronze"></i>
          </div>
          <div className="bronze-bg card-bottom">BUY</div>
        </div>
        <div className="card">
          <div className="silver-bg card-title">SILVER</div>
          <div className="silver card-body-top">$10</div>
          <div className="silver card-body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="arrow-container">
            <i className="fas fa-caret-down silver"></i>
          </div>
          <div className="silver-bg card-bottom">BUY</div>
        </div>
        <div className="card">
          <div className="gold-bg card-title">GOLD</div>
          <div className="gold card-body-top">$15</div>
          <div className="gold card-body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="arrow-container">
            <i className="fas fa-caret-down gold"></i>
          </div>
          <div className="gold-bg card-bottom">BUY</div>
        </div>
      </div>
    </div>
  );
};
