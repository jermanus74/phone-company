/* eslint-disable react/prop-types */

import { Button } from "../shared/Button";

export const ProductCard = ({ data }) => {
  return (
    <div className="product-card-container">
      <div className="product-card-grid">
        {/* Card Section */}
        {data.map((item) => (
          <div className="product-card group" key={item.id}>
            <div className="product-image-container">
              <img src={item.image} className="product-image" />
              {/* Hover Button */}
              <div className="hover-overlay">
                <Button
                  text={"Add To Cart"}
                  bgColor={"bg-brandBlue"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="product-details">
              <div>
                <h2 className="product-title">{item.title}</h2>
                <h2 className="product-price">${item.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
