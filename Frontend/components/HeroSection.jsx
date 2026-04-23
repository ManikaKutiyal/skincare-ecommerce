export default function HeroSection() {
  return (
    <section className="section-shell py-12 md:py-16 lg:py-[4.5rem]">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.08fr] lg:gap-14">
        <div className="animate-rise px-1">
          <p className="mb-5 text-xs uppercase tracking-[0.42em] text-accentSecondary/70">Clinical Luxury</p>
          <h1 className="max-w-lg text-5xl font-light leading-[1.1] tracking-normal text-ink sm:text-6xl lg:text-7xl lg:leading-[1.1]">
            Latest Skincare
            <br />
            Formulations
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-accentSecondary/90">
            Experience the intersection of science and sensory luxury. Each formula is designed to transform your
            skin with clinically proven ingredients.
          </p>
          <button
            type="button"
            className="mt-10 rounded-full bg-ink px-10 py-4 text-base font-semibold text-[#F7F7F5] shadow-soft transition duration-300 hover:scale-105 hover:shadow-card"
          >
            Shop Now
          </button>
        </div>

        <div className="animate-soft-zoom relative overflow-hidden rounded-[1.6rem] bg-white shadow-card">
          <img
            src="https://images.unsplash.com/photo-1697840507245-e6ce44da4e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Glass skincare dropper bottle in soft natural light"
            className="h-[360px] w-full object-cover object-center sm:h-[500px]"
          />
          
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/20" />
        </div>
      </div>
    </section>
  );
}
