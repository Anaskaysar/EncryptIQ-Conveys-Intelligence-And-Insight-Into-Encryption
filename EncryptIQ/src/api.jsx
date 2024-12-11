import axios from "axios";

// Base URL for the backend
const BASE_URL = " http://127.0.0.1:5000"; // Replace with your deployed backend URL if applicable

export const encryptAES = async (plaintext) => {
    try {
      const response = await axios.post(`${BASE_URL}/aes/encrypt`, { plaintext });
      return response.data;
    } catch (error) {
      console.error("AES Encryption Error:", error);
      throw error.response?.data || { message: "Unknown error occurred" };
    }
  };

// AES Decryption
export const decryptAES = async (ciphertext, key, iv) => {
  try {
    const response = await axios.post(`${BASE_URL}/aes/decrypt`, {
      ciphertext,
      key,
      iv,
    });
    return response.data;
  } catch (error) {
    console.error("AES Decryption Error:", error);
    throw error.response.data;
  }
};

// RSA Key Generation
export const generateRSAKeys = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/rsa/keys`);
    return response.data;
  } catch (error) {
    console.error("RSA Key Generation Error:", error);
    throw error.response.data;
  }
};
