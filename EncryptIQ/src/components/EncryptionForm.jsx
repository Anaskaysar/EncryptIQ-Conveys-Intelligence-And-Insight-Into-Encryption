// EncryptionForm.js
import React, { useState } from 'react';

const EncryptionForm = () => {
  const [plainText, setPlainText] = useState('');
  const [key, setKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleEncrypt = () => {
    // TO DO: implement encryption logic
  };

  const handleDecrypt = () => {
    // TO DO: implement decryption logic
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block font-medium text-gray-700 mb-2">
          Enter Plain Text:
        </label>
        <textarea
          rows="3"
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2 mb-4"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-2">
          Enter Key:
        </label>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2 mb-4"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-2">
          Select Method:
        </label>
        <select
            value={selectedMethod}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2 mb-4"
          >
            <option value="">Select Method</option>
            <option value="aes">AES</option>
            <option value="rsa">RSA</option>
          </select>
        </div>
        <div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
            onClick={handleEncrypt}
          >
            Encrypt
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
            onClick={handleDecrypt}
          >
            Decrypt
          </button>
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Encrypted Text:
          </label>
          <textarea
            rows="3"
            value={encryptedText}
            readOnly
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2 mb-4"
          />
        </div>
      </form>
  );
};

export default EncryptionForm;