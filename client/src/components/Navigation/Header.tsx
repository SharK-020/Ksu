import { useCallback, useState, useContext } from "react";
import logo from "../../assets/logo.webp";
import govtLogo from "../../assets/govtLogo.webp";
import {
  Bars3Icon,
} from "@heroicons/react/24/solid";
import MobileNav from "./MobileNav";
import { SidebarContext } from "../../utils/SidebarContext";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  // Function for menu button in small screens
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <header className="bg-[#082F49] ">
      <div className="relative  flex items-center justify-between md:space-x-6">
        <div className="flex ">
          {/* university Logo */}
          <div
            className="bg-white flex space-x-4 items-center rounded-full w-20 
        md:w-auto m-2 md:m-2 lg:m-4 "
          >
            <img className="" src={logo} alt="logo" width={100} height={100} />
          </div>
          {/*Sikkim Govt Logo */}
          <div
            className="bg-white hidden md:flex  rounded-full w-20 
        md:w-auto m-2 md:m-2 lg:m-4 "
          >
            <img
              className="rounded-full"
              src={govtLogo}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Desktop navbar */}
        <DesktopNav />

        <h1
          className="text-sm md:hidden font-semibold text-gray-100
         mx-auto text-center"
        >
          Khangchenzonga State University
        </h1>
        {/* Nav button */}
        <div
          className={`z-50 flex items-center right-0 text-sm font-medium 
          md:hidden select-none touch-none  ${isOpen ? "" : ""}`}
        >
          <div
            className="bg-white flex  rounded-full w-20 
        md:w-auto m-2 md:m-2 lg:m-4 "
          >
            <img
              className="rounded-full"
              src={govtLogo}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <Bars3Icon
            className={`h-6 w-6 mr-3 cursor-pointer fill-slate-100 
            transition-transform duration-[.6] ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
