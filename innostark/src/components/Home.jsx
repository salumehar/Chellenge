import React from "react";
import { useSelector } from "react-redux";

const Home = ({ inputValue }) => {
  const products = useSelector((product) => product.authTypeReducer.data);

  return (
    <div className="home_container">
      <div className="prodcuts">
        {products.map((product, id) => {
          if (product.productName.includes(inputValue)) {
            return (
              <div className="product" key={id}>
                <div className="prod_name">
                  <h3>{product.productName}</h3>
                </div>
                <div className="prod_description">
                  <span>{product.productdescription}</span>
                </div>
                <div className="prod_price">
                  <span>${product.productprice}</span>
                </div>
                <div className="prod_inventory">
                  <span>{product.inventorydate}</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
