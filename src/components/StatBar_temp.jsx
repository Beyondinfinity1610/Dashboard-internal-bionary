// components/StatBar.jsx
export default function StatBar({ label, value, color = 'bg-purple-500', tag }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-200 font-medium">{label}</span>
        <span className="text-sm text-gray-400">{value}%</span>
      </div>
      <div className="relative w-full h-3 bg-gray-700 rounded-full">
        <div className={`absolute top-0 left-0 h-3 rounded-full ${color}`} style={{ width: `${value}%` }}></div>
      </div>
      {tag && (
        <div className="inline-block mt-1 px-2 py-0.5 text-xs bg-gray-700 text-purple-400 rounded-full font-medium">
          {tag}
        </div>
      )}
    </div>
  )
}
