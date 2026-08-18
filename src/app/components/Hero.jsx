"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../Hero.css";

import slide1 from "../img/slide1.jpg";
import slide2 from "../img/slide2.jpg";
import slide3 from "../img/Slide3.webp";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const slides = [
    {
      image: slide1,
      title: "Find and rent your perfect parking spot",
      description:
        "Discover convenient parking spaces around Tashkent and reserve your spot in seconds.",
      primaryBtn: "Find a Spot",
      secondaryBtn: "Learn More",
    },
    {
      image: slide2,
      title: "Charger stations ready before you arrive",
      description:
        "Find convenient EV charging stations and make sure your car is ready when you are.",
      primaryBtn: "Find a Charger",
      secondaryBtn: "Learn More",
    },
    {
      image: slide3,
      title: "More spots. Better prices.",
      description:
        "Unlock hidden parking locations and get exclusive prices with a ParkGo membership.",
      primaryBtn: "Explore Memberships",
      secondaryBtn: "Learn More",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero-wrapper">

      <h1
        className="hero-title"
        data-aos="fade-down"
      >
        Finding parking faster and easier
      </h1>

      <div
        className="header-wrapper"
        data-aos="fade-up"
        data-aos-delay="200"
      >

        <div
          className="slider-track"
          style={{
            transform: `translateX(-${
              currentSlide * (100 / slides.length)
            }%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide-panel"
              style={{
                backgroundImage: `url(${slide.image.src})`,
              }}
            >
              <div className="slide-overlay"></div>

              <div className="slide-content">

                <div className="slide-hero-text">
                  <h2>{slide.title}</h2>

                  <p>{slide.description}</p>
                </div>

                <div className="slide-actions">
                  <button className="btn-blue">
                    {slide.primaryBtn}
                  </button>

                  <button className="btn-white">
                    {slide.secondaryBtn}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        <button
          className="arrow-btn left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          className="arrow-btn right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="dots-indicator">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`indicator-dot ${
                index === currentSlide ? "active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;