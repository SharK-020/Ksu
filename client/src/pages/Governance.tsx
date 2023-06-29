import FacultyCard from "../components/Governance/FacultyCard";
import Other_officers from "../components/Governance/Other_officers";
import Statutory from "../components/Governance/Statutory";
import University_auth from "../components/Governance/University_auth";
import { UniAuth } from "../components/Governance/facultyData";

const Governance = () => {
  return (
    <div className="space-y-4 mb-4 md:space-y-16 md:mb-8 p-10">
      {/*uni authority*/}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-center">University Authority</h1>
        <h2 className="text-2xl font-semibold text-center">University court</h2>
        {/*university court members*/}
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4 lg:grid-cols-5
        place-items-center">
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

        {}
      </section>
      <University_auth />
      <Statutory />
      <Other_officers/>
    </div>
  );
};

export default Governance;
