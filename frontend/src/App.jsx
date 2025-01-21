import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Blogs } from "./pages/Blogs";
import { About } from "./pages/About";

function App() {
  return (
    <div className="custom-container dark:bg-gray-700 dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
