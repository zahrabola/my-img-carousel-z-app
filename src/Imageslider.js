import React, { useState } from "react";
import { Sliderdata } from "./Sliderdata";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';



const Imageslider= ({slides}) =>{
const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
      setCurrent(current === length -1 ? 0 : current +1);
  };

  console.log (current );

if(!Array.isArray (slides)|| slides.length <= 0){
    return null;
}



return (
  <section className="slider">
    <FaArrowAltCircleLeft className="leftarrow" />
    <FaArrowAltCircleRight className="rightarrow" onClick={nextSlide} />
    {Sliderdata.map((slide, index) => {
      return <img src={slide.image} alt="imagescol" className="image" />;
    })}
  </section>
);
}



export default Imageslider;