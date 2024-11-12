// Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown')) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <header className="bg-gradient-to-r from-blue-50 to-green-50 p-4 shadow-md text-gray-800 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo aligned to the left */}
        <h1 className="text-2xl font-bold flex-shrink-0">
          <span className="text-blue-400">Elcrypt</span>
          <span className="text-green-400">IQ</span>
        </h1>
        
        {/* Centered navigation links */}
        <nav className="flex space-x-4 mx-auto">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/learn-more" className="hover:text-blue-600 transition-colors">Learn More</Link>
          <div className="relative dropdown">
            <button onClick={handleDropdownToggle} className="hover:text-blue-600 transition-colors focus:outline-none">
              More
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-700 transition-opacity duration-300 ease-out">
                <Link to="/option1" className="block px-4 py-2 hover:bg-blue-100">Option 1</Link>
                <Link to="/option2" className="block px-4 py-2 hover:bg-blue-100">Option 2</Link>
                <Link to="/option3" className="block px-4 py-2 hover:bg-blue-100">Option 3</Link>
              </div>
            )}
          </div>
        </nav>
        
        {/* Team link aligned to the right */}
        <Link to="/team" className="hover:text-blue-600 transition-colors ml-auto">
          Team
        </Link>
      </div>
    </header>
  );
};

export default Header;

