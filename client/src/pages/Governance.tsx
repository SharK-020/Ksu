import FacultyCard from "../components/Governance/FacultyCard";
import Other_officers from "../components/Governance/Other_officers";
import Statutory from "../components/Governance/Statutory";
import { UniAuth } from "../components/Governance/facultyData";

const Governance = () => {
  return (
    <div className="space-y-4 mb-4 md:space-y-16 md:mb-8">
      {/*uni authority*/}
      <section>
        <h1 className="text-3xl font-bold text-center">University Authority</h1>
        <h2 className="text-2xl font-semibold">University court</h2>

        <div>
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
      </section>
      
      <Statutory />
      <Other_officers/>
    </div>
  );
};

export default Governance;
