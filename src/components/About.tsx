"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Presentation, Users, Briefcase } from "lucide-react";

const SKILLS = [
  { name: "Canva", level: "Proficient", percentage: 90 },
  { name: "Microsoft Project", level: "Proficient", percentage: 90 },
  { name: "Microsoft Excel", level: "Proficient", percentage: 90 },
  { name: "CapCut", level: "Advanced", percentage: 85 },
  { name: "Salesforce", level: "Intermediate", percentage: 65 },
  { name: "SEMrush", level: "Intermediate", percentage: 60 },
  { name: "Mailchimp", level: "Intermediate", percentage: 65 },
];

const EDUCATION = [
  {
    period: "2024–2025",
    institution: "University of Melbourne",
    degree: "Masters of Management (Marketing)",
    achievement: "Awarded a 50% Dean’s Scholarship by the Faculty of Business and Economics"
  },
  {
    period: "2022–2023",
    institution: "Amity University, Uttar Pradesh",
    degree: "Post Graduate Diploma in Counselling Psychology",
    achievement: "Graduated with top academic standing in Counselling Psychology in the entire cohort"
  },
  {
    period: "2019–2022",
    institution: "Jesus and Mary College, University of Delhi",
    degree: "Bachelor’s of Arts (Honours) in Psychology",
    achievement: "Graduated with top academic standing (overall course topper) in Psychology Honours with a CGPA of 9.04. Wrote a dissertation on “School Teachers' Well-Being during the Pandemic” during my undergrad."
  }
];

const CERTIFICATIONS = [
  {
    institution: "Copenhagen Business School, Coursera",
    course: "Consumer Neuroscience & Neuromarketing",
  },
  {
    institution: "University of California Berkeley, edX",
    course: "Professional Certificate in the Science of Happiness at Work",
  },
  {
    institution: "University of British Columbia, Vancouver, edX",
    course: "Certificate in Introduction to Marketing",
  }
];

const ACHIEVEMENTS = [
  {
    title: "Dean's Scholarship",
    description: "Awarded the 50% Academic Scholarship by the Dean of the Faculty of Business and Economics at Melbourne Business School in recognition of academic excellence and high achievement.",
    icon: TrendingUp,
  },
  {
    title: "1st Place Pitch Winner",
    description: "Won first place for the “Feel Like a Billionaire” advertising campaign pitch developed for Dollarama × The Reject Shop.",
    icon: Trophy,
  },
  {
    title: "Consistent High Distinctions",
    description: "Maintained top grades across marketing, analytics, advertising, and consumer behaviour projects.",
    icon: Presentation,
  },
  {
    title: "Leadership Roles",
    description: "Led multiple academic and collaborative projects, recognized for strong initiative and team coordination.",
    icon: Users,
  },
  {
    title: "Airtel Industry Experience",
    description: "Gained foundational industry experience at Airtel, a leading telecommunications company in India.",
    icon: Briefcase,
  }
];

export default function About() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column: Education & Skills */}
        <div className="flex flex-col gap-16">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-8">
              Education
            </h2>
            <div className="flex flex-col gap-6">
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative group p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col gap-2">
                    <span className="text-sm font-medium tracking-widest text-amber-200 uppercase">
                      {edu.period}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight group-hover:text-white transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-base md:text-lg text-neutral-300">
                      {edu.degree}
                    </p>
                    <div className="w-8 h-[1px] bg-neutral-700 my-3 group-hover:w-16 group-hover:bg-amber-300/50 transition-all duration-500" />
                    <p className="text-sm text-neutral-400 leading-relaxed italic group-hover:text-neutral-300 transition-colors duration-300">
                      {edu.achievement}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-8">
              Technical Tools
            </h2>
            <div className="flex flex-col gap-6">
              {SKILLS.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2 group">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-200 font-medium text-[15px] group-hover:text-white transition-colors">{skill.name}</span>
                    <span className="text-neutral-500 uppercase tracking-wider text-xs group-hover:text-amber-200 transition-colors">{skill.level}</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-amber-200 rounded-full group-hover:shadow-[0_0_12px_rgba(253,230,138,0.7)] transition-shadow duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column: Achievements */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white">
              Key Achievements
            </h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {ACHIEVEMENTS.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] hover:bg-amber-300/[0.05] border border-white/5 hover:border-amber-300/30 transition-all duration-300 group cursor-default"
                >
                  <div className="mt-1 shrink-0 p-3 rounded-full bg-white/5 group-hover:bg-amber-300/20 group-hover:shadow-[0_0_15px_rgba(253,230,138,0.3)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-amber-200 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-semibold text-white tracking-tight group-hover:text-amber-100 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-neutral-400 leading-relaxed text-[15px] group-hover:text-neutral-300 transition-colors">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Certifications Moved to Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-8">
              Certifications
            </h2>
            <div className="flex flex-col gap-6 md:gap-8">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-amber-100 transition-colors">
                      {cert.course}
                    </h3>
                    <p className="text-sm text-amber-200/80 group-hover:text-amber-200 transition-colors">
                      {cert.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
