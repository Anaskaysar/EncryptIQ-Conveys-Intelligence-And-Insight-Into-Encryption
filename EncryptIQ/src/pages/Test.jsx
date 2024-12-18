import { useState } from "react";
import rsa from "js-crypto-rsa";

const Test = () => {
  const [plainText, setPlainText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [publicKey, setPublicKey] = useState({});
  const [privateKey, setPrivateKey] = useState({});
  const [encryptionSteps, setEncryptionSteps] = useState([]);
  const [decryptionSteps, setDecryptionSteps] = useState([]);

  // Generate RSA Keys
  const handleGenerateKeys = async () => {
    const key = await rsa.generateKey(2048);
    setPublicKey(key.publicKey);
    setPrivateKey(key.privateKey);
  };

  // Handle input changes
  const handlePlainTextChange = (event) => {
    setPlainText(event.target.value);
  };

  // Simulate RSA Encryption Steps
  const visualizeRsaEncryption = (text) => {
    const steps = [];
    steps.push({ step: "Original Plain Text", value: text });
    steps.push({ step: "Text Encoding", value: "Convert plain text to binary using TextEncoder." });
    steps.push({ step: "Public Key", value: JSON.stringify(publicKey, null, 2) });
    steps.push({ step: "Encryption", value: "Perform RSA-OAEP encryption with SHA-256." });
    return steps;
  };

  // Simulate RSA Decryption Steps
  const visualizeRsaDecryption = (encrypted) => {
    const steps = [];
    steps.push({ step: "Encrypted Text", value: JSON.stringify(encrypted, null, 2) });
    steps.push({ step: "Private Key", value: JSON.stringify(privateKey, null, 2) });
    steps.push({ step: "Decryption", value: "Decrypt the binary using RSA-OAEP with SHA-256." });
    steps.push({ step: "Text Decoding", value: "Convert binary back to plain text using TextDecoder." });
    return steps;
  };

  // Encrypt Plain Text
  const handleEncrypt = async () => {
    const msg = new TextEncoder().encode(plainText);
    const encrypted = await rsa.encrypt(msg, publicKey, "SHA-256");
    setEncryptedText(encrypted);
    const steps = visualizeRsaEncryption(plainText);
    setEncryptionSteps(steps);
  };

  // Decrypt Text
  const handleDecrypt = async () => {
    const decrypted = await rsa.decrypt(encryptedText, privateKey, "SHA-256");
    const decoded = new TextDecoder().decode(decrypted);
    setDecryptedText(decoded);
    const steps = visualizeRsaDecryption(encryptedText);
    setDecryptionSteps(steps);
  };

  return (
    <div className="flex justify-center items-center m-1">
      <div className="bg-white shadow-lg rounded-lg w-full p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          RSA Encryption and Decryption Tool
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Generate RSA keys, encrypt, and decrypt messages using RSA-OAEP with SHA-256.
        </p>

        {/* Buttons */}
        <div className="flex mb-6 justify-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md mr-4"
            onClick={handleGenerateKeys}
          >
            Generate Keys
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mr-4"
            onClick={handleEncrypt}
          >
            Encrypt
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md"
            onClick={handleDecrypt}
          >
            Decrypt
          </button>
        </div>

        {/* Keys Section */}
        <div className="flex mb-6">
          <div className="w-1/2 mr-4">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">Public Key:</h2>
            <textarea
              value={JSON.stringify(publicKey, null, 2)}
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm px-4 py-4 h-20"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">Private Key:</h2>
            <textarea
              value={JSON.stringify(privateKey, null, 2)}
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm px-4 py-4 h-20"
            />
          </div>
        </div>

        {/* Plain Text & Encrypted Text */}
        <div className="flex mb-6">
          <div className="w-1/2 mr-4">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">Plain Text:</h2>
            <textarea
              value={plainText}
              onChange={handlePlainTextChange}
              placeholder="Enter text to encrypt"
              className="w-full border-gray-300 rounded-md shadow-sm px-4 py-4 h-32"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">Encrypted Text:</h2>
            <textarea
              value={JSON.stringify(encryptedText, null, 2)}
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm px-4 py-4 h-32"
            />
          </div>
        </div>

        {/* Decrypted Text */}
        <div className="flex mb-6">
          <div className="w-1/2 mr-4">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">Decrypted Text:</h2>
            <textarea
              value={decryptedText}
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm px-4 py-4 h-32"
            />
          </div>
        </div>

        {/* Encryption and Decryption Steps */}
        <div className="flex">
          {/* Encryption Steps */}
          <div className="w-1/2 pr-4">
            <h2 className="text-2xl font-bold text-purple-500 mb-4">Encryption Steps:</h2>
            <div className="overflow-y-auto max-h-64 border border-gray-300 rounded-md p-4">
              {encryptionSteps.map((step, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold">{step.step}:</h3>
                  <p className="text-gray-600">{step.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decryption Steps */}
          <div className="w-1/2 pl-4">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Decryption Steps:</h2>
            <div className="overflow-y-auto max-h-64 border border-gray-300 rounded-md p-4">
              {decryptionSteps.map((step, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold">{step.step}:</h3>
                  <p className="text-gray-600">{step.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
