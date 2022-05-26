import React, { useState } from "react";
import { Sliderdata } from "./Sliderdata";


const Imageslider= () =>{
return (

<>
{Sliderdata.map((slide, index) => {
    return <img src={slide.image} alt="images" />;
})}
</>

)
}



export default Imageslider;