// import React from 'react'
import img1 from "../../assets/Devs/profile_icon.png";

const DeveloperData = [
  {
    name: "Abhrajit Ray",
    role: "Frontend Team",
    img: "https://avatars.githubusercontent.com/u/67530432?v=4",
  },
  {
    name: "Kunal Sharma",
    role: "Backend Team",
    img: "https://media.licdn.com/dms/image/D4D03AQFK8rz8HU9UaQ/profile-displayphoto-shrink_800_800/0/1679444239289?e=1698883200&v=beta&t=yw3k2nGZXLzqvUjEES0Uq00OZoBzQb1jP-_QfmqR8pM",
  },
  {
    name: "Neelvie Chettri",
    role: "Backend Team",
    img: "https://media.licdn.com/dms/image/D4D03AQGdAqBP7HgVIg/profile-displayphoto-shrink_800_800/0/1667238666746?e=1698883200&v=beta&t=BfDSYErZOzV3E_Qmr6E9BxpTNYqTfvroIk2WCG76UwE",
  },
  {
    name: "Adarsh Regmi",
    role: "Backend Team",
    img: "https://media.licdn.com/dms/image/D4D03AQFHvoXuDmWzgw/profile-displayphoto-shrink_800_800/0/1679325053668?e=1698883200&v=beta&t=bpZfybsU_PrGi8Jqy2N42fLIjXg8PNeILZWfvNoO4js",
  },
  {
    name: "Dipen Chandra Saha",
    role: "Backend Team",
    img: "",
  },
  {
    name: "Yuvaan Pradhan",
    role: "Frontend Team",
    img: "",
  },
  {
    name: "Siddarth Manna",
    role: "Frontend Team",
    img: "",
  },
];

const Developer = () => {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <h1 className="text-2xl font-bold text-center">Developers Team</h1>
      <div
        className="space-y-2 grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4 lg:grid-cols-5
        place-items-center"
      >
        {DeveloperData.map((dev, index) => (
        <div
          className="flex flex-col items-center p-4 space-y-2
            bg-slate-400/20 rounded-3xl w-48 hover:bg-teal-500/10
            transition duration-500"
            key={index}
        >
          <div className="">
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover "
              src={dev.img ? dev.img : img1}
              alt="faculty image"
              loading="lazy"
            />
          </div>
          <div className="text-center leading-snug block">
            <h3 className="font-medium">{dev.name}</h3>
            <h4 className="text-sm">{dev.role}</h4>
            {/* <h4 className="text-xs text-blue-600">{contact}</h4> */}
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Developer;
