import React from "react";
import { numbers, reviewsdata } from "../data";
import { AiFillStar } from "react-icons/ai";
import Countup from "react-countup";

export const Reviews = () => {
  return (
    <section className="px-4 py-28 bg-brand-50 text-white" id="reviews">
      <div className="contain">
        <div className=" text-center mb-24">
          <h2 className=" text-4xl font-semibold mb-3">
            What kind of Coffee we serve for you
          </h2>
          <p className="text-sm">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 mb-20 md:grid-cols-2">
          {reviewsdata.map((val) => {
            return (
              <div key={val.id}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-5">
                    <img
                      src={val.profie}
                      alt="customer"
                      className=" rounded-full w-[50px] h-[50px]"
                    />
                    <div>
                      <h6 className="font-semibold"> {val.name} </h6>
                      <p className=" text-xs"> {val.title} </p>
                    </div>
                  </div>
                  <div className="flex text-orange-400">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar className="text-white" />
                    <AiFillStar className="text-white" />
                    <AiFillStar className="text-white" />
                  </div>
                </div>

                <p className=" text-sm"> {val.comment} </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {numbers.map((val) => {
            return (
              <div key={val.id} className=" text-center">
                <Countup
                  end={val.end}
                  start={val.start}
                  duration={2}
                  delay={3}
                  className="font-thin text-6xl mb-3"
                />
                <p className=" text-sm"> {val.para} </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
