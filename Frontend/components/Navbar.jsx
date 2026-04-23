const navLinks = ["Products", "Collections", "AI Skin Lab"];

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 3.5 2.8 5.68 6.27.9-4.54 4.42 1.07 6.25L12 17.8 6.4 20.75l1.07-6.25L2.93 10.08l6.27-.9Z" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.6-3.6" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.7-3 4.1-4.5 7-4.5s5.3 1.5 7 4.5" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 4h2l2 11h10l2-8H7" />
      <circle cx="10" cy="19" r="1.5" />
      <circle cx="17" cy="19" r="1.5" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="z-50 border-b border-black/10 bg-white">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#" className="text-[2rem] font-extrabold leading-none tracking-tight text-ink">
          Skincare Luxury
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[0.98rem] font-medium text-ink/95 transition duration-300 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-ink">
          <button type="button" className="hidden transition hover:opacity-70 md:inline-flex" aria-label="Wishlist">
            <IconStar />
          </button>
          <button type="button" className="transition hover:opacity-70" aria-label="Search">
            <IconSearch />
          </button>
          <button type="button" className="transition hover:opacity-70" aria-label="Account">
            <IconUser />
          </button>
          <button type="button" className="relative transition hover:opacity-70" aria-label="Cart">
            <IconCart />
            <span className="absolute -right-2 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-ink px-1 text-[9px] font-semibold leading-none text-white">
              0
            </span>
          </button>
          <button
            type="button"
            className="text-2xl leading-none transition hover:opacity-70 lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
