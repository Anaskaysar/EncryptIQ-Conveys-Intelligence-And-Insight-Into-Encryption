// SectionHeader.jsx
import React from "react";

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-blue-600">{title}</h2>
    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-green-400 mt-2 rounded"></div>
  </div>
);

export default SectionHeader;
