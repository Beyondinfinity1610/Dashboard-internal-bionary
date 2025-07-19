import React from 'react';
import Card from '../components/Card';

function Badges() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Badges & Achievements</h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
          View All
        </button>
      </div>
      
      <Card>
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-white mb-4">Badge Collection</h3>
          <p className="text-slate-400">Badge components will be integrated here</p>
        </div>
      </Card>
    </div>
  );
}

export default Badges;