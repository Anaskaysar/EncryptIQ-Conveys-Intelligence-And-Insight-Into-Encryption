// ContentCard.jsx
import React from "react";

const ContentCard = ({ children }) => (
  <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 my-4 hover:shadow-lg transition-shadow duration-300">
    {children}
  </div>
);

export default ContentCard;

