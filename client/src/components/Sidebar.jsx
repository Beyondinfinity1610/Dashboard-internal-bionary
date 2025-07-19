import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  Trophy, 
  Award, 
  FolderOpen,
  ChevronRight 
} from 'lucide-react';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { path: '/analytics', name: 'Analytics', icon: BarChart3 },
    { path: '/leaderboard', name: 'Leaderboard', icon: Trophy },
    { path: '/badges', name: 'Badges', icon: Award },
    { path: '/projects', name: 'Projects', icon: FolderOpen },
    { path: '/admin', name: 'Admin', icon: Trophy  },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#000000] border-r border-[#1E2A3A] z-40">
      <div className="p-6 pt-20">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-[#8B5CF6] text-white'
                    : 'text-[#64748B] hover:text-white hover:bg-[#1E2A3A]'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;