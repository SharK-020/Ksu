import animVariants from "../../utils/variants.js";
import Carousel from "./Carousel.js";
import {
  AikidoData,
  carouselImgData,
  deptData,
  execMeetingData,
  swachData,
} from "./imgData.js";
import { motion } from "framer-motion";

// Data for the carousel
type EventImg = {
  name: string;
  data: carouselImgData[];
};
const EventsImg: EventImg[] = [
  {
    name: "Aikido",
    data: AikidoData,
  },
  {
    name: "Executive Council Meeting",
    data: execMeetingData,
  },
  {
    name: "M.A. Sanskrit Farewell",
    data: deptData,
  },
  {
    name: "Swachh Bharat",
    data: swachData,
  },
];

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

      <motion.div
        className="font-medium text-xl space-y-4"
        variants={animVariants.section}
        initial="offscreen"
        whileInView="onscreen"
      >
        {EventsImg.map((item, index) => (
          <motion.div
            className="space-y-2"
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            variants={animVariants.section}
          >
            <h1 className="carousel-text ">{item.name}</h1>
            <Carousel images={item.data} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Events;
