"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#121212] pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-900/40/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-24">
        
        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start md:items-center text-left md:text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-amber-200 uppercase mb-4 block">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Let's build something <span className="italic font-light">together.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-xl">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Phone */}
          <motion.a
            href="tel:+61450853699"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-amber-300/5 hover:border-amber-300/30 transition-all group"
          >
            <div className="p-3 bg-white/5 rounded-full w-fit group-hover:bg-amber-300/20 group-hover:text-amber-200 transition-colors">
              <Phone className="w-6 h-6 text-neutral-400 group-hover:text-amber-200 transition-colors" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-widest mb-1">Phone</p>
              <p className="text-lg text-white font-medium group-hover:text-white transition-colors">+61 450 853 699</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:neychelle.ouseph09@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-amber-300/5 hover:border-amber-300/30 transition-all group"
          >
            <div className="p-3 bg-white/5 rounded-full w-fit group-hover:bg-amber-300/20 group-hover:text-amber-200 transition-colors">
              <Mail className="w-6 h-6 text-neutral-400 group-hover:text-amber-200 transition-colors" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-widest mb-1">Email</p>
              <p className="text-lg text-white font-medium group-hover:text-white transition-colors truncate">neychelle.ouseph09@gmail.com</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-amber-300/5 hover:border-amber-300/30 transition-all group cursor-default"
          >
            <div className="p-3 bg-white/5 rounded-full w-fit group-hover:bg-amber-300/20 group-hover:text-amber-200 transition-colors">
              <MapPin className="w-6 h-6 text-neutral-400 group-hover:text-amber-200 transition-colors" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-widest mb-1">Location</p>
              <p className="text-lg text-white font-medium group-hover:text-white transition-colors">3000 Melbourne, VIC</p>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/neychelle-tyrone-ouseph-586350301/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-amber-300/5 hover:border-amber-300/30 transition-all group relative"
          >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 text-amber-200" />
            </div>
            <div className="p-3 bg-white/5 rounded-full w-fit group-hover:bg-amber-300/20 group-hover:text-amber-200 transition-colors">
              <Link className="w-6 h-6 text-neutral-400 group-hover:text-amber-200 transition-colors" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-widest mb-1">Social</p>
              <p className="text-lg text-white font-medium group-hover:text-white transition-colors">LinkedIn</p>
            </div>
          </motion.a>

        </div>

        <div className="flex flex-col items-center justify-center pt-8 border-t border-white/10 text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Neychelle Tyrone Ouseph. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
