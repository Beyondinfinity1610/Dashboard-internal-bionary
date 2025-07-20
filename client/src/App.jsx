import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Leaderboard from './pages/Leaderboard';
import Badges from './pages/Badges';
import Projects from './pages/Projects';
import LeaderboardAdmin from './pages/LeaderboardAdmin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#000000]">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-64 pt-24 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/badges" element={<Badges />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/admin" element={<LeaderboardAdmin />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;