import React from "react";
import promo from "../../assets/promo1.webp";
import room from "../../assets/hall1.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Campus = () => {
  return (
    <div>
      <div className="bg-[#082F49] grid grid-cols-2">
        <div
          className="place-self-center p-4 text-left text-4xl
        md:text-[4rem] leading-tight text-gray-100 font-extrabold"
        >
          <h1 className="">Campus</h1>
          <h1 className="">And</h1>
          <h1 className="">Facilities</h1>
        </div>
        <img
          src={promo}
          alt="promo"
          className="place-self-end w-full"
          width={400}
          height={700}
        />
      </div>
      <div className="flex flex-col md:flex-row">

      <div className="flex w-full ">
          <img
            src={room}
            height={500}
            width={500}
            alt="hall"
            className=""
          />
        </div>
        <article className="w-full">
          <p className="text-justify text-gray-900
           bg-[#ffe449] p-8 font-medium">
            The University is located at Samdur, Tadong, Gangtok, East Sikkim.
            The University has a sprawling campus of 75 acres of land. The
            University has a well-equipped library, laboratories, classrooms,
            seminar halls, auditorium, conference halls, hostels, guest house,
            canteen, and other facilities
          </p>
          <div className="bg-[#00b3b4] text-white flex flex-col
           items-center space-y-4 p-8 h-fit">
            <span className="flex cursor-pointer space-x-2 justify-start items-center font-semibold">
            <h2 className="">University library</h2>
            <ArrowRightIcon className="h-5 w-5 " />
            </span>
            <span className="flex cursor-pointer space-x-2 justify-start items-center font-semibold">
            <h2 className="">Sports and Gym</h2>
            <ArrowRightIcon className="h-5 w-5 " />
            </span>
            <span className="flex cursor-pointer space-x-2 justify-start items-center font-semibold">
            <h2 className="">Lecture Halls</h2>
            <ArrowRightIcon className="h-5 w-5 " />
            </span>
          </div>
        </article>

      </div>
    </div>
  );
};

export default Campus;
