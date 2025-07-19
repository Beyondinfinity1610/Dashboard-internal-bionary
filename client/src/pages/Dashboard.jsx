import React from 'react';
import Card from '../components/Card';
import Chart from '../components/Chart';
import { Code, BarChart3, Award, Trophy } from 'lucide-react';

function Dashboard() {
  const stats = [
    { 
      label: 'Lessons Completed', 
      value: '42', 
      icon: Code, 
      color: 'text-[#8B5CF6]',
      progress: 75
    },
    { 
      label: 'Current Streak', 
      value: '2.58', 
      icon: BarChart3, 
      color: 'text-[#8B5CF6]',
      progress: 85
    },
    { 
      label: 'Total Hours', 
      value: '8', 
      icon: Award, 
      color: 'text-[#8B5CF6]',
      progress: 60
    },
    { 
      label: 'Current Rank', 
      value: '5', 
      icon: Trophy, 
      color: 'text-[#8B5CF6]',
      progress: 90
    },
  ];

  const recentBadges = [
    { 
      name: 'Quick Learner', 
      description: 'Earned recently',
      avatar: '⚡',
      bgColor: 'bg-[#FCD34D]'
    },
    { 
      name: 'Bug Hunter', 
      description: 'Earned recently',
      avatar: '🐛',
      bgColor: 'bg-[#EF4444]'
    },
    { 
      name: 'Team Player', 
      description: 'Earned recently',
      avatar: '👥',
      bgColor: 'bg-[#3B82F6]'
    },
    { 
      name: 'Innovation Award', 
      description: 'Earned recently',
      avatar: '💡',
      bgColor: 'bg-[#8B5CF6]'
    },
  ];

  const leaderboardData = [
    { rank: 1, name: 'Alex Chen', points: 2450, avatar: '🏆' },
    { rank: 2, name: 'Priya Sharma', points: 2100, avatar: '🥈' },
    { rank: 3, name: 'Miguel Santos', points: 1980, avatar: '🥉' },
    { rank: 4, name: 'Sara Johnson', points: 1840, avatar: '👤' },
    { rank: 5, name: 'You', points: 1680, avatar: '👤' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[#64748B] text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-[#8B5CF6]/20 ${stat.color}`}>
                  <Icon size={24} />
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full bg-[#2A3441] rounded-full h-2">
                  <div 
                    className="bg-[#8B5CF6] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${stat.progress}%` }}
                  ></div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Progress Overview</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-[#8B5CF6] text-white rounded-lg">Week</button>
              <button className="px-3 py-1 text-sm text-[#64748B] hover:text-white transition-colors">Month</button>
              <button className="px-3 py-1 text-sm text-[#64748B] hover:text-white transition-colors">Year</button>
            </div>
          </div>
          <Chart />
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Award className="text-[#8B5CF6]" size={20} />
              <h3 className="text-xl font-semibold text-white">Recent Badges</h3>
            </div>
            <button className="text-[#8B5CF6] text-sm hover:text-[#A855F7] transition-colors">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {recentBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-start p-4 bg-[#2A3441] rounded-lg hover:bg-[#334155] transition-all duration-200">
                <div className={`w-10 h-10 ${badge.bgColor} rounded-lg flex items-center justify-center text-lg mb-2`}>
                  {badge.avatar}
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">{badge.name}</p>
                  <p className="text-[#64748B] text-xs mt-1">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Trophy className="text-[#8B5CF6]" size={20} />
            <h3 className="text-xl font-semibold text-white">Leaderboard</h3>
          </div>
          <button className="text-[#8B5CF6] text-sm hover:text-[#A855F7] transition-colors">View All</button>
        </div>
        <div className="space-y-3">
          {leaderboardData.map((user, index) => (
            <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${
              user.name === 'You' ? 'bg-[#8B5CF6]/10 border border-[#8B5CF6]/30' : 'bg-[#2A3441]'
            }`}>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#334155] rounded-full flex items-center justify-center text-sm font-semibold text-white">
                  {user.rank}
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{user.avatar}</span>
                  <span className={`font-medium ${user.name === 'You' ? 'text-[#8B5CF6]' : 'text-white'}`}>
                    {user.name}
                  </span>
                </div>
              </div>
              <span className="text-[#E2E8F0] font-semibold">{user.points}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;