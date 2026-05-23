"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Phone, 
  Link as LinkIcon, 
  BookOpen, 
  Award, 
  Briefcase, 
  Compass,
  ArrowRight
} from "lucide-react";

/* ==========================================================================
   1. CUSTOMIZABLE PORTFOLIO DATA (Edit this section to replace info)
   ========================================================================== */

const PORTFOLIO_METADATA = {
  name: "Your Name",
  role: "Creative Developer & Interaction Designer",
  bio: "Crafting digital experiences at the intersection of strategy, design, and analytics.",
  phone: "+61 000 000 000",
  email: "your.email@example.com",
  location: "Melbourne, VIC",
  linkedin: "https://linkedin.com/in/your-profile",
};

// 6 Projects (displayed as a clean 3-column, 2-row grid)
const PROJECTS = [
  {
    id: "proj1",
    title: "Marketing Internship",
    category: "Marketing Operations",
    description: "Supported the rollout of an Integrated Lead Management System (ILMS) to improve lead generation, tracking, and customer nurturing.",
    overview: `## Marketing Operations & Lead Management\n\nDuring my internship in India, I supported the rollout of an Integrated Lead Management System (ILMS) to improve lead generation, tracking, and customer nurturing. I conducted branch visits to analyse workflows, identify operational gaps, and recommend process improvements that enhanced system efficiency and alignment with business goals.\n\n## Data Analysis & Process Improvement\n\nI analysed operational data to generate insights that informed decisions and refined the ILMS. This work strengthened my skills in data analysis, problem-solving, and translating business requirements into practical process improvements.\n\n## Digital Marketing & Brand Communication\n\nI also contributed to social media communication initiatives focused on increasing audience engagement and strengthening brand visibility. Through this experience, I developed hands-on skills in marketing operations, CRM systems, digital marketing, and strategic communication.`,
    logo: "/logos/11.png", // Replace with your image asset path (dimensions 4:3 suggested)
    textColor: "text-white",
  },
  {
    id: "proj2",
    title: "Toyota “Make It Home” Campaign",
    category: "Integrated Advertising",
    description: "An integrated advertising campaign developed for Toyota Australia in collaboration with Saatchi & Saatchi.",
    overview: "Developed an emotionally driven campaign repositioning vehicle safety as a human centred value rather than a technical feature. Using an integrated marketing communications framework, the campaign targeted young professionals and family audiences through storytelling across digital and traditional media.",
    skills: "Advertising strategy · Integrated marketing communications · Brand storytelling · Audience segmentation · Campaign strategy · Creative communication · Consumer insights",
    logo: "/logos/12.png",
    textColor: "text-white",
  },
  {
    id: "proj3",
    title: "H&M Inventory Management & Decision Analytics",
    category: "Business Analytics",
    description: "A business analytics project focused on improving inventory forecasting and operational efficiency for H&M.",
    overview: "Analysed financial and inventory data from multiple sources alongside operational insights from an H&M store manager interview. Applied Regression Analysis, Hierarchical Clustering, and Monte Carlo Simulation to forecast demand, optimise stock allocation, and reduce inventory risks within fast fashion retail environments.",
    skills: "Data analytics · Predictive modelling · Business analytics · Inventory forecasting · Quantitative analysis · Strategic decision making · Excel · Data interpretation",
    logo: "/logos/Premium.png",
    textColor: "text-neutral-500", // Dark slate-grey text for white/light card backgrounds
  },
  {
    id: "proj4",
    title: "Dollarama × The Reject Shop Campaign",
    category: "Advertising & Strategy",
    description: "An advertising and brand repositioning campaign called “Feel Like a Billionaire” developed in response to Dollarama’s acquisition of The Reject Shop.",
    overview: "Conducted market research, competitor analysis, and consumer insight gathering to reposition discount retail as empowering rather than limiting. Developed the “Feel Like a Billionaire” campaign concept, transforming affordability into a premium and aspirational shopping experience. The campaign received first place recognition for its creative and strategic execution.",
    skills: "Advertising strategy · Brand repositioning · Consumer psychology · Retail marketing · Creative strategy · Market analysis · Campaign development · Consumer insights",
    logo: "/logos/Premium-2.png",
    textColor: "text-white",
  },
  {
    id: "placeholder1",
    title: "Future Project",
    category: "Coming Soon",
    description: "Detailed case study will be published here shortly.",
    logo: null,
    textColor: "text-white",
  },
  {
    id: "placeholder2",
    title: "Future Project",
    category: "Coming Soon",
    description: "Detailed case study will be published here shortly.",
    logo: null,
    textColor: "text-white",
  }
];

// alternating compact vertical timeline
const EXPERIENCES = [
  {
    id: 1,
    role: "Marketing Analyst Intern",
    company: "Airtel",
    period: "Sep 2023 – Nov 2023",
    description: "Supported the rollout of an Integrated Lead Management System (ILMS) to improve lead generation, tracking, and customer nurturing. Conducted branch visits to identify operational gaps, analysed data to generate actionable insights, and supported digital marketing initiatives to increase brand visibility.",
  },
  {
    id: 2,
    role: "President of Delhi University Chapter",
    company: "Kailash Satyarthi Children's Foundation",
    period: "Jul 2021 – Jul 2022",
    description: "Led and organized a university chapter supporting child rights campaigns. Spearheaded advocacy initiatives, mobilized student volunteers, and coordinated public outreach to strengthen awareness and community engagement.",
  }
];

// Column 1: Key Achievements
const ACHIEVEMENTS = [
  "Strategic Leadership: Spearheaded projects coordinating cross-functional teams to align brand communication and operations.",
  "Analytical Problem-Solving: Applied predictive modeling and regression analysis to optimize processes and drive data-informed decisions.",
  "Innovative Brand Strategy: Developed award-winning campaigns translating consumer insights into premium, human-centric strategies."
];

// Column 2: Education Stack
const EDUCATION = [
  {
    degree: "Master of Management (Marketing)",
    school: "The University of Melbourne",
    period: "2024 - 2025"
  },
  {
    degree: "Executive Program in Public Policy",
    school: "Amity University",
    period: "2022 - 2023"
  },
  {
    degree: "B.A. (Hons.) Political Science",
    school: "Delhi University",
    period: "2019 - 2022"
  }
];

// Column 3: Certifications List
const CERTIFICATIONS = [
  {
    title: "Business Analytics Certificate",
    school: "The University of British Columbia"
  },
  {
    title: "Project Management Certificate",
    school: "University of California, Berkeley"
  }
];


/* ==========================================================================
   2. CORE IMPLEMENTATION (Single-File Boilerplate Component)
   ========================================================================== */

const smoothTransition = {
  type: "spring",
  stiffness: 300,
  damping: 32,
  mass: 0.8
} as const;

// Simple custom markdown renderer for ## headers and body texts
const renderContent = (text: string) => {
  if (!text) return null;
  return text.split('\n\n').map((paragraph, index) => {
    const trimmed = paragraph.trim();
    if (trimmed.startsWith('## ')) {
      return (
        <h4 key={index} className="text-white text-lg font-bold mt-6 mb-2 tracking-tight">
          {trimmed.replace('## ', '')}
        </h4>
      );
    }
    return (
      <p key={index} className="text-neutral-400 leading-relaxed text-sm md:text-base font-light">
        {trimmed}
      </p>
    );
  });
};

export default function CompletePortfolioTemplate() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (selectedId) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  }, [selectedId]);

  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans selection:bg-amber-200/30 selection:text-white">
      
      {/* ----------------------------------------------------
          HERO / WORK INTRO SECTION
          ---------------------------------------------------- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 border-b border-white/5 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-start gap-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-200 uppercase tracking-[0.3em] font-semibold text-xs md:text-sm"
          >
            Portfolio & Case Studies
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight max-w-4xl text-white"
          >
            {PORTFOLIO_METADATA.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-3xl text-neutral-400 font-light max-w-2xl leading-relaxed mt-2"
          >
            {PORTFOLIO_METADATA.role} — {PORTFOLIO_METADATA.bio}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6"
          >
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-6 py-3.5 bg-amber-200 text-neutral-900 rounded-full font-semibold hover:bg-white hover:scale-105 transition-all"
            >
              Explore Selected Work 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ----------------------------------------------------
          PROJECTS SECTION (Bento Grid 3x2 Layout + Ambient Modals)
          ---------------------------------------------------- */}
      <section id="projects" className={`relative bg-[#121212] py-32 px-6 md:px-12 lg:px-24 transition-all duration-300 border-b border-white/5 ${selectedId ? "z-50" : "z-20"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Selected Projects
            </h2>
            <p className="mt-4 text-xs md:text-sm tracking-[0.3em] uppercase text-neutral-500">
              A curated collection of marketing, advertising, and business analytics
            </p>
          </motion.div>

          {/* Grid Layout - 3 Cols Desktop, Aspect 4:3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                layoutId={`card-container-${project.id}`}
                transition={smoothTransition}
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-[2rem] cursor-pointer relative overflow-hidden group flex items-center justify-center p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-0" />
                
                {/* Overlay Text on Hover */}
                <div className={`absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col gap-1 ${project.textColor}`}>
                  <p className="font-semibold tracking-[0.2em] uppercase text-[9px] md:text-[10px] opacity-60">
                    {project.category}
                  </p>
                  <p className="font-bold text-sm md:text-base mt-0.5 tracking-tight">
                    {project.title}
                  </p>
                </div>

                {/* View Details Button */}
                <div className={`absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10 ${project.textColor}`}>
                  <span className="flex items-center gap-1.5 text-xs font-semibold">
                    View Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                
                {/* Logo Card Image */}
                <motion.div layoutId={`image-container-${project.id}`} className="absolute inset-0 z-0 w-full h-full">
                  {project.logo ? (
                    <img 
                      src={project.logo} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5">
                      <div className="w-24 h-24 rounded-full border-4 border-dashed animate-[spin_10s_linear_infinite] border-white/30" />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal Window overlay */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-12 pointer-events-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Container */}
              <motion.div
                layoutId={`card-container-${selectedProject.id}`}
                transition={smoothTransition}
                className="relative w-full max-w-5xl h-[85vh] max-h-[800px] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row bg-[#121212] shadow-2xl border border-white/5"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className={`absolute top-6 right-6 z-50 p-3 bg-black/20 hover:bg-black/35 backdrop-blur-md rounded-full transition-colors ${selectedProject.textColor}`}
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Left Side: Ambient blurred background + Sharp Contain Overlay */}
                <div className="w-full md:w-1/2 h-2/5 md:h-full relative overflow-hidden bg-black/20 flex items-center justify-center p-8">
                  <motion.div layoutId={`image-container-${selectedProject.id}`} className="absolute inset-0 z-0 w-full h-full">
                    {selectedProject.logo ? (
                      <>
                        {/* Soft background halo blur */}
                        <img 
                          src={selectedProject.logo} 
                          alt="" 
                          className="w-full h-full object-cover blur-2xl opacity-30 select-none pointer-events-none absolute inset-0"
                        />
                        {/* Complete non-cropped sharp foreground overlay */}
                        <img 
                          src={selectedProject.logo} 
                          alt={selectedProject.title} 
                          className="w-full h-full object-contain relative z-10"
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white/5 absolute inset-0">
                        <div className="w-32 h-32 rounded-full border-4 border-dashed animate-[spin_10s_linear_infinite] border-white/30" />
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Right Side: Scrollable detailed explanation panel */}
                <div className="w-full md:w-1/2 h-3/5 md:h-full bg-[#121212] p-8 md:p-12 lg:p-16 flex flex-col justify-start gap-6 overflow-y-auto">
                  <div className="mt-8 md:mt-12">
                    <span className="text-amber-200 font-semibold tracking-widest uppercase text-xs md:text-sm">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mt-2 tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="w-12 h-1 bg-amber-200 rounded-full" />

                  <p className="text-neutral-300 text-lg md:text-xl leading-relaxed font-light">
                    {selectedProject.description}
                  </p>

                  {selectedProject.overview && (
                    <div className="mt-2 flex flex-col gap-4">
                      {renderContent(selectedProject.overview)}
                    </div>
                  )}

                  {selectedProject.skills && (
                    <div className="mt-4">
                      <h4 className="text-white text-sm uppercase tracking-wider font-semibold mb-2">Skills Demonstrated</h4>
                      <p className="text-amber-200/80 leading-relaxed text-sm md:text-base">
                        {selectedProject.skills}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* ----------------------------------------------------
          EXPERIENCE SECTION (Alternating Compact Timeline Layout)
          ---------------------------------------------------- */}
      <section className="relative bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">Work Experience</h2>
            <div className="w-12 h-1 bg-amber-200 rounded-full mx-auto mt-4" />
          </motion.div>

          <div className="relative border-l border-white/10 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[1px] md:before:bg-white/10 flex flex-col gap-10">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full pl-6 md:pl-0">
                  
                  {/* Alternating Left Side */}
                  <div className={`w-full md:w-[45%] flex flex-col ${isEven ? "md:items-end md:text-right" : "md:order-2 md:items-start md:text-left"}`}>
                    <span className="text-xs text-amber-200 font-semibold tracking-wider uppercase mb-1 block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-neutral-400 mt-1">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-neutral-500 font-light mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Bullet Center Indicator */}
                  <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] w-3.5 h-3.5 rounded-full bg-[#121212] border-2 border-amber-200 z-10" />

                  {/* Empty Spacer side to balance layout on desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          ABOUT & CREDENTIALS SECTION (Three-Column Layout System)
          ---------------------------------------------------- */}
      <section className="bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Column 1: Key Achievements */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-200/10 rounded-lg text-amber-200">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Key Achievements</h3>
              </div>
              <div className="w-12 h-1 bg-amber-200 rounded-full" />
              <div className="flex flex-col gap-5 mt-2">
                {ACHIEVEMENTS.map((ach, i) => {
                  const [title, desc] = ach.split(":");
                  return (
                    <div key={i} className="flex flex-col gap-1 border-l-2 border-amber-200/30 pl-4 py-0.5">
                      <h4 className="text-sm font-bold text-neutral-200">{title}</h4>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Column 2: Education Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-200/10 rounded-lg text-amber-200">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Education</h3>
              </div>
              <div className="w-12 h-1 bg-amber-200 rounded-full" />
              <div className="flex flex-col gap-4 mt-2">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-200/20 transition-all flex flex-col gap-1">
                    <p className="text-xs text-amber-200 font-semibold tracking-wider">{edu.period}</p>
                    <h4 className="text-sm font-bold text-white leading-tight">{edu.degree}</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">{edu.school}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Column 3: Certifications List */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-200/10 rounded-lg text-amber-200">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Credentials</h3>
              </div>
              <div className="w-12 h-1 bg-amber-200 rounded-full" />
              <div className="flex flex-col gap-4 mt-2">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-200/20 transition-all flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-white leading-tight">{cert.title}</h4>
                    <p className="text-xs text-neutral-400 mt-1">{cert.school}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          FOOTER / CONNECT SECTION (Premium Bento Contact Cards)
          ---------------------------------------------------- */}
      <footer className="relative bg-[#121212] pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
        {/* Glow ambient accent light */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start md:items-center text-left md:text-center"
          >
            <span className="text-sm font-semibold tracking-widest text-amber-200 uppercase mb-4 block">
              Get in touch
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Let&apos;s build something <span className="italic font-light">together.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 font-light max-w-xl">
              Always open to discussing new projects, creative strategies, or opportunities to collaborate.
            </p>
          </motion.div>

          {/* Grid Contact Block - 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Contact Card: Phone */}
            <motion.a
              href={`tel:${PORTFOLIO_METADATA.phone.replace(/\s+/g, '')}`}
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
                <p className="text-lg text-white font-medium group-hover:text-white transition-colors">{PORTFOLIO_METADATA.phone}</p>
              </div>
            </motion.a>

            {/* Contact Card: Email */}
            <motion.a
              href={`mailto:${PORTFOLIO_METADATA.email}`}
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
                <p className="text-lg text-white font-medium group-hover:text-white transition-colors truncate">{PORTFOLIO_METADATA.email}</p>
              </div>
            </motion.a>

            {/* Contact Card: Location */}
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
                <p className="text-lg text-white font-medium group-hover:text-white transition-colors">{PORTFOLIO_METADATA.location}</p>
              </div>
            </motion.div>

            {/* Contact Card: LinkedIn */}
            <motion.a
              href={PORTFOLIO_METADATA.linkedin}
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
                <LinkIcon className="w-6 h-6 text-neutral-400 group-hover:text-amber-200 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 uppercase tracking-widest mb-1">Social</p>
                <p className="text-lg text-white font-medium group-hover:text-white transition-colors">LinkedIn</p>
              </div>
            </motion.a>

          </div>

          <div className="flex flex-col items-center justify-center pt-8 border-t border-white/10 text-neutral-500 text-sm">
            <p>© {new Date().getFullYear()} {PORTFOLIO_METADATA.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
