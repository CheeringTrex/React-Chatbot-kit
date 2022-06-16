import React from "react";
// import { Link } from "react-router-dom";

 export default function Home() {
    return (
        <React.Fragment>
    <div><img src="./assets/img/logo.png" className="logo" /></div>

    <div className="topnav" id="myTopnav">

    <a style={{paddingRight:"5%"}}></a>
    <a href="home.html" className="active">Home</a>
    <a href="kaart.html">Kaart</a>
    <a href="activiteiten.html">Activiteiten</a>
    <a href="#about" style={{paddingRight:"10%"}}>Contact</a>
    <a href="#about" style={{paddingLeft: "25%"}}>Sign Up</a>
    <a href="#about">Log in</a>

    </div>
    <div>
    <img src="./assets/img/waddan.png" className="waddan" />
    </div>

    <div className="wrapper">
    <img src="./assets/img/Nora.png" height="250rem" className="nora"/>
  </div>
        </React.Fragment>
    )
 }
