import { Heading } from "../shared/Heading";
import { ProductCard } from "./ProductCard";
import Image1 from "../../assets/hero-img/z-flip.png";
import Image2 from "../../assets/hero-img/img3.avif";
import Image3 from "../../assets/hero-img/galaxy-z-flip6.png";
import Image5 from "../../assets/hero-img/A-series.webp";

export const Products = () => {
  const productsData = [
    {
      id: 1,
      title: "z flip 3",
      price: 200,
      image: Image1,
      aosDelay: 0,
    },
    {
      id: 2,
      title: "Product 2",
      price: 300,
      image: Image2,
      aosDelay: 200,
    },
    {
      id: 3,
      title: "z flip 6",
      price: 400,
      image: Image3,
      aosDelay: 400,
    },

    {
      id: 4,
      title: "A 35 pro",
      price: 400,
      image: Image5,
      aosDelay: 600,
    },
  ];
  return (
    <div>
      <div className="container">
        {/* header section */}
        <Heading title="Our Products" subtitle="VIew our products" />
        {/* card section */}
        <ProductCard data={productsData} />
        <ProductCard data={productsData} />
      </div>
    </div>
  );
};
