import React from "react";
import { noticeSampleData } from "./noticeSampleData";

const Notice = () => {
  return (
    <div className="flex flex-col">
      <div
        className=" border-b-2 border-gray-300 bg-[#082F49] rounded-t-3xl
        p-2"
      >
        <h1 className="text-center text-gray-100 text-2xl">Notice</h1>
      </div>
      <div className="bg-sky-100 max-h-[400px] overflow-y-scroll scrollbar-thin">
        {noticeSampleData.map((notice) => {
          return (
            <div
              key={notice.id}
              className="border-b-[1px] border-gray-300
                        px-4 py-1 cursor-pointer hover:bg-[#082F49]/20 transition duration-300
                        max-w-[90%] mx-auto"
            >
              <h1 className=" text-gray-950 text-md">
                {notice.title}
              </h1>
              <p className="text-end text-gray-600 text-sm">{notice.date}</p>
            </div>
          );
        })}
      </div>
      <div className="bg-[#082F49] py-4 rounded-b-3xl"></div>
    </div>
  );
};

export default Notice;
