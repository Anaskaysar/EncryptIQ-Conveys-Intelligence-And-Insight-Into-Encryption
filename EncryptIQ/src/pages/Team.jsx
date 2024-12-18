// Team.jsx
import TeamMemberCard from "../components/TeamMemberCard";
import teamMembersData from "../assets/teamMembers.json";

const Team = () => {

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600">Our Team</h2>
        <p className="text-gray-700 mt-4 text-lg">
          We are a group of Master's students in Computational Science at
          Laurentian University, working on innovative solutions and advancing
          our knowledge in the field.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {teamMembersData.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            studentId={member.studentId}
            role={member.role}
            bio={member.bio}
            image={member.image}
            linkedin={member.linkedin}
            github={member.github}
            personalSite={member.personalSite}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
