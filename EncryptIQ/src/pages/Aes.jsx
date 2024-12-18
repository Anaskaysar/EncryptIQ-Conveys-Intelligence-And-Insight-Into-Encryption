import { useState } from "react";
import CryptoJS from "crypto-js";

const Aes = () => {
  const [plainText, setPlainText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [key, setKey] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("AES");
  const [encryptionSteps, setEncryptionSteps] = useState([]);
  const [decryptionSteps, setDecryptionSteps] = useState([]);

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

  const visualizeAesEncryption = (text, key) => {
    const steps = [];
    let state = text;

    steps.push({ step: "Initial Plaintext", value: state });

    const expandedKey = key + " expanded"; // Simulating key expansion
    steps.push({ step: "Key Expansion", value: expandedKey });

    state = `AddRoundKey(${state}, ${expandedKey})`;
    steps.push({ step: "Initial Round - AddRoundKey", value: state });

    state = `SubBytes(${state})`;
    steps.push({ step: "Main Round - SubBytes", value: state });

    state = `ShiftRows(${state})`;
    steps.push({ step: "Main Round - ShiftRows", value: state });

    state = `MixColumns(${state})`;
    steps.push({ step: "Main Round - MixColumns", value: state });

    state = `Final AddRoundKey(${state}, ${expandedKey})`;
    steps.push({ step: "Final Round", value: state });

    steps.push({
      step: "Ciphertext",
      value: CryptoJS.AES.encrypt(text, key).toString(),
    });

    return steps;
  };

  const visualizeAesDecryption = (text, key) => {
    const steps = [];
    let state = text;

    steps.push({ step: "Ciphertext", value: state });

    const expandedKey = key + " expanded"; // Simulating key expansion
    steps.push({ step: "Key Expansion", value: expandedKey });

    state = `Inverse AddRoundKey(${state}, ${expandedKey})`;
    steps.push({ step: "Initial Round - Inverse AddRoundKey", value: state });

    state = `Inverse MixColumns(${state})`;
    steps.push({ step: "Main Round - Inverse MixColumns", value: state });

    state = `Inverse ShiftRows(${state})`;
    steps.push({ step: "Main Round - Inverse ShiftRows", value: state });

    state = `Inverse SubBytes(${state})`;
    steps.push({ step: "Main Round - Inverse SubBytes", value: state });

    state = `Final Plaintext(${state})`;
    steps.push({
      step: "Decrypted Plaintext",
      value: CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8),
    });

    return steps;
  };

  const handleEncrypt = () => {
    if (selectedMethod === "AES") {
      const encrypted = CryptoJS.AES.encrypt(plainText, key).toString();
      setEncryptedText(encrypted);
      const steps = visualizeAesEncryption(plainText, key);
      setEncryptionSteps(steps);
    } else {
      alert("Only AES encryption is supported!");
    }
  };

  const handleDecrypt = () => {
    if (selectedMethod === "AES") {
      const decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(
        CryptoJS.enc.Utf8
      );
      setDecryptedText(decrypted);
      const steps = visualizeAesDecryption(encryptedText, key);
      setDecryptionSteps(steps);
    } else {
      alert("Only AES decryption is supported!");
    }
  };

  return (
    <div className="flex justify-center items-center m-1">
      <div className="bg-white shadow-lg rounded-lg w-full p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Welcome to AES Algorithm Encryption Page
        </h1>
        <p className="text-lg font-medium text-gray-600 mb-6 text-justify">
          This page allows you to encrypt and decrypt text using the AES
          algorithm. Please enter the text you want to encrypt, You will see AES
          algorithm is automatically selected for you, and click the "Encrypt"
          button. The encrypted text will be displayed below. You can then enter
          the encrypted text, select the decryption method, and click the
          "Decrypt" button to retrieve the original text.
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
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-purple-500 mb-4">
                Encryption Steps:
              </h2>
              {encryptionSteps.length > 0 ? (
                <div className="border border-gray-300 rounded-lg p-4">
                  {encryptionSteps.map((step, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">
                        {step.step}:
                      </h3>
                      <p className="text-gray-600">{step.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">
                  Perform encryption to view steps here.
                </p>
              )}
            </div>
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
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-purple-500 mb-4">
                Decryption Steps:
              </h2>
              {decryptionSteps.length > 0 ? (
                <div className="border border-gray-300 rounded-lg p-4">
                  {decryptionSteps.map((step, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">
                        {step.step}:
                      </h3>
                      <p className="text-gray-600">{step.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">
                  Perform decryption to view steps here.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aes;
