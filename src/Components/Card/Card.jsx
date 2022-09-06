import React from "react";
import "./Card.css";
import { Icon } from "@iconify/react";

const Kayaking = ({ detail , handleDate}) => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>{detail.title}</h1>
        </div>
        <div className="main">
          <div className="main-head">
            <h2 className="title">
              <span className="icon">
                <Icon icon="bx:dollar" />
              </span>
              {detail.price} <sub className="sub">Hrs</sub>
            </h2>
          </div>
          <p className="main-sub">per person</p>
        </div>

        <div className="footer">
          <div className="footer-icon">
            <Icon icon="uil:location-arrow" />
          </div>
          <div className="footer-text">{detail.location} </div>
          <div className="footer-btn">
            <button className="btn" onClick={()=>handleDate()}>Choose Date </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kayaking;
