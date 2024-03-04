import React from 'react';
import "./index.css";
import logo from "./assets/logo.svg";
import homeImg from "./assets/homeImg.svg";
import womenImg from "./assets/womenbuying.svg";
import infoImg1 from "./assets/infoimg1.svg";
import infoImg2 from "./assets/infoimg2.svg";
import infoImg3 from "./assets/infoimg3.svg";
import Nav from "./components/Nav.jsx";
function Main() {
    return (
	
	<div className="body">
	  <Nav/>
	    <main className="content">
		<section id="home" className="home">
		    <div className="hometxts">
			<h2 className="homeh2">Predict and Analyze Product Demand in a Supermarket</h2>
			<p>Stay ahead of the competition with accurate demand forecasting and data-driven insights.</p>
		    </div>
		    <img src={homeImg} alt="vectorimage"/>
		</section>
		<section id="services" className="services">
		    <h2 className="our-services">Our Services</h2>
		    <h2 className="services-heading">Predict and Optimize Product Demand
		    </h2>
		    <div className="services-image-container">
			<img src={womenImg} alt="womenpurchasing"/>
			<p>DemandForecastingSupermarket is a service that leverages LSTM models to predict product demand in supermarkets. By analyzing historical data and market trends, we provide accurate demand forecasts to help businesses optimize their inventory management and make data-driven decisions.</p>
		    </div>
		</section>
		<section className="adv-section">
		    <div className="adv-title">
			<h2 className="adv-heading">Advanced Demand Forecasting and Analytics</h2>
			<p className="adv-disc">Our service offers advanced demand forecasting and analytics using LSTM models. We provide accurate predictions, data-driven insights, and interactive visualizations to help businesses optimize their inventory and drive growth.</p>
		    </div>
		    <div className="hscroll">
			<div className="items">
			    <div className="item-content">
				<img src={infoImg1} alt="infoimg"/>
				<div className="item-desc">
				    <h2>Accurate Demand Foreacast</h2>
				    <p>
				    Our LSTM model utilizes advanced algorithms to forecast product demand in your supermarket. By analyzing historical data and market trends, we provide accurate predictions to help you optimize inventory management and reduce costs.</p>
				</div>
			    </div>
			</div>
			<div className="items">
			    <div className="item-content">
				<img src={infoImg2} alt="infoimg"/>
				<div className="item-desc">
				    <h2>Data-driven Insights</h2>
				    <p>
				    Our platform generates graphs and visualizations that allow you to analyze product demand trends over time. Easily identify peak periods, seasonal fluctuations, and emerging patterns to make informed business decisions.</p>
				</div>
			    </div>
			</div>
			<div className="items">
			    <div className="item-content">
				<img src={infoImg3} alt="infoimg"/>
				<div className="item-desc">
				    <h2>Enhanced User Experience</h2>
				    <p>
				    We believe in providing a seamless user experience. Our platform includes interactive animations that make data exploration and analysis more engaging and intuitive. Discover insights effortlessly and drive business growth</p>
				</div>
			    </div>
			</div>
		    </div>
		</section>
		<section className="accurate-section">
		    <div className="grocery-img"></div>
		    <div className="accurate-desc">
			<h2 className="accurate-title">Accurate Demand Forecasts for Inventory Optimization.</h2>
			<h2 className="accurate-subheading">LSTM Model</h2>
			<p className="accurate-p">Our service utilizes LSTM models, a type of deep learning algorithm, to accurately predict product demand based on historical data and market trends.</p>
			<h2 className="accurate-subheading">Data-driven Insights</h2>
			<p className="accurate-p">We provide data-driven insights through visualizations and analytics, allowing businesses to make informed decisions regarding inventory management and product demand.</p>
			<h2 className="accurate-subheading">Inventory Optimization</h2>
			<p className="accurate-p">By accurately forecasting product demand, our service helps businesses optimize their inventory, reduce costs, and improve overall operational efficiency</p>
			
		    </div>
		    
		</section>
		<section id="about" className="about">
		    
		    <h2>About</h2>
		    <div className="abt-item1">
			<div className="about-img abt-img1"></div>
			<div className="abt-item-desc">
			    <h2>Accurately predict product demand</h2>
			    <p>Our LSTM model utilizes advanced algorithms to forecast product demand in your supermarket. By analyzing historical data and market trends, we provide accurate predictions to help you optimize inventory management and reduce costs.</p>
			</div>
		    </div>
		    <div className="abt-item2">
			<div className="about-img abt-img2"></div>
			<div className="abt-item-desc">
			    <h2>Analyze trends with visualizations</h2>
			    <p>Our platform generates graphs and visualizations that allow you to analyze product demand trends over time. Easily identify peak periods, seasonal fluctuations, and emerging patterns to make informed business decisions.</p>
			</div>
			
		    </div>
		    
		</section>
		<footer >
		    <h3>RetailDemandForecasting</h3>
		</footer>
		
	    </main>
	</div>

	

    );
};
export default Main
