// TeamMemberCard.jsx
import React from 'react';
const TeamMemberCard = ({ name, studentId, role, bio, image }) => (
  <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
    {/* Image placeholder or actual image */}
    {image ? (
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-contain" />
    ) : (
      <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{name[0]}</span>
      </div>
    )}
    
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-sm text-gray-500 mb-1">{studentId}</p>
    <p className="text-sm text-blue-600 font-medium mb-2">{role}</p>
    <p className="text-gray-700 text-sm">{bio}</p>
  </div>
);

export default TeamMemberCard;
