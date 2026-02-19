const footerLinks = [
  { label: "Explore", href: "#" },
  { label: "Glossary", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Colors", href: "#" },
  { label: "Competitor research", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Help center", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Merch", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Left Side - Brand */}
          <div className="max-w-xs">
            <h3 className="text-lg font-normal mb-2">
              Design better digital experiences with Mobbin.
            </h3>
          </div>

          {/* Right Side - Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400">Mobbin 2018-2026</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-black transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-black transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
