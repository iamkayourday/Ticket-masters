import React, { useState } from "react";
import EventList from "./EventList";

const image = {
  src: "Home.jpg",
  tagline: "Experience the Magic of Live Concerts"
};

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <div className="relative">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-800">
          <img
            src={image.src}
            alt="carousel"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-semibold text-center">
              {image.tagline}
            </h2>
          </div>
        </div>
      </div>

      <EventList />
    </>
  );
};

export default Carousel;
