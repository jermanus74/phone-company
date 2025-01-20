/* eslint-disable react/prop-types */

import { Button } from "../shared/Button";

export const ProductCard = ({ data }) => {
  return (
    <div className="mb-10 p-2 ">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 
       md:grid-cols-4  gap-5 place-items-center "
      >
        {/* card section */}
        {data.map((data) => (
          <div className="group bg-gray-400 rounded-md" key={data.id}>
            <div className="p-2 m-1 relative">
              <img
                src={data.image}
                className=" h-[180px] w-[260px] object-cover  rounded-md
                 "
              />
              {/* hover button */}
              <div
                className="hidden group-hover:flex absolute top-1/2
              -translate-y-1/2 w-full h-full
              text-center group-hover:backdrop-blur-sm
              justify-center items-center duration-200"
              >
                <Button
                  text={"Add To Cart"}
                  bgColor={"bg-brandBlue"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-5 flex justify-center gap-4 items-center">
              <div>
                <h2 className="mb-2 font-semibold">{data.title}</h2>

                <h2 className=" font-bold">${data.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
