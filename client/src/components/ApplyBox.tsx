import { Link } from "react-router-dom";

const ApplyBox = () => {
  return (
    <div>
      <Link to="/admission">
        <button
          className="bg-teal-400/90 py-4 px-2 break-words rounded-r-xl
        text-white font-extrabold backdrop-blur-sm "
        >
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default ApplyBox;
