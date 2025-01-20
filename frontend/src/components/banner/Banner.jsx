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
          <div className="h-full flex items-center">
            <img
              src={data.image}
              className="scale-120 w-[350px] md:w-[350px] mx-auto 
              drop-shadow-2xl object-cover "
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 ">
            <p className=" font-bold text-xl ">{data.title2}</p>
            <p className=" text-3xl sm:text-6xl font-bold ">
              {""}
              {data.title3}
            </p>
            <p className="text-sm  tracking-wide leading-5s">{data.title4}</p>
            <div>
              <button
                style={{ color: data.bgColor }}
                className="bg-white text-brandBlue py-2 px-4 capitalize font-semibold rounded-full "
              >
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
