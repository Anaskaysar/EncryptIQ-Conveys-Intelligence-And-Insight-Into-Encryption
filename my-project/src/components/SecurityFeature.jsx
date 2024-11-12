// SecurityFeature.jsx
import React from 'react';
import SectionHeader from './SectionHeader';
import ContentCard from './ContentCard';
import { FaShieldAlt } from 'react-icons/fa';

const SecurityFeature = () => (
  <div>
    <SectionHeader title="Security Features" subtitle="Learn about the resilience of AES and RSA" />
    <div className="flex flex-col md:flex-row gap-6">
      <ContentCard>
        <div className="flex items-center mb-4">
          <FaShieldAlt className="text-indigo-600 text-2xl mr-2" />
          <h3 className="font-semibold text-xl">AES Security</h3>
        </div>
        <p className="text-gray-700">AES is resistant to brute-force attacks and widely trusted for secure data encryption.</p>
      </ContentCard>
      <ContentCard>
        <div className="flex items-center mb-4">
          <FaShieldAlt className="text-purple-600 text-2xl mr-2" />
          <h3 className="font-semibold text-xl">RSA Security</h3>
        </div>
        <p className="text-gray-700">RSA relies on the computational difficulty of factoring large numbers, offering robust security in public-key encryption.</p>
      </ContentCard>
    </div>
  </div>
);

export default SecurityFeature;

