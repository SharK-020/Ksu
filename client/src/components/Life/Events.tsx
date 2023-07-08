import CarouselCard from "./CarouselCard";
import councilImg from "../../assets/life/EXECUTIVE COUNCIL MEETING/3rd ec meeting.webp";
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
          <div className="flex space-x-2 overflow-x-scroll scrollbar-none">
            {AikidoData.map((aikido) => (
              <div key={aikido.id}>
                <CarouselCard
                  image={aikido.link}
                  altData={aikido.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="">Executive Council Meeting</h1>
          <div className="flex space-x-2 overflow-x-scroll scrollbar-none">
              {
                execMeetingData.map((execMeeting) => (
                  <div key={execMeeting.id}>
                    <CarouselCard
                      image={execMeeting.link}
                      altData={execMeeting.title}
                    />
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
