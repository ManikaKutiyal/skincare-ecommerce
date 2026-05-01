"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const steps = [
  {
    id: 1,
    title: "Botanical Selection",
    description: "We traverse the globe to source resilient flora that thrive in extreme conditions, capturing their innate survival intelligence.",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=1200",
    detailImage: "https://images.unsplash.com/photo-1515633058414-820e1da088af?auto=format&fit=crop&q=80&w=600",
    tag: "Source"
  },
  {
    id: 2,
    title: "Clinical Precision",
    description: "In our labs, we molecularly refine these botanicals, enhancing their bio-availability through cold-press stabilization.",
    image: "https://images.unsplash.com/photo-1579154236594-e178f467127b?auto=format&fit=crop&q=80&w=1200",
    detailImage: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=600",
    tag: "Science"
  },
  {
    id: 3,
    title: "Ritualistic Results",
    description: "The final formulation is an ethereal texture that harmonizes with your skin's biology for immediate and lasting radiance.",
    image: "https://images.unsplash.com/photo-1611082216373-7c16b257d7dd?auto=format&fit=crop&q=80&w=1200",
    detailImage: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=600",
    tag: "Skin"
  }
];

export default function HorizontalStory() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-primary">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative h-screen w-screen flex-shrink-0 bg-primary"
            >
              <div className="section-shell relative z-10 flex h-full items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
                  
                  {/* Left Side: Text & Data */}
                  <div className="max-w-xl">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="mb-8 flex items-center gap-4"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-secondary">
                        The Method
                      </span>
                      <div className="h-[1px] w-16 bg-secondary/30" />
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="font-serif text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.95]"
                    >
                      {step.title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="mt-10 text-lg leading-relaxed text-white/60 sm:text-xl font-light"
                    >
                      {step.description}
                    </motion.p>

                    {/* Supplemental Data Panels */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="mt-12 flex flex-wrap gap-6"
                    >
                      {step.id === 2 ? (
                        <>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-secondary">Quality</p>
                            <p className="mt-1 font-serif text-2xl text-white">Clinical Grade</p>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-secondary">Method</p>
                            <p className="mt-1 font-serif text-2xl text-white">Cold-Stabilized</p>
                          </div>
                        </>
                      ) : step.id === 3 ? (
                        <>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-highlight">Hydration</p>
                            <p className="mt-1 font-serif text-2xl text-white">Intensive</p>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-highlight">Elasticity</p>
                            <p className="mt-1 font-serif text-2xl text-white">Radiance-Boost</p>
                          </div>
                        </>
                      ) : (
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                          <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Sourcing</p>
                          <p className="mt-1 font-serif text-2xl text-white">Rare Botanicals</p>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Right Side: Imagery */}
                  <div className="relative z-20">
                    <div 
                      className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    </div>

                    {/* Secondary Floating Image */}
                    <div 
                      className="absolute -bottom-10 -left-16 hidden xl:block h-64 w-48 rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-30"
                    >
                      <Image 
                        src={step.detailImage} 
                        alt="detail" 
                        fill 
                        className="object-cover brightness-90 scale-110" 
                      />
                      <div className="absolute inset-0 bg-primary/10" />
                    </div>

                    {/* Decorative Clinical Elements */}
                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full border border-secondary/20 animate-pulse" />
                    <div className="absolute top-1/2 -right-4 h-[1px] w-20 bg-secondary/40" />
                  </div>

                </div>
              </div>

              {/* Progress Bar for the whole section */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 section-shell">
                 <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      style={{ scaleX: scrollYProgress }}
                      className="h-full bg-secondary origin-left"
                    />
                 </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
