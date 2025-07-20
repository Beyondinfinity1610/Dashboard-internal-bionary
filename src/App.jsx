import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import DashboardOverview from './components/Overview'
import ProjectStats from './components/ProjectStats'
import DevelopmentChart from './components/ChartSection'
import ContributionHeatmap from './components/Heatmap'
import TechStack from './components/TechStack'
import TopContributorsTable from './components/TopContributors'

export default function App() {
  return (
    <div className="flex bg-gray-900 min-h-screen text-gray-200 font-sans">
      
      <Sidebar active="Dashboard" />

  
      <div className="flex-1 flex flex-col overflow-x-hidden">
      
        <Navbar />

        <main className="p-6 space-y-6 overflow-y-auto">
         
          <DashboardOverview />

          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <DevelopmentChart />
            </div>
            <div>
              <ProjectStats />
            </div>
          </div>

         
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ContributionHeatmap />
            <TechStack />
          </div>

          
          <TopContributorsTable />
        </main>
      </div>
    </div>
  )
}
