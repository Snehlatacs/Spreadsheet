import React from 'react';
import { Eye, ArrowUpDown, Filter, Maximize2, Download, Upload, Share, ChevronsRight, Plus } from 'lucide-react';

const Toolbar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-2 py-1.5 flex items-center justify-between gap-2">
      {/* Left side - Tool bar */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 bg-white rounded px-2 py-2">
          <span className="text-sm text-[#121212] font-normal">Tool bar</span>
          <ChevronsRight className="w-4 h-4 text-[#121212]" />
        </div>
        
        <div className="w-px h-6 bg-[#EEEEEE]"></div>
        
        {/* Table Controls */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 bg-white rounded-md px-3 py-2 text-sm text-[#121212] hover:bg-gray-50">
            <Eye className="w-5 h-5" />
            Hide fields
          </button>
          <button className="flex items-center gap-1 bg-white rounded-md px-3 py-2 text-sm text-[#121212] hover:bg-gray-50">
            <ArrowUpDown className="w-5 h-5" />
            Sort
          </button>
          <button className="flex items-center gap-1 bg-white rounded-md px-3 py-2 text-sm text-[#121212] hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
          <button className="flex items-center gap-1 bg-white rounded-md px-3 py-2 text-sm text-[#121212] hover:bg-gray-50">
            <Maximize2 className="w-5 h-5" />
            Cell view
          </button>
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 bg-white border border-[#EEEEEE] rounded-md px-3 py-2 text-sm text-[#545454] hover:bg-gray-50">
            <Download className="w-5 h-5" />
            Import
          </button>
          <button className="flex items-center gap-1 bg-white border border-[#EEEEEE] rounded-md px-3 py-2 text-sm text-[#545454] hover:bg-gray-50">
            <Upload className="w-5 h-5" />
            Export
          </button>
          <button className="flex items-center gap-1 bg-white border border-[#EEEEEE] rounded-md px-3 py-2 text-sm text-[#545454] hover:bg-gray-50">
            <Share className="w-5 h-5" />
            Share
          </button>
        </div>
        
        <button className="flex items-center gap-1 bg-[#4B6A4F] rounded-md px-6 py-2 text-sm text-white font-medium hover:bg-[#3E5741]">
          <Plus className="w-5 h-5" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
