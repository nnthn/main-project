import "./nav.css";
import logo from "../assets/logo.svg";
import useState from "react";
import React from 'react';
import userIcon from "../assets/user.svg";

export default function Nav(){
    const [user,serUser]=React.useState({
        userName:"Nnthn",
        isLoggedIn:true
    });

    function toggleLogin(){
        serUser(prev=>{
            return {
                ...prev,
                isLoggedIn: !prev.isLoggedIn
            };
        });
    }
    return (
        <nav className="nav-bar">
	  <div className="logo-container">
	    <img src={logo} alt="logo"/>
	    <h3>RetailDemandForecasting</h3>
	  </div>
	  <ul>
	    <li><a className="link-style" href="#home">Home</a></li>
	    <li><a className="link-style" href="#services">Our Services</a></li>
	    <li><a className="link-style" href="#about">About</a></li>
            {user.isLoggedIn ? <li><img src={userIcon} alt="usericon"/></li> : <li><button className="loginbutton">Login</button></li>}
            {user.isLoggedIn ? <li onClick={toggleLogin}style={{margin : 0}}><h4  >{user.userName}</h4></li> : <li><button onClick={toggleLogin} className="signinbutton">Signin</button></li>}
	  </ul>
	</nav>
    );
}
