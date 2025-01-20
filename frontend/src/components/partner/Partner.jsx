import brand1 from "../../assets/brand/br-1.png";
import brand2 from "../../assets/brand/br-2.png";
import brand3 from "../../assets/brand/br-3.png";
import brand4 from "../../assets/brand/br-4.png";
import brand5 from "../../assets/brand/br-5.png";
export const Partner = () => {
  return (
    <div
      className="py-8 mt-2 md:block bg-gray-200 
    dark:bg-white/10"
    >
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
          <img src={brand1} className="w-[80px] dark:invert " />
          <img src={brand2} className="w-[80px] dark:invert " />
          <img src={brand3} className="w-[80px] dark:invert " />
          <img src={brand4} className="w-[80px] dark:invert " />
          <img src={brand5} className="w-[80px] dark:invert " />
        </div>
      </div>
    </div>
  );
};
