import React from 'react';
import { Search, Bell, ChevronRight, MoreHorizontal, FolderOpen } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between gap-2">
      {/* Left side - Path and Breadcrumbs */}
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <FolderOpen className="w-5 h-5 text-[#618666]" />
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <span className="text-sm text-[#AFAFAF] font-medium">Workspace</span>
          <ChevronRight className="w-3 h-3 text-[#AFAFAF]" />
          <span className="text-sm text-[#AFAFAF] font-medium">Folder 2</span>
          <ChevronRight className="w-3 h-3 text-[#AFAFAF]" />
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#121212] font-medium">Spreadsheet 3</span>
            <div className="w-6 h-6 rounded flex items-center justify-center">
              <MoreHorizontal className="w-5 h-5 text-[#AFAFAF]" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Search, Notifications, Profile */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="flex items-center gap-2 bg-[#F6F6F6] rounded-md px-3 py-3">
          <Search className="w-4 h-4 text-[#AFAFAF]" />
          <span className="text-xs text-[#757575]">Search within sheet</span>
        </div>

        {/* Notification */}
        <div className="relative bg-white rounded-lg p-2 border">
          <Bell className="w-5 h-5 text-[#121212]" />
          <div className="absolute -top-1 -right-1 bg-[#4B6A4F] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">
            2
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border">
          <img 
            src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/756f/38a6/ef8725586111b428053d87fea711b57d?Expires=1752451200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RwGVsTvK~vveA8kgii~d1OOyqf-J0H1Mb0~toLMCXsGoK1bM7P91YU8KqDuuX-Aay6SwvJ-NRifvIkkBHIhxk6Uond-VPPgfoG~4YEGu0hKcQNLzJeXu~PWGzZBoVXQ~LIA-jfjhp-7KCHRcM0bcbv~ZFPr1FWO2thQmCst~kPUHae92sPL8L3mc9Yp2RG-nCAo4YM6dPutPXBq03wMggVdj5bbDqZjgMCWE1bkicjErsJ65vXL3mJDgRVoisAd76RqgtF88YDBrcm46pW90jRnZa5A8gHSD9UkIoFWuiGzZOyE6ZK784K2EFsQzJzAu4LEiDNLxNy0y-PhItxB7sA__" 
            alt="Profile" 
            className="w-7 h-7 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-xs text-[#121212] font-medium">John Doe</span>
            <span className="text-xs text-[#757575] -mt-0.5">john.doe@companyname.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
