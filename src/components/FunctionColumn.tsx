import React from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';

interface FunctionColumnProps {
  title: string;
  backgroundColor: string;
  textColor: string;
  type: 'ABC' | 'Answer a question' | 'Extract';
}

const FunctionColumn: React.FC<FunctionColumnProps> = ({ title, backgroundColor, textColor }) => {
  return (
    <div className={`${backgroundColor} px-4 py-2 flex items-center justify-center h-8`}>
      <div className="bg-white bg-opacity-20 rounded px-1 py-0.5 flex items-center gap-1">
        <Plus className="w-3 h-3 text-white" />
        <span className={`text-sm font-medium ${textColor}`}>{title}</span>
        <div className="bg-[#FAF4EE] rounded w-5 h-5 flex items-center justify-center">
          <MoreHorizontal className="w-3 h-3 text-[#AFAFAF]" />
        </div>
      </div>
    </div>
  );
};

export default FunctionColumn;
