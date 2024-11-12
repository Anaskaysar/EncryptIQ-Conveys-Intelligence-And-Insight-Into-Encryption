// Team.jsx
import React from 'react';
import member1Image from '../assets/teams/Anas.jpg'
import TeamMemberCard from '../components/TeamMemberCard';

const Team = () => {
  // Placeholder data for team members
  const teamMembers = [
    { name: "Kaysarul Anas Apurba", studentId: "ID: 0445874", role: "Master's Student, Computational Science", bio: "Hi, This is Kaysarul Anas", image: member1Image },
    { name: "Md Hasibul Hasan", studentId: "ID: 0434009", role: "Master's Student, Computational Science", bio: "Hi, This is Md Hasibul Hasan" },
    { name: "Mahedee Zaman Moon", studentId: "ID: 1003", role: "Master's Student, Computational Science", bio: "he He He " },
    { name: "Md Shafaet Hasan ", studentId: "ID: 1004", role: "Master's Student, Computational Science", bio: "********" },
    { name: "Sumona Akter Dalia", studentId: "ID: 1005", role: "Master's Student, Computational Science", bio: "  *********" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600">Our Team</h2>
        <p className="text-gray-700 mt-4 text-lg">We are a group of five dedicated Master's students in Computational Science at Laurentian University, working on innovative solutions and advancing our knowledge in the field.</p>
      </div>

      {/* Team members section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard 
            key={index}
            name={member.name}
            studentId={member.studentId}
            role={member.role}
            bio={member.bio}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
