import React from 'react';
import Link from '@docusaurus/Link';

const teamMembers = [
  {
    name: "aslams2020",
    role: "Added ML resources (Issue #400)",
    image: "https://avatars.githubusercontent.com/u/55667788?v=4",
    social: { github: "https://github.com/aslams2020" }
  },
  {
    name: "manikumarreddyu",
    role: "Improved README (Issue #104)",
    image: "https://avatars.githubusercontent.com/u/77665544?v=4",
    social: { github: "https://github.com/manikumarreddyu" }
  },
  {
    name: "ShaikArshidBanu",
    role: "Transfer learning examples (Issue #34)",
    image: "https://avatars.githubusercontent.com/u/99887766?v=4",
    social: { github: "https://github.com/ShaikArshidBanu" }
  },
  {
    name: "aditiverma-21",
    role: "Automation enhancement (Issue #177)",
    image: "https://avatars.githubusercontent.com/u/125987720?v=4",
    social: { github: "https://github.com/aditiverma-21" }
  },
  {
    name: "MadhavDhatrak",
    role: "Community support (Issue #425)",
    image: "https://avatars.githubusercontent.com/u/166299528?v=4",
    social: { github: "https://github.com/MadhavDhatrak" }
  },
  {
    name: "monika1281",
    role: "Discussion engagement lead",
    image: "https://avatars.githubusercontent.com/u/124203217?v=4",
    social: { github: "https://github.com/monika1281" }
  }
];

const TeamSidebar = () => (
  <div className="p-4 bg-[#121212] rounded-xl shadow-md w-full">
    <h3 className="text-lg font-semibold text-white mb-4">
      Our Active Contributors
    </h3>
    <ul className="space-y-4">
      {teamMembers.map((member, idx) => (
        <li key={idx} className="flex items-center space-x-3">
          <img
            src={member.image}
            alt={member.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-white font-medium">{member.name}</p>
            <p className="text-gray-400 text-sm">{member.role}</p>
            <Link
              to={member.social.github}
              className="text-blue-400 hover:underline text-sm"
            >
              GitHub →
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default TeamSidebar;
