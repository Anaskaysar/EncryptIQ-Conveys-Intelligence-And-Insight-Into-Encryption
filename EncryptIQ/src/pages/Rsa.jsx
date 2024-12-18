import { useState } from "react";
import rsa from "js-crypto-rsa";

const Rsa = () => {
  const [plainText, setPlainText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [publicKey, setPublicKey] = useState({});
  const [privateKey, setPrivateKey] = useState({});

  const handleGenerateKeys = async () => {
    const key = await rsa.generateKey(2048);
    setPublicKey(key.publicKey);
    setPrivateKey(key.privateKey);
  };

  const handlePlainTextChange = (event) => {
    setPlainText(event.target.value);
  };

  const handleEncrypt = async () => {
    const msg = new TextEncoder().encode(plainText);
    const encrypted = await rsa.encrypt(msg, publicKey, "SHA-256");
    setEncryptedText(encrypted);
  };

  const handleDecrypt = async () => {
    const decrypted = await rsa.decrypt(encryptedText, privateKey, "SHA-256");
    const decoded = new TextDecoder().decode(decrypted);
    setDecryptedText(decoded);
  };

  return (
    <div className="flex justify-center items-center m-1">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">
          RSA Encryption and Decryption Tool
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This tool generates RSA keys, encrypts and decrypts messages using
          RSA-OAEP.
        </p>
        <div className="flex mb-6">
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
        <div className="flex mb-6">
          <div className="w-1/2 mr-4">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Public Key:
            </h2>
            <textarea
              value={JSON.stringify(publicKey, null, 2)}
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-4 h-20"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Private Key:
            </h2>
            <textarea
              value={JSON.stringify(privateKey, null, 2)}
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-4 h-25"
            />
          </div>
        </div>
        <div className="flex mb-6">
          <div className="w-1/2 mr-4">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Plain Text:
            </h2>
            <textarea
              value={plainText}
              onChange={handlePlainTextChange}
              placeholder="Enter text to encrypt"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-4 h-40"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Encrypted Text:
            </h2>
            <textarea
              value={JSON.stringify(encryptedText, null, 2)}
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-4 h-40"
            />
          </div>
        </div>
        <div className="flex mb-6">
          <div className="w-1/2 mr-4">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Decrypted Text:
            </h2>
            <textarea
              value={decryptedText}
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-4 h-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsa;
