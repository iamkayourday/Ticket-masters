import React, { useState } from "react";
import EventList from "./EventList";

const images = [
  { src: "LionKingSU2019JP_08247_RT_Sm.jpg", tagline: "Concert 1 - An Unforgettable Night" },
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
    <>
    <div className="relative">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-800 mt-16">
        <img
          src={images[currentImageIndex].src}
          alt="carousel"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-semibold">{images[currentImageIndex].tagline}</h2>
        </div>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer" onClick={prevImage}>
        &#10094;
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer" onClick={nextImage}>
        &#10095;
      </div>
    </div>
    <EventList />
    </>
  );
};

export default Carousel;
