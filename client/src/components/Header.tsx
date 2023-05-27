import React, { useCallback, useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //funtion for route changing
  const routeClick = () => {
    window.scrollTo(0, 0);
  };

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
    <header>
      <div className="relative bg-sky-950 flex items-center justify-between md:space-x-6">
        <div className="bg-white rounded-full inline-block w-12 md:w-auto m-2 md:m-2 lg:m-4 ">
          <img src={logo} alt="logo" width={100} height={100} />
        </div>
        <nav className="relative place-self-end space-y-1">
          {/* Desktop nav */}
          <ul className="hidden md:flex bg-slate-100 space-x-2 text-center">
            <Link to="/">
              <li className="large-nav-item" onClick={routeClick}>
                Home
              </li>
            </Link>
            <Link to="/know">
              <li className="large-nav-item" onClick={routeClick}>
                Know KSU
              </li>
            </Link>
            <Link to="/governance">
              <li className="large-nav-item" onClick={routeClick}>
                Governance
              </li>
            </Link>
            <Link to="/schools">
              <li className="large-nav-item" onClick={routeClick}>
                Schools
              </li>
            </Link>
            <Link to="/departments">
              <li className="large-nav-item" onClick={routeClick}>
                Departments & Faculty
              </li>
            </Link>
            <Link to="/life">
              <li className="large-nav-item" onClick={routeClick}>
                Life at KSU
              </li>
            </Link>
            <Link to="/research">
              <li className="large-nav-item" onClick={routeClick}>
                Research
              </li>
            </Link>
            <Link to="/mandis">
              <li className="large-nav-item" onClick={routeClick}>
                Mandatory Disclosure
              </li>
            </Link>
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
        } duration-[.7s] h-[100vh] bg-slate-200 w-[45vw] right-0 fixed
        md:hidden flex`}
      >
        {/* Mobile nav */}
        <ul className="space-y-1 text-center">
          <Link to="/">
            <li className="small-nav-items" onClick={routeClick}>Home</li>
          </Link>
          <Link to="/know">
            <li className="small-nav-items" onClick={routeClick}>Know KSU</li>
          </Link>
          <Link to="/governance">
            <li className="small-nav-items" onClick={routeClick}>Governance</li>
          </Link>
          <Link to="/schools">
            <li className="small-nav-items" onClick={routeClick}>Schools</li>
          </Link>
          <Link to="/departments">
            <li className="small-nav-items" onClick={routeClick}>Departments & Faculty</li>
          </Link>
          <Link to="/life">
            <li className="small-nav-items" onClick={routeClick}>Life at KSU</li>
          </Link>
          <Link to="/research">
            <li className="small-nav-items" onClick={routeClick}>Research</li>
          </Link>
          <Link to="/mandis">
            <li className="small-nav-items" onClick={routeClick}>Mandatory Disclosure</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
