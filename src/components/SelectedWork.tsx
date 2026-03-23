import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  client: string;
  description: string;
  image?: string;
  video?: string;
  year: string;
}

const projects: Project[] = [
  {
    id: '01',
    client: 'S. A. IMPEX',
    description: 'S. A. IMPEX delivers world-class garment accessories, including premium buttons, zippers, buckles, hooks, rings, and adjusters for global fashion brands.',
    year: '2025',
    image: "/projects_pics/saimpex_new_front_page.png",
    video: "/vedioes/saimpex.mp4"
  },
  {
    id: '02',
    client: 'SmartInvoice',
    description: 'SmartInvoice is a modern invoicing web application designed to streamline billing for freelancers and small businesses.',
    year: '2025',
    image: "/projects_pics/SmartInvoice_01.png",
    video: "/vedioes/smartinvoice.mp4"
  },
  {
    id: '03',
    client: 'Food Ordering System',
    description: 'Enterprise-level food platform supporting 1000+ users and 100+ daily orders using Node.js, React, MongoDB, and Stripe.',
    year: '2025',
    image: "/projects_pics/Hungerbull.png",
    video: "/vedioes/food.mp4"
  }
];

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="w-full py-24 md:py-40 bg-white dark:bg-[#000] text-black dark:text-white px-4 md:px-12 lg:px-20 transition-colors">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-center text-black dark:text-white mb-12 tracking-tight">
            Selected Work
          </h2>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full"
            >
              {/* Left: Index & Client */}
              <div className="w-full lg:w-[20%] flex flex-col justify-between items-start gap-4 border-t lg:border-t-0 border-gray-200 dark:border-white/10 pt-8 lg:pt-0 h-full self-stretch">
                <div>
                  <span className="font-sans text-sm font-medium text-gray-700 dark:text-gray-300">
                    // {project.id}
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-5xl text-black dark:text-white mt-4 lg:mt-8 group-hover:italic transition-all duration-300 leading-tight">
                    {project.client}
                  </h3>
                </div>
                <span className="hidden lg:block mt-6 font-sans text-sm tracking-widest text-black dark:text-white uppercase">{project.year}</span>
              </div>

              {/* Center: Image or Video */}
              <Link to={`/case-study/${project.id}`} className="w-full lg:w-[55%] aspect-video overflow-hidden rounded-xl relative cursor-pointer bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-white/5 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                {project.video ? (
                  <motion.video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                ) : (
                  <motion.img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </Link>

              {/* Right: Description */}
              <div className="w-full lg:w-[25%] flex flex-col justify-center h-full min-h-[200px] lg:min-h-0 self-stretch">
                <p className="font-sans text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
                  {project.description}
                </p>
                <div className="mt-8 lg:mt-12">
                  <Link to={`/case-study/${project.id}`} className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase border-b-2 border-black dark:border-white pb-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 hover:border-gray-400 transition-all w-fit">
                    View Case <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
