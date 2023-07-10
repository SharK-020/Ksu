import Apply from "./Apply";
import { Link } from "react-router-dom";

const HowToApply = () => {
  return (
    <div
      className="space-y-10 flex flex-col justify-center items-center
      bg-indigo-400/5 p-5 md:p-8"
    >
      <div className="place-self-start">
        <h1 className="text-5xl font-extrabold bg-green-200 p-4 rounded-lg">
          How to Apply
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Apply
          img="https://s40424.pcdn.co/in/wp-content/uploads/2022/10/9-Things-to-Keep-in-Mind-When-Applying-for-Job.jpg.optimal.jpg"
          title="You Apply"
          desc="Tell us a little about yourself and we will help with the rest. Our convenient online application tool only takes 10 minutes to complete."
        />
        <Apply
          img="https://thumbs.dreamstime.com/b/connect-complex-like-puzzle-pictured-as-word-connect-puzzle-pieces-to-show-connect-can-be-difficult-needs-164222379.jpg"
          title="We Connect"
          desc="After you submit your application, an admissions representative will contact you and will help you to complete the process."
        />
        <Apply
          img="https://www.shutterstock.com/image-photo/man-getting-ready-work-260nw-373931122.jpg"
          title="You get ready"
          desc="Once you have completed your application and connected with an admissions representative, you are ready to create your schedule."
        />
      </div>
      <div
        className="place-self-start text-xl font-bold 
        hover:text-blue-800 transition duration-300"
      >
        <Link to="/admission">Read More</Link>
      </div>
    </div>
  );
};

export default HowToApply;
