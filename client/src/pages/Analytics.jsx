import React from 'react';
import Card from '../components/Card';

function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Analytics</h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
          Export Data
        </button>
      </div>
      
      <Card>
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-white mb-4">Analytics Dashboard</h3>
          <p className="text-slate-400">Analytics components will be integrated here</p>
        </div>
      </Card>
    </div>
  );
}

export default Analytics;