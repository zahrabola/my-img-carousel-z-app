import React, { useState } from "react";
import { Sliderdata } from "./Sliderdata";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';



const Imageslider= ({slides}) =>{
const [current, setCurrent] = useState(0);
  const length = slides.length;





return (
  <section className="slider">
    <FaArrowAltCircleLeft className="leftarrow"  />
    <FaArrowAltCircleRight className="rightarrow"  />
    {Sliderdata.map((slide, index) => {
      return <img src={slide.image} alt="imagescol" className="image"/>;
    })}
  </section>
);
}



export default Imageslider;