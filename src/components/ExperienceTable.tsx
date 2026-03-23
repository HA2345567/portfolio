import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface Experience {
  role: string;
  year: string;
  company: string;
  cgpa?: string; // Added cgpa as an optional property
}

const experiences: Experience[] = [
  { role: "Backend Developer Intern", year: "Dec 2024 - Jan 2025", company: "ADI Foundation" }
];

const education: Experience[] = [
  {
    role: "Electronics and Communication",
    year: "Sep 2023 - Aug 2027",
    company: "Maharaja SurajMal Institute Of Technology",
    cgpa: "8.84 (upto 5 sem)" // Added cgpa to the education entry
  }
];

export const ExperienceTable: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-40 bg-white dark:bg-[#000] text-black dark:text-white px-4 md:px-12 lg:px-20 transition-colors">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12">
          <h3 className="font-serif text-xl lg:text-2xl tracking-[0.1em] text-black dark:text-white font-bold border-b-[2px] border-black dark:border-white pb-2 inline-block">
            Experience
          </h3>
        </div>

        <div className="w-full border-t border-gray-200 dark:border-white/10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between py-12 lg:py-16 border-b border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-500 px-4 lg:px-6"
            >
              <div className="w-full lg:w-5/12 font-serif text-3xl md:text-4xl lg:text-5xl text-black dark:text-white leading-tight group-hover:italic transition-all duration-300">
                {exp.role}
              </div>
              <div className="w-full lg:w-3/12 font-sans text-md md:text-base tracking-widest text-gray-700 dark:text-gray-400 mt-6 lg:mt-0 uppercase font-medium">
                {exp.year}
              </div>
              <div className="w-full lg:w-4/12 flex justify-between items-center mt-6 lg:mt-0">
                <span className="font-sans text-xl lg:text-2xl font-bold text-black dark:text-white">{exp.company}</span>
                <div className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white dark:bg-black text-black dark:text-white">
                  <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 mb-12">
          <h3 className="font-serif text-xl lg:text-2xl tracking-[0.1em] text-black dark:text-white font-bold border-b-[2px] border-black dark:border-white pb-2 inline-block">
            Education
          </h3>
        </div>

        <div className="w-full border-t border-gray-200 dark:border-white/10">
          {education.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between py-12 lg:py-16 border-b border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-500 px-4 lg:px-6"
            >
              <div className="w-full lg:w-5/12 font-serif text-3xl md:text-4xl lg:text-5xl text-black dark:text-white leading-tight group-hover:italic transition-all duration-300">
                {exp.role}
              </div>
              <div className="w-full lg:w-3/12 font-sans text-sm md:text-base tracking-widest text-gray-700 dark:text-gray-400 mt-6 lg:mt-0 uppercase font-medium">
                {exp.year}
              </div>
              <div className="w-full lg:w-4/12 flex justify-between items-center mt-6 lg:mt-0">
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xl lg:text-2xl font-bold text-black dark:text-white">{exp.company}</span>
                  {exp.cgpa && (
                    <span className="font-sans text-[11px] lg:text-xs text-black dark:text-white uppercase tracking-[0.25em] font-extrabold bg-gray-100 dark:bg-white/10 w-fit px-3 py-1 rounded-sm mt-1">
                      CGPA: {exp.cgpa}
                    </span>
                  )}
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white dark:bg-black text-black dark:text-white">
                  <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
