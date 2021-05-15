import React, { Fragment } from "react";
import ChocCookieImg from "../images/cookie-normal.jpeg";
import ChocChunkCookieImg from "../images/cookie-choco-chunk.jpg";
import Item from "./Item";

const Items = () => {
    return (
        <Fragment>
            <div id="items" className="w-full flex flex-col justify-center items-center card-gradient-bg pb-8">
                <h1 className="dark-text  bg-white font-DancingScript py-2 px-5 lg:text-8xl rounded-3xl md:text-6xl sm:text-5xl text-4xl font-black my-6 md:my-10 lg:my-16 h-4/5 text-center">
                    Items
                </h1>
                <div className="w-full flex flex-wrap md:mx-5 mx-3 justify-center self-auto">
                    
                    <Item
                        id="item-1"
                        title="chocolate chip cookies"
                        overlayText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <Item
                    id="item-2"
                    title="chocolate chip cookies with extra chocolate chunks"
                    overlayText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Items;
