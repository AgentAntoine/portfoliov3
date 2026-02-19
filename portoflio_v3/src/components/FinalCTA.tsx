import { ArrowRight } from "lucide-react";

const logoRows = [
  [
    { name: "Coinbase", color: "bg-blue-600" },
    { name: "Wise", color: "bg-emerald-500" },
    { name: "Headspace", color: "bg-orange-500" },
    { name: "Airbnb", color: "bg-rose-500" },
    { name: "Uber", color: "bg-black" },
    { name: "Nike", color: "bg-gray-900" },
    { name: "Pinterest", color: "bg-red-600" },
  ],
  [
    { name: "ChatGPT", color: "bg-teal-500" },
    { name: "Shopify", color: "bg-green-600" },
    { name: "Loom", color: "bg-purple-600" },
    { name: "Twitch", color: "bg-violet-600" },
    { name: "Mailchimp", color: "bg-yellow-400" },
    { name: "Creme", color: "bg-amber-500" },
  ],
  [
    { name: "Spotify", color: "bg-green-500" },
    { name: "Apple TV", color: "bg-gray-800" },
    { name: "Shop", color: "bg-lime-500" },
    { name: "Cosmos", color: "bg-gray-600" },
    { name: "Retro", color: "bg-pink-500" },
    { name: "Notion", color: "bg-gray-900" },
    { name: "Dropbox", color: "bg-blue-500" },
  ],
];

export function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-4">
          Never run out of
          <br />
          inspiration again.
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-md mx-auto">
          Use Mobbin for free as long as you like or get full access with any of
          our paid plans.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="bg-black text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Join for free
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
          >
            See our plans
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="space-y-4 mt-16">
        {logoRows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative overflow-hidden">
            <div
              className={`flex gap-8 ${
                rowIndex % 2 === 0
                  ? "animate-scroll-left"
                  : "animate-scroll-right"
              }`}
              style={{ width: "200%" }}
            >
              {/* Double the items for seamless loop */}
              {[...row, ...row].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex items-center gap-3 flex-shrink-0"
                >
                  <div className={`w-10 h-10 rounded-xl ${logo.color} shadow-sm flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">
                      {logo.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
