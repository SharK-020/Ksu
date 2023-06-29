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
            image="https://www.koimoi.com/wp-content/new-galleries/2020/04/alvaro-morte-reveals-of-taking-inspiration-from-superheroes-for-his-role-in-money-heist-001.jpg"
          />
        ))}
      </div>
    </div>
  );
};

export default University_auth;
