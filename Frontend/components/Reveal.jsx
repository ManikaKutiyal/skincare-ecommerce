"use client";

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Reveal({ children, width = "fit-content", height = "auto", delay = 0.25, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      scale: 1
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, height, overflow: "hidden" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        style={{ height: height === "100%" ? "100%" : "auto" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ImageReveal({ children, delay = 0.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative overflow-hidden w-full h-full">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: "0%" }}
        animate={isInView ? { y: "100%" } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: delay - 0.1 }}
        className="absolute inset-0 z-10 bg-primary"
      />
    </div>
  );
}
