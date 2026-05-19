"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  overview?: string;
  skills?: string;
  logo: string | null;
  color: string;
  textColor: string;
};

const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Marketing Internship",
    category: "Marketing Operations",
    description: "Supported the rollout of an Integrated Lead Management System (ILMS) to improve lead generation, tracking, and customer nurturing.",
    overview: `## Marketing Operations & Lead Management

During my internship with Airtel in India (September 2023 – November 2023), I supported the rollout of an Integrated Lead Management System (ILMS) to improve lead generation, tracking, and customer nurturing. I conducted branch visits to analyse workflows, identify operational gaps, and recommend process improvements that enhanced system efficiency and alignment with business goals.

## Data Analysis & Process Improvement

I analysed operational data to generate insights that informed decisions and refined the ILMS. This work strengthened my skills in data analysis, problem-solving, and translating business requirements into practical process improvements.

## Digital Marketing & Brand Communication

I also contributed to social media communication initiatives focused on increasing audience engagement and strengthening brand visibility. Through this experience, I developed hands-on skills in marketing operations, CRM systems, digital marketing, and strategic communication.`,
    logo: "/logos/11.png",
    color: "bg-transparent",
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
    color: "bg-transparent",
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
    color: "bg-transparent",
    textColor: "text-neutral-500",
  },
  {
    id: "proj4",
    title: "Dollarama × The Reject Shop Campaign",
    category: "Advertising & Strategy",
    description: "An advertising and brand repositioning campaign called “Feel Like a Billionaire” developed in response to Dollarama’s acquisition of The Reject Shop.",
    overview: "Conducted market research, competitor analysis, and consumer insight gathering to reposition discount retail as empowering rather than limiting. Developed the “Feel Like a Billionaire” campaign concept, transforming affordability into a premium and aspirational shopping experience. The campaign received first place recognition for its creative and strategic execution.",
    skills: "Advertising strategy · Brand repositioning · Consumer psychology · Retail marketing · Creative strategy · Market analysis · Campaign development · Consumer insights",
    logo: "/logos/Premium-2.png",
    color: "bg-transparent",
    textColor: "text-white",
  },
  {
    id: "placeholder1",
    title: "Future Project",
    category: "Coming Soon",
    description: "Detailed case study will be published here shortly.",
    logo: null,
    color: "bg-transparent",
    textColor: "text-white",
  },
  {
    id: "placeholder2",
    title: "Future Project",
    category: "Coming Soon",
    description: "Detailed case study will be published here shortly.",
    logo: null,
    color: "bg-transparent",
    textColor: "text-white",
  }
];

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

const smoothTransition = {
  type: "spring",
  stiffness: 300,
  damping: 32,
  mass: 0.8
};

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const selectedProject = PROJECTS.find(p => p.id === selectedId);

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
    <section className={`relative bg-[#121212] min-h-screen py-32 px-6 md:px-12 lg:px-24 transition-all duration-300 ${selectedId ? "z-50" : "z-20"}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            My Projects
          </h2>
          <p className="mt-4 text-sm tracking-[0.3em] uppercase text-neutral-500">
            Examples of my work
          </p>
        </motion.div>

        {/* Standard Grid Layout - 3 Cols, 2 Rows */}
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
              className={`aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-[2rem] cursor-pointer relative overflow-hidden group flex items-center justify-center p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-0" />
              
              {/* Overlay text on hover */}
              <div className={`absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col gap-1 ${project.textColor}`}>
                <p className="font-semibold tracking-[0.2em] uppercase text-[9px] md:text-[10px] opacity-60">
                  {project.category}
                </p>
                <p className="font-bold text-sm md:text-base mt-0.5 tracking-tight">
                  {project.title}
                </p>
              </div>

              {/* View Details button */}
              <div className={`absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10 ${project.textColor}`}>
                <span className="flex items-center gap-1.5 text-xs font-semibold">
                  View Details <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
              
              {/* Logo / Full Card Image */}
              <motion.div layoutId={`image-container-${project.id}`} className="absolute inset-0 z-0">
                {project.logo ? (
                  <img 
                    src={project.logo} 
                    alt={project.title} 
                    className="w-full h-full object-cover md:object-cover"
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

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-12 pointer-events-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`card-container-${selectedProject.id}`}
              transition={smoothTransition}
              className={`relative w-full max-w-5xl h-[85vh] max-h-[800px] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row ${selectedProject.color} shadow-2xl`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className={`absolute top-6 right-6 z-50 p-3 bg-black/10 hover:bg-black/20 backdrop-blur-md rounded-full transition-colors ${selectedProject.textColor}`}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Side: Large Full Image Area */}
              <div className="w-full md:w-1/2 h-2/5 md:h-full relative overflow-hidden bg-black/20 flex items-center justify-center p-8">
                <motion.div layoutId={`image-container-${selectedProject.id}`} className="absolute inset-0 z-0 w-full h-full">
                  {selectedProject.logo ? (
                    <>
                      {/* Ambient blurred background copy */}
                      <img 
                        src={selectedProject.logo} 
                        alt="" 
                        className="w-full h-full object-cover blur-2xl opacity-30 select-none pointer-events-none absolute inset-0"
                      />
                      {/* Sharp fully-visible foreground copy */}
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

              {/* Right Side: Details Area */}
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
  );
}
