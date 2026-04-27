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
          <div className="border-b border-muted/25 bg-gradient-to-br from-accentPrimary via-highlight/65 to-accentPrimary px-9 py-12 text-offWhite md:border-b-0 md:border-r md:border-r-muted/25 md:px-11 md:py-14">
            <p className="text-[11px] uppercase tracking-[0.24em] text-highlight">AI Routine</p>
            <h2 className="mt-4 text-[2.35rem] leading-[1.08] text-offWhite">
              Your Personalized
              <br />
              Skincare Ritual
            </h2>
            <p className="mt-5 text-[1.02rem] leading-[1.85] text-offWhite/88">
              Our AI analyzes your unique skin profile to recommend the perfect clinical formulations tailored to your
              needs.
            </p>

            <p className="mt-10 text-[11px] uppercase tracking-[0.24em] text-highlight">Common Concerns</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {concerns.map((concern) => (
                <button
                  key={concern}
                  type="button"
                  className="rounded-full border border-offWhite/28 bg-offWhite/10 px-4 py-2.5 text-[12px] font-medium tracking-[0.01em] text-offWhite transition duration-300 ease-out hover:bg-offWhite/20"
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
              className="mt-8 w-full rounded-full bg-primary px-7 py-4 text-base font-semibold text-offWhite shadow-soft transition duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(201,168,76,0.35),0_0_36px_rgba(108,63,197,0.12)]"
            >
              Get Your Routine
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
