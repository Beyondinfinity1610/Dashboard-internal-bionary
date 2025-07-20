
import StatBar from './StatBar_temp';

export default function TechStack() {
  const stack = [
    { label: 'React', value: 92, color: 'bg-cyan-400' },
    { label: 'Python', value: 85, color: 'bg-yellow-400' },
    { label: 'TensorFlow', value: 78, color: 'bg-orange-400' },
    { label: 'Node.js', value: 82, color: 'bg-lime-400' },
  ]

  return (
    <div className="bg-gray-800 rounded-xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-lg font-semibold">Tech Stack</h2>
        <span className="text-xs text-purple-400 bg-gray-700 px-2 py-0.5 rounded-full">Club Expertise</span>
      </div>
      <div className="space-y-3">
        {stack.map((s, i) => (
          <StatBar key={i} label={s.label} value={s.value} color={s.color} />
        ))}
      </div>
    </div>
  )
}
