"use client";

import Navbar from "@/components/Navbar";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Reveal, { ImageReveal } from "@/components/Reveal";
import AISkinLab from "@/components/AISkinLab";
import AnatomyOfPurity from "@/components/AnatomyOfPurity";
import VideoSection from "@/components/VideoSection";
import HorizontalStory from "@/components/HorizontalStory";
import { motion } from "framer-motion";
import Image from "next/image";

const collections = [
  {
    name: "Morning Ritual",
    description: "Brighten & protect your skin daily",
    imageSrc: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    thumbSrc: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=320",
    imageAlt: "Camliqa Morning Ritual product shot"
  },
  {
    name: "Night Recovery",
    description: "Repair and deeply nourish overnight",
    imageSrc: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Camliqa Night Recovery product shot"
  },
  {
    name: "Targeted Treatments",
    description: "Precision serums for every concern",
    imageSrc: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Camliqa Targeted Treatments product shot"
  }
];

const trustBadges = [
  { label: "Organic", icon: "leaf" },
  { label: "Cruelty-Free", icon: "bunny" },
  { label: "Paraben-Free", icon: "drop" },
  { label: "Sulfate-Free", icon: "spark" }
];

const ingredients = [
  {
    name: "Hyaluronic Acid",
    benefit: "Deep hydration that plumps from within",
    icon: "molecule"
  },
  {
    name: "Peptides",
    benefit: "Signal proteins for firm, elastic skin",
    icon: "spark"
  },
  {
    name: "Retinol",
    benefit: "Clinical-grade renewal for anti-aging",
    icon: "drop"
  },
  {
    name: "Niacinamide",
    benefit: "Brightening + pore-minimizing powerhouse",
    icon: "hex"
  }
];

const testimonials = [
  {
    name: "Aanya S.",
    rating: 5,
    quote: "My skin texture looks smoother in a week. The ritual feels expensive without being harsh."
  },
  {
    name: "Rohit K.",
    rating: 5,
    quote: "Hair feels softer and looks healthier. Love the minimal, clean finish on the skin too."
  },
  {
    name: "Meera P.",
    rating: 5,
    quote: "Gentle on sensitive skin. The glow is subtle—but real."
  }
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 }
};

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="m12 3.2 2.4 5 5.5.8-4 3.9.95 5.5L12 15.8 7.15 18.4l.95-5.5-4-3.9 5.5-.8L12 3.2Z" />
    </svg>
  );
}

function IngredientIcon({ kind }) {
  const base = "h-9 w-9 text-secondary";

  if (kind === "molecule") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="6.5" cy="12" r="2" />
        <circle cx="16.8" cy="6.8" r="1.8" />
        <circle cx="17.6" cy="16.8" r="2.1" />
        <path d="M8.3 11 15.2 7.7" />
        <path d="M8.2 13 15.6 16" />
        <path d="M16.1 8.4 16.9 14.8" />
        <path d="M6.8 10.1 6.8 7.2" className="text-highlight" />
      </svg>
    );
  }

  if (kind === "spark") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 3l1.2 6.2L19 12l-5.8 2.8L12 21l-1.2-6.2L5 12l5.8-2.8L12 3Z" />
        <path d="M4.8 19.2 7 17m10 0 2.2 2.2M4.8 4.8 7 7m10 0 2.2-2.2" className="text-highlight" />
      </svg>
    );
  }

  if (kind === "drop") {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 3.5c3.2 4.2 6.2 7.8 6.2 11.2A6.2 6.2 0 0 1 12 20.9a6.2 6.2 0 0 1-6.2-6.2c0-3.4 3-7 6.2-11.2Z" />
        <path d="M9.6 14.8c.3 1.7 1.6 2.9 3.4 3.2" className="text-highlight" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M9.2 6.4 12 4.8l2.8 1.6 2.8 4.8-2.8 4.8L12 17.6 9.2 16 6.4 11.2l2.8-4.8Z" />
      <path d="M12 4.8v12.8" className="text-highlight" />
      <path d="M6.4 11.2h11.2" className="text-highlight" />
    </svg>
  );
}

function TrustIcon({ kind }) {
  const common = "h-5 w-5 text-secondary";

  if (kind === "leaf") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M5 14.5c0-6.2 6.2-9.8 14-10-.2 8-3.8 14-10 14-2.2 0-4-1.8-4-4Z" />
        <path d="M8 16c3-2.5 6.1-4.6 10.5-6.4" />
      </svg>
    );
  }

  if (kind === "bunny") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M9 7.4c-1.1-2.3-2.9-3.6-4.3-3.6C3.7 3.8 3 4.7 3 6c0 2.6 2.3 4.9 5 6.2" />
        <path d="M15 7.4c1.1-2.3 2.9-3.6 4.3-3.6 1 0 1.7.9 1.7 2.2 0 2.6-2.3 4.9-5 6.2" />
        <path d="M7.4 14.5a4.6 4.6 0 0 0 9.2 0c0-3.2-2.1-5.8-4.6-5.8s-4.6 2.6-4.6 5.8Z" />
        <path d="M10 15.2c.5.6 1.2 1 2 1s1.5-.4 2-1" />
      </svg>
    );
  }

  if (kind === "drop") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 3.5c3.2 4.2 6.2 7.8 6.2 11.2A6.2 6.2 0 0 1 12 20.9a6.2 6.2 0 0 1-6.2-6.2c0-3.4 3-7 6.2-11.2Z" />
        <path d="M9.6 14.8c.3 1.7 1.6 2.9 3.4 3.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M12 3l1.2 6.2L19 12l-5.8 2.8L12 21l-1.2-6.2L5 12l5.8-2.8L12 3Z" />
      <path d="M4.8 19.2 7 17m10 0 2.2 2.2M4.8 4.8 7 7m10 0 2.2-2.2" />
    </svg>
  );
}

import BrandMarquee from "@/components/BrandMarquee";
import CurationsSection from "@/components/CurationsSection";

export default function HomePage() {
  return (
    <main className="bg-base text-primary antialiased selection:bg-secondary/25 selection:text-primary">
      <Navbar />

      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <div className="section-shell relative z-10 py-24 sm:py-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={reveal}
            className="max-w-5xl"
          >
            <p className="text-xs font-medium uppercase tracking-[0.44em] text-secondary/95 sm:text-sm luxury-text-glow">CAMLIQA</p>
            <h1 className="mt-6 font-serif text-6xl leading-[0.92] text-primary sm:text-7xl lg:text-8xl">
              Transform Your Skin & Hair with Camliqa
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary/65 sm:text-lg">
              Experience the power of natural ingredients blended with modern care, designed to nourish,
              repair, and reveal your healthiest skin and hair every day.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#featured-products"
                className="inline-flex items-center justify-center border border-primary bg-primary px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-primary/85 hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]"
              >
                Buy Now
              </a>
              <a
                href="#ingredients"
                className="group inline-flex items-center justify-center text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80 transition duration-300 hover:text-primary"
              >
                <span className="relative inline-block pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-secondary/85 after:transition-transform after:duration-300 group-hover:after:scale-x-110">
                  Explore Ingredients
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <BrandMarquee />
      <CurationsSection />

      <section id="collections" className="relative py-24 sm:py-32">
        <div className="section-shell">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Reveal>
                <h2 className="font-serif text-[2.4rem] leading-[1.1] text-primary sm:text-[3.2rem]">
                  Curated Rituals for <br />
                  <span className="italic text-secondary">Every Concern</span>
                </h2>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="mt-6 text-[1.05rem] text-primary/70 sm:text-[1.1rem]">
                  Discover our scientifically-backed collections, each designed to harmonize with your skin&apos;s natural rhythm and unique biological needs.
                </p>
              </Reveal>
            </div>
            <Reveal direction="left" delay={0.6}>
              <button className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary transition hover:text-secondary">
                Explore All Products →
              </button>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:auto-rows-[200px] md:grid-cols-12">
            {collections.map((collection, index) => {
              const isMorning = index === 0;
              const isNight = index === 1;
              const isTargeted = index === 2;

              return (
                <div
                  key={collection.name}
                  className={`${
                    isMorning
                      ? "md:col-span-7 md:row-span-2"
                      : isNight
                        ? "md:col-span-5 md:row-span-1"
                        : "md:col-span-5 md:row-span-1"
                  }`}
                >
                  <Reveal delay={index * 0.2} width="100%" height="100%">
                    <article
                      className={`group relative h-full overflow-hidden rounded-2xl border border-secondary/35 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_26px_70px_-42px_rgba(26,29,54,0.48),0_0_46px_rgba(209,209,209,0.10)] ${isNight ? "bg-primary text-white" : "bg-white/70 backdrop-blur-md"}`}
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 ${
                          isNight
                            ? "bg-[radial-gradient(900px_circle_at_12%_12%,rgba(197,160,89,0.18)_0%,rgba(197,160,89,0)_62%),radial-gradient(900px_circle_at_90%_40%,rgba(209,209,209,0.10)_0%,rgba(209,209,209,0)_56%)]"
                            : "bg-[linear-gradient(135deg,rgba(26,29,54,0.05)_0%,rgba(26,29,54,0)_48%,rgba(209,209,209,0.04)_100%)]"
                        }`}
                      />

                      <div className="relative flex h-full items-stretch justify-between gap-6 p-7 sm:p-8">
                        <div className="max-w-[22rem]">
                          <p className={`text-[10px] font-semibold uppercase tracking-[0.34em] ${isNight ? "text-secondary/90" : "text-secondary"}`}>
                            Featured Collection {index + 1}
                          </p>
                          <h3 className={`mt-4 font-serif text-[1.65rem] leading-tight ${isNight ? "text-white" : "text-primary"}`}>
                            {collection.name}
                          </h3>
                          <p className={`mt-3 text-sm leading-relaxed ${isNight ? "text-white/75" : "text-primary/70"}`}>
                            {collection.description}
                          </p>
                        </div>

                        <div className={`${isMorning ? "w-[55%]" : isTargeted ? "w-[48%]" : "w-[44%]"} relative`}>
                          <div className={`relative h-full w-full overflow-hidden rounded-2xl ${isNight ? "border border-secondary/25 bg-white/5" : "border border-secondary/30 bg-white/80"}`}>
                            <ImageReveal delay={index * 0.3}>
                              <Image
                                src={collection.imageSrc}
                                alt={collection.imageAlt}
                                fill
                                sizes={isMorning ? "(min-width: 768px) 620px, 92vw" : "(min-width: 768px) 420px, 92vw"}
                                className={`object-cover object-center transition duration-700 ease-out group-hover:scale-[1.03] ${isNight ? "opacity-90" : "opacity-95"}`}
                                priority={isMorning}
                              />
                            </ImageReveal>
                            <div className={`pointer-events-none absolute inset-0 ${isNight ? "bg-gradient-to-l from-primary/5 via-primary/15 to-primary/55" : "bg-gradient-to-l from-white/0 via-white/5 to-white/35"}`} />
                          </div>

                          {isMorning ? (
                            <div className="absolute right-3 top-3 hidden w-20 sm:block">
                              <div className="aspect-square overflow-hidden rounded-xl border border-secondary/35 bg-white/85 shadow-soft">
                                <Image
                                  src={collection.thumbSrc}
                                  alt={`${collection.name} thumbnail`}
                                  width={160}
                                  height={160}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AISkinLab />

      <AnatomyOfPurity />

      <VideoSection />

      <section
        id="ingredients"
        className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      >
        {/* Background Gradients: Warm gold on left, Soft purple on right */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_30%,rgba(197,160,89,0.12)_0%,transparent_60%),radial-gradient(1200px_circle_at_85%_70%,rgba(108,63,197,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(108,63,197,0.03)_100%)]" />

        <div className="section-shell relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr_1fr] lg:items-center">
            {/* Left Column: Title + First 2 Cards */}
            <div className="flex flex-col gap-8">
              <div className="max-w-sm">
                <Reveal delay={0.2}>
                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-secondary">Micro-Efficacy</p>
                </Reveal>
                <Reveal delay={0.3}>
                  <h2 className="mt-4 font-serif text-4xl leading-[1.1] text-primary lg:text-5xl">
                    Ingredients
                  </h2>
                </Reveal>
                <Reveal delay={0.4}>
                  <p className="mt-6 text-[0.8rem] leading-relaxed text-primary/60">
                    Our elixirs are concentrated at the molecular level. Every single drop delivers a calibrated blend of science and nature.
                  </p>
                </Reveal>
              </div>

              <div className="flex flex-col gap-4">
                {ingredients.slice(0, 2).map((item, index) => (
                  <motion.article
                    key={item.name}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl border border-secondary/20 bg-white/40 p-5 shadow-[0_4px_20px_rgb(0,0,0,0.01)] backdrop-blur-md transition hover:border-secondary/40"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-secondary">{String(index + 1).padStart(2, "0")}.</span>
                            <h4 className="font-serif text-lg text-primary">{item.name}</h4>
                          </div>
                          <IngredientIcon kind={item.icon} />
                        </div>
                        <p className="mt-2 text-[0.75rem] leading-relaxed text-primary/55">{item.benefit}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Center Column: Circle Graphic */}
            <div className="relative flex items-center justify-center">
              <div className="relative flex h-[260px] w-[260px] items-center justify-center lg:h-[360px] lg:w-[360px]">
                {/* Large Outer Circle */}
                <div className="absolute inset-0 rounded-full bg-white/50 shadow-[0_30px_80px_rgba(0,0,0,0.03)] backdrop-blur-md" />
                <div className="absolute inset-6 rounded-full border border-secondary/15" />
                <div className="absolute inset-12 rounded-full border border-secondary/5" />
                
                {/* Center Drop Circle */}
                <div className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:h-28 sm:w-28">
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,1)_0%,rgba(248,248,248,0.5)_100%)]" />
                  <div className="relative z-30">
                    <IngredientIcon kind="drop" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Last 2 Cards */}
            <div className="flex flex-col gap-4 lg:mt-24">
              {ingredients.slice(2).map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-secondary/20 bg-white/40 p-5 shadow-[0_4px_20px_rgb(0,0,0,0.01)] backdrop-blur-md transition hover:border-secondary/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-secondary">{String(index + 3).padStart(2, "0")}.</span>
                          <h4 className="font-serif text-lg text-primary">{item.name}</h4>
                        </div>
                        <IngredientIcon kind={item.icon} />
                      </div>
                      <p className="mt-2 text-[0.75rem] leading-relaxed text-primary/55">{item.benefit}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <motion.section
        id="social-proof"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        variants={reveal}
        className="section-shell py-12 sm:py-20 lg:py-24"
      >
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-secondary sm:text-xs">
            Social Proof & Trust
          </p>
          <h2 className="mt-3 font-serif text-3xl text-primary sm:text-4xl">Clinical trust, proven daily.</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-secondary/55 bg-white/70 shadow-soft backdrop-blur-md">
            <div className="grid md:grid-cols-2">
              <div className="overflow-hidden border-b border-secondary/55 px-6 py-4 md:border-b-0 md:border-r md:px-8">
                <div className="relative overflow-hidden py-2">
                  <div className="auto-marquee flex min-w-max items-center whitespace-nowrap">
                    <div className="flex items-center gap-16 pr-16">
                      <span className="text-[11px] font-medium uppercase tracking-[0.34em] text-primary/70">
                        10,000+ Happy Customers
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.34em] text-primary/70">
                        Dermatologist-inspired rituals
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.34em] text-primary/70">
                        Natural ingredients, modern care
                      </span>
                    </div>
                    <div className="flex items-center gap-16 pr-16" aria-hidden="true">
                      <span className="text-[11px] font-medium uppercase tracking-[0.34em] text-primary/70">
                        10,000+ Happy Customers
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.34em] text-primary/70">
                        Dermatologist-inspired rituals
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.34em] text-primary/70">
                        Natural ingredients, modern care
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-5 md:px-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-primary/70">Star Rating</p>
                <div className="mt-2 flex items-center gap-2">
                  <p className="font-serif text-3xl text-primary">4.8 / 5</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-0 border-t border-secondary/45 sm:grid-cols-2 lg:grid-cols-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center justify-between border-b border-secondary/35 px-5 py-4 sm:border-r sm:last:border-r-0 lg:border-b-0"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary/72">
                    {badge.label}
                  </span>
                  <span className="inline-flex items-center justify-center">
                    <TrustIcon kind={badge.icon} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl border border-secondary/55 p-7 shadow-soft backdrop-blur-md"
            style={{ background: 'linear-gradient(135deg, rgba(197,160,89,0.08) 0%, rgba(255,255,255,0.75) 40%, rgba(248,246,242,0.9) 100%)' }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-secondary">Expert Note</p>
            <p className="mt-4 font-serif text-2xl leading-tight text-primary">
              “Recommended for sensitive skin types when used consistently as a simple ritual.”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-primary/70">Dr. Priya Sharma, Dermatologist</p>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-secondary/30 bg-white/30 px-6 py-16 shadow-soft backdrop-blur-md sm:px-10 lg:px-14">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-secondary/90">THE GUIDE</p>
            <h3 className="mt-4 font-serif text-4xl text-primary sm:text-5xl lg:text-6xl">Customer Reviews</h3>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-3 lg:gap-14">
            {testimonials.slice(0, 3).map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                className="relative pl-8 sm:pl-10"
              >
                <span className="pointer-events-none absolute left-2 top-0 h-full w-px bg-secondary/25" />
                <span className="pointer-events-none absolute left-0 top-0 h-12 w-12 rounded-full bg-secondary/10 blur-[1px]" />
                <span className="pointer-events-none absolute left-1 top-1 font-serif text-5xl tracking-tight text-secondary/15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <h4 className="font-serif text-3xl text-primary">{item.name}</h4>
                  <div className="mt-3 flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <StarIcon key={starIndex} />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-primary/65">“{item.quote}”</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={reveal}
        className="section-shell py-10 sm:py-12"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-secondary/30 bg-white/55 shadow-soft backdrop-blur-md">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_circle_at_18%_22%,rgba(201,168,76,0.14)_0%,rgba(201,168,76,0)_60%),radial-gradient(1100px_circle_at_82%_18%,rgba(108,63,197,0.12)_0%,rgba(108,63,197,0)_62%),linear-gradient(120deg,rgba(26,26,62,0.05)_0%,rgba(26,26,62,0)_52%,rgba(26,26,62,0.06)_100%)]" />

          <div className="relative grid gap-10 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.35fr_0.9fr] lg:items-center lg:px-14 lg:py-16">
            <div>
              <div className="flex items-center gap-3 text-secondary/90">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-secondary/35 bg-white/55">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M4.5 12.5c0-4.8 4.1-8 9.4-8.1" />
                    <path d="M5 13.5c.7 4.2 3.7 6.9 8 6.9 3.5 0 6.2-2 6.2-5.1 0-2.2-1.4-3.5-3.4-4.4" />
                  </svg>
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.36em]">Launch Promotion</p>
              </div>

              <h3 className="mt-6 font-serif text-4xl leading-tight text-primary sm:text-5xl">
                Get ₹449/- free product on every purchase of ₹1,000 and above.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary/65">
                Add your favourites to cart and your complimentary product will be included automatically at checkout.
              </p>

              <div className="mt-8">
                <a
                  href="#featured-products"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-card transition hover:bg-primary/90"
                >
                  Shop Now
                  <span className="text-white/80 transition group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative flex h-[210px] w-[210px] items-center justify-center sm:h-[250px] sm:w-[250px]">
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.75)_42%,rgba(255,255,255,0.12)_76%,rgba(255,255,255,0)_100%)] shadow-[0_40px_110px_-80px_rgba(26,26,62,0.7)]" />
                <div className="pointer-events-none absolute inset-6 rounded-full border border-secondary/25" />
                <div className="pointer-events-none absolute inset-12 rounded-full border border-highlight/25" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-secondary/20 bg-white/75 shadow-soft backdrop-blur-md sm:h-28 sm:w-28">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 3l1.2 6.2L19 12l-5.8 2.8L12 21l-1.2-6.2L5 12l5.8-2.8L12 3Z" />
                    <path d="M17.7 6.3 19.2 4.8M6.3 17.7 4.8 19.2" className="text-highlight" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <FeaturedProducts />

      <section className="section-shell pb-16 pt-10 sm:pb-20">
        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-secondary/40 px-6 py-10 text-center shadow-soft sm:px-12 lg:px-20 lg:py-14"
          style={{ background: 'linear-gradient(135deg, rgba(197,160,89,0.07) 0%, #ffffff 30%, rgba(248,246,242,0.95) 70%, rgba(197,160,89,0.05) 100%)' }}
        >
          {/* Decorative top-left corner gradient line */}
          <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-2/3 bg-[linear-gradient(to_right,rgba(197,160,89,0.6),transparent)]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[2px] w-2/3 bg-[linear-gradient(to_left,rgba(197,160,89,0.6),transparent)]" />
          <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-secondary">Our Mission</p>
          <p className="mt-6 font-serif text-[2rem] leading-tight text-primary sm:text-[2.35rem] sm:leading-tight lg:text-[2.65rem]">
            Camliqa works every day to create safe, effective skincare and haircare solutions that deliver
            visible results while staying true to natural, high-quality ingredients.
          </p>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={reveal}
        className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_circle_at_50%_50%,rgba(197,160,89,0.04)_0%,transparent_70%)]" />

        <div className="section-shell relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-secondary/80">
              CLINICAL RESULTS
            </p>
            <h3 className="mt-4 font-serif text-3xl text-primary sm:text-4xl lg:text-5xl">Proven Efficacy</h3>

            <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  value: "98%",
                  text: "Experienced an immediate surge in hydration and softness."
                },
                {
                  value: "94%",
                  text: "Noticed a reduction in dullness and uneven tone after 14 days."
                },
                {
                  value: "100%",
                  text: "Agreed the formulations felt weightless and deeply natural."
                }
              ].map((stat, index) => (
                <div key={stat.value} className="relative px-6">
                  <p className="font-serif text-5xl tracking-tight text-primary sm:text-6xl">
                    {stat.value}
                  </p>
                  <div className="mx-auto mt-4 h-px w-8 bg-secondary/30" />
                  <p className="mx-auto mt-5 max-w-[240px] text-[0.85rem] leading-relaxed text-primary/60">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        variants={reveal}
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1400px_circle_at_18%_30%,rgba(201,168,76,0.12)_0%,rgba(201,168,76,0)_58%),radial-gradient(1400px_circle_at_82%_28%,rgba(108,63,197,0.10)_0%,rgba(108,63,197,0)_60%),linear-gradient(120deg,rgba(26,26,62,0.04)_0%,rgba(26,26,62,0)_46%,rgba(26,26,62,0.05)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_60%,rgba(26,26,62,0.035)_0%,rgba(26,26,62,0)_62%)]" />

        <div className="section-shell relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-secondary/90">THE WHISPERS</p>

            <div className="mt-10 flex items-center justify-center">
              <span className="inline-flex items-center justify-center rounded-2xl border border-secondary/20 bg-white/50 px-6 py-4 shadow-soft backdrop-blur-md">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-secondary/35" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M7.5 9.2c0-2.5 1.7-4.2 4.1-4.2v2.2c-1.2 0-2 .9-2 2.2v.5c0 1.6-.9 3.1-2.2 4.1l-.9.7V14c.6-.6 1-1.4 1-2.2v-2.6Z" />
                  <path d="M16.5 9.2c0-2.5 1.7-4.2 4.1-4.2v2.2c-1.2 0-2 .9-2 2.2v.5c0 1.6-.9 3.1-2.2 4.1l-.9.7V14c.6-.6 1-1.4 1-2.2v-2.6Z" />
                </svg>
              </span>
            </div>

            <p className="mt-8 font-serif text-3xl italic leading-snug text-primary sm:text-4xl sm:leading-snug lg:text-5xl">
              “An absolute revelation. Camliqa isn't just skincare; it is a natural ritual that redefines what it
              means to be truly luminous.”
            </p>

            <div className="mt-10 flex items-center justify-center">
              <span className="relative block h-10 w-10">
                <span className="absolute inset-0 rounded-full border border-highlight/25" />
                <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-[0_0_0_8px_rgba(255,255,255,0.35)]" />
              </span>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 text-secondary/70">
              <span className="h-px w-16 bg-secondary/20" />
              <p className="text-[11px] font-medium uppercase tracking-[0.36em]">Vogue Aesthetics</p>
              <span className="h-px w-16 bg-secondary/20" />
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
