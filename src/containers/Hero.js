import React from "react";
import { Link } from "react-router-dom";
import CookiesHero from "../images/hero-bg.jpg";
const Hero = () => {
    return (
        <div>
            <div id="hero" className=" hero-bg w-100 flex flex-row justify-center items-center p-4 h-screen-2/3 md:h-screen-nav min-h-36">
                <div className="w-screen h-full flex-row">
                    <h1 className="text-yellow-900 font-DancingScript w-1/3 lg:text-9xl md:text-8xl sm:text-7xl text-5xl font-black mt-16 h-4/5 flex items-center">
                        Sweet Tooth Cookies
                    </h1>
                    <div className="flex flex-col justify-center items-center w-100">
                        <a
                        id="order-now-link"
                            href="/#items"
                            className="font-NotoSansJP font-semibold transform xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base py-2 px-3 md:py-4 md:px-6 yellow-bg-thing rounded-full ease-out transition duration-150 hover:scale-110 flex items-center w-max border-2 border-white text-black  bg-white"
                        >
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
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
