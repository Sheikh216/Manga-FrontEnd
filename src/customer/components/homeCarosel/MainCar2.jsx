import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { carData } from "./CarData";

const MainCar2 = () => {
  const items = carData.map((item) => (
    <img
      className="w-full h-96 px-72 pt-2  flex "  // Apply the w-full class for full-width images using Tailwind CSS
      role="presentation"
      src={item.image}
      alt=""
    />
   
  ));



  return (
    <div className=" bg-cover bg-center container"  >
      <AliceCarousel
      z-10
        
        items={items}
        autoPlay
        autoPlayInterval={1500}
        infinite
        disableButtonsControls
       
        
      />
    </div>
  );
};

export default MainCar2;
