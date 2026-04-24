const features = [
  {
    icon: "✓",
    title: "Dermatologically Tested"
  },
  {
    icon: "⚗",
    title: "Clinically Proven Ingredients"
  },
  {
    icon: "○",
    title: "No Harmful Chemicals"
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative mt-20 w-full overflow-hidden border-y border-white/10 bg-[#12050A] py-2 md:mt-24 md:py-3">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_30%,rgba(110,59,71,0.85)_0%,rgba(59,31,43,0.92)_45%,rgba(18,5,10,1)_100%)]" />
      <div className="section-shell relative z-10 grid gap-2.5 sm:grid-cols-3 sm:gap-3 lg:gap-4">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="animate-rise group flex items-center justify-center gap-3 rounded-xl2 bg-white/5 px-4 py-1.5 text-white/90 shadow-soft ring-1 ring-white/10 backdrop-blur-sm transition duration-300 hover:bg-white/10 hover:ring-white/20"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span className="inline-flex h-7.5 w-7.5 items-center justify-center rounded-full bg-white/10 text-[0.95rem] leading-none text-white ring-1 ring-white/15 transition group-hover:bg-white/15">
              {feature.icon}
            </span>
            <p className="text-[0.93rem] font-semibold tracking-[0.01em] text-white/90">{feature.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
