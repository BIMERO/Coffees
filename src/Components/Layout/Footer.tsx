import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-footer bg-no-repeat bg-cover bg-top text-white px-4 py-32 xl:py-40">
      <section className="contain grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <h2 className=" text-lg font-semibold mb-5">About us</h2>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </div>
        <div className="">
          <h2 className=" text-lg font-semibold mb-5">Newsletter</h2>
          <p className=" text-sm">Stay updated with our lastest</p>
          <form action="" className="flex items-center h-10">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              className="py-2 px-4 h-full w-full text-black outline-0"
            />
            <BsArrowRight className=" bg-brand-50 p-2 text-4xl h-full" />
          </form>
        </div>
        <div>
          <h2 className=" text-lg font-semibold mb-5">Follow Us</h2>
          <p className=" text-sm">Let us be social</p>
          <div className="flex items-center gap-2">
            <FaFacebookF />
            <FaTwitter />
            <FaDribbble />
            <FaBehance />
          </div>
        </div>
      </section>
    </footer>
  );
};
