import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer-bg pb-4 flex flex-col justify-center items-center">
            <h1 className="dark-text  bg-white font-DancingScript py-2 px-5 lg:text-8xl rounded-3xl md:text-6xl sm:text-5xl text-4xl font-black my-6 md:my-10 lg:my-16 h-4/5 text-center w-max">
                Contact Us
            </h1>
            <div className="flex justify-evenly mb-4 w-4/5">
                <a
                    className="w-32 bg-white rounded-3xl p-2 text-center text-blue-800"
                    href=""
                >
                    Instagram
                </a>
                <a
                    className="w-32 bg-white rounded-3xl p-2 text-center text-green-700 "
                    href=""
                >
                    Whatsapp
                </a>
                <a
                    className="w-32 bg-white rounded-3xl p-2 text-center text-black"
                    href=""
                >
                    Call Us
                </a>
            </div>
            <div className="flex justify-center mt-8">
                <div className="w-max bg-white rounded-3xl p-2 icon justify-center">
                    Website made with{" "}
                    <AiFillHeart className="mx-1 baseline text-red-600" /> by{" "}
                    <span className="text-blue-700">
                        <a href="https://anshullaikar.github.io">
                            {"Anshul Laikar"}
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
