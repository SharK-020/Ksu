import React, { useCallback, useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function for menu button in small screens
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  //when user scrolls down navbar will close
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative bg-sky-950 flex items-center justify-between md:space-x-6">
        <div className="bg-white rounded-full inline-block w-12 md:w-auto m-2 md:m-2 lg:m-4 ">
          <img src={logo} alt="logo" width={100} height={100} />
        </div>
        <nav className="relative place-self-end space-y-1">
          {/* Desktop nav */}
          <ul className="hidden md:flex bg-slate-100 space-x-2 text-center">
            <li className="large-nav-item">Home</li>
            <li className="large-nav-item">Know KSU</li>
            <li className="large-nav-item">Governance</li>
            <li className="large-nav-item">Schools</li>
            <li className="large-nav-item">Departments & Faculty</li>
            <li className="large-nav-item">Life at KSU</li>
            <li className="large-nav-item">Research</li>
            <li className="large-nav-item">Mandatory Disclosure</li>
          </ul>
        </nav>

        {/* Nav button */}
        <div
          className={`mt-3 z-50 right-0 text-sm font-medium md:hidden cursor-pointer ${
            isOpen ? "absolute" : ""
          }`}
        >
          <Bars3Icon
            className={`h-6 w-6 mr-3 fill-white transition-transform duration-[.6] ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={toggleMenu}
          />
        </div>
      </div>
      <nav
        className={`${
          isOpen ? "right-0" : "right-[-100%]"
        } duration-[.7s] h-[100vh] bg-slate-200 w-[30vw] right-0 fixed tracking-tight
        md:hidden flex`}
      >
        {/* Mobile nav */}
        <ul className="space-y-2 text-center">
          <li className="small-nav-items">Home</li>
          <li className="small-nav-items">Know KSU</li>
          <li className="small-nav-items">Governance</li>
          <li className="small-nav-items">Schools</li>
          <li className="small-nav-items">Departments & Faculty</li>
          <li className="small-nav-items">Life at KSU</li>
          <li className="small-nav-items">Research</li>
          <li className="small-nav-items">Mandatory Disclosure</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
