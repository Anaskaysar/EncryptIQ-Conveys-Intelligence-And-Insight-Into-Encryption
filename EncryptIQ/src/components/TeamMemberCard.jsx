// TeamMemberCard.jsx

import PropTypes from 'prop-types';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const TeamMemberCard = ({ name, studentId, role, bio, image, linkedin, github, personalSite }) => (
  <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
    {/* Image placeholder or actual image */}
    {image ? (
      <img src={image} alt={name} className="w-24 h-24 mx-auto mb-4 object-contain" />
    ) : (
      <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{name[0]}</span>
      </div>
    )}
    
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-sm text-gray-500 mb-1">{studentId}</p>
    <p className="text-sm text-blue-600 font-medium mb-2">{role}</p>
    <p className="text-gray-700 text-sm">{bio}</p>

    {/* Social Links */}
    <div className="flex justify-center space-x-4 mt-4">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaLinkedin size={24} />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
          <FaGithub size={24} />
        </a>
      )}
      {personalSite && (
        <a href={personalSite} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
          <FaGlobe size={24} />
        </a>
      )}
    </div>
  </div>
);

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  studentId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  personalSite: PropTypes.string
};

export default TeamMemberCard;
