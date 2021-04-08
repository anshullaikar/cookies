import React from "react";
import ChocCookieImg from "../images/cookie-normal.jpeg";
import ChocChunkCookieImg from "../images/cookie-choco-chunk.jpg";

const Items = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex flex-wrap md:mx-6 mx-3 my-8 justify-center self-auto">
        {/* <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
          <div class="border h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>full / half / quarter</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
          <div class="border h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>full / half / quarter</p>
          </div>
        </div> */}
        <div
          id="item-1"
          className="xl:m-4 my-2 font-sans font-bold rounded-3xl w-full md:w-1/2 px-2 max-w-xl flex items-center justify-center capitalize"
        >
          <div
            // style={{
            //   background: `url(${ChocCookieImg})`,
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            // }}
            className="card-shadow w-full rounded-3xl h-96 text-grey-dark flex justify-center items-center pt-2"
          >
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl text-center md:text-2xl lg:text-3xl">
                chocolate chip
              </h1>
              <div className="bg-green-500 h-48 w-48 m-2"></div>
              <p>Description of the pic</p>
              <p>Prices: 179/350/600</p>
            </div>
          </div>
        </div>
        <div
          id="item-2"
          className="xl:m-4 my-2 font-sans font-bold rounded-3xl w-full md:w-1/2 px-2 max-w-xl flex items-center justify-center capitalize"
        >
          <div
            // style={{
            //   background: `url(${ChocCookieImg})`,
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            // }}
            className="card-shadow w-full rounded-3xl h-96 text-grey-dark flex justify-center items-center pt-2"
          >
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl text-center md:text-2xl lg:text-3xl">
                chocolate chip with extra chocolate chunks
              </h1>
              <div className="bg-green-500 h-48 w-48 m-2"></div>
              <p>Description of the pic</p>
              <p>Prices: 179/350/600</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
