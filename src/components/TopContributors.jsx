// TopContributorsTable.jsx
const contributors = [
  { name: 'Aditya Sharma', role: 'Lead Developer', avatar: '/avatars/aditya.jpg', commits: 128, prs: 24, issues: 18, badge: 'Top Contributor' },
  /* other rows */
]

export default function TopContributorsTable() {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="px-6 py-4 flex justify-between items-center">
        <h2 className="font-semibold text-lg text-white">Top Contributors</h2>
        <a href="#" className="text-purple-400 text-sm">View All Members</a>
      </div>
      <table className="min-w-full text-left text-gray-200">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3">Member</th>
            <th className="px-6 py-3">Commits</th>
            <th className="px-6 py-3">PRs</th>
            <th className="px-6 py-3">Issues</th>
            <th className="px-6 py-3">Achievement</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {contributors.map(user => (
            <tr key={user.name}>
              <td className="px-6 py-4 flex items-center space-x-4">
                <img src={user.avatar} alt="" className="h-10 w-10 rounded-full" />
                <div>
                  <p className="font-medium text-white">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.role}</p>
                </div>
              </td>
              <td className="px-6 py-4 text-purple-400">{user.commits}</td>
              <td className="px-6 py-4 text-teal-400">{user.prs}</td>
              <td className="px-6 py-4 text-pink-400">{user.issues}</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-xs font-medium">
                  {user.badge}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
