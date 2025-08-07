import React, { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GridBackground from './components/GridBackground';
import CommandPalette from './components/CommandPalette';
import SpotlightCursor from './components/SpotlightCursor';
import ScrollProgressBar from './components/ScrollProgressBar';

const App: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <ScrollProgressBar />
      <div className="min-h-screen overflow-x-hidden bg-charcoal">
        <GridBackground />
        <SpotlightCursor />
        <div className="relative z-10">
          <Header onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
          <main className="container mx-auto px-6 py-8 md:px-12 md:py-16">
            <div className="space-y-24 md:space-y-32">
              <motion.section id="home" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                <Hero />
              </motion.section>
              <motion.section id="about" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                <About />
              </motion.section>
              <motion.section id="skills" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                <Skills activeSkill={activeSkill} setActiveSkill={setActiveSkill} />
              </motion.section>
              <motion.section id="projects" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                <Projects activeSkill={activeSkill} />
              </motion.section>
              <motion.section id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                <Contact />
              </motion.section>
            </div>
          </main>
          <Footer />
        </div>
        <CommandPalette isOpen={isCommandPaletteOpen} setIsOpen={setIsCommandPaletteOpen} />
      </div>
    </LazyMotion>
  );
};

export default App;