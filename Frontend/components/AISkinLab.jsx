"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import Image from 'next/image';

export default function AISkinLab() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState(null);

  const startScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setAnalysisResult(null);
  };

  useEffect(() => {
    if (isScanning && scanProgress < 100) {
      const timer = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setIsScanning(false);
            setAnalysisResult({
              hydration: "88%",
              elasticity: "Optimal",
              concern: "Mild Sensitivity",
              recommendation: "Daily Gel Cleanser"
            });
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isScanning, scanProgress]);

  return (
    <section id="ai" className="relative py-24 sm:py-32 overflow-hidden bg-primary">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-highlight/10 blur-[120px]" />
      </div>

      <div className="section-shell relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Content side */}
          <div>
            <Reveal direction="right">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">AI Skin Lab v2.0</span>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.4}>
              <h2 className="font-serif text-[2.8rem] leading-[1.1] text-white sm:text-[3.8rem]">
                Precision Science, <br />
                <span className="italic text-secondary/90">Tailored for You</span>
              </h2>
            </Reveal>

            <Reveal direction="right" delay={0.6}>
              <p className="mt-8 text-[1.1rem] leading-relaxed text-white/70">
                Our proprietary AI analyzes 4,000+ data points on your skin to curate a clinical-grade ritual that evolves with your lifestyle.
              </p>
            </Reveal>

            <Reveal direction="right" delay={0.8}>
              <div className="mt-10 flex flex-wrap gap-10">
                <div className="flex flex-col gap-2">
                  <span className="text-2xl font-serif text-white">98%</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50">Accuracy Rate</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-2xl font-serif text-white">4k+</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50">Data Nodes</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-2xl font-serif text-white">Real-time</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50">Analysis</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={1}>
              <button 
                onClick={startScan}
                disabled={isScanning}
                className="mt-12 group relative overflow-hidden rounded-full border border-secondary/50 px-12 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-secondary hover:text-primary disabled:opacity-50"
              >
                {isScanning ? "Analyzing..." : "Start Virtual Scan"}
              </button>
            </Reveal>
          </div>

          {/* Scanner Visualization Side */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-center">
              <Reveal direction="left" delay={0.5}>
                <div className="relative aspect-[4/5] w-[300px] sm:w-[380px] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                  {/* The "Skin" Image */}
                  <Image 
                    src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800"
                    alt="AI Skin Lab Analysis"
                    fill
                    className="object-cover opacity-60 grayscale-[30%]"
                  />

                  {/* Scan Overlay */}
                  <AnimatePresence>
                    {isScanning && (
                      <motion.div 
                        initial={{ top: "-10%" }}
                        animate={{ top: "110%" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 z-20 h-1 bg-secondary shadow-[0_0_25px_5px_rgba(201,168,76,0.8)]"
                      />
                    )}
                  </AnimatePresence>

                  {/* Grid Overlay */}
                  <div className="absolute inset-0 z-10 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                  {/* Result Modal */}
                  <AnimatePresence>
                    {analysisResult && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="absolute inset-x-6 bottom-6 z-30 rounded-3xl border border-secondary/40 bg-primary/90 p-6 backdrop-blur-2xl"
                      >
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-4">Scan Complete</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[9px] uppercase text-white/40">Hydration</p>
                            <p className="font-serif text-lg text-white">{analysisResult.hydration}</p>
                          </div>
                          <div>
                            <p className="text-[9px] uppercase text-white/40">Elasticity</p>
                            <p className="font-serif text-lg text-white">{analysisResult.elasticity}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Status indicator during scan */}
                  {isScanning && (
                    <div className="absolute inset-0 z-30 flex items-center justify-center bg-primary/20">
                      <div className="text-center">
                        <div className="text-4xl font-serif text-white mb-2">{scanProgress}%</div>
                        <div className="text-[9px] uppercase tracking-[0.3em] text-secondary">Mapping Dermis...</div>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>

              {/* Side Stats / Secondary Visual */}
              <div className="hidden xl:flex flex-col gap-6">
                <Reveal direction="left" delay={0.7}>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md w-[220px]">
                    <div className="mb-4 h-1 w-12 bg-secondary/50" />
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Live Feed</p>
                    <p className="mt-2 font-serif text-white">Clinical Resolution</p>
                    <div className="mt-4 flex gap-1">
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <motion.div 
                          key={i}
                          animate={{ height: [10, 20, 10] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                          className="w-1 bg-secondary/30 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>
                <Reveal direction="left" delay={0.9}>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md w-[220px]">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Dermal Depth</p>
                    <p className="mt-2 font-serif text-white">4.2mm Analysis</p>
                    <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        animate={isScanning ? { width: "100%" } : { width: "40%" }}
                        className="h-full bg-highlight"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Decorative elements around the scanner */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full border border-secondary/20 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full border border-highlight/20" />
          </div>

        </div>
      </div>
    </section>
  );
}
