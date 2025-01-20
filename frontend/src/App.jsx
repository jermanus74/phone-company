// import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Category } from "./components/categories/Category";
import { Category2 } from "./components/categories/Category2";
import { Services } from "./components/services/Services";
import { Banner } from "./components/banner/Banner";
import phone from "./assets/hero-img/galaxy-z-flip6.png";
import { Products } from "./components/products/Products";
import { Blog } from "./components/blog/Blog";
import { Partner } from "./components/partner/Partner";

const bannerData = {
  discount: "30% OFF",
  title: "Fine Picture",
  date: "17 Jan to 29 Jan",
  image: phone,
  title2: "Super 5G Smartphone",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimos.",
  bgColor: "#1376f4",
};
const bannerData2 = {
  discount: "30% OFF",
  title: "Fine Picture",
  date: "17 Jan to 29 Jan",
  image: phone,
  title2: "Super 5G Smartphone",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimos.",
  bgColor: "#2dcc6f",
};
function App() {
  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white overflow-hidden duration-200">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={bannerData} />
      <Products />
      <Banner data={bannerData2} />
      <Blog />
      <Partner />

      <Footer />
    </div>
  );
}

export default App;
