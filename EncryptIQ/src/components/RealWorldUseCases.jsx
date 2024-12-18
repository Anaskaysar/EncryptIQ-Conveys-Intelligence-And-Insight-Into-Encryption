import SectionHeader from "./SectionHeader";
import { FaCloud, FaShieldAlt, FaEnvelope, FaCreditCard } from "react-icons/fa";

const RealWorldUseCases = () => {
  return (
    <div className="mt-12">
      <SectionHeader
        title="Real-World Use Cases"
        subtitle="Practical applications of AES and RSA in different industries"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* AES Use Cases */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaCloud className="text-blue-500 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Cloud Storage</h3>
          <p className="text-gray-600">
            AES secures sensitive data in cloud services like Google Drive and
            Dropbox.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaCreditCard className="text-blue-500 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Online Transactions</h3>
          <p className="text-gray-600">
            AES is used in e-commerce platforms to ensure payment data is
            encrypted.
          </p>
        </div>

        {/* RSA Use Cases */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaShieldAlt className="text-green-500 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">SSL/TLS Security</h3>
          <p className="text-gray-600">
            RSA enables secure key exchanges in HTTPS connections for websites.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaEnvelope className="text-green-500 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Secure Email</h3>
          <p className="text-gray-600">
            RSA ensures email security and encryption in services like PGP and
            S/MIME.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealWorldUseCases;
