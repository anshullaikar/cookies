import React from "react";
import { Link } from "react-router-dom";
const NewNavBar = (props) => {
  return (
    <nav className="font-NotoJP flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-semibold">
      <Link to="/cookies" className="pl-8 font-DancingScript">
        Sweet Tooth Cookies
      </Link>
      {!props.isOpen && <div className="px-4 cursor-pointer md:hidden " //if button is not clicked then show button otherwise disappear
      onClick = {props.toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>}
      <div className="pr-8 md:block hidden">
        <Link to="/cookies" className="p-4">Home</Link>
        <Link to="/cookies/about" className="p-4">About</Link>
        <a href="https://forms.gle/zwYYFxNB1DXQM9VX7" className="p-4">Order Now</a>
      </div>
    </nav>
  );
};

export default NewNavBar;
