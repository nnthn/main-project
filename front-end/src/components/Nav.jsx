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
    <aside>
        <nav className="nav-bar">
	        <img src={logo} alt="logo"/>
	    </nav>
    </aside>
    );
}
