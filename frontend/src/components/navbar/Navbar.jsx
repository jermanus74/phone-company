// import "./css/Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

// menu array
const MenuLinks = [
  { id: 1, link: "#", name: "Home" },
  { id: 2, link: "#", name: "Shop" },
  { id: 3, link: "#", name: "About" },
  { id: 4, link: "#", name: "Blogs" },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
export const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-400 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* logo and link section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-brandBlue font-helvetica 
              text-2xl tracking-widest font-semibold
               uppercase sm:text-3xl
               dark:text-white"
            >
              samsung
            </a>
            {/* menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-3 font-semibold
                       text-gray-500 hover:text-black
                        dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* dropdown menu */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className=" flex items-center font-semibold gap-[2px] text-gray-500
                     dark:hover:text-brandWhite py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* dropdown links */}
                  <div
                    className="hidden absolute z-[9999] group-hover:block 
                            rounded-md bg-white shadow-md dark:bg-gray-950 p-2 dark:text-white"
                  >
                    <ul className="space-y-2 ">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            href={data.link}
                            className="
                              text-gray-500 hover:text-white
                               dark:hover:text-brandWhite duration-200
                                whitespace-nowrap inline-block w-full p-2 hover:bg-brandBlue/70 rounded-md
                                "
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* search bar */}
            <div className="relative group hidden sm:flex items-center">
              <input
                type="text"
                placeholder="search"
                className="w-0 group-hover:w-[200px] transition-all
                        text-brandBlue
                         duration-300 rounded-full border border-gray-300 px-2 py-1 
                         focus:outline-none focus:border-1
                        focus:border-brandBlue dark:border-gray-500
                         dark:bg-gray-800 opacity-0 group-hover:opacity-100
                         font-serif font-semibold"
              />
              <IoMdSearch
                className="text-gray-500 ml-2 text-xl
                         group-hover:text-brandBlue cursor-pointer"
              />
            </div>

            {/* cart section */}
            <button className="relative p-3">
              <FaShoppingCart
                className="text-xl text-gray-400 
              drop-shadow-sm cursor-pointer"
              />
              <div
                className="w-4 h-4 bg-blue-500 text-brandWhite rounded-full 
              absolute top-0 right-0 flex items-center justify-center text-xs"
              >
                4
              </div>
            </button>

            {/* Dark mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
