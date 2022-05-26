import React, { useState } from "react";
import { Sliderdata } from "./Sliderdata";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';



const Imageslider= ({slides}) =>{
const [current, setCurrent] = useState(0);
  const length = slides.length;





return (
  <section className="slider">
    <FaArrowAltCircleLeft className="leftarrow" onClick={prevSlide} />
    <FaArrowAltCircleRight className="rightarrow" onClick={nextSlide} />
    {Sliderdata.map((slide, index) => {
      return <img src={slide.image} alt="imagescol" />;
    })}
  </section>
);
}



export default Imageslider;