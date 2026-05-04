"use client";

import React, { useRef, useState } from 'react';
import Reveal from './Reveal';

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-section">
      {/* Background radial gradients to match the rest of the skincare website seamlessly */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_circle_at_20%_60%,rgba(26,26,62,0.04)_0%,rgba(26,26,62,0)_58%)]" />

      <div className="section-shell relative z-10 text-center">
        
        <Reveal direction="up" delay={0.1} width="100%">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-secondary mb-6">
            The Campaign
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.2} width="100%">
          <h2 className="font-serif text-[3.2rem] sm:text-[4rem] lg:text-[4.5rem] text-primary mb-16 leading-[1.1]">
            Everyday Beauty. Luxurious Touch.
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.4} width="100%">
          <div 
            className="relative mx-auto w-full max-w-5xl aspect-[4/3] sm:aspect-[2.2/1] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#e7e6e3] to-[#d6d5d2] group cursor-pointer" 
            onClick={togglePlay}
          >
            {/* The video plays in the background when clicked, fading in */}
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
              src="https://videos.pexels.com/video-files/9698783/9698783-uhd_3840_2160_25fps.mp4"
              loop
              playsInline
            />
            
            {/* The exact layout of the placeholder from the screenshot */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${isPlaying ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100 z-10'}`}>
              
              <div className="relative flex items-center justify-center">
                {/* Main Play Button with subtle shadow matching the image */}
                <div className="flex h-24 w-24 sm:h-[100px] sm:w-[100px] items-center justify-center rounded-full bg-primary shadow-[0_10px_30px_rgba(26,26,62,0.15)] transition-transform duration-500 group-hover:scale-[1.03]">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 text-secondary translate-x-1" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Simple Text below */}
              <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.4em] text-primary">
                Watch the Film
              </p>
            </div>
            
          </div>
        </Reveal>

      </div>
    </section>
  );
}
