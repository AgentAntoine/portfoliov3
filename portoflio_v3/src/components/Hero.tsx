import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Availability Badge */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm text-gray-600">Disponible</span>
          </div>
        </div>

        {/* Subtitle tags */}
        <p className="text-sm text-gray-400 tracking-wide mb-6">
          {"apps web & CRM \u00B7 int\u00E9grations IA \u00B7 automatisations"}
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] mb-6">
          {"product builder"}
          <br />
          {"sp\u00E9cialis\u00E9 "}
          <span className="italic text-gray-400">{"applications web"}</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
          {"Sp\u00E9cialiste du low-code et du d\u00E9veloppement sur mesure, je cr\u00E9e des applications et des automatisations adapt\u00E9es \u00E0 des besoins concrets."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projets"
            className="bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Voir mes projets
          </a>
          <a
            href="mailto:antoine@coudert.io"
            className="group flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
          >
            Me contacter
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
