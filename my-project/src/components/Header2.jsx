import React from 'react';
// import { Link } from 'react-router-dom';

const Header2 = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    {/* Brand Name */}
    <div className="text-2xl font-bold">
      <span className="text-blue-400">Elcrypt</span><span className="text-green-400">IQ</span>
    </div>

    {/* Navigation Links */}
    <nav className="space-x-4">
    </nav>
      {/* <Link to="/" className="hover:text-blue-300">Home</Link>
      <Link to="/learn-more" className="hover:text-blue-300">Learn More</Link> */}
      <a to="/" className="hover:text-blue-300">Home</a>
      <a to="/learn-more" className="hover:text-blue-300">Learn More</a>ß
  </header>
);

export default Header2;
