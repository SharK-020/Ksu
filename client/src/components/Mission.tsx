import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Mission = () => {
  return (
    <>
    {/* Div contains the following sub divs respectively:Mission*/}
      <div className="flex-col justify-center space-y-3 md:flex md:flex-row md:justify-between md:space-x-16 lg:space-x-2 mt-4 py-8 ">
        {/* The Mission Div*/}
        <div className="container p-2 h-auto  flex flex-col w-[95vw] overflow-hidden shadow-sm hover:text-white hover:bg-sky-800 transition-all border-1 rounded-md md:w-[60vw] md:h-max lg:w-[70vw] lg:h-max ">
          <div className="flex space-x-2 p-4 justify-center align-middle lg:p-12 ">
            <div className=" flex justify-center align-middle ">
              <p className=" font-sanserif font-semibold text-bottom text-5xl pt-5">Vision and Mission</p>
            </div>
          </div>
          <div className="font-sanserif p-4 md:text-md lg:text-lg font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, veniam! A magnam amet sunt esse nostrum minima perferendis qui in.
          </div>
          <div className="mt-auto ">
            <button className="">
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* The Vision Div */}
        
      </div>
    </>
  );
};

export default Mission;
