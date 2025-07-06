import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const BottomTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  return (
    <div className="bg-white border-t border-gray-200 px-8 py-1 flex items-center gap-6">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-base font-medium border-t-2 ${
              activeTab === tab
                ? 'border-[#4B6A4F] bg-[#E8F0E9] text-[#3E5741] font-semibold'
                : 'border-transparent text-[#757575] hover:text-[#121212]'
            }`}
          >
            {tab}
          </button>
        ))}
        <button className="px-1 py-2 flex items-center justify-center">
          <div className="bg-white rounded w-5 h-5 flex items-center justify-center">
            <Plus className="w-4 h-4 text-[#757575]" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BottomTabs;
