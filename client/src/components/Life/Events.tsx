import Carousel from "./Carousel.js";
import CarouselCard from "./CarouselCard";
import { AikidoData, execMeetingData } from "./imgData.js";

const Events = () => {
  return (
    <div>
      <div className="">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
          Events Gallery
        </h1>
        <p className="font-medium">The university holds a lot of events...</p>
      </div>
      <div>
        <div>
          <h1>Akido</h1>
          <Carousel images={AikidoData} />
        </div>
        <div className="">
          <h1 className="">Executive Council Meeting</h1>
          <Carousel images={execMeetingData} />
        </div>
      </div>
    </div>
  );
};

export default Events;
