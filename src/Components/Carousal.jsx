import React, { useState } from "react";

const images = [
  { src: "https://via.placeholder.com/800x300", tagline: "Concert 1 - An Unforgettable Night" },
  { src: "https://via.placeholder.com/800x300", tagline: "Concert 2 - Experience the Magic" },
  { src: "https://via.placeholder.com/800x300", tagline: "Concert 3 - Feel the Beat" },
  { src: "https://via.placeholder.com/800x300", tagline: "Concert 4 - Join the Party" },
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative">
      <div className="w-full h-[300px] bg-gray-800">
        <img
          src={images[currentImageIndex].src}
          alt="carousel"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <h2 className="text-white text-4xl font-semibold">{images[currentImageIndex].tagline}</h2>
        </div>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer" onClick={prevImage}>
        &#10094;
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer" onClick={nextImage}>
        &#10095;
      </div>
    </div>
  );
};

export default Carousel;
