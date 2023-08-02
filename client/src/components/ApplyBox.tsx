import { Link } from "react-router-dom";
import { RootState } from "../state/rootRecucer";
import { useSelector } from "react-redux";

const ApplyBox = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.token !== null
  );
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

      {/* Display this if logged in */}
      {isLoggedIn && (
        <div className="bg-red-500 p-2 font-extrabold text-sm">Admin Mode</div>
      )}
    </div>
  );
};

export default ApplyBox;
