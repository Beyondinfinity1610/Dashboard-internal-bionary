
import {
  UserGroupIcon,
  CodeBracketIcon,
  ArrowsRightLeftIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/solid'

export default function DashboardOverview() {
  const stats = [
    {
      label: 'Active Members',
      value: 48,
      growth: '+12%',
      icon: UserGroupIcon,
    },
    {
      label: 'Projects',
      value: 16,
      growth: '+3',
      icon: CodeBracketIcon,
    },
    {
      label: 'PRs Merged',
      value: 142,
      growth: '+28%',
      icon: ArrowsRightLeftIcon,
    },
    {
      label: 'Growth',
      value: '32%',
      growth: '+8%',
      icon: ArrowTrendingUpIcon,
    },
  ]

  return (
    <div className="bg-gray-800 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, idx) => (
        <div key={idx} className="flex items-center gap-4">
          <div className="p-3 bg-gray-700 rounded-md">
            <item.icon className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <p className="text-xl font-semibold text-white">{item.value}</p>
            <p className="text-gray-400 text-sm">{item.label}</p>
          </div>
          <div className="ml-auto text-green-400 font-medium text-sm">{item.growth}</div>
        </div>
      ))}
      <div className="sm:col-span-2 xl:col-span-4 flex justify-end">
        <button className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-sm">
          Last 30 days
        </button>
      </div>
    </div>
  )
}
