import { Download, Copy, Bookmark, MessageCircle } from "lucide-react";

export function InspirationToCreation() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight">
            From inspiration
            <br />
            to creation.
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Copy to Figma */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-3xl p-6 mb-6 aspect-square flex items-center justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[200px]">
                <div className="flex gap-2 justify-center mb-4">
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    className="p-2 bg-gray-100 rounded-full"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm"
                  >
                    <Copy className="w-4 h-4" />
                    Copy
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-black text-white rounded-full text-sm"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <h3
              className="text-lg font-medium mb-2"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Copy to Figma
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
              Download designs you like or copy it straight into Figma with our
              new{" "}
              <a href="#" className="underline hover:text-black">
                Figma plugin
              </a>
              .
            </p>
          </div>

          {/* Save to collections */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-3xl p-6 mb-6 aspect-square flex items-center justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[200px]">
                <div className="space-y-3">
                  <p className="text-xs text-gray-400 text-left">Quick save</p>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
                      </svg>
                    </div>
                    <span className="text-sm">Library</span>
                    <Bookmark className="w-4 h-4 ml-auto text-gray-300" />
                  </div>
                  <p className="text-xs text-gray-400 text-left">
                    Add to collection
                  </p>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg">+</span>
                    </div>
                    <span className="text-sm">Create collection</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg" />
                    <span className="text-sm">Dark Mode</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg cursor-pointer">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg" />
                    <span className="text-sm">Launch Screens</span>
                    <svg
                      className="w-4 h-4 ml-auto text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <h3
              className="text-lg font-medium mb-2"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Save to collections
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
              Collect your favorite designs and upload your own screenshots into
              one place.
            </p>
          </div>

          {/* Leave comments */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-3xl p-6 mb-6 aspect-square flex items-center justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[200px]">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">You</span>
                        <span className="text-xs text-gray-400">8h ago</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Love this checkout screen, especially the order summary
                        section.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                    <input
                      type="text"
                      placeholder="Savi"
                      className="bg-transparent text-sm outline-none flex-1"
                    />
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3
              className="text-lg font-medium mb-2"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Leave comments
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
              Take notes upon saving so you'll never forget the context in the
              future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
