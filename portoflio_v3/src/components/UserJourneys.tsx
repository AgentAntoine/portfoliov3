export function UserJourneys() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight">
            Explore entire user
            <br />
            journeys with flows.
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Videos Card */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8">
            <div className="bg-white rounded-2xl h-48 mb-6 flex items-center justify-center overflow-hidden border border-gray-100">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <div className="w-32 h-48 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="h-4 bg-gray-50 flex items-center justify-center">
                    <div className="w-8 h-1 bg-gray-200 rounded-full" />
                  </div>
                  <div className="p-2 space-y-2">
                    <div className="h-8 bg-gray-100 rounded" />
                    <div className="h-3 bg-gray-100 rounded w-3/4" />
                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                    <div className="h-8 bg-gray-100 rounded mt-4" />
                    <div className="h-3 bg-gray-100 rounded w-2/3" />
                  </div>
                </div>
              </div>
            </div>
            <h3
              className="text-xl font-medium mb-2"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Videos
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Experience flows the way they were meant to be experienced,
              complete with transitions, micro-interactions, and animations.
            </p>
          </div>

          {/* Prototype Mode Card */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8">
            <div className="bg-white rounded-2xl h-48 mb-6 flex items-center justify-center overflow-hidden border border-gray-100">
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="w-32 h-48 bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
                  <div className="h-4 bg-gray-800 flex items-center justify-center">
                    <div className="w-8 h-1 bg-gray-700 rounded-full" />
                  </div>
                  <div className="p-3 flex flex-col items-center justify-center h-full">
                    <svg
                      className="w-8 h-8 text-white/80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                    <span className="text-white/60 text-[10px] mt-2">
                      Member Since 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h3
              className="text-xl font-medium mb-2"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Prototype mode
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Walk through flows, step by step, by using the interactive
              hotspots at your own preferred pace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
