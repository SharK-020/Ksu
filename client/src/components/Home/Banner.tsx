import React, { useState, useEffect } from "react";
import banner from "../../assets/Banner/banner.webp";
import banner1 from "../../assets/Banner/banner1.webp";
import banner2 from "../../assets/Banner/banner2.webp";
import banner3 from "../../assets/Banner/banner3.webp";
import banner4 from "../../assets/Banner/banner4.webp";
import banner5 from "../../assets/Banner/banner5.webp";
import banner6 from "../../assets/Banner/banner6.webp";
import banner7 from "../../assets/Banner/banner7.webp";
import banner8 from "../../assets/Banner/banner8.webp";

const images = [
  {
    url: banner,
  },
  {
    url: banner1,
  },
  {
    url: banner2,
  },
  {
    url: banner3,
  },
  {
    url: banner4,
  },
  {
    url: banner5,
  },
  {
    url: banner6,
  },
  {
    url: banner7,
  },
  {
    url: banner8,
  }
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  const nextImage = images[nextImageIndex];
  //for preloading the next image
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = nextImage.url;
  }, [nextImage]);

  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${currentImage.url})`,
        transition: "background-image 1s ease-in",
      }}
    >
      {/* Additional content for the banner */}

      <div>
        <div className=" w-full h-auto flex items-center px-8 md:px-10 py-20 md:py-32 lg:py-44
        bg-gradient-to-r from-black/30 via-transparent">
          <div className="relative space-y-4 z-50">

            <div className="space-y-2 z-50">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
              Khangchenzonga
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
              State
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
              University
            </h1>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-cyan-200 "> 
              The University of Opportunities
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
