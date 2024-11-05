import React, { useState, useEffect } from 'react';
import slide1 from '../assets/Devs_Website_Intro.gif';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: slide1, alt: "First slide" },
    { src: slide1, alt: "Second slide" },
    { src: slide1, alt: "Third slide" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 6000);
    return () => clearInterval(autoPlay);
  }, []);

  return (
    <section className="w-full flex items-center justify-center min-h-screen max-container">
      <div className="relative w-full h-full max-h-screen">
        <div className="relative overflow-hidden w-full h-full bg-white rounded-lg">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover rounded-lg"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute inset-y-0 left-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none rounded-l-lg dark:text-white dark:hover:bg-white/10"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18L9 12l6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          onClick={nextSlide}
          className="absolute inset-y-0 right-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none rounded-r-lg dark:text-white dark:hover:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </span>
        </button>

        <div className="flex justify-center absolute bottom-3 left-0 right-0 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 border border-gray-400 rounded-full cursor-pointer ${
                index === currentSlide
                  ? 'bg-blue-700 border-blue-700 dark:bg-blue-500 dark:border-blue-500'
                  : 'dark:border-neutral-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
