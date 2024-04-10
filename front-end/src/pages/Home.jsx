import React from 'react';
import useState from "react";
import Dashboard from "./Dashboard.jsx";
import Landing from "./Landing.jsx";

export default function Home(){
    const [user,serUser]=React.useState({
        userName:"Nnthn",
        isLoggedIn:true,
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
        <>
          <section className="hero" id="home">
	    {user.isLoggedIn ? <Dashboard/> : <Landing/>}
	  </section>

        </>
    );
}
