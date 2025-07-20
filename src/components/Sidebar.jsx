// Sidebar.jsx
import { HomeIcon, ChartBarIcon, FolderIcon, CogIcon, UserGroupIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const items = [
  { icon: HomeIcon, label: 'Dashboard' },

]

export default function Sidebar({ active = 'Dashboard' }) {
  return (
    <aside className="w-60 bg-gray-900 text-gray-300 py-6 flex flex-col space-y-4 px-4">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center">B</div>
        <span className="font-bold text-lg">Bionary</span>
        <span className="text-xs text-gray-400">VIT Chennai</span>
      </div>
      <nav className="flex-1 space-y-2">
        {items.map(item => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center px-3 py-2 rounded-md hover:bg-gray-800 relative ${
              active === item.label ? 'bg-gray-800 text-white' : ''
            }`}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            <span className="ml-3">{item.label}</span>
            {active === item.label && (
              <span className="absolute left-0 w-1 h-8 bg-purple-500 rounded-tr-md rounded-br-md" />
            )}
          </a>
        ))}
      </nav>
    </aside>
  )
}
