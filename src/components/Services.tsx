import React from 'react';
import { motion } from 'framer-motion';

const services = [
  "Backend Engineering",
  "Full-Stack Product Development",
  "DSA & Problem Solving (250+)",
  "DevOps Fundamentals(K8s,Docker)",
  "System Design(High Level Design)",
  "Web3 Development(Solana)",
];

export const Services: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-40 bg-white text-black px-4 md:px-12 lg:px-20 border-t border-gray-100">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gray-400 opacity-60">Services</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-t border-gray-100 pt-10 hover:border-black transition-colors cursor-default"
            >
              <span className="font-sans text-[11px] tracking-widest text-gray-400 block mb-6">
                // 0{index + 1}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight group-hover:italic transition-all duration-300">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
