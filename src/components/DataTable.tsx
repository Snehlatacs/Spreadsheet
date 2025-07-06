import React from 'react';
import { Link, RotateCcw, ChevronDown, Hash, Briefcase, Calendar, Activity, User, Globe, Smile, Plus } from 'lucide-react';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';
import FunctionColumn from './FunctionColumn';

interface TableData {
  id: number;
  jobRequest: string;
  submitted: string;
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
  estValue: number;
}

const tableData: TableData[] = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for product XYZ",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: 6200000
  },
  {
    id: 2,
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanportfolio.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: 3500000
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for app update",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnsondesigns.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: 4750000
  },
  {
    id: 4,
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreenart.com",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: 5900000
  },
  {
    id: 5,
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrowncreative.com",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: 2800000
  }
];

const DataTable: React.FC = () => {
  return (
    <div className="bg-[#F6F6F6] flex-1 overflow-auto">
      <div className="flex">
        {/* Row Numbers Column */}
        <div className="flex flex-col gap-px bg-[#F6F6F6]">
          <div className="w-8 h-8 bg-white"></div>
          <div className="w-8 h-8 bg-[#EEEEEE] flex items-center justify-center">
            <Hash className="w-4 h-4 text-[#AFAFAF]" />
          </div>
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} className="w-8 h-8 bg-white flex items-center justify-center border-r border-gray-200">
              <span className="text-sm text-[#757575]">{i + 1}</span>
            </div>
          ))}
        </div>

        {/* Linked Sheet Banner */}
        <div className="w-[631px] h-8 bg-[#E2E2E2] flex items-center px-2 absolute z-10">
          <div className="bg-[#EEEEEE] rounded flex items-center gap-1 px-1 py-1">
            <Link className="w-4 h-4 text-[#1A8CFF]" />
            <span className="text-xs text-[#545454]">Q3 Financial Overview</span>
          </div>
          <RotateCcw className="w-4 h-4 text-[#FA6736] ml-auto" />
        </div>

        {/* Data Columns */}
        <div className="flex gap-px">
          {/* Job Request Column */}
          <div className="flex flex-col gap-px min-w-[200px]">
            <div className="h-8"></div>
            <div className="h-8 bg-[#EEEEEE] flex items-center px-2 gap-1">
              <Briefcase className="w-4 h-4 text-[#AFAFAF]" />
              <span className="text-xs font-semibold text-[#757575]">Job Request</span>
              <ChevronDown className="w-3 h-3 text-[#AFAFAF] ml-auto" />
            </div>
            {tableData.map((row, index) => (
              <div key={index} className="min-h-8 bg-white flex items-center px-2 py-1">
                <span className="text-xs text-[#121212]">{row.jobRequest}</span>
              </div>
            ))}
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="h-8 bg-white"></div>
            ))}
          </div>

          {/* Submitted Column */}
          <div className="flex flex-col gap-px min-w-[120px]">
            <div className="h-8"></div>
            <div className="h-8 bg-[#EEEEEE] flex items-center px-2 gap-1">
              <Calendar className="w-4 h-4 text-[#AFAFAF]" />
              <span className="text-xs font-semibold text-[#757575]">Submitted</span>
              <ChevronDown className="w-3 h-3 text-[#AFAFAF] ml-auto" />
            </div>
            {tableData.map((row, index) => (
              <div key={index} className="h-8 bg-white flex items-center px-2">
                <span className="text-xs text-[#121212]">{row.submitted}</span>
              </div>
            ))}
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="h-8 bg-white"></div>
            ))}
          </div>

          {/* Status Column */}
          <div className="flex flex-col gap-px min-w-[140px]">
            <div className="h-8"></div>
            <div className="h-8 bg-[#EEEEEE] flex items-center px-2 gap-1">
              <Activity className="w-4 h-4 text-[#AFAFAF]" />
              <span className="text-xs font-semibold text-[#757575]">Status</span>
              <ChevronDown className="w-3 h-3 text-[#AFAFAF] ml-auto" />
            </div>
            {tableData.map((row, index) => (
              <div key={index} className="h-8 bg-white flex items-center justify-center px-2">
                <StatusBadge status={row.status} />
              </div>
            ))}
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="h-8 bg-white"></div>
            ))}
          </div>

          {/* Submitter Column */}
          <div className="flex flex-col gap-px min-w-[120px]">
            <div className="h-8"></div>
            <div className="h-8 bg-[#EEEEEE] flex items-center px-2 gap-1">
              <User className="w-4 h-4 text-[#AFAFAF]" />
              <span className="text-xs font-semibold text-[#757575]">Submitter</span>
              <ChevronDown className="w-3 h-3 text-[#AFAFAF] ml-auto" />
            </div>
            {tableData.map((row, index) => (
              <div key={index} className="h-8 bg-white flex items-center px-2">
                <span className="text-xs text-[#121212]">{row.submitter}</span>
              </div>
            ))}
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="h-8 bg-white"></div>
            ))}
          </div>

          {/* URL Column */}
          <div className="flex flex-col gap-px min-w-[180px]">
            <div className="h-8"></div>
            <div className="h-8 bg-[#EEEEEE] flex items-center px-2 gap-1">
              <Globe className="w-4 h-4 text-[#AFAFAF]" />
              <span className="text-xs font-semibold text-[#757575]">URL</span>
              <ChevronDown className="w-3 h-3 text-[#AFAFAF] ml-auto" />
            </div>
            {tableData.map((row, index) => (
              <div key={index} className="h-8 bg-white flex items-center px-2">
                <span className="text-xs text-[#121212]">{row.url}</span>
              </div>
            ))}
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="h-8 bg-white"></div>
            ))}
          </div>

          {/* ABC Function Column */}
          <div className="flex flex-col gap-px w-16">
            <FunctionColumn title="ABC" backgroundColor="bg-[#D2E0D4]" textColor="text-[#505450]" type="ABC" />
            <div className="h-8 bg-[#E8F0E9] flex items-center px-2 gap-1">
              <Smile className="w-4 h-4 text-[#83A588]" />
              <span className="text-xs font-semibold text-[#666C66]">Assigned</span>
            </div>
            {tableData.map((row, index) => (
              <div key={index} className="h-8 bg-white flex items-center px-2">
                <span className="text-xs text-[#121212]">{row.assigned}</span>
              </div>
            ))}
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="h-8 bg-white"></div>
            ))}
          </div>

          {/* Answer a question Function Column */}
          <div className="flex flex-col gap-px">
            <FunctionColumn title="Answer a question" backgroundColor="bg-[#DCCFFC]" textColor="text-[#463E59]" type="Answer a question" />
            <div className="flex gap-px">
              {/* Priority Sub-column */}
              <div className="flex flex-col gap-px min-w-[80px]">
                <div className="h-8 bg-[#EAE3FC] flex items-center px-2">
                  <span className="text-xs font-semibold text-[#655C80]">Priority</span>
                </div>
                {tableData.map((row, index) => (
                  <div key={index} className="h-8 bg-white flex items-center justify-center px-2">
                    <PriorityBadge priority={row.priority} />
                  </div>
                ))}
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="h-8 bg-white"></div>
                ))}
              </div>
              
              {/* Due Date Sub-column */}
              <div className="flex flex-col gap-px min-w-[100px]">
                <div className="h-8 bg-[#EAE3FC] flex items-center px-2">
                  <span className="text-xs font-semibold text-[#655C80]">Due Date</span>
                </div>
                {tableData.map((row, index) => (
                  <div key={index} className="h-8 bg-white flex items-center px-2">
                    <span className="text-xs text-[#121212]">{row.dueDate}</span>
                  </div>
                ))}
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="h-8 bg-white"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Extract Function Column */}
          <div className="flex flex-col gap-px w-32">
            <FunctionColumn title="Extract" backgroundColor="bg-[#FAC2AF]" textColor="text-[#695149]" type="Extract" />
            <div className="h-8 bg-[#FFE9E0] flex items-center px-2">
              <span className="text-xs font-semibold text-[#8C6C62]">Est. Value</span>
            </div>
            {tableData.map((row, index) => (
              <div key={index} className="h-8 bg-white flex items-center justify-center px-2 gap-1">
                <span className="text-xs text-[#121212]">{row.estValue.toLocaleString()}</span>
                <span className="text-xs text-[#AFAFAF]">₹</span>
              </div>
            ))}
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="h-8 bg-white"></div>
            ))}
          </div>

          {/* Add Column */}
          <div className="flex flex-col gap-px w-8">
            <div className="h-8 bg-[#EEEEEE] flex items-center justify-center">
              <Plus className="w-4 h-4 text-[#04071E]" />
            </div>
            {Array.from({ length: 25 }, (_, i) => (
              <div key={i} className="h-8 bg-white border-l border-dashed border-[#CBCBCB]"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
