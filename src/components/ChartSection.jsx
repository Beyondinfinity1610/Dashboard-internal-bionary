// components/ChartSection.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts'

const data = [
  { month: 'Jan', commits: 64, prs: 30, issues: 42 },
  { month: 'Feb', commits: 60, prs: 32, issues: 31 },
  { month: 'Mar', commits: 75, prs: 38, issues: 35 },
  { month: 'Apr', commits: 76, prs: 35, issues: 34 },
  { month: 'May', commits: 55, prs: 28, issues: 29 },
  { month: 'Jun', commits: 54, prs: 30, issues: 30 },
  { month: 'Jul', commits: 49, prs: 26, issues: 25 },
  { month: 'Aug', commits: 80, prs: 36, issues: 32 },
  { month: 'Sep', commits: 100, prs: 40, issues: 33 },
]

export default function ChartSection() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-white text-lg font-semibold mb-4">Development Activity</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" />
          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f1f1f', borderColor: '#333', color: '#fff' }}
            labelStyle={{ color: '#ccc' }}
          />
          <Legend />
          <Line type="monotone" dataKey="commits" stroke="#a855f7" strokeWidth={2} dot />
          <Line type="monotone" dataKey="prs" stroke="#38bdf8" strokeWidth={2} dot />
          <Line type="monotone" dataKey="issues" stroke="#d946ef" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
