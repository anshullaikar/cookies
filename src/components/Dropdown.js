import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="md:hidden font-mono grid grid-rows-4 text-center items-center">
      <Link to="/cookies" className="p-4">
        Home
      </Link>
      <Link to="/cookies/about" className="p-4">
        About
      </Link>
      <a href="https://forms.gle/zwYYFxNB1DXQM9VX7" className="p-4">
        Order Now
      </a>
    </div>
  );
};

export default Dropdown;
