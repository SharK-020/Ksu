import React, { useState, useEffect } from "react";

const images = [
  {
    url: "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg",
  },
  {
    url: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Banner2 = () => {
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
      className="h-[200px] md:h-[300px] lg:h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${currentImage.url})`,

        transition: "background-image 1s ease-in",
      }}
    >
      {/* Additional content for the banner */}
    </div>
  );
};

export default Banner2;
