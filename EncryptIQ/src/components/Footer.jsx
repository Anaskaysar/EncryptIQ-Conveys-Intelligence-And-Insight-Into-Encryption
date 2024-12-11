import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gradient-to-r from-green-50 to-blue-50 shadow-inner text-gray-700 py-6">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
      {/* Left Section */}
      <div className="mb-4 lg:mb-0 text-center lg:text-left">
        <h2 className="text-lg font-bold">
          <span className="text-blue-400">Elcrypt</span>
          <span className="text-green-400">IQ</span>
        </h2>
        <p className="text-sm">
          © {new Date().getFullYear()} ElcryptIQ. All Rights Reserved.
        </p>
      </div>

      {/* Center Section - Links */}
      <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-sm">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/aes" className="hover:underline">
          AES
        </Link>
        <Link to="/rsa" className="hover:underline">
          RSA
        </Link>
        <Link to="/learn-more" className="hover:underline">
          Learn More
        </Link>
        <Link to="/team" className="hover:underline">
          Teams
        </Link>
      </div>

      {/* Right Section - Social Icons */}
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.729.083-.729 1.205.083 1.837 1.236 1.837 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.774.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.382 1.236-3.221-.123-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.405 1.022.006 2.048.139 3.005.405 2.292-1.552 3.3-1.23 3.3-1.23.653 1.652.241 2.872.118 3.176.77.839 1.236 1.911 1.236 3.221 0 4.609-2.804 5.625-5.475 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.577 4.767-1.587 8.207-6.084 8.207-11.387 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path d="M24 4.557a9.94 9.94 0 01-2.828.775 4.932 4.932 0 002.165-2.725 9.865 9.865 0 01-3.127 1.194 4.919 4.919 0 00-8.38 4.482 13.959 13.959 0 01-10.141-5.14 4.909 4.909 0 001.523 6.565 4.897 4.897 0 01-2.228-.616v.062a4.91 4.91 0 003.946 4.817 4.897 4.897 0 01-2.224.085 4.92 4.92 0 004.597 3.419 9.868 9.868 0 01-6.102 2.104c-.395 0-.787-.023-1.175-.068a13.93 13.93 0 007.548 2.212c9.051 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634A10.012 10.012 0 0024 4.557z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path d="M19.616 3H4.384C3.616 3 3 3.616 3 4.384v15.231C3 20.384 3.616 21 4.384 21h15.231C20.384 21 21 20.384 21 19.616V4.384C21 3.616 20.384 3 19.616 3zM8.916 17.431H6.503V10.3h2.413v7.131zM7.709 9.337c-.743 0-1.349-.606-1.349-1.352 0-.748.606-1.353 1.349-1.353s1.352.605 1.352 1.353c0 .746-.609 1.352-1.352 1.352zm10.038 8.094h-2.415v-3.448c0-.821-.016-1.876-1.147-1.876-1.151 0-1.327.899-1.327 1.827v3.497H10.44V10.3h2.319v.974h.033c.323-.608 1.113-1.247 2.292-1.247 2.448 0 2.897 1.611 2.897 3.706v3.698z" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
