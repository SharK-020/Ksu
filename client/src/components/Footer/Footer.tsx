import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Items } from "./ItemContainer";

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white flex flex-col justify-center">
      <div
        className="md:flex md:space-x-6 md:items-center px-4 md:px-10 md:py-2 lg:py-6 bg-[#ffffff19] py-4
      space-y-4"
      >
        <h1 className="text-slate-200 text-xl md:text-2xl lg:text-4xl font-extrabold">
          Don't miss the opportunity!
        </h1>
        <button
          className="text-xl md:text-2xl font-extrabold text-teal-400 p-2 md:p-4 rounded-md
        cursor-pointer bg-blue-950 hover:scale-105 transition duration-300 hover:text-teal-200"
        >
          Enroll today
        </button>
      </div>
      {/* items container */}
      <div className="">
        <Items />
      </div>
      {/* last bit */}

      <div className="py-3 space-y-4 text-gray-400 text-sm">
        <div className=" flex flex-col md:flex-row items-center justify-center
        gap-2 md:space-x-10">
          <span>Copyright &copy; 2023 All rights reserved</span>
          <span>Terms . Conditions . Privacy Policy </span>
        </div>
        <div className="flex justify-center space-x-10">
          <a href="https://www.facebook.com/">
            <FaFacebook size="35" />
          </a>
          <a href="https://www.twitter.com/">
            <FaTwitter size="35" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size="35" />
          </a>
        </div>
      </div>
    </footer>
  );
};
