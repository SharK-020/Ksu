import Carousel from "./Carousel.js";
import { AikidoData, deptData, execMeetingData, swachData } from "./imgData.js";

const Events = () => {
  return (
    <div className="px-6 md:px-8 lg:px-10 py-8 space-y-4">
      <div className="">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
          Events Gallery
        </h1>
        <p className="font-medium">
          A collection of photos from our events and activities.
        </p>
      </div>
      <div className="font-medium text-xl space-y-4">
        <div className="space-y-2">
          <h1>Akido</h1>
          <Carousel images={AikidoData} />
        </div>
        <div className="space-y-2">
          <h1 className="">Executive Council Meeting</h1>
          <Carousel images={execMeetingData} />
        </div>
        <div className="space-y-2">
          <h1 className="">M.A. Sanskrit Farewell</h1>
          <Carousel images={deptData} />
        </div>
        <div className="space-y-2">
          <h1 className="">Swachh Bharat</h1>
          <Carousel images={swachData} />
        </div>
      </div>
    </div>
  );
};

export default Events;
