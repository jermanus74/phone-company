import { Button } from "../shared/Button";
import Image1 from "../../assets/cat/headset.png";
import Image2 from "../../assets/cat/img2.png";
// import Image3 from "../../assets/cat/img3.avif";
// import Image4 from "../../assets/cat/img4.avif";
import Image5 from "../../assets/cat/img5.png";
// import Image6 from "../../assets/cat/img6.png";

export const Category = () => {
  return (
    <div className="py-8">
      <div className="container lg:p-1">
        <div
          className="p-3 grid grid-cols-1 sm:grid-cols-2
         lg:grid-cols-4 gap-8"
        >
          {/* first col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-black
                  to-black/70 text-white rounded-3xl relative h-[290px]
                  flex items-end w-auto"
          >
            <div className="relative w-full h-full flex flex-col justify-end">
              <div className="space-y-3 mb-2">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p
                  className="mb-[2px] text-2xl font-semibold
                    "
                >
                  With
                </p>
                <p
                  className="text-4xl xl:text-5xl font-bold opacity-20
                  mb-2 "
                >
                  Earphones
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                  className="z-10"
                />
              </div>
              <img
                src={Image2}
                className="w-[150px] absolute -right-4 -bottom-10 z-[10]"
              />
            </div>
          </div>
          {/* second col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandYellow
                to-brandYellow/70 text-white rounded-3xl relative h-[290px]
                flex items-end"
          >
            <div className="relative w-full h-full flex flex-col justify-end">
              <div className="space-y-3 mb-2">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p
                  className="mb-[2px] text-2xl font-semibold
                  "
                >
                  With
                </p>
                <p
                  className="text-4xl xl:text-5xl font-bold opacity-20
                mb-2 "
                >
                  Headphones
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandYellow"
                  className="z-10"
                />
              </div>
              <img
                src={Image1}
                className="w-[220px] absolute -right-2 bottom-10 lg:top-[40] z-[10]"
              />
            </div>
          </div>
          {/* third col */}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-brandBlue
                to-brandBlue/70 text-white rounded-3xl relative h-[290px]
                flex items-end"
          >
            <div className="relative w-full h-full flex flex-col justify-end">
              <div className="space-y-3 mb-2">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p
                  className="mb-[2px] text-2xl font-semibold
                  "
                >
                  With
                </p>
                <p
                  className="text-4xl xl:text-5xl font-bold opacity-20
                mb-2 "
                >
                  Z fold 3
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandBlue"
                  className="z-10"
                />
              </div>
              <img
                src={Image5}
                className="w-[250px] h-[250px] absolute right-0 bottom-[-20px] z-[10]"
              />
            </div>
          </div>
          {/* ll */}
        </div>
      </div>
    </div>
  );
};
