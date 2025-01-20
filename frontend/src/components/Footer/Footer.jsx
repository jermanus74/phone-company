export const Footer = () => {
  const FooterLinks = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Shop",
      link: "#shop",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Blogs",
      link: "#blog",
    },
  ];
  return (
    <div className="dark:bg-gray-950 ">
      <div className="container">
        <div className="grid md:grid-cols-5 pb-20 pt-5">
          {/* company detail */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-brandBlue font-helvetica 
              text-2xl tracking-widest font-semibold
               uppercase sm:text-3xl
               dark:text-white"
            >
              samsung
            </a>
            <p className="text-gray-600  pt-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>By MUST Computer Science Students</p>
            <a
              href="#"
              className="inline-block bg-brandBlue text-white
            py-2 px-4 mt-4 rounded-full text-sm"
            >
              Visit Our Website
            </a>
          </div>

          {/* footer links */}
          <div
            className="col-span-2
          grid grid-cols-2 sm:grid-cols-3 md:pl-10
          "
          >
            <div className="py-8 px-4 w-max">
              <h1
                className="text-xl 
              font-bold sm:text-left mb-3 "
              >
                Important Links
              </h1>
              <ul className="space-y-1">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="block py-2 text-gray-600
                       hover:text-black
                      dark:hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* second links */}
          <div
            className="col-span-2
          grid grid-cols-2 sm:grid-cols-3 
          "
          >
            <div className="py-8 px-4 w-max">
              <h1
                className="text-xl 
              font-bold sm:text-left mb-3"
              >
                Important Links
              </h1>
              <ul className="space-y-1">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="block py-2 text-gray-600
                       hover:text-black
                      dark:hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
