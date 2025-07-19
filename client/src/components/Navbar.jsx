import React from 'react';
import { User, Settings, Bell } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-4 ml-64">
      <h1 className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
          Bionary
        </span>{' '}
        <span className="text-white">Dashboard</span>
      </h1>
    </div>

        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <Settings size={20} />
          </button>
          <div className="flex items-center space-x-3 bg-slate-800 px-3 py-2 rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">Aditya Sharma</p>
              <p className="text-xs text-slate-400">Team Leader</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;