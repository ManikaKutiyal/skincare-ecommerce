"use client";

import { useCartStore } from '../store/useCartStore';
import CartDisplay from './CartDisplay';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Collections", href: "#collections" },
  { label: "AI Skin Lab", href: "#ai" }
];

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6h15l-1.5 9h-13z" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  );
}

export default function Navbar() {
  const { openCart, cartCount } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex justify-between p-4 bg-black text-white">
      
      {/* Logo */}
      <h1>CAMLIQA</h1>

      {/* Nav Links */}
      <nav className="flex gap-6">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Icons */}
      <div className="flex gap-4 items-center">
        <button onClick={openCart}>
          <IconCart />
          {mounted && cartCount() > 0 && <span>{cartCount()}</span>}
        </button>
        <CartDisplay />
      </div>

    </header>
  );
}