"use client";

import React, { useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const curations = [
  {
    title: "Skin Rituals",
    subtitle: "PURIFY & RENEW",
    description: "Indulge in time-honored cleansing rituals designed to purify, balance, and rejuvenate your complexion from within.",
    href: "#collections",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    accent: "from-rose-900/60 via-rose-800/30 to-transparent",
    iconPath: "M12 3c3.2 4.2 6.2 7.8 6.2 11.2A6.2 6.2 0 0 1 12 20.9a6.2 6.2 0 0 1-6.2-6.2c0-3.4 3-7 6.2-11.2Z",
  },
  {
    title: "Hair Elixirs",
    subtitle: "STRENGTH & SHINE",
    description: "Botanical elixirs crafted to restore, strengthen, and illuminate every strand with salon-grade brilliance.",
    href: "#collections",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    accent: "from-amber-900/60 via-amber-800/30 to-transparent",
    iconPath: "M12 3l1.2 6.2L19 12l-5.8 2.8L12 21l-1.2-6.2L5 12l5.8-2.8L12 3Z",
  },
  {
    title: "Bath & Body",
    subtitle: "EVERYDAY LUXURY",
    description: "Transform your daily routine into a sensory escape with our exquisitely formulated body care collection.",
    href: "#collections",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800",
    accent: "from-emerald-900/60 via-emerald-800/30 to-transparent",
    iconPath: "M5 14.5c0-6.2 6.2-9.8 14-10-.2 8-3.8 14-10 14-2.2 0-4-1.8-4-4Z",
  }
];

function CurationCard({ item, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/20"
      style={{ aspectRatio: '4/5' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover object-center transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${item.accent}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-700 group-hover:from-black/85 group-hover:via-black/40" />

      {/* Mouse-tracking Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: isHovered
            ? `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(197, 160, 89, 0.15), transparent 50%)`
            : 'radial-gradient(600px circle at 50% 50%, transparent, transparent)'
        }}
        transition={{ duration: 0.3, ease: "linear" }}
      />

      {/* Animated Gold Border Glow on Hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[2rem] border-2 border-[#C5A059]/0 transition-all duration-700 group-hover:border-[#C5A059]/30"
      />

      {/* Decorative Corner Ornaments */}
      <div className="absolute left-6 top-6 h-8 w-8 border-l-[1.5px] border-t-[1.5px] border-[#C5A059]/40 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-[#C5A059]/70" />
      <div className="absolute right-6 top-6 h-8 w-8 border-r-[1.5px] border-t-[1.5px] border-[#C5A059]/40 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-[#C5A059]/70" />
      <div className="absolute bottom-6 left-6 h-8 w-8 border-b-[1.5px] border-l-[1.5px] border-[#C5A059]/40 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-[#C5A059]/70" />
      <div className="absolute bottom-6 right-6 h-8 w-8 border-b-[1.5px] border-r-[1.5px] border-[#C5A059]/40 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-[#C5A059]/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-10">
        {/* Floating Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 + index * 0.15 }}
          className="mb-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C5A059]/30 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:border-[#C5A059]/60 group-hover:bg-[#C5A059]/15 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.25)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#C5A059]" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d={item.iconPath} />
            </svg>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
          className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#C5A059] transition-all duration-500 group-hover:tracking-[0.6em]"
        >
          {item.subtitle}
        </motion.p>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 + index * 0.15 }}
          className="mt-3 font-serif text-[2.2rem] leading-[1.05] text-white sm:text-[2.6rem] drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
        >
          {item.title}
        </motion.h3>

        {/* Description - appears on hover */}
        <div className="overflow-hidden">
          <motion.p
            initial={false}
            animate={isHovered ? { opacity: 1, y: 0, height: 'auto' } : { opacity: 0, y: 10, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-3 text-sm leading-relaxed text-white/70"
          >
            {item.description}
          </motion.p>
        </div>

        {/* Separator Line */}
        <motion.div
          className="mt-5 h-[1px] origin-left bg-gradient-to-r from-[#C5A059]/60 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
          className="mt-5"
        >
          <a
            href={item.href}
            className="group/link inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/60 transition-all duration-500 hover:text-[#C5A059] hover:tracking-[0.5em]"
          >
            <span>Explore Collection</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm transition-all duration-500 group-hover/link:border-[#C5A059]/50 group-hover/link:bg-[#C5A059]/10 group-hover/link:text-[#C5A059]">
              →
            </span>
          </a>
        </motion.div>
      </div>

      {/* Index number decoration */}
      <div className="absolute right-8 top-8 z-10">
        <span className="font-serif text-[4rem] leading-none text-white/[0.06] transition-all duration-700 group-hover:text-[#C5A059]/10">
          0{index + 1}
        </span>
      </div>
    </motion.div>
  );
}

export default function CurationsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#C5A059]/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-[#C5A059]/[0.03] blur-[100px]" />
      </div>

      <div className="section-shell relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]/60" />
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A059]/30">
              <div className="h-1.5 w-1.5 rounded-full bg-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
            </div>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]/60" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[10px] font-semibold uppercase tracking-[0.7em] text-[#C5A059]"
          >
            Curations
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-5 font-serif text-[2.4rem] leading-[1.08] text-[#1A1D36] sm:text-[3rem]"
          >
            Discover Your <span className="italic text-[#C5A059]">Ritual</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-[#1A1D36]/55"
          >
            Three pillars of beauty, each thoughtfully curated for your most radiant self.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:gap-10 md:grid-cols-3">
          {curations.map((item, index) => (
            <CurationCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mx-auto mt-16 flex max-w-xs items-center gap-4"
        >
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]/30" />
          <div className="h-1.5 w-1.5 rotate-45 border border-[#C5A059]/40" />
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]/30" />
        </motion.div>
      </div>
    </section>
  );
}
