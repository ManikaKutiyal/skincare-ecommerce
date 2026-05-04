"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function LuxuryGlow() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ background: 'linear-gradient(110deg, #FFFFFF 0%, #FAFAF9 100%)' }}
    >
      {/* Golden Ambient Glow (Top Left - as per image) */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[20%] -left-[10%] h-[100%] w-[100%] rounded-full blur-[160px]"
        style={{
          background: 'radial-gradient(circle, #C5A059 0%, transparent 70%)',
        }}
      />

      {/* Tiny Purple Tint (Upper Mid) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[60%] w-[80%] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
        }}
      />

      {/* Soft Secondary Glow (Bottom Right) */}
      <div 
        className="absolute -bottom-[10%] -right-[10%] h-[80%] w-[80%] rounded-full opacity-[0.02] blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #1A1D36 0%, transparent 70%)',
        }}
      />

      {/* Subtle Grain/Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Vignette for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(26, 29, 54, 0.02) 100%)',
        }}
      />
    </div>
  );
}
