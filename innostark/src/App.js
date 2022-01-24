import { Link, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import AddProduct from "./components/AddProduct";
import { ToastContainer } from "react-toastify";
import logo from "./logo1.png";

function App() {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src="" className="logo_img" alt="My_Logo_Style" />
        </div>
        <div className="searchbar">
          <input
            type="text"
            className="search_box"
            placeholder="Search here..."
            value={inputValue}
            onChange={inputChangeHandler}
          />

          <img src={logo} className="search_img" alt="" />
        </div>
        <div className="navbar_links">
          <Link to="/" className="navbar_link home">
            Home
          </Link>
          <Link to="/add" className="navbar_link home">
            Add Product
          </Link>
          <Link to="/about" className="navbar_link home">
            About
          </Link>
        </div>
      </nav>
      <menu className="menu_container">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home inputValue={inputValue} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
        </Routes>
      </menu>
    </div>
  );
}

export default App;
