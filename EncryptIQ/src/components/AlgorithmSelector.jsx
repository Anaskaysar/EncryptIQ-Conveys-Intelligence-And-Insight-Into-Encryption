import React from 'react';

const AlgorithmSelector = ({ setAlgorithm }) => (
  <div className="flex justify-center space-x-4 my-4">
    <button
      onClick={() => setAlgorithm('AES')}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      AES
    </button>
    <button
      onClick={() => setAlgorithm('RSA')}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
    >
      RSA
    </button>
  </div>
);

export default AlgorithmSelector;
