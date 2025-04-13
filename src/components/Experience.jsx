import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Akatsuki Coding Club",
      position: "Technical Member",
      period: "2024 - Present",
      description: "Helped organize technical events, focused on self-development, and actively contributed to building and collaborating on web development projects."
    },
    {
      company: "Akatsuki Coding Club",
      position: "Intern",
      period: "2024",
      description: "Learned and developed small Projects with React and Tailwind"
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <div className="text-sm text-gray-500 mb-2">{exp.company} | {exp.period}</div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
