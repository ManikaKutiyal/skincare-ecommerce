const concerns = [
  "Acne",
  "Pigmentation",
  "Dryness",
  "Aging",
  "Sun Protection",
  "Hair Fall",
  "Dandruff",
  "Uneven Texture"
];

export default function ShopByConcernSection() {
  return (
    <section className="section-shell pb-12 pt-2 md:pb-16">
      <div className="rounded-2xl bg-section p-6 md:p-8">
        <h2 className="text-3xl text-ink sm:text-4xl">Shop By Concern</h2>
        <p className="mt-2 text-sm text-accentSecondary/90 sm:text-base">
          Find targeted formulations for your unique skin and scalp goals.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {concerns.map((concern) => (
            <button
              key={concern}
              type="button"
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-accentSecondary transition hover:border-accentSecondary/40"
            >
              {concern}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
