import { useCallback, useState, useEffect, useContext } from "react";
import logo from "../../assets/logo.webp";
import govtLogo from "../../assets/govtLogo.webp";
import {
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Submenu from "./Submenu";
import MobileSubmenu from "./MobileSubmenu";
import MobileNav from "./MobileNav";
import { SidebarContext } from "../../utils/SidebarContext";

const Header = () => {
  //const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<string>("");
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  //mobile submenu click
  const mobileSubmenuClick = (item: string) => {
    if (hoveredItem === item) {
      setHoveredItem("");
    } else {
      setHoveredItem(item);
    }
  };

  //funtion for route changing
  const routeClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  // Function for menu button in small screens
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
    setHoveredItem("");
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

        <nav className="relative place-self-end space-y-1">
          {/* Desktop nav */}
          <ul
            className="hidden md:flex bg-slate-100 text-center
          rounded-tl-3xl"
          >
            <Link to="/">
              <li
                className="large-nav-item rounded-tl-3xl"
                onClick={routeClick}
                onMouseOver={() => setHoveredItem("home")}
                onMouseOut={() => setHoveredItem("")}
              >
                Home
              </li>
            </Link>
            <Link to="/know">
              <div className="relative h-full">
                <li
                  className=" large-nav-item"
                  onClick={routeClick}
                  onMouseOver={() => setHoveredItem("know")}
                  onMouseOut={() => setHoveredItem("")}
                >
                  Know KSU
                </li>
                {hoveredItem === "know" && (
                  <div
                    className="absolute"
                    onMouseOver={() => setHoveredItem("know")}
                    onMouseOut={() => setHoveredItem("")}
                  >
                    <Submenu
                      menuItem={[
                        {
                          name: "Careers",
                          link: "/careers",
                        },
                      ]}
                    />
                  </div>
                )}
              </div>
            </Link>
            <Link to="/governance">
              <div className="relative h-full">
                <li
                  className=" large-nav-item"
                  onClick={routeClick}
                  onMouseOver={() => setHoveredItem("governance")}
                  onMouseOut={() => setHoveredItem("")}
                >
                  Governance
                </li>
                {hoveredItem === "governance" && (
                  <div
                    className="absolute h-full w-max"
                    onMouseOver={() => setHoveredItem("governance")}
                    onMouseOut={() => setHoveredItem("")}
                  >
                    <Submenu
                      menuItem={[
                        {
                          name: "Statutory Officers",
                          link: "/statutory",
                        },
                        {
                          name: "University Authority",
                          link: "/uniauthority",
                        },
                        {
                          name: "Other Officers And Support Staff",
                          link: "/otherstaff",
                        },
                      ]}
                    />
                  </div>
                )}
              </div>
            </Link>
            <Link to="/literature">
            <div className="relative h-full">
              <li
                className=" large-nav-item"
                onClick={routeClick}
                onMouseOver={() => setHoveredItem("schools")}
                onMouseOut={() => setHoveredItem("")}
              >
                Schools
              </li>
              {hoveredItem === "schools" && (
                <div
                  className="absolute"
                  onMouseOver={() => setHoveredItem("schools")}
                  onMouseOut={() => setHoveredItem("")}
                >
                  <Submenu
                  menuItem={[
                    {
                      name: "Literature",
                      link: "/literature",
                    },
                    {
                      name: "Law",
                      link: "/law",
                    },
                  ]}
                  />
                </div>
              )}
            </div>
            </Link>
            <Link to="/admission">
              <li
                className="large-nav-item"
                onClick={routeClick}
                onMouseOver={() => setHoveredItem("admission")}
              >
                Admission
              </li>
            </Link>
            <Link to="/life">
              <li
                className="large-nav-item"
                onClick={routeClick}
                onMouseOver={() => setHoveredItem("life")}
                onMouseOut={() => setHoveredItem("")}
              >
                Life at KSU
              </li>
            </Link>
            <Link to="/research">
              <li
                className="large-nav-item"
                onClick={routeClick}
                onMouseOver={() => setHoveredItem("research")}
                onMouseOut={() => setHoveredItem("")}
              >
                Research
              </li>
            </Link>
            <Link to="/mandis">
              <li
                className="large-nav-item"
                onClick={routeClick}
                onMouseOver={() => setHoveredItem("mandis")}
                onMouseOut={() => setHoveredItem("")}
              >
                Mandatory Disclosure
              </li>
            </Link>
          </ul>
        </nav>
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
