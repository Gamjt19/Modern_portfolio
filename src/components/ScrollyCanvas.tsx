'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion';

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas({ scrollContainer }: { scrollContainer: React.RefObject<HTMLDivElement> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start start", "end end"]
  });
  
  // Transform scroll progress (0-1) to frame index (0-119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all images
    const loadedImages: HTMLImageElement[] = [];
    let internalLoadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, '0');
      // e.g. frame_000_delay-0.066s.png
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
      img.onload = () => {
        internalLoadedCount++;
        setLoadedCount(internalLoadedCount);
        
        if (internalLoadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setIsReady(true);
          // Draw first frame once loaded
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx && loadedImages[0]) {
              drawCanvas(ctx, loadedImages[0], canvasRef.current.width, canvasRef.current.height);
            }
          }
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Update canvas on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length === FRAME_COUNT && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const img = images[Math.floor(latest)];
      if (ctx && img) {
        requestAnimationFrame(() => {
          if (canvasRef.current) {
            drawCanvas(ctx, img, canvasRef.current.width, canvasRef.current.height);
          }
        });
      }
    }
  });

  // Handle resize and draw helper (object-fit cover logic)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      if (images.length > 0) {
        const ctx = canvas.getContext('2d');
        const img = images[Math.floor(frameIndex.get())];
        if (ctx && img) {
           drawCanvas(ctx, img, canvas.width, canvas.height);
        }
      }
    };

    window.addEventListener('resize', resize);
    resize(); // Initial resize

    return () => window.removeEventListener('resize', resize);
  }, [images, frameIndex]);

  const drawCanvas = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvasWidth: number, canvasHeight: number) => {
    // object-fit cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const progress = Math.round((loadedCount / FRAME_COUNT) * 100);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
      <AnimatePresence>
        {!isReady && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
          >
            {/* Minimalist Progress Meter */}
            <div className="relative flex flex-col items-center">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-8xl md:text-[12rem] font-bold tracking-tighter text-white/10 selection:bg-transparent"
              >
                {progress.toString().padStart(2, '0')}
              </motion.span>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 md:pt-16">
                 <p className="text-[10px] md:text-xs text-white/40 tracking-[0.5em] uppercase font-light mb-4">
                  Synchronizing Assets
                </p>
                <div className="w-48 h-[1px] bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-white/40"
                  />
                </div>
              </div>
            </div>

            {/* Subtle background noise/gradient could be added here if needed */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
}
