import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

type ProjectCategory = 'All' | 'Full-stack' | 'Web3(SOLANA)' | 'DevOps';

interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'S. A. IMPEX',
    category: 'Full-stack',
    description: 'World-class garment accessories platform with complex international logistics management.',
    image: '/projects_pics/saimpex_new_front_page.png',
    tech: ['Node.js', 'React', 'MongoDB', 'Express'],
    github: '#'
  },
  {
    id: '02',
    title: 'SmartInvoice',
    category: 'Full-stack',
    description: 'A robust invoicing system for freelancers with JWT authentication and PDF generation.',
    image: '/projects_pics/SmartInvoice_01.png',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'JWT'],
    github: 'https://github.com/HA2345567/SmartInvoice'
  },
  {
    id: '03',
    title: 'Hungerbull',
    category: 'Full-stack',
    description: 'Enterprise food ordering platform supporting high volume daily orders and real-time tracking.',
    image: '/projects_pics/Hungerbull.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/HA2345567/Hungerbull'
  }
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-[#000] text-black dark:text-white transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 mix-blend-difference text-white">
        <Link to="/" className="flex items-center gap-2 text-sm font-sans tracking-widest uppercase hover:opacity-70 transition-opacity">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gray-500 block mb-6">// Showcase //</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-12">Projects</h1>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 md:gap-8 border-b border-gray-100 dark:border-white/10 pb-8">
          {(['All', 'Full-stack', 'Web3(SOLANA)', 'DevOps'] as ProjectCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-xs md:text-sm tracking-widest uppercase transition-all duration-300 relative pb-2 ${
                activeCategory === cat ? 'text-black dark:text-white font-bold' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </header>

      {/* Grid */}
      <main className="pb-32 px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col h-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/5 rounded-xl overflow-hidden hover:shadow-2xl dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.03)] transition-all duration-500"
              >
                {/* Image Placeholder/Thumbnail */}
                <div className="aspect-video overflow-hidden relative bg-gray-200 dark:bg-[#111]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 dark:bg-black/90 rounded-full text-black dark:text-white hover:scale-110 transition-transform">
                        <Github size={18} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 dark:bg-black/90 rounded-full text-black dark:text-white hover:scale-110 transition-transform">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-sans text-[10px] tracking-[0.2em] font-bold uppercase text-gray-500">
                      {project.category}
                    </span>
                    <span className="font-sans text-[10px] tracking-widest text-gray-400">
                      {project.id}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4 group-hover:italic transition-all">{project.title}</h3>
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-white/5">
                    {project.tech.map(t => (
                      <span key={t} className="font-sans text-[9px] tracking-widest uppercase px-2 py-1 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-40 border-2 border-dashed border-gray-100 dark:border-white/5 rounded-2xl flex flex-col items-center justify-center text-center px-6"
            >
              <h3 className="font-serif text-3xl text-gray-400 mb-4 italic">Upcoming creations...</h3>
              <p className="font-sans text-sm text-gray-500 max-w-xs">I'm currently architecting projects in this category. Stay tuned for more.</p>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer-lite */}
      <footer className="py-12 border-t border-gray-100 dark:border-white/10 text-center">
        <p className="font-sans text-[10px] tracking-widest uppercase opacity-50">
          Copyright © Harsh Bhardwaj • Building the Future of Backend
        </p>
      </footer>
    </div>
  );
};
