"use client";

import React, { useRef } from 'react';
import Reveal from './Reveal';

export default function AnatomyOfPurity() {
  const containerRef = useRef(null);

  // Removed overflow-hidden from the section tag so that position: sticky works perfectly!
  return (
    <section ref={containerRef} className="relative py-24 sm:py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_25%_10%,rgba(201,168,76,0.08)_0%,rgba(201,168,76,0)_62%),radial-gradient(1200px_circle_at_80%_20%,rgba(108,63,197,0.06)_0%,rgba(108,63,197,0)_62%)]" />

      <div className="section-shell relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 relative items-start">
          
          {/* Left Column (Sticky) */}
          <div className="lg:w-[45%] lg:sticky lg:top-32 self-start pb-10 z-20">
            
            <Reveal direction="up" delay={0.1}>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/80 mb-10">
                Pure Promise
              </p>
            </Reveal>

            {/* Rotating Badge */}
            <Reveal direction="up" delay={0.2}>
              <div className="relative h-40 w-40 mb-8 opacity-70">
                  {/* Rotating SVG text */}
                  <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                      <path id="circlePath" fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                      <text className="text-[11.5px] uppercase tracking-[0.3em] font-medium fill-current">
                        <textPath href="#circlePath" startOffset="0%">
                          PURE • UNCOMPROMISED • 
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary text-center leading-tight">
                      THE <br/> STANDARD
                    </span>
                  </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <h2 className="font-serif text-[4rem] leading-[1.1] text-primary sm:text-[4.8rem] lg:text-[5.5rem] relative z-10">
                The Anatomy <br />
                <span className="italic text-secondary">of Purity.</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="mt-8 max-w-sm text-[1.1rem] leading-relaxed text-primary/80">
                We don't just create skincare; we engineer botanical rituals. Every product is a testament to uncompromising quality and ethical craftsmanship.
              </p>
            </Reveal>
            
          </div>

          {/* Right Column (Scrollable Features with exact hover states) */}
          <div className="lg:w-[55%] flex flex-col lg:pt-32">
            
            {/* Feature 1 */}
            <Reveal direction="up" delay={0.3}>
              <div className="group relative flex flex-col sm:flex-row gap-6 sm:gap-10 p-8 sm:p-10 -mx-8 sm:-mx-10 rounded-3xl transition-colors duration-500 hover:bg-[#f4f2ee]/60">
                <span className="font-serif text-[4rem] text-primary/10 sm:-mt-3 transition-colors duration-500 group-hover:text-[#6C8471]">01</span>
                <div className="pt-2">
                  <h3 className="font-serif text-[2.2rem] text-primary mb-4 leading-tight">
                    Artisanal <span className="italic text-secondary transition-colors duration-500 group-hover:text-[#6C8471]">Craftsmanship</span>
                  </h3>
                  <p className="text-[1.05rem] leading-relaxed text-primary/70 max-w-md">
                    Each product is delicately handcrafted using a premium melt-and-pour method. This gentle process perfectly preserves our rich botanical extracts and hydrating oils, ensuring your skin receives pure, uncompromised nourishment.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Divider */}
            <div className="h-px w-full bg-primary/10 ml-0 sm:ml-24 max-w-[80%] my-2"></div>

            {/* Feature 2 */}
            <Reveal direction="up" delay={0.4}>
              <div className="group relative flex flex-col sm:flex-row gap-6 sm:gap-10 p-8 sm:p-10 -mx-8 sm:-mx-10 rounded-3xl transition-colors duration-500 hover:bg-[#f4f2ee]/60">
                <span className="font-serif text-[4rem] text-primary/10 sm:-mt-3 transition-colors duration-500 group-hover:text-[#6C8471]">02</span>
                <div className="pt-2">
                  <h3 className="font-serif text-[2.2rem] text-primary mb-4 leading-tight">
                    Earth-to-Skin <span className="italic text-secondary transition-colors duration-500 group-hover:text-[#6C8471]">Sourcing</span>
                  </h3>
                  <p className="text-[1.05rem] leading-relaxed text-primary/70 max-w-md">
                    We source our clays and essential oils directly from ethical growers. From Kashmiri Saffron to Amazonian Rose Clay, we use only the most premium ingredients on earth.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Divider */}
            <div className="h-px w-full bg-primary/10 ml-0 sm:ml-24 max-w-[80%] my-2"></div>

            {/* Feature 3 */}
            <Reveal direction="up" delay={0.5}>
              <div className="group relative flex flex-col sm:flex-row gap-6 sm:gap-10 p-8 sm:p-10 -mx-8 sm:-mx-10 rounded-3xl transition-colors duration-500 hover:bg-[#f4f2ee]/60">
                <span className="font-serif text-[4rem] text-primary/10 sm:-mt-3 transition-colors duration-500 group-hover:text-[#6C8471]">03</span>
                <div className="pt-2">
                  <h3 className="font-serif text-[2.2rem] text-primary mb-4 leading-tight">
                    Zero <span className="italic text-secondary transition-colors duration-500 group-hover:text-[#6C8471]">Synthetics</span>
                  </h3>
                  <p className="text-[1.05rem] leading-relaxed text-primary/70 max-w-md">
                    No parabens, no phthalates, and absolutely no harsh sulfates. The captivating colors come from natural clays, ensuring an indulgent and safe cleansing experience.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Extra padding at bottom to allow scrolling past the sticky element smoothly */}
            <div className="h-20 lg:h-40"></div>

          </div>

        </div>
      </div>
    </section>
  );
}
