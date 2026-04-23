export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-accentPrimary via-accentSecondary to-accentPrimary py-24 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,247,245,0.16),transparent_58%)]" />
      <div className="section-shell relative text-center text-[#F7F7F5]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-highlight">First Time?</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-6xl leading-[1.07] sm:text-7xl">
          Unlock 15% Off
          <br />
          Your First Ritual
        </h2>
        <p className="mx-auto mt-7 max-w-3xl text-[1.02rem] leading-[1.75] text-[#F7F7F5]/90 sm:text-[1.08rem]">
          Subscribe to receive exclusive access to new formulations, expert skincare tips, and personalized
          recommendations.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-full border border-[#F7F7F5]/25 bg-[#F7F7F5]/10 px-6 py-4 text-base text-[#F7F7F5] outline-none placeholder:text-[#F7F7F5]/65 sm:w-[346px]"
          />
          <button
            type="button"
            className="rounded-full bg-[#F7F7F5] px-8 py-4 text-base font-semibold text-ink transition duration-300 ease-out hover:scale-[1.02]"
          >
            Claim Offer
          </button>
        </div>

        <p className="mt-9 text-xs text-[#F7F7F5]/58">By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
