import React from "react";

const Item = (props) => {
    return (
        <div
            id={props.id}
            className="2xl:m-8 xl:m-6 my-2 font-sans font-semibold rounded-3xl w-full md:w-2/5 px-2 max-w-xl flex items-center justify-center capitalize"
        >
            <div className="card card-shadow w-4/5 md:w-full rounded-3xl h-96 text-grey-dark flex justify-center items-center pt-2 cookie-plain-bg">
                <div class="item-overlay rounded-3xl h-max">
                    <h1 className="mt-4 text-xl text-center md:text-2xl lg:text-3xl capitalize">
                        {props.title}
                    </h1>
                    <p className="m-2 font-normal text-base text-center md:text-lg lg:text-xl">
                        {props.overlayText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Item;
