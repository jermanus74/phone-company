import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
