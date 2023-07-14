import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import CarouselCard from "./CarouselCard";
import { carouselImgData } from "./imgData";
//Carousel component for displaying images
type Props = {
  images: carouselImgData[];
};

const Carousel = ({ images }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState<boolean>(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className=" space-y-0.5 md:space-y-2">
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute fill-slate-200 top-0 bottom-0 left-2 z-40
        m-auto w-7 h-7 md:h-9 md:w-9 cursor-pointer opacity-0 transition hover:scale-125
         group-hover:opacity-100 bg-black/80 rounded-full
        ${!isMoved && "hidden"}`}
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-2 overflow-x-scroll md:space-x-4 
          scrollbar-none md:p-2"
        >
              {
                images.map((image) => (
                  <div key={image.id}
                  className="cursor-pointer hover:brightness-75 transition-all 
                  duration-500 select-none">
                    <CarouselCard
                      image={image.link}
                      altData={image.title}
                    />
                  </div>
                ))
              }
        </div>

        <ChevronRightIcon
          className={`absolute fill-slate-200 top-0 bottom-0 right-2 z-40
        m-auto w-7 h-7 md:h-9 md:w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100
        bg-black/80 rounded-full`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Carousel;
