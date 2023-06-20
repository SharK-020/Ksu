import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Links = () => {
  return (
    <div className="links p-4 space-y-2 flex flex-col justify-center md:flex md:flex-col md:justify-center md:align-middle md:space-y-5">
    <h2 className="font-semibold hover:bg-gray-100 transition-all text-lg">
      More on Research
      <FaArrowRight />{" "}
    </h2>
    <h2 className="font-semibold hover:bg-gray-100 transition-all text-lg">
        Facilities
      <FaArrowRight />
    </h2>
  </div>
  )
}

export default Links