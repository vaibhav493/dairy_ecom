import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="banner_container">
    <img  src="https://akshayakalpa.org/chennai/images/banner_image.jpg"/>
    <br/>

<img src="/images/banner_1.png"/>
<br/>
<img  src="/images/banner_2.png"/>

    </div>
  );
};

export default Hero;
