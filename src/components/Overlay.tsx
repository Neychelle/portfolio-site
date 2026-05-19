"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Scroll Indicator: Fades out quickly
  const opacityScroll = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], [100, -100]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.9], [100, -100]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
            Neychelle Tyrone Ouseph.
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-neutral-300 font-light tracking-wide drop-shadow-md">
            Built on Psychology. Driven by Strategy. Powered by Creativity.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: opacityScroll }}
          className="absolute bottom-10 left-0 w-full flex flex-col items-center justify-center gap-2 pointer-events-none"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-400">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-neutral-400" />
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-10 md:px-32"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl drop-shadow-lg leading-tight">
            I build digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">experiences.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-10 md:px-32 text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl drop-shadow-lg leading-tight">
            Welcome to my <br />
            <span className="italic font-light">portfolio.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
