import FacultyCard from "./FacultyCard";
import { UniAuth } from "./facultyData";

const University_auth = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold text-center">University Authority</h1>
      <h2 className="text-xl font-semibold text-center">University court</h2>
      {/*university court members*/}
      <div
        className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4 lg:grid-cols-5
    place-items-center"
      >
        {UniAuth.map((item) => (
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
  );
};

export default University_auth;
