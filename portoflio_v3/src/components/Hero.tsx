import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-16 pb-8 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* App Icon - Shop style icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-[22px] bg-white shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#96bf48] to-[#5a8a1b] flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="white">
                <path d="M28 12H12a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V14a2 2 0 00-2-2zm-8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.1] mb-6">
          Discover real-world
          <br />
          design inspiration.
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
          Featuring over 1,000 iOS & Web apps, and 200 sites — New content
          weekly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
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

        {/* Trust Section */}
        <div className="text-center">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-6">
            Trusted by design teams at
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {/* Uber */}
            <svg className="h-5 opacity-50" viewBox="0 0 90 24" fill="currentColor">
              <path d="M8.2 0v14.3c0 2.6 1.4 4.3 4.3 4.3s4.3-1.7 4.3-4.3V0h4v14.6c0 4.7-3.1 7.9-8.3 7.9S4.2 19.3 4.2 14.6V0h4zm17.3 4.6v3.7c1.3-2.6 3.5-4.2 6.5-4V8c-3.6-.2-6.5 1.3-6.5 6.1v8.1h-3.9V4.6h3.9zm15.7-.5c5.3 0 8.6 4 8.6 9.1v1.2H34.4c.3 3 2.3 4.9 5.3 4.9 2.2 0 3.8-.9 4.7-2.4l2.9 1.7c-1.5 2.4-4.2 3.9-7.6 3.9-5.6 0-9.3-3.8-9.3-9.2s3.8-9.2 9.5-9.2zm-5.3 7.6h10.5c-.5-2.8-2.4-4.4-5.2-4.4-2.7 0-4.8 1.7-5.3 4.4zM57.8 4.1c2.5 0 4.3 1 5.5 2.5V4.6h3.9v17.6h-3.9v-2c-1.2 1.5-3 2.5-5.5 2.5-4.6 0-8-4-8-9.2s3.4-9.4 8-9.4zm.6 3.5c-2.8 0-4.6 2.2-4.6 5.7s1.8 5.7 4.6 5.7c2.8 0 4.9-2.2 4.9-5.7s-2.1-5.7-4.9-5.7zm15.4-7.6v12.8c0 2.6 1.4 3.8 3.8 3.8.7 0 1.5-.1 2-.3v3.4c-.7.2-1.6.3-2.5.3-4.4 0-7.3-2.5-7.3-7.2V0h4z" />
            </svg>
            {/* Airbnb */}
            <svg className="h-6 opacity-50" viewBox="0 0 102 32" fill="currentColor">
              <path d="M29 22.3c-.2-1-.5-2-.8-2.9l-.1-.2c-.3-.8-.6-1.5-.9-2.3-.3-.6-.5-1.1-.8-1.7l-.1-.2c-1.3-2.5-2.7-4.8-4.2-6.9-.3-.5-.7-.9-1-1.4-.3-.4-.7-.9-1-1.3l-.4-.5c-.6-.8-1.3-1.5-1.9-2.2-.6-.6-1.1-1-1.6-1.4-.4-.3-.7-.5-.9-.6C15 .6 14.8.5 14.8.5c-.1 0-.2-.1-.3-.1h-.3c-.1 0-.2 0-.3.1-.1 0-.2.1-.3.1 0 0-.2.1-.5.3-.3.1-.6.4-.9.6-.5.4-1 .9-1.6 1.4-.6.6-1.3 1.4-1.9 2.2l-.4.5c-.3.4-.7.8-1 1.3-.3.4-.7.9-1 1.4-1.5 2.1-2.9 4.4-4.2 6.9l-.1.2c-.3.5-.5 1.1-.8 1.7-.3.7-.6 1.5-.9 2.3l-.1.2c-.3.9-.6 1.9-.8 2.9-.2.9-.4 1.7-.4 2.5 0 .3 0 .6.1.9.1.9.5 1.7 1 2.4.5.6 1.1 1.1 1.8 1.4.5.3 1.1.4 1.7.5.4.1.7.1 1.1.1.4 0 .8 0 1.3-.1 1.1-.1 2.2-.5 3.4-1.1.1 0 .2-.1.2-.1 1.4-.6 2.7-1.5 4-2.6 1.4-1.1 2.6-2.4 3.9-3.8.4-.5.9-1 1.3-1.5.4.5.9 1 1.3 1.5 1.2 1.4 2.5 2.7 3.9 3.8 1.3 1.1 2.6 1.9 4 2.6.1 0 .2.1.2.1 1.2.6 2.3 1 3.4 1.1.5.1.9.1 1.3.1.4 0 .7 0 1.1-.1.6-.1 1.2-.3 1.7-.5.7-.3 1.3-.8 1.8-1.4.5-.7.9-1.5 1-2.4.1-.3.1-.6.1-.9 0-.8-.2-1.6-.4-2.5zm-14.3 2.9c-2.7-3-4.5-5.8-5.3-8.3-.3-1-.5-2-.5-2.8 0-.7.1-1.4.4-1.9.2-.5.6-.9 1-1.2.5-.3 1-.5 1.7-.5s1.2.2 1.7.5c.4.3.8.7 1 1.2.3.5.4 1.2.4 1.9 0 .9-.2 1.8-.5 2.8-.8 2.5-2.6 5.3-5.3 8.3z" />
            </svg>
            {/* Revolut */}
            <svg className="h-5 opacity-50" viewBox="0 0 102 24" fill="currentColor">
              <path d="M13.8 5.2h7.8c4.1 0 6.8 1.9 6.8 5.3 0 2.3-1.3 4-3.5 4.8l4.4 8.4h-4.9l-3.9-7.6h-2.9v7.6H13.8V5.2zm7.3 7.7c1.8 0 3.1-.9 3.1-2.4s-1.3-2.4-3.1-2.4h-3.5v4.8h3.5zm18.5 7.3c2.1 0 3.6-1 4.2-2.7l3.7 1.2c-1 3.2-3.8 5.1-8 5.1-5.3 0-8.8-3.5-8.8-8.8s3.5-9 8.6-9c4.8 0 7.9 3.2 7.9 8.2v1.5H32.9c.4 2.5 2 3.9 4.7 3.9zm3.5-7c-.3-2.1-1.7-3.4-3.8-3.4-2.2 0-3.8 1.3-4.2 3.4h8zM53.3 6h4l5.6 12.5L68.5 6h4l-7.7 17.7h-4L53.3 6zm28.3-.5c5.2 0 8.8 3.6 8.8 9s-3.6 9-8.8 9-8.8-3.6-8.8-9 3.6-9 8.8-9zm0 14.4c2.8 0 4.8-2 4.8-5.4s-2-5.4-4.8-5.4-4.8 2-4.8 5.4 2 5.4 4.8 5.4zm15-7.9v11.7H92.8V0H97v11.4l6.5-5.4h5.1L101 12l8.2 11.7h-5.1l-5.8-8.6-1.7 1.4z" />
            </svg>
            {/* Metalab */}
            <span className="text-lg font-semibold opacity-50 tracking-tight">Metalab</span>
            {/* Pinterest */}
            <svg className="h-5 opacity-50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12c0 5 3.1 9.4 7.6 11.2-.1-.9-.2-2.4 0-3.4.2-.9 1.4-6 1.4-6s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.8-2.2 3.8-5.5 0-2.9-2.1-4.9-5-4.9-3.4 0-5.4 2.6-5.4 5.2 0 1 .4 2.1.9 2.7.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.4-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.8-7.3 8-7.3 4.2 0 7.5 3 7.5 7 0 4.2-2.6 7.5-6.3 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 3c-.3 1.1-.9 2.2-1.4 3 1.1.3 2.2.5 3.4.5 6.6 0 12-5.4 12-12S18.6 0 12 0z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
