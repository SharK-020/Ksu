import { Link } from "react-router-dom";

const ApplyBox = () => {
  return (
    <div>
      <Link to="/admission">
        <button
          className="bg-teal-400/90 py-3 px-2 break-words rounded-r-xl
        text-white font-extrabold backdrop-blur-sm hover:bg-teal-500 "
        >
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default ApplyBox;
