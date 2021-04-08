import React from "react";
import ChocCookieImg from "../images/cookie-normal.jpeg";
import ChocChunkCookieImg from "../images/cookie-choco-chunk.jpg";

const Items = () => {
  return (
    <div>
      <div class="flex flex-wrap md:mx-6 mx-3 my-8 justify-center self-auto">
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
        <div class="w-full md:w-1/2 px-2 max-w-xl">
          <div
            id="item-1"
            style={{
              background: `url(${ChocCookieImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            class="border rounded-3xl h-96 text-sm text-grey-dark flex items-center justify-center m-3"
          >
            <p>full / half</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-2 max-w-xl">
          <div
            style={{
              background: `url(${ChocChunkCookieImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            class="border rounded-3xl h-96 text-sm text-grey-dark flex items-center justify-center m-3"
          >
            <p>full / half</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
