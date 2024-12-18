import { Tooltip } from "react-tooltip";
import SectionHeader from "./SectionHeader";
import ContentCard from "./ContentCard";
import { FaShieldAlt } from "react-icons/fa";

const SecurityFeature = () => (
  <div>
    <SectionHeader title="Security Features" subtitle="Learn about the resilience of AES and RSA" />
    <div className="flex flex-col md:flex-row gap-6">
      <ContentCard>
        <div className="flex items-center mb-4" data-tooltip-id="aes-tooltip">
          <FaShieldAlt className="text-indigo-600 text-2xl mr-2" />
          <h3 className="font-semibold text-xl">AES Security</h3>
        </div>
        <Tooltip id="aes-tooltip" content="AES uses symmetric key encryption for speed and security." />
        <p className="text-gray-700">AES is resistant to brute-force attacks and widely trusted for secure data encryption.</p>
      </ContentCard>
      <ContentCard>
        <div className="flex items-center mb-4" data-tooltip-id="rsa-tooltip">
          <FaShieldAlt className="text-purple-600 text-2xl mr-2" />
          <h3 className="font-semibold text-xl">RSA Security</h3>
        </div>
        <Tooltip id="rsa-tooltip" content="RSA uses public-key encryption for robust security in data exchange." />
        <p className="text-gray-700">RSA relies on the computational difficulty of factoring large numbers, offering robust security in public-key encryption.</p>
      </ContentCard>
    </div>
  </div>
);

export default SecurityFeature;
