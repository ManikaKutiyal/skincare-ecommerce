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
    <section className="w-full border-y border-black/8 bg-section py-7 md:py-8">
      <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-10 lg:gap-16">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="animate-rise flex items-center justify-center gap-3 text-accentSecondary/95"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center text-[1.05rem] leading-none text-accentSecondary">
              {feature.icon}
            </span>
            <p className="text-[1.02rem] font-medium tracking-[0.01em] text-accentSecondary">{feature.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
