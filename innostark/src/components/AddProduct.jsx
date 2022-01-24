import React, { useState } from "react";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productdescription, setProductDecription] = useState("");
  const [productprice, setProductPrice] = useState("");
  const [inventorydate, setINventoryDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const product = {
      id: nextId,
      productName,
      productdescription,
      productprice,
      inventorydate,
    };

    dispatch({ type: "AUTH_TYPE", payload: product });

    toast.success("Product Added successfully");

    navigate("/");
  };

  return (
    <div className="Add_Prodcut_container">
      <h3>Add Product</h3>
      <form onSubmit={submitHandler} className="add_form">
        <div className="form_control">
          <label>Product Name</label>
          <input
            type="text"
            value={productName}
            className="form_inputs"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form_control">
          <label>Product Decription</label>
          <input
            type="text"
            value={productdescription}
            className="form_inputs"
            onChange={(e) => setProductDecription(e.target.value)}
          />
        </div>
        <div className="form_control">
          <label>Product Price</label>
          <input
            type="number"
            value={productprice}
            className="form_inputs"
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="form_control">
          <label>Product Inventory</label>
          <input
            type="date"
            value={inventorydate}
            className="form_inputs"
            onChange={(e) => setINventoryDate(e.target.value)}
          />
        </div>
        <div className="button">
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
