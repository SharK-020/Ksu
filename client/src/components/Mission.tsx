import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Mission = () => {
  return (
    <>
    {/* Div contains the following sub divs respectively: Links, Mission, Vision*/}
      <div className="flex-col justify-center space-y-3 md:flex md:flex-row md:space-x-16 lg:space-x-2 mt-4 py-8">
        {/* The Link DIv */}
        <div className="links p-4 space-y-2">
          <h2 className="font-semibold hover:bg-gray-100 transition-all">
            Overview
            <FaArrowRight />{" "}
          </h2>
          <h2 className="font-semibold hover:bg-gray-100 transition-all">
            Campus
            <FaArrowRight />
          </h2>
        </div>
        {/* The Mission Div*/}
        <div className="container p-2  flex flex-col w-[95vw] h-[35vh] overflow-hidden shadow-sm hover:text-white hover:bg-sky-800 transition-all border-1 rounded-md md:w-[35vw] md:h-[35vh] lg:w-[40vw] lg:h-[45vh] ">
          <div className="flex space-x-2 p-4 lg:p-12 ">
            <div>
              <img src="public\icon.png" alt="img" className="w-24 md:w-[auto] md:h-[auto] lg:w-24" />
            </div>
            <div className=" flex justify-center align-middle ">
              <p className=" font-sanserif font-semibold text-bottom text-5xl pt-5">Mission</p>
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
        <div className="container p-2 flex flex-col w-[95vw] h-[35vh] overflow-hidden shadow-sm hover:text-white hover:bg-sky-800 transition-all border-1 rounded-md md:w-[35vw] md:h-[35vh] lg:w-[40vw] lg:h-[45vh]">
          <div className="flex space-x-2 p-4 lg:p-12 ">
            <div>
              <img src="public\icon.png" alt="img" className="w-24 md:w-[auto] md:h-[auto] lg:w-24" />
            </div>
            <div className=" flex justify-center align-middle ">
              <p className="font-semibold text-bottom text-5xl p-5 font-sanserif">Vision</p>
            </div>
          </div>
          <div className="font-sanserif p-4 md:text-md lg:text-lg font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur non, unde nobis recusandae impedit accusamus eaque voluptatem? Hic, libero accusamus.
          </div>
          <div className="mt-auto">
            <button className="">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
