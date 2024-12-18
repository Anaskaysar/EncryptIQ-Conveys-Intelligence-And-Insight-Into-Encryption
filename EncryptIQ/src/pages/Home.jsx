import { useNavigate } from "react-router-dom";
import ContentCard from "../components/ContentCard";
import { FaLock, FaKey, FaRocket, FaCheckCircle, FaUser } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4 animate-fade-up">Welcome to ElcryptIQ</h1>
        <p className="text-lg max-w-3xl mx-auto animate-fade-in">
          ElcryptIQ is your gateway to learning cryptographic algorithms. Explore AES and RSA with hands-on interactive demos, and gain insights into data encryption.
        </p>
      </div>

      {/* Feature Highlights Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-8">Why Choose ElcryptIQ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <FaRocket className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Fast and Intuitive</h3>
            <p className="text-gray-600">Learn cryptographic concepts quickly through interactive tools and easy-to-follow demos.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <FaCheckCircle className="text-green-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Practical Insights</h3>
            <p className="text-gray-600">Explore real-world examples of AES and RSA encryption to understand their importance.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <FaUser className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">User-Friendly Design</h3>
            <p className="text-gray-600">Our platform is designed to be accessible to both beginners and experts.</p>
          </div>
        </div>
      </div>

      {/* Algorithm Selection Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* AES Card */}
        <ContentCard>
          <div className="text-center hover:shadow-lg transition-all duration-300 p-6 rounded-lg">
            <FaLock className="text-blue-500 text-5xl mb-4 animate-pulse" />
            <h2 className="text-3xl font-semibold text-blue-600 mb-2">AES (Advanced Encryption Standard)</h2>
            <p className="text-gray-700 mb-4">
              Dive into symmetric encryption with AES, an algorithm known for its speed and security.
            </p>
            <button
              onClick={() => navigate("/aes")}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
            >
              Learn About AES
            </button>
          </div>
        </ContentCard>

        {/* RSA Card */}
        <ContentCard>
          <div className="text-center hover:shadow-lg transition-all duration-300 p-6 rounded-lg">
            <FaKey className="text-green-500 text-5xl mb-4 animate-pulse" />
            <h2 className="text-3xl font-semibold text-green-600 mb-2">RSA (Rivest-Shamir-Adleman)</h2>
            <p className="text-gray-700 mb-4">
              Discover RSA, an asymmetric encryption algorithm widely used for secure data transmission.
            </p>
            <button
              onClick={() => navigate("/rsa")}
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
            >
              Learn About RSA
            </button>
          </div>
        </ContentCard>
      </div>

      {/* Interactive Demo Section */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-6">Try It Out!</h2>
        <p className="text-lg text-gray-600 mb-4">Experience AES and RSA encryption in real-time with our interactive demos.</p>
        <button
          onClick={() => navigate("/aes")}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 mr-4"
        >
          Try AES Demo
        </button>
        <button
          onClick={() => navigate("/rsa")}
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
        >
          Try RSA Demo
        </button>
      </div>

      {/* Testimonials Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-700 italic mb-4">
              "ElcryptIQ helped me understand AES encryption like never before! The interactive tools are so intuitive."
            </p>
            <p className="text-gray-900 font-bold">— S. Dalia., Msc Student</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-700 italic mb-4">
              "The RSA demo made asymmetric encryption crystal clear for me. Highly recommend this platform!"
            </p>
            <p className="text-gray-900 font-bold">M.Zaman, Msc Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
