import { facultyDataTypes } from "../components/Governance/facultyData";
import FacultyCard from "../components/Governance/FacultyCard";
import { base_url } from "../utils/api";
import { useEffect, useState } from "react";

const Statutory = () => {
  const [facultyData, setFacultyData] = useState<facultyDataTypes[]>([]);

  const getFacultyData = async (dept:string) => {
    try {
      const res = await fetch(`${base_url}/get/faculty/${dept}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setFacultyData(data);
    } catch (err) {
      console.error("Error fetching faculty data:", err);
    }
  };

  useEffect(() => {
    const dept = "statutory"; // Replace with the desired department name
    getFacultyData(dept);
  }
  , []);

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-2xl font-bold text-center">Sikkim State Statutory Officers</h1>
      <div className="space-y-2 py-4">
        {/*Department of nepali members*/}
        <div
          className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3
        place-items-center"
        >
          {facultyData.map((item) => (
            <FacultyCard
              key={item._id}
              name={item.name}
              designation={item.designation}
              contact={item.email}
              //image of the faculty member
              image="https://img.freepik.com/free-photo/smiling-young-blonde-female-teacher-wearing-glasses-sitting-desk-with-school-tools-classroom-pointing-finger-note-pad-looking-front-pointing-chalkboard-with-pen_141793-119942.jpg?w=2000"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statutory;
