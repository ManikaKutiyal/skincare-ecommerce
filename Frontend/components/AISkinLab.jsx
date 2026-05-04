"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: "01",
    title: "Share Your Story",
    description: "Tell us about your skin type, daily habits, and personal concerns.",
  },
  {
    number: "02",
    title: "We Listen & Analyze",
    description: "Our AI maps your unique profile against thousands of ingredient-skin interactions.",
  },
  {
    number: "03",
    title: "Your Ritual, Revealed",
    description: "Receive a bespoke routine of products handpicked for your biology and lifestyle.",
  },
];

export default function AISkinLab() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="ai" className="relative overflow-hidden py-28 sm:py-36">
      {/* ─── Ambient warm washes ─── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[15%] top-[10%] h-[700px] w-[700px] rounded-full bg-[#C5A059]/[0.04] blur-[160px]" />
        <div className="absolute -right-[10%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-[#C5A059]/[0.03] blur-[130px]" />
        <div className="absolute left-[40%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#E8DFD0]/30 blur-[100px]" />
      </div>

      <div className="section-shell relative z-10">
        {/* ─── Grid: Image left + Content right ─── */}
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr] xl:gap-24">

          {/* ── Left: Editorial Image Composition ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Decorative rings behind image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.5 }}
              className="absolute h-[105%] w-[95%] rounded-full border border-[#C5A059]/[0.1]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.7 }}
              className="absolute h-[115%] w-[105%] rounded-full border border-[#C5A059]/[0.05]"
            />

            {/* Main image */}
            <div className="group relative w-full max-w-[420px] overflow-hidden rounded-[2.5rem]">
              <motion.div style={{ y: imgY }} className="relative aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=85&w=900"
                  alt="Luxury skincare ritual consultation"
                  fill
                  sizes="(min-width: 1024px) 420px, 85vw"
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
                  priority
                />
              </motion.div>

              {/* Warm overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F8F6F2]/60 via-transparent to-[#F8F6F2]/20" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C5A059]/[0.08] via-transparent to-transparent" />

              {/* Inner thin frame */}
              <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#C5A059]/[0.12]" />

              {/* Corner ornaments */}
              <div className="absolute left-7 top-7 h-8 w-8 border-l-[1.5px] border-t-[1.5px] border-[#C5A059]/30 transition-all duration-700 group-hover:h-10 group-hover:w-10 group-hover:border-[#C5A059]/50" />
              <div className="absolute bottom-7 right-7 h-8 w-8 border-b-[1.5px] border-r-[1.5px] border-[#C5A059]/30 transition-all duration-700 group-hover:h-10 group-hover:w-10 group-hover:border-[#C5A059]/50" />

              {/* Bottom quote overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute bottom-0 left-0 right-0 z-10 p-7 sm:p-9"
              >
                <div className="rounded-2xl border border-white/40 bg-white/60 px-6 py-5 backdrop-blur-xl shadow-[0_8px_32px_rgba(26,29,54,0.06)]">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.5em] text-[#C5A059]">
                    The Camliqa Promise
                  </p>
                  <p className="mt-2 font-serif text-[1.1rem] leading-snug text-[#1A1D36]/80 italic">
                    "Every complexion tells a unique story. We help you write the next chapter."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Floating accent badge — top right of image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="absolute -right-2 top-[12%] z-20 sm:right-[-8%]"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#C5A059]/20 bg-white/80 shadow-[0_12px_40px_rgba(26,29,54,0.07)] backdrop-blur-xl">
                <div className="text-center">
                  <p className="font-serif text-lg text-[#1A1D36]">30s</p>
                  <p className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#1A1D36]/40">Ritual</p>
                </div>
              </div>
            </motion.div>

            {/* Floating accent badge — bottom left of image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.35 }}
              className="absolute -left-2 bottom-[25%] z-20 sm:left-[-6%]"
            >
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#C5A059]/20 bg-white/80 shadow-[0_12px_40px_rgba(26,29,54,0.07)] backdrop-blur-xl">
                <div className="text-center">
                  <p className="font-serif text-lg text-[#1A1D36]">100%</p>
                  <p className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#1A1D36]/40">Personal</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Content + Timeline ── */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#C5A059]/20 bg-[#C5A059]/[0.06] px-5 py-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C5A059]"></span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#C5A059]">AI Beauty Advisor</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-serif text-[2.4rem] leading-[1.08] text-[#1A1D36] sm:text-[3rem] lg:text-[3.6rem]"
            >
              Your Personal{" "}
              <br className="hidden sm:block" />
              <span className="italic text-[#C5A059]">Beauty Consultant</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-6 max-w-md text-[1rem] leading-[1.8] text-[#1A1D36]/50"
            >
              Our AI-powered chatbot guides you through a quick, thoughtful conversation about
              your skin and hair — then curates a personalized ritual from our collection,
              designed exclusively for you.
            </motion.p>

            {/* ── Elegant divider ── */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="my-10 flex items-center gap-4 origin-left max-w-[280px]"
            >
              <span className="h-[1px] flex-1 bg-gradient-to-r from-[#C5A059]/30 to-transparent" />
              <span className="h-1.5 w-1.5 rotate-45 border border-[#C5A059]/30" />
              <span className="h-[1px] flex-1 bg-gradient-to-l from-[#C5A059]/30 to-transparent" />
            </motion.div>

            {/* ── Process Steps ── */}
            <div className="space-y-0">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.8 + idx * 0.16,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex gap-6"
                >
                  {/* Vertical timeline line + number */}
                  <div className="flex flex-col items-center">
                    <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#C5A059]/15 bg-white transition-all duration-700 group-hover:border-[#C5A059]/40 group-hover:shadow-[0_0_24px_rgba(197,160,89,0.1)]">
                      <span className="font-serif text-[13px] text-[#C5A059]/50 transition-colors duration-500 group-hover:text-[#C5A059]">
                        {step.number}
                      </span>
                    </div>
                    {idx < steps.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.8, delay: 1.0 + idx * 0.2 }}
                        className="w-[1px] flex-1 origin-top bg-gradient-to-b from-[#C5A059]/20 to-[#C5A059]/5"
                        style={{ minHeight: "100%" }}
                      />
                    )}
                  </div>

                  {/* Step text */}
                  <div className="pb-10">
                    <h3 className="font-serif text-[1.2rem] text-[#1A1D36]/85 transition-colors duration-500 group-hover:text-[#1A1D36]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-[0.88rem] leading-relaxed text-[#1A1D36]/35 transition-colors duration-500 group-hover:text-[#1A1D36]/55">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href="#ai-chat"
                className="group relative inline-flex items-center gap-4 overflow-hidden border border-[#1A1D36] bg-[#1A1D36] px-10 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-white transition-all duration-500 hover:bg-[#1A1D36]/90 hover:shadow-[0_12px_40px_rgba(26,29,54,0.15)]"
              >
                <span className="relative z-10">Begin Consultation</span>
                <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-xs transition-transform duration-500 group-hover:translate-x-0.5">
                  →
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#C5A059]/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <span className="text-[10px] tracking-[0.2em] text-[#1A1D36]/25 uppercase">
                Takes only 30 seconds
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
