import React from "react";
import { typedata } from "../data";

export const Type = () => {
  return (
    <section className="contain px-4 py-32" id="type">
      <div className=" text-center mb-24">
        <h2 className=" text-4xl font-semibold mb-3">
          What kind of Coffee we serve for you
        </h2>
        <p className="text-sm text-brand-100">
          Who are in extremely love with eco friendly system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {typedata.map((pic) => {
          return (
            <div
              key={pic.id}
              className={`col-span-1 md:col-span-${pic.colSpan}`}
            >
              <img src={pic.cover} alt="type" className="w-full h-full" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
