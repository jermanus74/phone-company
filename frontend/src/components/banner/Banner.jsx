/* eslint-disable react/prop-types */
export const Banner = ({ data }) => {
  return (
    <div className="banner-container min-h-[400px] flex justify-center items-center py-12">
      <div className="container p-1">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="banner-grid grid grid-cols-1 md:grid-cols-3 gap-6 text-white rounded-3xl items-center"
        >
          {/* First column */}
          <div className="banner-col p-6 sm:p-8">
            <p className="banner-discount text-sm">{data.discount}</p>
            <h1 className="banner-title text-4xl uppercase lg:text-7xl font-bold">
              {data.title}
            </h1>
            <p className="banner-date text-sm">{data.date}</p>
          </div>
          {/* Second column */}
          <div className="banner-image-container h-full flex items-center">
            <img
              src={data.image}
              className="banner-image scale-120 w-[350px] md:w-[350px] mx-auto drop-shadow-2xl object-cover"
            />
          </div>
          {/* Third column */}
          <div className="banner-info flex flex-col justify-center gap-4 p-6">
            <p className="banner-subtitle font-bold text-xl">{data.title2}</p>
            <p className="banner-main-title text-3xl sm:text-6xl font-bold">
              {data.title3}
            </p>
            <p className="banner-description text-sm tracking-wide leading-5">
              {data.title4}
            </p>
            <div>
              <button
                style={{ color: data.bgColor }}
                className="banner-button bg-white text-brandBlue py-2 px-4 capitalize font-semibold rounded-full"
              >
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
