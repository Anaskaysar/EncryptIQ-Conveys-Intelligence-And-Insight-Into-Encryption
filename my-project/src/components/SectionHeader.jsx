
// SectionHeader.jsx
import React from 'react';

const SectionHeader = ({ title, subtitle }) => (
  <div className="my-8 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-md shadow-lg text-white">
    <h2 className="text-4xl font-bold">{title}</h2>
    {subtitle && <p className="text-gray-200 mt-2">{subtitle}</p>}
  </div>
);

export default SectionHeader;

