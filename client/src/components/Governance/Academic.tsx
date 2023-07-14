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
              image="https://img.freepik.com/free-photo/smiling-young-blonde-female-teacher-wearing-glasses-sitting-desk-with-school-tools-classroom-pointing-finger-note-pad-looking-front-pointing-chalkboard-with-pen_141793-119942.jpg?w=2000"
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
              image="https://img.freepik.com/free-photo/smiling-young-blonde-female-teacher-wearing-glasses-sitting-desk-with-school-tools-classroom-pointing-finger-note-pad-looking-front-pointing-chalkboard-with-pen_141793-119942.jpg?w=2000"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academic;
