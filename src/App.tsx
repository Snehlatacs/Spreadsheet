import React from 'react';
import TopBar from './components/TopBar';
import Toolbar from './components/Toolbar';
import DataTable from './components/DataTable';
import BottomTabs from './components/BottomTabs';

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <TopBar />
      <Toolbar />
      <DataTable />
      <BottomTabs />
    </div>
  );
}

export default App;
