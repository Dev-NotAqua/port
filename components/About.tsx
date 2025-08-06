import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <SectionHeader title="About" highlight="Me" />
      <div className="max-w-5xl mx-auto bg-charcoal/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-purple/20">
        <div>
            <p className="text-lg text-white/80 mb-6">
              Engineer responsive, user-centric web applications with 3+ years of expertise in transforming complex problems into intuitive digital solutions through clean, maintainable code and modern design principles. Proven ability to deliver high-impact projects that prioritize performance, accessibility, and seamless user experiences—backed by a portfolio showcasing diverse technical implementations across frontend and backend systems.
            </p>
            <p className="text-lg text-white/80 mb-6">
              Specialized in creating immersive multiplayer environments through <strong>FiveM and Roblox Lua scripting</strong>, developing scalable game mechanics and interactive systems that engage thousands of users. My cross-disciplinary approach bridges web development and game design, ensuring technical robustness while maintaining creative vision.
            </p>
             <p className="text-lg text-white/80">
              Passionate about creating innovative solutions and staying at the forefront of emerging technologies. Always iterating, always learning: I focus on showcasing only my strongest, most relevant work to highlight tangible value for clients and collaborators.
            </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;