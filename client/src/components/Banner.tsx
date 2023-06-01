import React, { useState, useEffect } from "react";


const images = [
  {
    url: "https://cmsapi.ksus.ac.in/assets/MediaLibrary/7ae131d2-9eb6-4021-9554-0fceca278c56_blob.webp",
  },
  {
    url: "https://curlytales.com/wp-content/uploads/2020/09/Forest-Research-Institute.jpg",
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
      className="h-[500px]  bg-cover bg-center"
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
