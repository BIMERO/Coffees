import React from "react";

export const Hero = () => {
  return (
    <section
      className=" bg-hero h-[121vh] bg-no-repeat bg-cover text-white py-36 px-4 lg:h-[90vh] lg:bg-center"
      id="home"
    >
      <div className="contain">
        <h6 className=" uppercase text-sm font-medium">
          Now you can feel the Energy
        </h6>
        <h1 className=" text-[45px] leading-tight font-semibold my-5 lg:text-6xl">
          Start your day with
          <br />a black coffee
        </h1>
        <button className=" text-black bg-white border-2 rounded-full py-2 px-10 font-medium hover:bg-transparent hover:text-white">
          BUY NOW
        </button>
      </div>
    </section>
  );
};
