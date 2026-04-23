export default function AIChatSection() {
  const concerns = [
    "Dryness & Dehydration",
    "Fine Lines & Wrinkles",
    "Dark Spots & Pigmentation",
    "Acne & Blemishes",
    "Sensitivity & Redness"
  ];

  return (
    <section className="section-shell py-20 md:py-24">
      <div className="mx-auto max-w-[1024px] overflow-hidden rounded-[24px] border border-muted/30 bg-section shadow-soft">
        <div className="grid md:grid-cols-2">
          <div className="border-b border-muted/25 bg-gradient-to-br from-accentPrimary via-accentSecondary to-accentPrimary px-9 py-12 text-[#F7F7F5] md:border-b-0 md:border-r md:border-r-muted/25 md:px-11 md:py-14">
            <p className="text-[11px] uppercase tracking-[0.24em] text-highlight">AI Routine</p>
            <h2 className="mt-4 text-[2.35rem] leading-[1.08] text-[#F7F7F5]">
              Your Personalized
              <br />
              Skincare Ritual
            </h2>
            <p className="mt-5 text-[1.02rem] leading-[1.85] text-[#F7F7F5]/88">
              Our AI analyzes your unique skin profile to recommend the perfect clinical formulations tailored to your
              needs.
            </p>

            <p className="mt-10 text-[11px] uppercase tracking-[0.24em] text-highlight">Common Concerns</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {concerns.map((concern) => (
                <button
                  key={concern}
                  type="button"
                  className="rounded-full border border-[#F7F7F5]/28 bg-[#F7F7F5]/10 px-4 py-2.5 text-[12px] font-medium tracking-[0.01em] text-[#F7F7F5] transition duration-300 ease-out hover:bg-[#F7F7F5]/20"
                >
                  {concern}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-base px-9 py-12 md:px-11 md:py-14">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted">Tell Us About Your Skin</p>
            <div className="mt-5 rounded-[18px] border border-muted/40 bg-base px-6 py-5">
              <textarea
                placeholder="Describe your skin concerns, goals, or current routine..."
                rows={5}
                className="w-full resize-none bg-transparent text-sm leading-[1.85] text-ink/80 outline-none placeholder:text-muted"
              />
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-ink px-7 py-4 text-base font-semibold text-[#F7F7F5] shadow-soft transition duration-300 ease-out hover:opacity-90"
            >
              Get Your Routine
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
