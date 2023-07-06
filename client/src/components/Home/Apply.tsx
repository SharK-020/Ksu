import React from 'react'

const Apply = (props:{
        img: string | undefined;
	title: string;
	desc?: string;
	
}) => {
  return (
                <div className="max-w-sm font-medium">
                <img
                        src={props.img}
                        alt={`${props.title} image`}
                        className="h-72 w-full object-cover sm:w-80 md:w-80 lg:w-30"
                />
                <h1 className="font-bold text-2xl pt-4">{props.title}</h1>
                <div className="h-1 bg-blue-800 w-[30%] my-6"></div>
                <p>{props.desc}</p>
        </div>
  )
}

export default Apply