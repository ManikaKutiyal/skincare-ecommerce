"use client";
import React from 'react';
import { useCartStore } from '../store/useCartStore';

const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Featured Products", href: "#featured-products" }
];

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
  const { openCart, cartCount } = useCartStore();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-white/10 text-white backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(26,26,62,0.95)_0%,rgba(40,24,88,0.94)_50%,rgba(26,26,62,0.95)_100%)]" />
      <div className="section-shell relative z-10 flex items-center justify-between py-4">
        <a href="#" className="flex flex-col">
          <span className="font-serif text-3xl leading-none tracking-[0.02em] text-white">CAMLIQA</span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-secondary/90 sm:text-[11px]">
            Natural Products For Your Natural Beauty
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.98rem] font-medium text-white/90 transition duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-white">
          <button type="button" className="hidden transition hover:text-white/80 md:inline-flex" aria-label="Wishlist">
            <IconStar />
          </button>
          <button type="button" className="transition hover:text-white/80" aria-label="Search">
            <IconSearch />
          </button>
          <button type="button" className="transition hover:text-white/80" aria-label="Account">
            <IconUser />
          </button>
          <button type="button" onClick={openCart} className="relative transition hover:opacity-70" aria-label="Cart">
            <IconCart />
            {mounted && cartCount() > 0 && (
              <span className="absolute -right-2 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-secondary px-1 text-[9px] font-semibold leading-none text-primary">
                {cartCount()}
              </span>
            )}
          </button>
          <button
            type="button"
            className="text-2xl leading-none transition hover:text-white/80 lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
