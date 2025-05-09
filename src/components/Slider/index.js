"use client";

import React, { useState } from "react";

const slides = [
  {
    href: "https://grocery.snapp.ir/?_gl=1*13u3r8v*_gcl_au*MTU3NDMzOTU4My4xNzQ2NzEyNjAz",
    image: "/images/Market.jpg",
  },
  {
    href: "https://food.snapp.ir/?utm_source=snapp&utm_medium=slider&utm_campaign=new-landing&_gl=1*13u3r8v*_gcl_au*MTU3NDMzOTU4My4xNzQ2NzEyNjAz",
    image: "/images/Food.jpg",
  },
  {
    href: "https://digitalsignup.snapp.ir/?utm_source=snapp&utm_medium=slider&utm_campaign=new-landing&_gl=1*13u3r8v*_gcl_au*MTU3NDMzOTU4My4xNzQ2NzEyNjAz",
    image: "/images/Driver.jpg",
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section
      className="relative mb-[32px] mt-[40px] px-[10%] pt-[32px] mb-[56px]"
      aria-hidden="true"
    >
      <div className="keen-slider">
        {/* Slide Container */}
        <div
          className="keen-slider__slide h-[180px] md:h-[240px] lg:h-[300px] "
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            borderRadius: "10px",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <a href={slides[currentSlide].href} className="block w-full h-full" />
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="keen-dots flex justify-center mt-[-3px]">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-hidden="true"
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`dot w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-[#fff]" : "bg-[#ffffff4f]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
