import React from 'react';

const InputSection = ({ handleInputChange }) => (
  <div className="my-4">
    <textarea
      onChange={(e) => handleInputChange(e.target.value)}
      placeholder="Enter your text here..."
      className="w-full p-2 border border-gray-300 rounded"
      rows="5"
    ></textarea>
  </div>
);

export default InputSection;
