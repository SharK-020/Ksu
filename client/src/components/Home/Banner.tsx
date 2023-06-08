import React, { useState, useEffect } from "react";

const images = [
  {
    url: "https://cmsapi.ksus.ac.in/assets/MediaLibrary/7ae131d2-9eb6-4021-9554-0fceca278c56_blob.webp",
  },
  {
    url: "https://scontent.frdp4-1.fna.fbcdn.net/v/t39.30808-6/265178140_107454638459298_2514860507752139052_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=X9ci8strOKYAX9mtiHk&_nc_ht=scontent.frdp4-1.fna&oh=00_AfCbCsXtdXIDXe7Qz_F1g9V6sV3RVl6ZlMd-TDIR-xyY_A&oe=64865949",
  },
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
