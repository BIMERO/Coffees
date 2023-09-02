import React from "react";
import { servicesdata } from "../data";

export const Services = () => {
  return (
    <section className=" bg-services" id="services">
      <div className="contain py-28 px-4">
        <div className=" text-center mb-24">
          <h2 className=" text-4xl font-semibold mb-3">
            What kind of Coffee we serve for you
          </h2>
          <p className="text-sm text-brand-100">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {servicesdata.map((item) => {
            return (
              <div
                key={item.id}
                className=" bg-white shadow-normal p-8 rounded-xl"
              >
                <div className="flex items-center justify-between mb-5">
                  <h5 className=" text-lg font-bold">{item.coffee}</h5>
                  <p className="text-brand-50 text-lg font-bold">
                    {item.price}
                  </p>
                </div>
                <p className="text-sm text-brand-100">{item.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
