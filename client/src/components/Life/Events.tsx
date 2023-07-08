import React from "react";
import CarouselCard from "./CarouselCard";
import akidoImg from  "../../assets/life/Aikido/img1.webp"

const Events = () => {
  return (
    <div>
      <div>
        <h1>Events</h1>
        <p>The university holds a lot of events...</p>
      </div>
      <div>
        <div>
          <h1></h1>
          <div>
            <CarouselCard image={akidoImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
