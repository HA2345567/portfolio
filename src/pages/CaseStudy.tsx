import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ContactFooter } from '../components/ContactFooter';

// Mock Data Interface
interface ProjectData {
  id: string;
  title: string;
  category: string;
  heroImage: string;
  video?: string;
  description: string;
  details: {
    client: string;
    year: string;
    services: string;
  };
  images: string[];
}

// Data
const projects: ProjectData[] = [
  {
    id: '01',
    title: 'S. A. IMPEX',
    category: 'E-commerce & Trade Architecture',
    heroImage: '/projects_pics/saimpex_new_front_page.png',
    video: '/vedioes/saimpex.mp4',
    description: 'S. A. IMPEX delivers world-class garment accessories, including premium buttons, zippers, buckles, hooks, rings, and adjusters for global fashion brands. The digital platform is engineered to handle complex international logistics and global supply chain management with robust backend systems.',
    details: {
      client: 'S. A. IMPEX',
      year: 'Jan 2025',
      services: 'Backend Architecture, Supply Chain Systems, Logistics UI'
    },
    images: [
      '/projects_pics/saimpex_new_front_page.png'
    ]
  },
  {
    id: '02',
    title: 'SmartInvoice',
    category: 'Full-Stack Application',
    heroImage: '/projects_pics/SmartInvoice_01.png',
    video: '/vedioes/smartinvoice.mp4',
    description: 'A full-stack invoicing system designed to let freelancers send invoices in under 30 seconds. Features include secure JWT-based authentication, RESTful APIs for invoice generation and client management, and integrated dynamic PDF creation with templated email functionality.',
    details: {
      client: 'Personal Project',
      year: 'June 2025',
      services: 'Next.js, Node.js, PostgreSQL, Tailwind CSS'
    },
    images: [
      '/projects_pics/smart_inv_Dashbored.png',
      '/projects_pics/smart_inv_invoices.png',
      '/projects_pics/smart_inv_Analytics.png',
      '/projects_pics/smart_inv_color.png'
    ]
  },
  {
    id: '03',
    title: 'Enterprise Food Ordering',
    category: 'Web Platform',
    heroImage: '/projects_pics/Hungerbull.png',
    video: '/vedioes/food.mp4',
    description: 'A full-stack food ordering platform supporting 1000+ users and 100+ daily orders with real-time tracking. Includes JWT-based authentication, role-based access control, scalable REST APIs, Stripe for payments, and Cloudinary for optimized image uploads.',
    details: {
      client: 'Personal Project',
      year: 'Jan 2025',
      services: 'Node.js, React, MongoDB, Stripe'
    },
    images: []
  }
];

export const CaseStudy: React.FC = () => {
  const { id } = useParams();
  // Default to first project if ID not found or generic
  const project = projects.find(p => p.id === id) || projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white dark:bg-[#000] min-h-screen text-black dark:text-white transition-colors duration-500">
      {/* Navigation / Back Button */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 mix-blend-difference text-white">
        <Link to="/" className="flex items-center gap-2 text-sm font-sans tracking-widest uppercase hover:opacity-70 transition-opacity">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>

      {/* 1. Project Name Header */}
      <header className="pt-40 pb-20 px-4 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block font-sans text-xs tracking-[0.2em] text-gray-500 mb-6 uppercase">
            {project.category}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
            {project.title}
          </h1>
        </motion.div>
      </header>

      {/* 2. Full-width Hero Image */}
        <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full h-[60vh] md:h-[80vh] overflow-hidden bg-gray-50 dark:bg-[#111]"
      >
        {project.video ? (
          <video 
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>

      {/* 3. Project Details Text Section */}
      <section className="py-24 px-4 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="border-t border-gray-200 dark:border-white/10 pt-4">
              <span className="block font-sans text-xs text-gray-400 mb-1">Client</span>
              <span className="font-serif text-xl">{project.details.client}</span>
            </div>
            <div className="border-t border-gray-200 dark:border-white/10 pt-4">
              <span className="block font-sans text-xs text-gray-400 mb-1">Year</span>
              <span className="font-serif text-xl">{project.details.year}</span>
            </div>
            <div className="border-t border-gray-200 dark:border-white/10 pt-4">
              <span className="block font-sans text-xs text-gray-400 mb-1">Services</span>
              <span className="font-serif text-xl">{project.details.services}</span>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <p className="font-sans text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 dark:text-gray-200">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Vertical Stack of Images */}
      <section className="px-4 md:px-12 lg:px-20 pb-32 max-w-screen-2xl mx-auto flex flex-col gap-8 md:gap-16">
        {project.images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <img 
              src={img} 
              alt={`Project detail ${index + 1}`} 
              className="w-full h-auto object-cover rounded-sm"
            />
          </motion.div>
        ))}
      </section>

      {/* 5. More Projects Carousel */}
      <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors">
        <div className="px-4 md:px-12 lg:px-20 max-w-screen-2xl mx-auto mb-12 flex justify-between items-end">
          <h3 className="font-serif text-3xl md:text-4xl">More Projects</h3>
          <div className="flex gap-4">
            <ArrowRight className="text-gray-400" />
          </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-8 px-4 md:px-12 lg:px-20 pb-12 snap-x scrollbar-hide">
          {projects.map((p) => (
            <Link 
              to={`/case-study/${p.id}`} 
              key={p.id}
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-gray-100 dark:bg-[#111]">
                <img 
                  src={p.heroImage} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="font-serif text-2xl group-hover:underline text-black dark:text-white">{p.title}</h4>
              <span className="font-sans text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{p.category}</span>
            </Link>
          ))}
          {/* Placeholder for loop/extra items */}
          <div className="min-w-[5vw]"></div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
};
