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

  const prevSlide = () => {
      setCurrent(current === 0 ? length -1 : current -1);
  }
  console.log(current); 
if(!Array.isArray (slides)|| slides.length <= 0){
    return null;
}



return (
  <section className="slider">
    <FaArrowAltCircleLeft className="leftarrow" onClick={prevSlide} />
    <FaArrowAltCircleRight className="rightarrow" onClick={nextSlide} />
    {Sliderdata.map((slide, index) => {
      return (
  <div className={index === current ? "slide active" : "slide"} key={index}>
        {index === current && (
          <img src={slide.image} alt="imagescol" className="image" />
        )}
      </div>
      );
    })}
  </section>
);
}



export default Imageslider;