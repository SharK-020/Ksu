import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Link = () => {
  return (
        <div className="links p-4 space-y-2 md:flex md:flex-col md:justify-center md:align-middle md:space-y-5">
    <h2 className="font-semibold hover:bg-gray-100 transition-all">
      Overview
      <FaArrowRight />{" "}
    </h2>
    <h2 className="font-semibold hover:bg-gray-100 transition-all">
      Campus
      <FaArrowRight />
    </h2>
  </div>
  )
}

export default Link