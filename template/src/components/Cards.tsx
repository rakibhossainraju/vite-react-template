export const Cards = () => {
  return (
    <div className="mt-16 grid grid-cols-3 gap-6">
      {[
        { icon: "⚡", label: "Fast", desc: "Lightning quick" },
        { icon: "🎨", label: "Beautiful", desc: "Modern design" },
        { icon: "🔧", label: "Powerful", desc: "Full-featured" },
      ].map((item, idx) => (
        <div
          key={idx}
          className="p-4 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110"
        >
          <div className="text-3xl mb-2">{item.icon}</div>
          <div className="font-semibold text-white">{item.label}</div>
          <div className="text-sm text-gray-400">{item.desc}</div>
        </div>
      ))}
    </div>
  );
};
