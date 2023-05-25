import React from "react";
import logo from "../assets/logo.webp"

const Header = () => {
  return (
    <div className="relative bg-sky-950 flex items-end justify-between
    md:space-x-6">
      <div className="bg-white rounded-full inline-block w-12 md:w-auto m-2 md:m-2 lg:m-4 ">
        <img src={logo} alt="logo" width={100} height={100} />
      </div>
      <nav className="relative">
        {/*desktop nav*/}
        <ul className=" hidden
         md:flex bg-slate-100 space-x-2 text-center">
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
    </div>
  );
};

export default Header;
