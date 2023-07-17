import { useState } from "react";
import { Link } from "react-router-dom";
import Submenu from "./Submenu";

const DesktopNav = () => {
  const [hoveredItem, setHoveredItem] = useState<string>("");
  //funtion for route changing
  const routeClick = () => {
    window.scrollTo(0, 0);
  };

  return (
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
  );
};

export default DesktopNav;
