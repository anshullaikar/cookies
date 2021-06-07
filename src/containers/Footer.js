import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer-bg pb-4 flex flex-col justify-center items-center">
            <h1 className="dark-text  bg-white font-DancingScript py-2 px-5 lg:text-8xl rounded-3xl md:text-6xl sm:text-5xl text-4xl font-black my-6 md:my-10 lg:my-16 h-4/5 text-center w-max">
                Contact Us
            </h1>
            {/* TODO: ADD LINKS,  Use: https://wa.me/15551234567
            
            Don't use: https://wa.me/+001-(555)1234567 */}
            <div className="flex justify-evenly mb-4 w-4/5">
                <a
                    target="_blank"
                    className="w-32 bg-white rounded-3xl p-2 text-center text-blue-800"
                    href="https://www.instagram.com/sweet.tooth_cookies/"
                >
                    Instagram
                </a>
                <a
                    target="_blank"
                    className="w-32 bg-white rounded-3xl p-2 text-center text-green-700 "
                    href="https://wa.me/919920048504"
                >
                    Whatsapp
                </a>
                <a
                    className="w-32 bg-white rounded-3xl p-2 text-center text-black"
                    href="tel:+919920048504"
                >
                    Call Us
                </a>
            </div>
            <div className="flex justify-center mt-8 mb-16">
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
