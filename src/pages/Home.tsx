import React from 'react';
import { Link } from 'react-router-dom';
import { SocialLinks } from '../components/SocialLinks';
import { SelectedWork } from '../components/SelectedWork';
import { AboutSection } from '../components/AboutSection';
import { ExperienceTable } from '../components/ExperienceTable';
import { GithubSection } from '../components/GithubSection';
import { ContactFooter } from '../components/ContactFooter';
import { ThemeToggle } from '../components/ThemeToggle';
import { smoothScrollTo } from '../utils/scroll';

export const Home: React.FC = () => {
  // Fallback if hero_mask is missing, or update if found in a subfolder
  const BATMAN_IMG = "/hero.png"; 

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId, 1200); // 1.2s duration for "deliberate" feel
  };

  return (
    <div className="w-full bg-white dark:bg-[#000] overflow-x-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-500">

      {/* HERO SECTION - Rock-solid responsive grid */}
      <header className="relative w-full min-h-screen md:h-screen flex flex-col md:grid md:grid-cols-12 px-6 md:px-12 lg:px-20 xl:px-40 py-12 gap-12 md:gap-4 overflow-x-hidden pt-16 md:pt-12 max-w-[2200px] mx-auto transition-all">
        
        {/* Mobile Nav Top */}
        <nav className="md:hidden flex flex-row flex-wrap justify-center gap-6 mb-8 w-full z-30">
          {['About', 'Work', 'Contact', 'Projects'].map((item) => (
            <a
              key={item}
              href={item === 'Projects' ? '/projects' : `#${item.toLowerCase()}`}
              onClick={(e) => item !== 'Projects' && handleNavClick(e, item.toLowerCase())}
              className="text-[10px] font-sans tracking-[0.2em] font-bold text-black dark:text-white uppercase whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Left Column: Identity - md:h-full ensures no scroll on desktop, h-auto on mobile */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-between md:h-full z-20 order-1 md:order-1">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-serif text-[clamp(2.5rem,5vw,5rem)] lg:text-7xl xl:text-[6.5rem] leading-[0.85] tracking-tight text-black dark:text-white mb-8 transition-all">
              <span className="block italic">HARSH</span>
              <span className="block">BHARDWAJ</span>
            </h1>
            
            <div className="mb-6">
              <h2 className="text-xs lg:text-sm font-sans tracking-[0.25em] text-black dark:text-white font-bold uppercase mb-2">
                Backend Developer
              </h2>
              <p className="text-[10px] lg:text-[11px] font-sans tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase">
                DSA • DEVOPS • SYSTEM DESIGN • WEB3
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[340px] mb-10">
              Hi, I'm Harsh—a backend developer passionate about crafting robust architecture and seamless digital experiences that do more than just function.
            </p>

            <a
              href="/Harsh_Bhardwaj_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase border-b-2 border-black dark:border-white pb-1.5 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 hover:border-gray-500 transition-colors pointer-events-auto"
            >
              Download CV <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
            </a>
          </div>

          <div className="mt-12 md:mt-0 flex flex-col gap-3.5 items-center md:items-start">
            {[
              "Backend Engineering",
              "Full-Stack Product Development",
              "DSA & Problem Solving (250+)",
              "DevOps Fundamentals(K8s,Docker)",
              "System Design(HLD)",
              "Web3 Development(Solana)"
            ].map((item, i) => (
              <div key={i} className="font-sans text-[10px] lg:text-[11px] tracking-[0.12em] font-bold uppercase text-black dark:text-white leading-none py-1 flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white rotate-45 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column: Portrait - Consistent Capsule shape for all devices */}
        <div className="flex md:col-span-2 items-center justify-center py-12 md:py-0 z-10 order-2 md:order-2 transition-all">
           <div className="relative w-48 sm:w-64 md:w-full aspect-[3/4] rounded-[10rem] overflow-hidden border-8 border-white dark:border-zinc-900 shadow-2xl group mx-auto max-w-[280px] lg:max-w-md xl:max-w-2xl transition-all">
             <div className="absolute inset-0 bg-[#f8f8f8] dark:bg-zinc-800 pointer-events-none opacity-10 z-10" />
            <img 
              src={BATMAN_IMG} 
              alt="Harsh Bhardwaj Portrait" 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-20" />
          </div>
        </div>

        {/* Right Column: Quote & Utils - Center aligned on mobile */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-between md:h-full items-center md:items-end z-20 order-3 md:order-3">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row gap-6 lg:gap-8 items-center justify-end w-full">
            {['About', 'Work', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-[10px] lg:text-[11px] font-sans tracking-[0.2em] font-bold text-black dark:text-white hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors uppercase whitespace-nowrap"
              >
                {item}
              </a>
            ))}
            <Link
              to="/projects"
              className="text-[10px] lg:text-[11px] font-sans tracking-[0.2em] font-bold text-black dark:text-white hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors uppercase whitespace-nowrap relative group"
            >
              Projects
              <span className="absolute -top-1 -right-4 text-[7px] text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase">NEW</span>
            </Link>
          </nav>

          {/* Quote */}
          <div className="w-full text-center md:text-right my-12 md:my-auto">
             <div className="flex flex-col items-center md:items-end gap-5 max-w-[280px] md:max-w-[300px] lg:max-w-xs mx-auto md:ml-auto md:mr-0 lg:mr-4 xl:mr-8">
              <div className="w-16 h-[1px] bg-black dark:bg-white opacity-40 self-center md:self-end" />
              <p className="font-serif text-xl lg:text-2xl xl:text-3xl italic leading-relaxed text-black/90 dark:text-white/90">
                "You have power over your mind — not outside events. Realize this, and you will find strength."
              </p>
              <span className="font-sans text-[10px] lg:text-[11px] tracking-[0.3em] font-bold uppercase text-gray-500 dark:text-gray-400">
                — MARCUS AURELIUS
              </span>
            </div>
          </div>

          {/* Bottom Utils */}
          <div className="flex flex-col md:flex-col items-center md:items-end justify-end gap-6 md:gap-10 w-full mt-12 md:mt-32 uppercase">
             <ThemeToggle />
             <div className="pointer-events-auto">
               <SocialLinks />
             </div>
          </div>
        </div>

      </header>

      {/* REST OF THE WEBSITE */}
      <GithubSection />
      <SelectedWork />
      <ExperienceTable />
      <AboutSection />
      {/* <TwitterTestimonials /> */}

      {/* Inspirational Figures Section - Restored to all views for visual flair */}
      <section className="w-full py-24 px-4 bg-white dark:bg-[#000] border-t border-gray-100 dark:border-white/5 transition-colors">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-5xl text-center text-black dark:text-white mb-16 tracking-tight">
             Figures who shaped my vision
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            <div className="group overflow-hidden rounded-[4rem] shadow-xl shadow-black/10 transition-transform duration-500 hover:-translate-y-2">
              <img
                src="/legends/friedrich-nietzsche.jpg"
                alt="Friedrich Nietzsche"
                className="w-64 h-80 object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-[4rem] shadow-xl shadow-black/10 transition-transform duration-500 hover:-translate-y-2">
              <img
                src="/legends/Tesla_circa_1890.jpeg"
                alt="Nikola Tesla"
                className="w-64 h-80 object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-[4rem] shadow-xl shadow-black/10 transition-transform duration-500 hover:-translate-y-2">
              <img
                src="/legends/marcus_aurelius.jpg"
                alt="Marcus Aurelius"
                className="w-64 h-80 object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />

    </div>
  );
}
// ◆ Backend Engineering
// ◆ Full-Stack Development
// ◆ DSA (250+)
// ◆ DevOps
// ◆ System Design
// ◆ Web3