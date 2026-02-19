const floatingIcons = [
  {
    id: 1,
    color: "from-orange-400 to-orange-500",
    position: "top-10 left-[10%]",
    size: "w-12 h-12",
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    id: 2,
    color: "from-blue-500 to-blue-600",
    position: "top-[20%] left-[20%]",
    size: "w-14 h-14",
    icon: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 3,
    color: "from-rose-400 to-rose-500",
    position: "bottom-[30%] right-[15%]",
    size: "w-12 h-12",
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    id: 4,
    color: "from-emerald-400 to-emerald-500",
    position: "bottom-[20%] left-[15%]",
    size: "w-10 h-10",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: 5,
    color: "from-violet-500 to-purple-600",
    position: "top-[15%] right-[20%]",
    size: "w-11 h-11",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    id: 6,
    color: "from-amber-400 to-yellow-500",
    position: "bottom-[40%] right-[25%]",
    size: "w-10 h-10",
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
];

export function LibraryStats() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Floating App Icons - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {floatingIcons.map((icon) => (
          <div
            key={icon.id}
            className={`absolute ${icon.position} ${icon.size} rounded-xl shadow-lg overflow-hidden bg-gradient-to-br ${icon.color} flex items-center justify-center`}
          >
            {icon.icon}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-4">
          A growing library of
          <br />
          <span className="text-gray-400">1,150 apps</span>
          <br />
          <span className="text-gray-400">594,500 screens</span>
          <br />
          <span className="text-gray-400">316,200 flows</span>
        </h2>
      </div>
    </section>
  );
}
