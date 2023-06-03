import React from 'react'

import fb from '../assets/icon-facebook.svg';
import twt from '../assets/icon-twitter.svg';
import ins from '../assets/icon-instagram.svg'


export const Footer = () => {
  return (
    <footer className='bg-green-900 text-white '>
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal  text-center font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400 ">ENROLL</span> filler text text
        </h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center justify start pt-2 text-gray-400 text-sm pb-8'>
            <span>&copy 2023 Appy. All rights reserved </span>
            <span>Terms. Privacy Policy</span>
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
        </div>

    </footer>
    
  )
}