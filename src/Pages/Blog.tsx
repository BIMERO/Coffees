import React from "react";
import { blogs } from "../data";

export const Blog = () => {
  return (
    <section className="contain px-4 py-28" id="blog">
      <header className=" text-center mb-24">
        <h2 className=" text-4xl font-semibold mb-3">
          What kind of Coffee we serve for you
        </h2>
        <p className="text-sm">
          Who are in extremely love with eco friendly system.
        </p>
      </header>

      <div className="flex flex-col items-center gap-6 md:flex-row">
        {blogs.map((val) => {
          return (
            <div key={val.id} className="mb-5">
              <img
                src={val.cover}
                alt="blog-pic"
                className="rounded-xl w-full max-w-lg"
              />
              <div className="flex items-center gap-4 my-5">
                <button className=" text-sm border border-brand-150 py-1 px-5 rounded-2xl hover:text-white hover:bg-brand-50">
                  Travel
                </button>
                <button className="text-sm border border-brand-150 py-1 px-5 rounded-2xl hover:text-white hover:bg-brand-50">
                  Life Style
                </button>
              </div>
              <h2 className=" text-lg font-semibold mb-3"> {val.heading} </h2>
              <p className=" text-sm text-brand-100 mb-3"> {val.content} </p>
              <p className=" text-xs font-semibold"> {val.date} </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
