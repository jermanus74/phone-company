/* eslint-disable react/prop-types */
import React from "react";

export const Banner = ({ data }) => {
  return (
    <div
      className="min-h-[400px] flex justify-center items-center
      py-12  "
    >
      <div className="container p-1 ">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 
        text-white rounded-3xl items-center"
        >
          {/* first col */}
          <div className="p-6 sm:p-8 ">
            <p className="text-sm">{data.discount}</p>
            <h1
              className="text-4x uppercase lg:text-7xl font-bold
            "
            >
              {""}
              {data.title}
            </h1>
            <p className="text-sm">{data.date}</p>
          </div>
          {/* second col */}
          <div>
            <img src={data.image} className="h-full flex items-center" />
          </div>
          {/* third col */}
        </div>
      </div>
    </div>
  );
};
