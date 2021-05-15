import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="md:hidden font-mono grid grid-rows-4 text-center items-center dropdown">
      <Link to="#hero" className="p-4">
        Home
      </Link>
      <Link to="/about" className="p-4">
        About
      </Link>
      <a href="#items" className="p-4">
        Order Now
      </a>
    </div>
  );
};

export default Dropdown;
