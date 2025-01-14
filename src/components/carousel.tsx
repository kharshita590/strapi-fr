"use client"
import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
    <div className="overflow-hidden w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[30rem] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
    <button
      onClick={handlePrev}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
    >
      &#8592;
    </button>
  
    <button
      onClick={handleNext}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
    >
      &#8594;
    </button>
  
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-3 h-3 rounded-full ${
            index === currentIndex ? 'bg-white' : 'bg-black'
          } focus:outline-none hover:bg-gray-600`}
        ></button>
      ))}
    </div>
  </div>
  
  );
};

export default Carousel;
