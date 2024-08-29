import React from "react";
import Slider from "react-slick"; // Stelle sicher, dass react-slick und slick-carousel installiert sind
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { testimonials } from "../constants";

const Kundenbewertungen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="pb-10 px-4 sm:px-8 md:px-12 lg:px-16 font-palanquin bg-background flex flex-col items-center text-white relative">
      <hr className="w-full max-w-6xl mb-8" />
      <h1 className="text-base sm:text-xl md:text-2xl lg:text-5xl font-cinzel font-bold text-center mt-12 mb-8">
        Kundenbewertungen
      </h1>
      <div className="bg-gray-300 text-black p-10 sm:px-24 md:p-8 lg:p-12 rounded-lg shadow-lg max-w-full sm:max-w-3xl md:max-w-4xl relative mx-2 sm:mx-4 lg:mx-6 text-xs sm:text-sm md:text-base lg:text-lg font-semibold flex flex-col items-center">
        {/* Link zurück zur Hauptseite */}
        <Link
          to="/"
          className="absolute top-2 right-2 text-black text-xl sm:text-2xl md:text-3xl font-bold"
        >
          &times;
        </Link>
        {/* Slider für Kundenbewertungen */}
        <Slider {...settings} className="w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 flex-wrap"
            >
              <p className="text-xs sm:text-base md:text-lg lg:text-lg italic text-center mb-4">
                "{testimonial.text}"
              </p>
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center">
                - {testimonial.name}, {testimonial.date}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Kundenbewertungen;
