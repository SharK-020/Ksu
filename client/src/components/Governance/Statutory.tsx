import React from "react";
import { StatutoryOfficers } from "./facultyData";
import FacultyCard from "./FacultyCard";

const Statutory = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">Sikkim State Statutory Officers</h1>
      <div className="space-y-2 py-4">
        {/*Department of nepali members*/}
        <div
          className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3
        place-items-center"
        >
          {StatutoryOfficers.map((item) => (
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

export default Statutory;
