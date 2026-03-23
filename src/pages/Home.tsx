import React from 'react';
import { Link } from 'react-router-dom';
import { CenteredBottomHero } from '../components/CenteredBottomHero';
import { SocialLinks } from '../components/SocialLinks';
import { SelectedWork } from '../components/SelectedWork';
// import { Services } from '../components/Services';
import { AboutSection } from '../components/AboutSection';
import { ExperienceTable } from '../components/ExperienceTable';
import { GithubSection } from '../components/GithubSection';
import { ContactFooter } from '../components/ContactFooter';
// import { TwitterTestimonials } from '../components/TwitterTestimonials';
import { ThemeToggle } from '../components/ThemeToggle';
import { smoothScrollTo } from '../utils/scroll';

export const Home: React.FC = () => {
  const BRUCE_IMG = "/hero.png";
  // Fallback if hero_mask is missing, or update if found in a subfolder
  const BATMAN_IMG = "/hero.png"; 

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId, 1200); // 1.2s duration for "deliberate" feel
  };

  return (
    <div className="w-full bg-white dark:bg-[#000] overflow-x-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-500">

      {/* HERO SECTION - Full Screen Wrapper */}
      <header className="relative w-full h-screen overflow-hidden">
        {/* Navigation */}
        <nav className="absolute top-8 right-0 w-full md:w-auto flex justify-center md:justify-end md:right-12 lg:right-20 z-40 pointer-events-auto">
          <div className="flex flex-row gap-6 md:gap-8 bg-white/80 dark:bg-black/80 md:bg-transparent px-4 py-2 rounded-full backdrop-blur-sm md:backdrop-blur-none transition-colors border border-gray-100 dark:border-white/10 md:border-none">
            {['About', 'Work', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-xs md:text-sm font-sans tracking-[0.2em] font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors uppercase"
              >
                {item}
              </a>
            ))}
            <Link
              to="/projects"
              className="text-xs md:text-sm font-sans tracking-[0.2em] font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors uppercase group relative"
            >
              Projects
              <span className="absolute -top-1 -right-4 text-[7px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">NEW</span>
            </Link>
          </div>
        </nav>

        {/* Typography */}
        <div className="absolute top-32 md:top-24 w-full md:w-auto left-0 md:left-4 lg:left-8 z-30 pointer-events-none">
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-black dark:text-white">
              <span className="block">HARSH</span>
              <span className="block">BHARDWAJ</span>
            </h1>
            <div className="mt-8">
              <p className="text-sm md:text-base font-sans tracking-[0.2em] text-black dark:text-white font-bold uppercase">
                Backend Developer
              </p>
              <p className="mt-3 text-[11px] md:text-sm font-sans tracking-[0.2em] text-gray-700 dark:text-gray-300 uppercase">
                DSA • DevOps • System Design • Web3
              </p>
            </div>

            <p className="mt-10 md:mt-12 text-md md:text-xl lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
              Hi, I'm Harsh—a backend developer passionate about crafting robust architecture and seamless digital experiences that do more than just function.
            </p>

            <div className="mt-10 md:mt-16 flex flex-col items-center md:items-start">
              <a
                href="/Harsh_Bhardwaj_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-sans text-sm md:text-base font-bold tracking-[0.3em] uppercase border-b-2 border-black dark:border-white pb-2 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 hover:border-gray-300 transition-colors pointer-events-auto mb-12"
              >
                Download CV <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
              </a>

              <div className="flex flex-col gap-3 text-center md:text-left">
                {[
                  "Backend Engineering",
                  "Full-Stack Product Development",
                  "DSA & Problem Solving (250+)",
                  "DevOps Fundamentals(K8s,Docker)",
                  "System Design(HLD)",
                  "Web3 Development(Solana)"
                ].map((item, i) => (
                  <div key={i} className="font-sans text-[11px] md:text-xs tracking-[0.25em] font-bold uppercase text-black dark:text-white leading-none py-1">
                    <span className="text-gray-700 dark:text-gray-400 mr-4 font-normal tracking-normal">◆</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Only: CTA */}
            <div className="flex flex-col items-center mt-12 md:hidden animate-bounce opacity-80">
              <span className="font-handwritten text-2xl text-gray-600 rotate-[-5deg]">
                Tap for reveal
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image Component */}
        <CenteredBottomHero
          baseImage={BRUCE_IMG}
          overlayImage={BATMAN_IMG}
          alt="Bruce Wayne Portrait"
        />

        {/* Stoic Quote - Right Side */}
        <div className="absolute top-1/2 -translate-y-1/2 right-12 lg:right-20 z-30 hidden xl:block w-72 pointer-events-none">
          <div className="flex flex-col gap-6">
            <div className="w-12 h-[1px] bg-black dark:bg-white opacity-20" />
            <p className="font-serif text-2xl lg:text-3xl italic leading-relaxed text-black/80 dark:text-white/80">
              "You have power over your mind — not outside events. Realize this, and you will find strength."
            </p>
            <span className="font-sans text-[11px] tracking-[0.3em] font-bold uppercase text-gray-700 dark:text-gray-300">
              — Marcus Aurelius
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-6 right-0 w-full md:w-auto flex flex-col items-center md:items-end gap-6 md:bottom-12 md:right-12 lg:right-20 z-30 pointer-events-none">
          <ThemeToggle />
          <div className="pointer-events-auto">
            <SocialLinks />
          </div>
        </div>
      </header>

      {/* REST OF THE WEBSITE */}
      <GithubSection />
      <SelectedWork />
      <ExperienceTable />
      <AboutSection />
      {/* <TwitterTestimonials /> */}

      {/* Inspirational Figures Section */}
      <section className="w-full py-24 px-4 bg-white dark:bg-[#000] border-t border-gray-100 dark:border-white/5 transition-colors">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-5xl text-center text-black dark:text-white mb-16 tracking-tight">
            Great Person's who changed my life
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            <div className="group overflow-hidden rounded-lg shadow-xl shadow-black/10 transition-transform duration-500 hover:-translate-y-2">
              <img
                src="/legends/friedrich-nietzsche.jpg"
                alt="Friedrich Nietzsche"
                className="w-64 h-80 object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-xl shadow-black/10 transition-transform duration-500 hover:-translate-y-2">
              <img
                src="/legends/Tesla_circa_1890.jpeg"
                alt="Nikola Tesla"
                className="w-64 h-80 object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-xl shadow-black/10 transition-transform duration-500 hover:-translate-y-2">
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