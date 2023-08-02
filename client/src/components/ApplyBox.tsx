import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../state/rootRecucer";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../state";

const ApplyBox = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.token !== null
  );

  const dispatch = useDispatch();
	const navigate = useNavigate();
    //when admin logs out
  const logoutHandler = () => {
    dispatch(setLogout());
    navigate("/");
  };

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
        <div className="relative w-full text-center mt-2">
        <h1 className="bg-red-400 p-2 font-extrabold text-sm">
          Admin Mode
        </h1>
        <div className="absolute  h-full w-full">
          <button className="p-2 bg-red-200 font-semibold cursor-pointer"
          onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
        </div>

      )}
    </div>
  );
};

export default ApplyBox;
