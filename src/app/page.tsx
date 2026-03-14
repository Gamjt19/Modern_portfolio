'use client';

import React from 'react';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <main className="relative min-h-screen bg-[#121212] selection:bg-white/20 selection:text-white">
      {/* 800vh container for the scroll-linked sequence */}
      <div ref={containerRef} className="relative h-[800vh] w-full">
        <ScrollyCanvas scrollContainer={containerRef} />
        <Overlay scrollContainer={containerRef} />
      </div>
      
      <Timeline />
      
      {/* Projects grid seamlessly follows */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Subtle Noise Texture for premium aesthetic */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[100] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </main>
  );
}
