import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiDocker,
  SiKubernetes
} from 'react-icons/si';

const skills = [
  { name: "C++", icon: SiCplusplus },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "React.js", icon: SiReact },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
];



export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-24 md:py-40 bg-white dark:bg-[#000] text-black dark:text-white px-4 md:px-12 lg:px-20 transition-colors">
      <div className="max-w-screen-2xl mx-auto">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-6xl leading-[0.95] mb-24 md:mb-32 max-w-5xl"
        >
          Backend developer turning logic into reliable and scalable systems
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column: Intro & Skills */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-sans text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200">
                Hi, I'm Harsh—a backend developer passionate about crafting robust architecture and seamless digital experiences that do more than just function.
              </p>

              <div className="mt-10 flex gap-6">
                <a
                  href="/Harsh_Bhardwaj_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-sans text-sm md:text-base font-bold tracking-[0.2em] uppercase border-b-2 border-black dark:border-white pb-1 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 hover:border-gray-300 transition-colors"
                >
                  Download CV <Download size={18} />
                </a>
              </div>
            </motion.div>

            <div className="mt-12">
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gray-400 block mb-10">// Core Skills //</span>
              <ul className="grid grid-cols-2 gap-y-8 gap-x-12">
                {skills.map((skill, i) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.05) }}
                    className="flex items-center gap-6 font-serif text-2xl md:text-3xl border-b border-gray-100 dark:border-white/5 pb-6 group hover:border-black dark:hover:border-white transition-colors"
                  >
                    <skill.icon className="text-3xl text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <span>{skill.name}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Solana Ecosystem Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-24 pt-12 border-t border-gray-100 flex flex-col items-center"
              >
                {/* <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-10 text-center w-full block">// Ecosystem //</span> */}
                <div className="flex items-center gap-4 md:gap-5">
                  <img 
                    src="/projects_pics/solanaLogo.svg" 
                    alt="Solana Logo" 
                    className="h-10 md:h-12 w-auto" 
                  />
                  <img 
                    src="/projects_pics/solanaWordMark.svg" 
                    alt="Solana Wordmark" 
                    className="h-8 md:h-11 w-auto invert dark:hidden" 
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Philosophy & Image */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-sans text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-md ml-auto"
            >
              With a blend of deep technical knowledge and problem-solving skills, I build robust systems for optimal performance. Whether it's integrating complex APIs or developing scalable databases, my goal is to create reliable and secure foundational backend architecture for web apps. I thrive on overcoming challenging logic problems and optimizing systems at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full aspect-[4/5] overflow-hidden rounded-sm mt-auto flex items-center justify-center p-4 bg-white dark:bg-transparent shadow-sm dark:shadow-none border border-gray-50 dark:border-none transition-colors"
            >
              <img
                src="/legends/Alexgender_the_great.jpg"
                alt="Alexander on Horse"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
