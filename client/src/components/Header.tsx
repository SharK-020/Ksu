import React from "react";

const Header = () => {
  return (
    <div className="relative bg-sky-950">
      <div className="">
        <img src="" alt="logo" />
      </div>
      <nav>
        {/*desktop nav*/}
        <ul className="lg:absolute lg:-bottom-2 lg:right-8 hidden md:flex bg-slate-100 space-x-2 text-center ">
          <li>Home</li>
          <li>Know KSU</li>
          <li>Governance</li>
          <li>Schools</li>
          <li>Departments & Faculty</li>
          <li>Life at KSU</li>
          <li>Research</li>
          <li>Mandatory Disclosure</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
