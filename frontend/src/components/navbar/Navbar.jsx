import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

// menu array
const MenuLinks = [
  { id: 1, link: "/", name: "Home" },
  { id: 2, link: "/shop", name: "Shop" },
  { id: 3, link: "/about", name: "About" },
  { id: 4, link: "/blog", name: "Blogs" },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/shop",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/shop",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/shop",
  },
];
export const Navbar = () => {
  return (
    <div className="navbar dark:bg-gray-900 dark:text-white duration-400 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="/" className="logo">
              samsung
            </a>
            <div className="hidden lg:block">
              <ul className="menu">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link}>{data.name}</a>
                  </li>
                ))}
                <li className="dropdown">
                  <a href="#" className="flex items-center gap-[2px]">
                    Quick Links <FaCaretDown />
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a href={data.link}>{data.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="search-group hidden sm:flex">
              <input type="text" placeholder="search" />
              <IoMdSearch />
            </div>
            <button className="cart-btn">
              <FaShoppingCart />
              <div className="cart-count">4</div>
            </button>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};
