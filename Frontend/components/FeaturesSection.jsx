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
    <section className="relative mt-20 w-full overflow-hidden border-y border-secondary/20 bg-primary py-2 md:mt-24 md:py-3">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_30%,rgba(108,63,197,0.35)_0%,rgba(108,63,197,0)_52%),radial-gradient(900px_circle_at_85%_20%,rgba(201,168,76,0.24)_0%,rgba(201,168,76,0)_54%)]" />
      <div className="section-shell relative z-10 grid gap-2.5 sm:grid-cols-3 sm:gap-3 lg:gap-4">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="animate-rise group flex items-center justify-center gap-3 rounded-xl2 bg-offWhite/5 px-4 py-1.5 text-offWhite/90 shadow-soft ring-1 ring-offWhite/10 backdrop-blur-sm transition duration-300 hover:bg-offWhite/10 hover:ring-offWhite/20"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span className="inline-flex h-7.5 w-7.5 items-center justify-center rounded-full bg-offWhite/10 text-[0.95rem] leading-none text-offWhite ring-1 ring-offWhite/15 transition group-hover:bg-offWhite/15">
              {feature.icon}
            </span>
            <p className="text-[0.93rem] font-semibold tracking-[0.01em] text-offWhite/90">{feature.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
