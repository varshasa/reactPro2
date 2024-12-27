import React, { useState } from 'react';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

// Define the type for the slide array
const slides: string[] = [slide1, slide2, slide3];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrowheads */}
      <button
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 md:px-3 md:py-2 rounded shadow-md z-10 focus:outline-none"        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        &#8249;
      </button>
      <button
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 md:px-3 md:py-2 rounded shadow-md z-10 focus:outline-none"        onClick={handleNext}
        aria-label="Next Slide"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
