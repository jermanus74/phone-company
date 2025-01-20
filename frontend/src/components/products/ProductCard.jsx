/* eslint-disable react/prop-types */

export const ProductCard = ({ data }) => {
  return (
    <div>
      <div>
        {/* card section */}
        {data.map((data) => (
          <div>
            <div>
              <img src={data.image} className="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
