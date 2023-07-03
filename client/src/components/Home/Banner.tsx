import React, { useState, useEffect } from "react";
import banner from "../../assets/Banner/banner.webp";
import banner1 from "../../assets/Banner/banner1.webp";
import banner2 from "../../assets/Banner/banner2.webp";
import banner3 from "../../assets/Banner/banner3.webp";
import banner4 from "../../assets/Banner/banner4.webp";
import banner5 from "../../assets/Banner/banner5.webp";
import banner6 from "../../assets/Banner/banner6.webp";
import banner7 from "../../assets/Banner/banner7.webp";
import banner8 from "../../assets/Banner/banner8.webp"



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

  return (
    <div
      className="h-[250px] md:h-[400px] lg:h-[500px]  bg-cover bg-center"
      style={{
        backgroundImage: `url(${currentImage.url})`,
        transition: "background-image 0.5s ease-in",
      }}
    >
      {/* Additional content for the banner */}
    </div>
  );
};

export default Banner;
