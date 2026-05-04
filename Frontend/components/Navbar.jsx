"use client";
import React from 'react';
import { useCartStore } from '../store/useCartStore';

const navLinks = [
  { label: "SHOP ALL", href: "#collections" },
  { label: "SKIN CARE", href: "#collections" },
  { label: "HAIR CARE", href: "#collections" },
  { label: "OUR ETHOS", href: "#ingredients" }
];

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.6-3.6" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.7-3 4.1-4.5 7-4.5s5.3 1.5 7 4.5" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M6 5H18L19 18H5L6 5Z" />
      <path d="M9 5V3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V5" />
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
    <header className="sticky top-0 z-50 w-full border-b border-[#C5A059]/10 bg-white/70 py-4 backdrop-blur-xl shadow-[0_4px_30px_rgba(197,160,89,0.05)]">
      <div className="section-shell relative flex items-center justify-between">
        
        {/* Left: Navigation Links */}
        <nav className="hidden flex-1 items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 transition duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Center: Logo */}
        <div className="flex flex-1 justify-center">
          <a href="#" className="flex flex-col items-center">
            <span className="font-serif text-3xl leading-none tracking-[0.02em] text-primary">Camliqa</span>
          </a>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-1 items-center justify-end gap-5 text-primary/80">
          <button type="button" className="transition hover:text-primary" aria-label="Search">
            <IconSearch />
          </button>
          <button type="button" className="hidden transition hover:text-primary md:block" aria-label="Account">
            <IconUser />
          </button>
          <button type="button" onClick={openCart} className="relative transition hover:text-primary" aria-label="Cart">
            <IconCart />
            {mounted && cartCount() > 0 && (
              <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[8px] font-bold leading-none text-white">
                {cartCount()}
              </span>
            )}
          </button>
          
          <button
            type="button"
            className="text-2xl leading-none transition hover:text-primary lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

      </div>
    </header>
  );
}