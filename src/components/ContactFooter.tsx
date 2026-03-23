import React from 'react';
import { motion } from 'framer-motion';

export const ContactFooter: React.FC = () => {
  return (
    <section id="contact" className="w-full min-h-[60vh] md:min-h-[80vh] bg-white dark:bg-[#000] text-black dark:text-white flex flex-col justify-center items-center relative overflow-hidden px-4 transition-colors">
      
      {/* Main Interactive Text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="font-serif text-[10vw] md:text-[10vw] leading-[0.9] tracking-tight mb-8">
          <span className="block text-gray-400 dark:text-gray-600">DROP ME</span>
          <span className="block text-black dark:text-white">AN EMAIL</span>
        </h2>
        
        <a 
          href="mailto:bhardwajharsh0312@gmail.com" 
          className="group relative inline-block"
        >
          <span className="font-sans text-xl md:text-3xl font-medium tracking-widest uppercase transition-colors duration-300 group-hover:text-gray-500 dark:group-hover:text-gray-400">
            bhardwajharsh0312@gmail.com
          </span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black dark:bg-white transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 origin-left" />
        </a>
      </div>

      <div className="absolute bottom-8 lg:bottom-12 left-0 w-full px-4 flex flex-col items-center gap-6 font-sans text-xs tracking-widest uppercase text-gray-700">
        <div className="flex flex-wrap justify-center gap-x-6 lg:gap-x-12 gap-y-4 font-bold text-gray-700 dark:text-gray-400">
          <a href="https://github.com/HA2345567" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/harsh-bhardwaj-0755192b9/" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
          <a href="/Harsh_Bhardwaj_RESUME.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Resume</a>
          <a href="https://x.com/harshuu369" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
          <a href="https://leetcode.com/u/Harsh_369/" className="hover:text-black dark:hover:text-white transition-colors">LeetCode</a>
        </div>

        <div className="flex justify-center w-full">
          <span className="normal-case tracking-wide opacity-80 text-center">Copyright © Harsh Bhardwaj • All rights reserved</span>
        </div>
      </div>
    </section>
  );
};
