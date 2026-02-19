"use client";

const stackItems = [
  {
    name: "WeWeb",
    description: "front app creation",
    color: "bg-[#0029FF]",
    letter: "W",
  },
  {
    name: "Xano",
    description: "back end",
    color: "bg-[#0C1E3C]",
    letter: "X",
  },
  {
    name: "Webflow",
    description: "web dev",
    color: "bg-[#4353FF]",
    letter: "W",
  },
  {
    name: "Notion",
    description: "gestion",
    color: "bg-foreground",
    letter: "N",
  },
  {
    name: "Airtable",
    description: "CRM",
    color: "bg-[#18BFFF]",
    letter: "A",
  },
  {
    name: "n8n",
    description: "automatisations",
    color: "bg-[#EA4B71]",
    letter: "n",
  },
  {
    name: "OpenAI / LLM APIs",
    description: "int\u00E9grations IA",
    color: "bg-[#10A37F]",
    letter: "O",
  },
  {
    name: "Stripe",
    description: "API de paiement",
    color: "bg-[#635BFF]",
    letter: "S",
  },
  {
    name: "Brevo",
    description: "email marketing",
    color: "bg-[#0B996E]",
    letter: "B",
  },
];

const row1 = stackItems.slice(0, 5);
const row2 = stackItems.slice(5);

export function StackSection() {
  return (
    <section id="stack" className="py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">
          .stack
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight">
          {"Les outils que j'utilise"}
          <br />
          <span className="text-gray-400">au quotidien.</span>
        </h2>
      </div>

      {/* Carousel rows */}
      <div className="space-y-4">
        {/* Row 1 - scroll left */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 animate-scroll-left"
            style={{ width: "200%" }}
          >
            {[...row1, ...row1, ...row1, ...row1].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-4 flex-shrink-0 bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${item.color} shadow-sm flex items-center justify-center`}
                >
                  <span className="text-white text-sm font-bold">
                    {item.letter}
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-sm font-medium text-foreground whitespace-nowrap block">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scroll right */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 animate-scroll-right"
            style={{ width: "200%" }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-4 flex-shrink-0 bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${item.color} shadow-sm flex items-center justify-center`}
                >
                  <span className="text-white text-sm font-bold">
                    {item.letter}
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-sm font-medium text-foreground whitespace-nowrap block">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
