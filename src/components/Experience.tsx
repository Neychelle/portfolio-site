"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EXPERIENCES = [
  {
    company: "Independent Grocers of Australia",
    location: "Melbourne",
    period: "2025–Present",
    role: "Retail and Customer Experience Assistant",
  },
  {
    company: "iAthletic",
    location: "Melbourne",
    period: "2024–2025",
    role: "Retail Assistant",
  },
  {
    company: "Salvos Advertising & Marketing Pvt Ltd",
    location: "New Delhi, India",
    period: "2023",
    role: "Marketing Executive",
  },
  {
    company: "Airtel",
    location: "India",
    period: "2023",
    role: "Marketing Intern",
  },
  {
    company: "Techvire",
    location: "India",
    period: "2023",
    role: "Digital Marketing Intern",
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative z-20 bg-[#121212] min-h-screen py-16 md:py-24 overflow-hidden border-t border-white/5">
      {/* Parallax Background Glow */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-900/40/20 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Experience.
          </h2>
          <p className="mt-4 text-lg text-neutral-400 font-light max-w-2xl mx-auto">
            A journey through diverse roles, building a foundation in marketing, customer relations, and strategic growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-amber-300/50 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-4 md:gap-6">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                  
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#121212] border-2 border-amber-200 z-10 group-hover:scale-150 group-hover:bg-amber-200 group-hover:shadow-[0_0_20px_rgba(253,230,138,0.6)] transition-all duration-500" />

                  {/* Left Content */}
                  <div className={`w-full md:w-[48%] ${isEven ? 'md:text-right md:pr-10' : 'md:order-2 md:pl-10'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                      className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group-hover:bg-white/[0.04] group-hover:border-amber-300/30 transition-all duration-500"
                    >
                      <span className="text-xs font-semibold tracking-widest text-amber-200 uppercase block mb-2">
                        {exp.period}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-base md:text-lg text-neutral-300 font-medium leading-snug">
                        {exp.company}
                      </p>
                      <p className="text-sm text-neutral-500 mt-1">
                        {exp.location}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty space for the other side on Desktop */}
                  <div className={`hidden md:block w-[48%] ${isEven ? 'md:order-2' : ''}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
