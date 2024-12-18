import { useState } from "react";
import CryptoJS from "crypto-js"; // For AES encryption
import rsa from "js-crypto-rsa"; // For RSA encryption

const Aes = () => {
  const [plainText, setPlainText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [key, setKey] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("AES");

  const handlePlainTextChange = (event) => {
    setPlainText(event.target.value);
  };

  const handleEncryptedTextChange = (event) => {
    setEncryptedText(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleEncrypt = () => {
    if (selectedMethod === "AES") {
      const encrypted = CryptoJS.AES.encrypt(plainText, key).toString();
      setEncryptedText(encrypted);
    } else if (selectedMethod === "RSA") {
      const publicKey = rsa.generatePublicFromPrivate(key);
      const encrypted = rsa.encrypt(plainText, publicKey);
      setEncryptedText(encrypted);
    }
  };

  const handleDecrypt = () => {
    if (selectedMethod === "AES") {
      const decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted);
    } else if (selectedMethod === "RSA") {
      const decrypted = rsa.decrypt(encryptedText, key);
      setDecryptedText(decrypted);
    }
  };

  return (
    <div className="flex justify-center items-center m-1">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Welcome to AES Algorithm Encryption Page
        </h1>
        <p className="text-lg font-medium text-gray-600 mb-6 text-justify">
          This page allows you to encrypt and decrypt text using the AES algorithm. Please enter the text you want to encrypt, You will see AES algorithm is automatically selected for you, and click the "Encrypt" button. The encrypted text will be displayed below. You can then enter the encrypted text, select the decryption method, and click the "Decrypt" button to retrieve the original text.
        </p>
        <div className="flex">
          <div className="w-1/2 pr-4 border-r-2 border-orange-500">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Encryption:
            </h2>
            <textarea
              value={plainText}
              onChange={handlePlainTextChange}
              placeholder="Enter text to encrypt"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-4 h-48"
            />
            <input
              type="text"
              value={key}
              onChange={handleKeyChange}
              placeholder="Enter key"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2 mt-4"
            />
            <select
              value={selectedMethod}
              onChange={handleMethodChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2 mt-4"
            >
              <option value="AES">AES</option>
            </select>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md mt-4"
              onClick={handleEncrypt}
            >
              Encrypt
            </button>
            <h2 className="text-2xl font-bold text-blue-500 mb-2 mt-4">
              Encrypted Text:
            </h2>
            <textarea
              value={encryptedText}
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-4 h-48"
            />
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-2xl font-bold text-orange-500 mb-2">
              Decryption:
            </h2>
            <textarea
              value={encryptedText}
              onChange={handleEncryptedTextChange}
              placeholder="Enter encrypted text to decrypt"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-4 h-48"
            />
            <input
              type="text"
              value={key}
              onChange={handleKeyChange}
              placeholder="Enter key"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-2 mt-4"
            />
            <select
              value={selectedMethod}
              onChange={handleMethodChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-2 mt-4"
            >
              <option value="AES">AES</option>
            </select>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md mt-4"
              onClick={handleDecrypt}
            >
              Decrypt
            </button>
            <h2 className="text-2xl font-bold text-orange-500 mb-2 mt-4">
              Decrypted Text:
            </h2>
            <textarea
              value={decryptedText}
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-4 h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aes;