import React from "react";
import { Link } from "react-router-dom";

 export default function Home() {
    return (
        <React.Fragment>
            <div><img src="Assets /logo.png" class="logo" /></div>

    <div class="topnav" id="myTopnav">

    <a style="padding-right:20% ;"></a>
    <a href="home.html" class="active">Home</a>
    <a href="kaart.html">Kaart</a>
    <a href="activiteiten.html">Activiteiten</a>
    <a href="#about" style="padding-right: 20%;">Contact</a>
    <a href="#about" style="padding-left: 22%">Sign Up</a>
    <a href="#about">Log in</a>

    </div>
    <div>
    <img src="Assets/waddan.png" class="waddan" />
    </div>

    <div class="wrapper">
    <img src="Assets/Nora.png" height="250rem" class="nora"/>
  </div>
        </React.Fragment>
    )
 }