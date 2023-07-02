import React from "react";
import FacultyCard from "./FacultyCard";
import { NepaliDept, SanskritDept } from "./facultyData";

const Academic = () => {
  return (
    <div className="">
      <h1 className="text-xl font-bold text-center">Academic Court</h1>
      <div className="space-y-2 py-4">
        <h2 className="text-lg font-semibold text-center">
          Department of Nepali
        </h2>
        {/*Department of nepali members*/}
        <div
          className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4 lg:grid-cols-5
        place-items-center"
        >
          {NepaliDept.map((item) => (
            <FacultyCard
              key={item.id}
              name={item.name}
              designation={item.designation}
              contact={item.contact}
              //image of the faculty member
              image="https://www.koimoi.com/wp-content/new-galleries/2020/04/alvaro-morte-reveals-of-taking-inspiration-from-superheroes-for-his-role-in-money-heist-001.jpg"
            />
          ))}
        </div>
      </div>

      {/*Department of Sanskrit members*/}
      <div className="py-4 space-y-2">
        <h2 className="text-lg font-semibold text-center">
          Department of Sanskrit
        </h2>
        <div
          className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4 lg:grid-cols-5
        place-items-center"
        >
          {SanskritDept.map((item) => (
            <FacultyCard
              key={item.id}
              name={item.name}
              designation={item.designation}
              contact={item.contact}
              //image of the faculty member
              image="https://www.koimoi.com/wp-content/new-galleries/2020/04/alvaro-morte-reveals-of-taking-inspiration-from-superheroes-for-his-role-in-money-heist-001.jpg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academic;
