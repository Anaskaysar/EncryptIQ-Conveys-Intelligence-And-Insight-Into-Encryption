import React from 'react';

const Header = () => (
    <div className="navbar bg-neutral text-neutral-content">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Algorithms</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">
      <div className="text-2xl font-bold">
      <span className="text-blue-400">Elcrypt</span><span className="text-green-400">IQ</span>
    </div>

      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li>
          <details>
            <summary>Algorithms</summary>
            <ul className="p-2 bg-neutral text-neutral-content">
              <li><a>AES</a></li>
              <li><a>RSA</a></li>
            </ul>
          </details>
        </li>
        <li><a>Learn More</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Team</a>
    </div>
  </div>

);

export default Header;
