const testimonials = [
  {
    id: 1,
    name: "Sebastian Speier",
    company: "Shop",
    initials: "SS",
    gradient: "from-green-400 to-emerald-500",
    quote:
      "Mobbin is a great resource and it always comes in handy to see what the best practices or standards are for mobile patterns in our current landscape.",
  },
  {
    id: 2,
    name: "Haerin Song",
    company: "Visa",
    initials: "HS",
    gradient: "from-blue-400 to-indigo-500",
    quote:
      "By using the Mobbin app, I save both my research time and space in my photo galleries filled with random screenshots. I love how easy it is to search for different patterns and copy and paste flows into Figma. It is a wonderful design tool you cannot live without!",
  },
  {
    id: 3,
    name: "Rachel How",
    company: "",
    initials: "RH",
    gradient: "from-pink-400 to-rose-500",
    quote:
      "Mobbin is my go-to reference for app & web design. Apart from saving countless hours, it gives me insights on the design patterns, copywriting, and user flows of world-class products. A must-have for creative inspiration and efficiency!",
  },
  {
    id: 4,
    name: "Taha Hossain",
    company: "Daybreak",
    initials: "TH",
    gradient: "from-orange-400 to-amber-500",
    quote:
      "We can't imagine a product design process without Mobbin. The quality, clarity and precision it provides make it just as valuable as it is intuitive.",
  },
  {
    id: 5,
    name: "Oykun Yilmaz",
    company: "",
    initials: "OY",
    gradient: "from-violet-400 to-purple-500",
    quote:
      "Designing feasible solutions based on real-world products is crucial for our design careers. Mobbin provides the best resources for this approach. I use it daily!",
  },
  {
    id: 6,
    name: "Daryl Ginn",
    company: "Endless",
    initials: "DG",
    gradient: "from-cyan-400 to-teal-500",
    quote:
      "Mobbin has quickly become our favourite inspiration resource for designing mobile apps at endless.design, their advanced filtering is unmatched in the inspiration space.",
  },
  {
    id: 7,
    name: "Josiah Gulden",
    company: "Compound Labs",
    initials: "JG",
    gradient: "from-rose-400 to-pink-500",
    quote:
      "Mobbin is one of the best ways to stay on top of the latest patterns, modalities, and visual trends in mobile product design... it's an essential resource for my team.",
  },
  {
    id: 8,
    name: "Marco Cornacchia",
    company: "Figma",
    initials: "MC",
    gradient: "from-indigo-400 to-blue-500",
    quote:
      "Mobbin is one of my favorite resources for product design and ui inspo. I love having access to a ton of real world examples to see how different apps and companies handle specific UI patterns and flows.",
  },
  {
    id: 9,
    name: "John Bai",
    company: "Plaid",
    initials: "JB",
    gradient: "from-emerald-400 to-green-500",
    quote:
      "All my homies love Mobbin. I mean that. I finally deleted that folder of 1,866 unorganized screenshots and haven't looked back since. Shoutout to Jiho and the team for doing God's work.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            What our users are saying.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="break-inside-avoid bg-gray-50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-sm font-medium`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  {testimonial.company && (
                    <p className="text-xs text-gray-400">{testimonial.company}</p>
                  )}
                </div>
              </div>
              <blockquote className="text-sm text-gray-600 leading-relaxed">
                {testimonial.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
