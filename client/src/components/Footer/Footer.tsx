import React from 'react'
import { FaTwitter,FaFacebook,FaInstagram } from "react-icons/fa";

import { Items } from './ItemContainer';


export const Footer = () => {
  return (
    <footer className='bg-blue-950 text-white mt-28 '>
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 md:py-2  lg:py-6 bg-[#ffffff19] py-4">
            <h1 className='className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal  text-center font-semibold
         md:w-2/5"'>
                Don't miss the opportunity 
            </h1>
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal  text-left font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400 ">ENROLL today</span> 
        </h1>
         <div>
            <input type="text" placeholder='Enter Ph.Number' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
            <button className='bg-teal-400 hover:bg-blue-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white'>
                Submit
            </button>
         </div>
        </div>
        {/* items container */}
        <Items/>
        {/* last bit */}
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center pt-2 text-gray-400 text-sm pb-3'>
            <span>Copyright &copy; 2023 All rights reserved</span>
            <span>Terms . Conditions . Privacy Policy </span>
            <div className='flex flex-row justify-center space-x-10'>
                <a href='https://www.facebook.com/' >
                  <FaFacebook size='35'/>
                </a>
                <a href='https://www.twitter.com/'>
                  <FaTwitter size='35'/>
                </a>
                <a href='https://www.instagram.com/'>
                <FaInstagram size='35'/>
                </a>
            </div>

        </div>
       
      
    

    </footer>
    
  )
}