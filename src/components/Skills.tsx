// src/components/Skills.tsx
import React from 'react';

const skills = [
  { name: 'Php', level: '90%' },
  { name: 'Javascript', level: '85%' },
  { name: 'Wordpress', level: '90%' },
  { name: 'Bootstrap', level: '90%' },
  { name: 'Html', level: '85%' },
  { name: 'Node.js', level: '90%' },
  { name: 'Framework Laravel', level: '90%' },
  { name: 'Framework Angular', level: '85%' },
  { name: 'Framework Ionic', level: '90%' },
  { name: 'React', level: '90%' },
  { name: 'Next.js', level: '85%' },
  { name: 'Tailwind CSS', level: '80%' },
  // Añade más habilidades aquí
];

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <div key={index} className="w-full md:w-1/3 p-4">
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: skill.level }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
