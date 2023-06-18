import React from 'react'
import { Link } from 'react-router-dom'

type ItemProps = {
    Links: {name:string,link:string}[]
    title:string
}

export const Item = ({Links,title}: ItemProps) => {
  return (
    <ul>
        <h1 className='mb-1 font-semibold'>{title}</h1>

        {   
            Links.map((link)=>(
              <Link to={link.link}> 
                <li key ={link.name} className='text-gray-400 hover:text-blue-400 duration-300 text-sm cursor-pointer leading-6'>
                    {link.name}
                </li>
              </Link>
            ))

        }
    </ul>
  )
}
