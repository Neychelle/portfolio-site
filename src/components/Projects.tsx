"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  overview?: string;
  skills?: string;
  logo: string | null;
  images?: string[];
  color: string;
  textColor: string;
};

const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Marketing Internship",
    category: "Marketing Operations",
    description: "Supported the implementation of an Integrated Lead Management System (ILMS) at Airtel to streamline lead generation, customer tracking, and sales pipeline efficiency across operational teams.",
    overview: `Supported the implementation of an Integrated Lead Management System (ILMS) at Airtel to streamline lead generation, customer tracking, and sales pipeline efficiency across operational teams.

•  Conducted branch level operational analysis and field visits to evaluate workflow effectiveness, identify system inefficiencies, and deliver process improvement recommendations aligned with organisational objectives.

•  Analysed operational and customer data to provide insight driven recommendations enhancing ILMS functionality, lead nurturing processes, and cross team coordination for improved business performance.

•  Contributed to social media communication and audience engagement strategies by developing content ideas and supporting digital brand visibility initiatives across customer facing platforms.`,
    skills: "CRM systems · Lead management · Data analysis · Operational analysis · Process improvement · Business communication · Social media marketing · Customer engagement · Strategic problem solving · Cross functional collaboration",
    logo: "/logos/11.png",
    color: "bg-transparent",
    textColor: "text-white",
  },
  {
    id: "proj2",
    title: "Toyota “Make It Home” Campaign",
    category: "Integrated Advertising",
    description: "",
    overview: `Created a “Make It Home” campaign alongside Saatchi & Saatchi, transforming ANCAP safety ratings into an emotionally driven campaign narrative designed to strengthen consumer trust and brand connection.

•  Designed OOH advertising placements, campaign moodboards, visual concepts, and integrated creative assets across cinema, social, and digital platforms to ensure consistent cross channel brand storytelling and audience engagement.

•  Analysed consumer behaviour, audience motivations, and automotive market trends to develop targeted messaging strategies tailored toward family oriented and young Australian consumer segments.

•  Synthesised competitor analysis, advertising research, and consumer insights into strategic campaign recommendations supporting Toyota’s positioning, creative differentiation, and stronger emotional resonance within the automotive market.`,
    skills: "Advertising strategy · Integrated marketing communications · Brand storytelling · Audience segmentation · Campaign strategy · Creative communication · Consumer insights",
    logo: "/logos/toyota_logo.jpg",
    images: ["/toyota/img1.png", "/toyota/img2.png", "/toyota/img3.png", "/toyota/img4.png", "/toyota/img5.png", "/toyota/img6.png"],
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
    overview: `•  Conceptualised and executed the “Feel Like a Billionaire” campaign for Dollarama × The Reject Shop, repositioning affordability as an aspirational and emotionally rewarding shopping experience.

•  Conducted in store research across multiple discount retailers, analysing consumer behaviour, competitor positioning, and shopping patterns to identify key perception gaps influencing Australian dollar store purchasing decisions.

•  Designed 10+ campaign assets including moodboards, OOH placements, advertising concepts, and integrated visual branding materials while scripting, shooting, and producing a fully developed campaign advertisement.

•  Developed cross channel messaging and strategic campaign recommendations contributing to a first place winning advertising pitch recognised for creativity, consumer insight, and innovative retail brand positioning.`,
    skills: "Advertising strategy · Brand repositioning · Consumer psychology · Retail marketing · Creative strategy · Market analysis · Campaign development · Consumer insights",
    logo: "/logos/dollarama_logo.webp",
    images: ["/dollarama/image1.jpg", "/dollarama/image2.png", "/dollarama/image3.webp"],
    color: "bg-transparent",
    textColor: "text-white",
  },
  {
    id: "proj5",
    title: "Salvos Advertising",
    category: "Marketing Internship",
    description: "A strategic marketing executive role executing brand communications, client relationship management, and multi-channel campaign strategies.",
    overview: `Supported the planning and execution of cinema advertising campaigns across multiplex chains and premium single screen theatres throughout India, coordinating campaign rollouts aligned with client objectives and audience targeting strategies.

•  Coordinated with cinema partners, media agencies, and advertisers to manage advertising placements, campaign schedules, vendor communication, and cross functional execution across multiple campaign touchpoints.

•  Assisted in media planning and audience analysis by identifying high traffic cinema locations aligned with brand demographics, campaign goals, and regional consumer engagement opportunities.

•  Prepared campaign proposals, rate comparisons, client presentations, and post campaign performance reports to support advertiser acquisition, campaign optimisation, and stakeholder communication.`,
    skills: "Media planning · Campaign coordination · Client communication · Advertising operations · Audience targeting · Vendor management · Presentation development · Strategic communication · Campaign reporting · Cross functional collaboration",
    logo: "/logos/salvos_logo.png",
    color: "bg-transparent",
    textColor: "text-neutral-500",
  },
  {
    id: "proj6",
    title: "Consumer Behaviour in the Dietary Supplements Market",
    category: "Consumer Research",
    description: "Conducted 20+ qualitative interviews and analysed survey responses from 151 participants to identify behavioural drivers influencing dietary supplement purchasing decisions among Australians aged 18–30.",
    overview: `Conducted 20+ qualitative interviews and analysed survey responses from 151 participants to identify behavioural drivers influencing dietary supplement purchasing decisions among Australians aged 18–30.

•  Analysed consumer attitudes surrounding digital trust, online reviews, influencer content, and health priorities to uncover key factors shaping purchasing confidence and long term brand trust.

•  Synthesised qualitative and quantitative research findings into strategic recommendations focused on ethical digital engagement, evidence based communication, and transparent brand positioning.

•  Interpreted behavioural data and consumer insights to evaluate the impact of social proof, scientific credibility, convenience, and digital marketing on supplement consumption behaviour.`,
    skills: "Consumer research · Qualitative interviewing · Survey analysis · Consumer psychology · Behavioural analysis · Digital marketing insights · Data interpretation · Market research · Strategic recommendations",
    logo: "/logos/supplement.png",
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
    if (trimmed.startsWith('•')) {
      return (
        <div key={index} className="flex items-start gap-3 my-2">
          <span className="text-amber-200 mt-1 select-none font-bold text-sm leading-none">•</span>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base font-light flex-1">
            {trimmed.replace(/^[•\s]+/, '')}
          </p>
        </div>
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
} as const;

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
              onClick={() => { setSelectedId(project.id); setCurrentImageIndex(0); }}
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
              <div className="w-full md:w-1/2 h-2/5 md:h-full relative overflow-hidden bg-black/20 flex items-center justify-center">
                <motion.div layoutId={`image-container-${selectedProject.id}`} className="absolute inset-0 z-0 w-full h-full">
                  {selectedProject.logo && (
                    <img 
                      src={selectedProject.logo} 
                      alt="" 
                      className="w-full h-full object-cover blur-2xl opacity-30 select-none pointer-events-none absolute inset-0"
                    />
                  )}
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-8 group">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          src={selectedProject.images[currentImageIndex]} 
                          alt={`${selectedProject.title} slide ${currentImageIndex + 1}`} 
                          className="w-full h-full object-contain"
                        />
                      </AnimatePresence>
                      
                      {selectedProject.images.length > 1 && (
                        <>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? selectedProject.images!.length - 1 : prev - 1); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-md z-20"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === selectedProject.images!.length - 1 ? 0 : prev + 1); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-md z-20"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {selectedProject.images.map((_, i) => (
                              <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                                className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : selectedProject.logo ? (
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                      <img 
                        src={selectedProject.logo} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
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

                {selectedProject.description && (
                  <p className="text-neutral-300 text-lg md:text-xl leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                )}

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
