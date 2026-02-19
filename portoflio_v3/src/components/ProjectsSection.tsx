const projects = [
  {
    name: "brut.",
    year: "2025",
    description: "Plateforme de gestion de campagnes publicitaires",
    role: "Dev front & back, automatisations",
    stack: ["WeWeb", "Xano", "Mailgun"],
    gradient: "from-gray-900 to-gray-800",
    textColor: "text-white",
  },
  {
    name: "Good Motors",
    year: "2025",
    description: "App web de location de motos",
    role: "Dev front & back",
    stack: ["WeWeb", "Xano", "Stripe"],
    gradient: "from-emerald-600 to-emerald-800",
    textColor: "text-white",
  },
  {
    name: "Ornikar",
    year: "2024",
    description: "Plateforme r\u00E9servation de stages",
    role: "Gestion de projet, dev front & back",
    stack: ["WeWeb", "APIs", "logique m\u00E9tier"],
    gradient: "from-orange-500 to-red-500",
    textColor: "text-white",
  },
  {
    name: "LFP",
    year: "2025",
    description: "Application pour l'\u00E9v\u00E9nement Troph\u00E9e des Champions",
    role: "Dev front & back, int\u00E9gration produit",
    stack: ["WeWeb", "Xano"],
    gradient: "from-blue-700 to-indigo-900",
    textColor: "text-white",
  },
  {
    name: "Xtensio",
    year: "2024",
    description: "Calcul du potentiel constructible",
    role: "Conception du moteur de calcul & logique m\u00E9tier",
    stack: ["WeWeb", "Mapbox", "Xano"],
    gradient: "from-slate-100 to-gray-200",
    textColor: "text-foreground",
  },
  {
    name: "Dermio",
    year: "2025-2026",
    description: "CRM & automatisation pour instituts",
    role: "Produit, architecture & automatisations",
    stack: ["WeWeb", "Xano", "CRM", "workflows"],
    gradient: "from-rose-400 to-pink-600",
    textColor: "text-white",
  },
];

export function ProjectsSection() {
  return (
    <section id="projets" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">
            .projets
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight">
            {"Quelques r\u00E9alisations"}
            <br />
            <span className="text-gray-400">{"r\u00E9centes."}</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors"
            >
              {/* Preview area */}
              <div
                className={`bg-gradient-to-br ${project.gradient} h-48 sm:h-56 flex items-center justify-center relative overflow-hidden`}
              >
                {/* Placeholder pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-24 h-24 border border-current rounded-2xl" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border border-current rounded-xl" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 border border-current rounded-xl" />
                </div>
                <span
                  className={`text-2xl sm:text-3xl font-normal ${project.textColor}`}
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {project.name}
                </span>
              </div>

              {/* Info area */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="text-lg font-medium text-foreground"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {project.name}
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-gray-400 mb-4">{project.role}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
