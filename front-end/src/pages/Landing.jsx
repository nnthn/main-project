import React from 'react';
import "../index.css";
import logo from "../assets/logo.svg";
import homeImg from "../assets/homeImg.svg";
import womenImg from "../assets/womenbuying.svg";
import infoImg1 from "../assets/infoimg1.svg";
import infoImg2 from "../assets/infoimg2.svg";
import infoImg3 from "../assets/infoimg3.svg";
import Nav from "../components/Nav.jsx";
function Landing() {
    return (
        <main className="content">
	  <div className="hometxts">
	    <h2 className="homeh2">Predict and Analyze Product Demand in a Supermarket</h2>
	    <p>Stay ahead of the competition with accurate demand forecasting and data-driven insights.</p>
	  </div>
	  <img src={homeImg} alt="vectorimage"/>
	</main>
    );
};
export default Landing
