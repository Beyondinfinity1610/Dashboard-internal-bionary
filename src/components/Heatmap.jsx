// components/ContributionHeatmap.jsx
const data = [
  [1, 3, 4, 2, 1, 0, 2],
  [0, 2, 3, 4, 4, 3, 2],
  [2, 0, 1, 3, 2, 1, 0],
  [4, 4, 4, 4, 3, 3, 3],
  [1, 2, 1, 0, 2, 2, 3],
  [0, 1, 1, 2, 3, 4, 4],
  [1, 0, 0, 1, 2, 2, 1],
  [4, 4, 3, 2, 1, 0, 1],
] // 8 weeks × 7 days (Sun–Sat)

const getColor = (val) => {
  const shades = [
    'bg-gray-800',
    'bg-purple-900',
    'bg-purple-700',
    'bg-purple-500',
    'bg-purple-400',
    'bg-purple-300',
  ]
  return shades[val] || 'bg-purple-300'
}

export default function ContributionHeatmap() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Contribution Timeline</h2>
        <span className="text-xs text-gray-400">Less → More</span>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-rows-7 grid-flow-col gap-1 w-max">
          {data.map((week, i) =>
            week.map((val, j) => (
              <div
                key={`${i}-${j}`}
                className={`w-4 h-4 rounded-sm ${getColor(val)}`}
              ></div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
