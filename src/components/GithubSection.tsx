import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

import { useTheme } from '../context/ThemeContext';

export const GithubSection: React.FC = () => {
  const { theme } = useTheme();
  const minimalTheme = {
    light: ['#f3f4f6', '#d1d5db', '#9ca3af', '#4b5563', '#111827'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section className="w-full py-20 bg-white dark:bg-[#000] text-black dark:text-white px-4 md:px-12 lg:px-20 border-t border-gray-100 dark:border-white/5 transition-colors">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="font-sans text-md tracking-[0.2em] uppercase text-gray-700 dark:text-gray-400 block mb-6">// Consistency //</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-4 text-black dark:text-white">
            Code Contributions
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-700 dark:text-gray-400">A visual representation of my daily coding activities.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center mt-8 overflow-x-auto px-4 py-8 bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 rounded-sm shadow-sm transition-colors"
        >
          <div className="min-w-fit">
            <GitHubCalendar
              username="HA2345567"
              colorScheme={theme}
              theme={minimalTheme}
              blockSize={14}
              blockMargin={6}
              fontSize={14}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
