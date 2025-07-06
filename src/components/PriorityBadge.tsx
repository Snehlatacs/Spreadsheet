import React from 'react';

interface PriorityBadgeProps {
  priority: 'Low' | 'Medium' | 'High';
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Low':
        return 'text-[#1A8CFF]';
      case 'Medium':
        return 'text-[#C29210]';
      case 'High':
        return 'text-[#EF4D44]';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <span className={`text-xs font-semibold ${getPriorityColor(priority)}`}>
      {priority}
    </span>
  );
};

export default PriorityBadge;
