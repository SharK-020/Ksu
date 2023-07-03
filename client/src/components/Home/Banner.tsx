import React, { useState, useEffect } from "react";
import banner1 from "../../assets/Banner/banner1.png";
import banner2 from "../../assets/Banner/banner2.png";
import banner3 from "../../assets/Banner/banner3.png";
import banner4 from "../../assets/Banner/banner4.png";
import banner5 from "../../assets/Banner/banner5.png";
import banner7 from "../../assets/Banner/banner7.png";
import banner9 from "../../assets/Banner/banner9.png";
import banner10 from "../../assets/Banner/banner10.png";


const images = [
  {
    url: banner1,
  },
  {
    url: "https://cmsapi.ksus.ac.in/assets/MediaLibrary/7ae131d2-9eb6-4021-9554-0fceca278c56_blob.webp",
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
    url: banner7,
  },
  {
    url: banner9,
  },
  {
    url: banner10,

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

        transition: "background-image 1s ease-in",
      }}
    >
      {/* Additional content for the banner */}
    </div>
  );
};

export default Banner;
