// src/components/SkillBadge.tsx
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2 dark:bg-blue-900 dark:text-blue-300">
      {skill}
    </span>
  );
};

export default SkillBadge;
