import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileSubmenu from "./MobileSubmenu";
import { SidebarContext } from "../../utils/SidebarContext";


const MobileNav = () => {
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
         //mobile nav
      <nav
        className={`${
          isOpen ? "right-0" : "right-[-100%]"
        } duration-[.5s] h-[100vh] bg-slate-200/70 w-[40vw] right-0 fixed tracking-tight
        md:hidden flex backdrop-blur-md z-[100]`}
      >
        <ul className="w-full">
          <Link to="/">
            <li className="small-nav-items" onClick={routeClick}>
              Home
            </li>
          </Link>
          <div className="relative">
            <li
              className="small-nav-items flex items-center justify-between"
              onClick={() => mobileSubmenuClick("know")}
            >
              <h2>Know KSU</h2>
              <ChevronDownIcon
                className={`h-4 w-4 transition duration-300
                   ${hoveredItem === "know" ? "rotate-180" : "rotate-0"}`}
              />
            </li>
            {hoveredItem === "know" && (
              <div className="">
                <MobileSubmenu
                  menuItem={[
                    {
                      name: "About KSU",
                      link: "/know",
                    },
                    {
                      name: "Careers",
                      link: "/careers",
                    },
                  ]}
                />
              </div>
            )}
          </div>

          <div className="relative">
            <li
              className="small-nav-items flex items-center justify-between"
              onClick={() => mobileSubmenuClick("governance")}
            >
              <h2>Governance</h2>
              <ChevronDownIcon
                className={`h-4 w-4 transition duration-300
                   ${hoveredItem === "governance" ? "rotate-180" : "rotate-0"}`}
              />
            </li>
            {hoveredItem === "governance" && (
              <div className="">
                <MobileSubmenu
                  menuItem={[
                    {
                      name: "Statutory Officers",
                      link: "/statutory",
                    },
                    {
                      name: "University Authority",
                      link: "/uniauthority",
                    },
                  ]}
                />
              </div>
            )}
          </div>
          <div className="relative">
            <li
              className="small-nav-items flex items-center justify-between"
              onClick={() => mobileSubmenuClick("schools")}
            >
              <h2>Schools</h2>
              <ChevronDownIcon
                className={`h-4 w-4 transition duration-300
                   ${hoveredItem === "schools" ? "rotate-180" : "rotate-0"}`}
              />
            </li>
            {hoveredItem === "schools" && (
              <div className="">
                <MobileSubmenu
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
          <Link to="/admission">
            <li className="small-nav-items" onClick={routeClick}>
              Admission
            </li>
          </Link>
          <Link to="/life">
            <li className="small-nav-items" onClick={routeClick}>
              Life at KSU
            </li>
          </Link>
          <Link to="/research">
            <li className="small-nav-items" onClick={routeClick}>
              Research
            </li>
          </Link>
          <Link to="/mandis">
            <li className="small-nav-items" onClick={routeClick}>
              Mandatory Disclosure
            </li>
          </Link>
        </ul>
      </nav>
  )
}

export default MobileNav