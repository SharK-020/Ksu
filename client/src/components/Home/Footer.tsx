import React from 'react'

import fb from '../../assets/icon-facebook.svg'
import twt from '../../assets/icon-twitter.svg';
import ins from '../../assets/icon-instagram.svg'
import { Items } from './ItemContainer';
import { Icons } from './Menus';
import { Socialicons } from './Socialicons';


export const Footer = () => {
  return (
    <footer className='bg-blue-950 text-white '>
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
            <h1 className='className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal  text-center font-semibold
         md:w-2/5"'>
                Don't miss the opportunity. 
            </h1>
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal  text-left font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400 ">ENROLL today.</span> 
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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
            <span>Copyright &copy; 2023 All rights reserved</span>
            <span>Terms . Conditions . Privacy Policy </span>
            <div className='container md:flex md:flex-row flex-row '>
                <div>
                <a href="www.facebook.com">
                <img className="" src={fb} alt="logo" width={30} height={20} />
                </a>
                </div>
                <div>
                <a href="www.twitter.com">
                <img className="" src={twt} alt="logo" width={30} height={20} />
                </a>
                </div>
                <div>
                <a href="www.instagram.com">
                <img className="" src={ins} alt="logo" width={30} height={20} />
                </a>
                </div>
            </div>

        </div>
       
      
    

    </footer>
    
  )
}