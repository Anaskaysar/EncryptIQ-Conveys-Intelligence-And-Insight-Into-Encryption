// ContentCard.jsx
import React from "react";

const ContentCard = ({ children }) => (
  <div className="bg-blue-50 shadow-lg rounded-lg p-6 my-4 hover:shadow-2xl transition-shadow duration-300">
    {children}
  </div>
);

export default ContentCard;
