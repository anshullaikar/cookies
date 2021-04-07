import React from "react";
import { Link } from "react-router-dom";
import CookiesPic from "../images/hero-bg.jpg";
const Hero = () => {
  return (
    <div className=" bg-white h-100 flex flex-col justify-center items-center">
      <div className = "w-3/5 py-8 rounded md:rounded-lg md: max-w-xl">
        <img className="rounded-3xl" src={CookiesPic}></img>
      </div>
      <h1 className="font-DancingScript lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
        Sweet Tooth Cookies
      </h1>
      <Link to = "/cookies/form" className="transform lg:text-lg md:text-base sm:text-sm text-xs py-2 px-3 md:py-4 md:px-6 bg-yellow-500 rounded-full ease-out hover:bg-yellow-300 transition duration-200 hover:scale-110 flex items-center">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Order Now
      </Link>
    </div>
  );
};

export default Hero;
