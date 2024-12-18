// AlgorithmOverview.jsx
import SectionHeader from './SectionHeader';
import ContentCard from './ContentCard';
import { FaLock, FaKey } from 'react-icons/fa';

const AlgorithmOverview = () => (
  <div>
    <SectionHeader title="AES and RSA Overview" />
    <div className="flex flex-col md:flex-row gap-6">
      <ContentCard>
        <div className="flex items-center mb-4">
          <FaLock className="text-blue-600 text-2xl mr-2" />
          <h3 className="font-semibold text-xl text-gray-800">AES (Advanced Encryption Standard)</h3>
        </div>
        <p className="text-gray-700">AES is a symmetric key algorithm with key sizes of 128, 192, and 256 bits, ideal for secure and fast encryption.</p>
      </ContentCard>
      <ContentCard>
        <div className="flex items-center mb-4">
          <FaKey className="text-green-600 text-2xl mr-2" />
          <h3 className="font-semibold text-xl text-gray-800">RSA (Rivest-Shamir-Adleman)</h3>
        </div>
        <p className="text-gray-700">RSA is an asymmetric key algorithm offering public-key encryption, with key sizes like 1024, 2048, and 4096 bits.</p>
      </ContentCard>
    </div>
  </div>
);

export default AlgorithmOverview;
