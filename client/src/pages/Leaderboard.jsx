import React from 'react';
import Card from '../components/Card';

function Leaderboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Leaderboard</h1>
        <div className="flex space-x-2">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
            This Week
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors">
            All Time
          </button>
        </div>
      </div>
      
      <Card>
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-white mb-4">Leaderboard Rankings</h3>
          <p className="text-slate-400">Leaderboard components will be integrated here</p>
        </div>
      </Card>
    </div>
  );
}

export default Leaderboard;