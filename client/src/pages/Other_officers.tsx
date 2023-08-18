import {
  ExaminationDivision,
  FinanceAccountsDivision,
  OtherOfficersAdmin,
} from "../components/Governance/facultyData";
import FacultyCard from "../components/Governance/FacultyCard";

const Other_officers = () => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold text-center">
        Other Officers and Support Staff
      </h1>
      <div className="space-y-2 py-4">
        <h2 className="text-lg font-semibold text-center">
          Administrative Division
        </h2>
        {/*Admin Division*/}
        <div
          className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4 lg:grid-cols-5
        place-items-center"
        >
          {OtherOfficersAdmin.map((item) => (
            <FacultyCard
              key={item.id}
              name={item.name}
              designation={item.designation}
              contact={item.contact}
              //image of the faculty member (should later be from item.image)
              image="https://img.freepik.com/free-photo/smiling-young-blonde-female-teacher-wearing-glasses-sitting-desk-with-school-tools-classroom-pointing-finger-note-pad-looking-front-pointing-chalkboard-with-pen_141793-119942.jpg?w=2000"
            />
          ))}
        </div>
      </div>

      {/*Examination Division*/}
      <div className="py-4 space-y-2">
        <h2 className="text-lg font-semibold text-center">
          Examination Division
        </h2>
        <div
          className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3
        place-items-center"
        >
          {ExaminationDivision.map((item) => (
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

      {/*Finance and Accounts Division*/}
      <div className="py-4 space-y-2">
        <h2 className="text-lg font-semibold text-center">
          Finance and Accounts Division
        </h2>
        <div
          className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4
        place-items-center"
        >
          {FinanceAccountsDivision.map((item) => (
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

export default Other_officers;
