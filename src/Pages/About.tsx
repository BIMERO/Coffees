import React from "react";

export const About = () => {
  return (
    <section className="contain flex flex-col lg:flex-row py-8" id="about">
      <div>
        <video
          src="/images/coffee.mp4"
          className=" rounded-xl mb-16 sm:px-10"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="px-10">
        <h6 className=" uppercase text-brand-50 text-xs tracking-[2px]">
          Live Coffee making process.
        </h6>
        <h2 className=" text-4xl font-semibold mb-5">
          We Telecast our
          <br />
          Coffee Making Live
        </h2>
        <p className=" text-sm mb-4">
          We are here to listen from you deliver exellence
        </p>
        <p className=" text-sm text-brand-100 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim.
        </p>
        <img src="/images/signature.png" alt="signature" className=" w-2/5" />
      </div>
    </section>
  );
};
