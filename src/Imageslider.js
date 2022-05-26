import React, { useState } from "react";
import { Sliderdata } from "./Sliderdata";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';



const Imageslider= () =>{
const [current, setCurrent] = useState(0);
  const length = slides.length;





return (
  <section>
    <FaArrowAltCircleLeft className="left-arrow"  />
    <FaArrowAltCircleRight className="right-arrow" />
    {Sliderdata.map((slide, index) => {
      return <img src={slide.image} alt="images" />;
    })}
  </section>
);
}



export default Imageslider;