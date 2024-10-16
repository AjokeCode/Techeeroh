"use client";

import { useEffect } from "react";
import img2 from "./Vector (18).svg";
import Image from "next/image";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";

const Review = () => {
    useEffect(() => {
        const splide = new Splide(".splide", {
          type: "loop",
          drag: "free",
            focus: "center",
          pagination: true,
          breakpoints: {
            640: {
              // Settings for screens smaller than 640px (mobile)
              perPage: 1,
            },
            1440: {
              // Settings for screens larger than 640px (tablet and up)
              perPage: 3,
            },
          },
          autoScroll: {
            speed: -1,
          },
        });
    
        splide.mount({ AutoScroll });
      }, []);
  const reviews = [
    {
      name: "Maryam Odekanle",
      review: "I would like to continue over and over again with Techeeroh Academy.",
      position: "Student at Techeeroh",
    },
    {
      name: "Maryam Odekanle",
      review: "I would like to continue over and over again with Techeeroh Academy.",
      position: "Student at Techeeroh",
    },
    {
      name: "Maryam Odekanle",
      review: "I would like to continue over and over again with Techeeroh Academy.",
      position: "Student at Techeeroh",
    },
  ];

  return (
    <div className="flex flex-col md:px-16 px-8 mb-8 gap-8 md:gap-16">
          <div className="flex flex-col md:gap-4 gap-2 md:items-center items-start">
          <h1
        className="text-2xl md:text-4xl"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(255, 121, 0, 1), rgba(1, 29, 13, 0.6) )",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "11%",
        }}
      >
        Testimonials
      </h1>
      <h2 className="text-2xl md:text-5xl">Hear from our students.</h2>
       </div>

      {/* Splide structure */}
      <div className="splide" aria-label="Student Testimonials">
        <div className="splide__track">
          <ul className="splide__list">
            {reviews.map((rev, index) => (
              <li key={index} className="splide__slide">
                <div
                  className="flex flex-col bg-white justify-between items-center px-6 py-4 max-w-96 h-60 rounded-3xl border"
                  style={{ borderColor: "rgba(0, 0, 0, 0.08)" }}
                >
                  <Image src={img2} alt="img" />
                  <p className="text-center">{rev.review}</p>
                  <h1
                    className="font-semibold text-lg"
                    style={{ color: "rgba(2, 13, 55, 1)" }}
                  >
                    {rev.name}
                  </h1>
                  <p>{rev.position}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Review;
