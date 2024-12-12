import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentCard from '../components/ContentCard';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Introduction Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to ElcryptIQ</h1>
        <p className="text-gray-700 text-lg">
          ElcryptIQ is an interactive platform for learning and comparing cryptographic algorithms. Explore the functionalities, strengths, and performance of AES and RSA, and gain insights into the world of data encryption.
        </p>
      </div>

      {/* Algorithm Selection Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* AES Card */}
        <ContentCard>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">AES (Advanced Encryption Standard)</h2>
            <p className="text-gray-700 mb-4">
              Dive into symmetric encryption with AES, an algorithm known for its speed and security. Click below to explore AES.
            </p>
            <button
              onClick={() => navigate('/aes')}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition-colors duration-300"
            >
              Learn About AES
            </button>
          </div>
        </ContentCard>

        {/* RSA Card */}
        <ContentCard>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">RSA (Rivest-Shamir-Adleman)</h2>
            <p className="text-gray-700 mb-4">
              Discover RSA, an asymmetric encryption algorithm widely used for secure data transmission. Click below to explore RSA.
            </p>
            <button
              onClick={() => navigate('/rsa')}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition-colors duration-300"
            >
              Learn About RSA
            </button>
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default Home;
