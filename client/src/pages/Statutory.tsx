import { StatutoryOfficers } from "../components/Governance/facultyData";
import FacultyCard from "../components/Governance/FacultyCard";

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
              image="https://img.freepik.com/free-photo/smiling-young-blonde-female-teacher-wearing-glasses-sitting-desk-with-school-tools-classroom-pointing-finger-note-pad-looking-front-pointing-chalkboard-with-pen_141793-119942.jpg?w=2000"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statutory;
