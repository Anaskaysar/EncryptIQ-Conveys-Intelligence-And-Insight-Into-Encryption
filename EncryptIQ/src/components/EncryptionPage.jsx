import React, { useState } from 'react';
import { encryptAES, decryptAES } from "../api";

const EncryptionPage = ({ title }) => {
  const [key, setKey] = useState('');
  const [iv, setIv] = useState(''); // IV for AES
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleEncrypt = async () => {
    console.log("Sending text for encryption:", text);
    try {
      const response = await encryptAES(text); // Call the API
      console.log("Encryption response:", response);
      setResult(response.ciphertext);
      setKey(response.key);
      setIv(response.iv); // Save the IV
    } catch (error) {
      console.error("Encryption Error:", error);
      alert("Encryption failed: " + (error?.message || "Unknown error occurred"));
    }
  };
  

  const handleDecrypt = async () => {
    try {
      const response = await decryptAES(result, key, iv); // Call the API
      setText(response.plaintext);
    } catch (error) {
      alert(`Decryption failed: ${error.message}`);
    }
  };

  const handleClear = () => {
    setKey('');
    setIv('');
    setText('');
    setResult('');
  };

  return (
    <div className="flex flex-col items-center py-2">
      <h1 className="text-3xl font-bold text-gray-800">{`Welcome to ${title} Encryption/Decryption`}</h1>

      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        {/* Key Input */}
        <label className="block text-gray-700 font-medium mb-2">Enter Key:</label>
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Enter key"
            readOnly
          />
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>

        {/* Plain Text Input */}
        <label className="block text-gray-700 font-medium mb-2">Enter Plain Text:</label>
        <textarea
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 mb-4"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here..."
        ></textarea>

        {/* Encryption Buttons */}
        <div className="flex justify-between mb-4">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            onClick={handleEncrypt}
          >
            Encrypt
          </button>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            onClick={handleDecrypt}
          >
            Decrypt
          </button>
        </div>

        {/* Encryption Results */}
        <label className="block text-gray-700 font-medium mb-2">Encryption Results:</label>
        <textarea
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          rows="4"
          value={result}
          placeholder="Results will appear here..."
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default EncryptionPage;
