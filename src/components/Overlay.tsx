'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay({ scrollContainer }: { scrollContainer: React.RefObject<HTMLDivElement> }) {
  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start start", "end end"]
  });

  // Opacities for the 3 sections based on scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  
  // Parallax translating Y for a smooth floating/moving effect
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.8], [50, -50]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-10 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
      
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-x-0 w-full flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4">
          Gamil Jacob.
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-light tracking-[0.2em] uppercase">
          Full Stack Developer
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-x-0 w-full flex flex-col items-start justify-center px-6 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 max-w-2xl leading-[1.1]">
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">scalable web apps</span>.
        </h2>
        <p className="text-lg md:text-2xl text-white/50 max-w-md font-light leading-relaxed">
          Leveraging the MERN stack and modern technologies to craft robust, impact-driven solutions.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-x-0 w-full flex flex-col items-end justify-center px-6 md:px-24 text-right"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 max-w-2xl leading-[1.1]">
          Bridging logic and <br/>
          <span className="italic font-light text-white/70">performance.</span>
        </h2>
        <p className="text-lg md:text-2xl text-white/50 max-w-md font-light ml-auto leading-relaxed">
          Experienced in solving complex problems, building seamless REST APIs, and optimizing databases.
        </p>
      </motion.div>

    </div>
  );
}
