import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="navbar bg-gradient-to-r from-blue-50 to-green-50 shadow-md text-gray-800 w-full top-0 z-50">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a>Algorithms</a>
          </li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <Link to='/' className="btn btn-ghost text-xl">
        <div className="text-2xl font-bold">
          <h1 className="text-2xl font-bold flex-shrink-0">
            <span className="text-blue-400">Elcrypt</span>
            <span className="text-green-400">IQ</span>
          </h1>
        </div>
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          {" "}
          <Link to="/"> Home</Link>{" "}
        </li>
        <li>
          <details>
            <summary>Algorithms</summary>
            <ul className="p-2 bg-neutral text-neutral-content">
              <li>
                <a>AES</a>
              </li>
              <li>
                <a>RSA</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link to="/learn-more">Learn More</Link>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      <Link to="/team">Teams</Link>
    </div>
  </div>
);

export default Header;
