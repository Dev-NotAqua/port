import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

interface HeaderProps {
  onOpenCommandPalette: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const { scrollYProgress } = useScroll();

  /* -------------------------------------------------------------------------- */
  /*                               Side Effects                                 */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    // Track visible section for active link highlighting
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-50% 0px -40% 0px', threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  /* -------------------------------------------------------------------------- */

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Enhanced Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 z-[100] origin-left shadow-glow"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Ambient glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-8 bg-gradient-to-b from-violet-500/10 to-transparent z-[99] pointer-events-none"
        style={{ opacity: scrollYProgress }}
      />

      {/* -------------------------------------------------------------------- */}
      {/*                               Desktop Nav                            */}
      {/* -------------------------------------------------------------------- */}
      <motion.header
        initial={{ y: -100, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100
        }}
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-500 rounded-2xl px-6 py-2 max-w-4xl mx-auto ${
          isScrolled || isMenuOpen
            ? 'glass-morphism-strong shadow-glass border border-white/20'
            : 'glass-morphism border border-white/10'
        }`}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center justify-between space-x-8">
          {/* Enhanced Logo ------------------------------------------------- */}
          <motion.button
            className="text-2xl font-black text-white cursor-pointer group"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gradient group-hover:animate-pulse">
              Aq<span className="text-gradient-gold">qua</span>
            </span>
          </motion.button>

          {/* Enhanced Desktop Links --------------------------------------- */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`group relative font-semibold uppercase tracking-wider text-sm px-5 py-2.5 rounded-xl transition-all duration-300 ${
                  activeSection === link.id 
                    ? "text-white shadow-glow" 
                    : "text-slate-300 hover:text-white"
                }`}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={activeSection === link.id ? "text-gradient" : ""}>
                  {link.label}
                </span>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 glass-morphism rounded-xl -z-10 border border-white/20"
                    initial={false}
                    transition={{ 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 30,
                      duration: 0.6
                    }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"
                />
              </motion.button>
            ))}

            {/* Enhanced Command Palette Trigger ------------------------- */}
            <motion.button
              onClick={onOpenCommandPalette}
              className="group flex items-center space-x-2 text-sm text-slate-400 hover:text-white glass-morphism hover:glass-morphism-strong border border-white/10 hover:border-violet-500/50 rounded-xl px-4 py-2 transition-all duration-300 hover:shadow-glow"
              whileHover={{ 
                scale: 1.05,
                y: -1
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="code-font text-xs group-hover:text-gradient">⌘K</span>
              <span className="text-xs opacity-60 group-hover:opacity-100">Search</span>
            </motion.button>
          </nav>

          {/* Enhanced Mobile Toggle --------------------------------------- */}
          <motion.button
            className="md:hidden text-slate-300 hover:text-white z-50 glass-morphism p-2 rounded-xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:shadow-glow"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gradient"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </motion.div>
          </motion.button>
        </div>
      </motion.header>

      {/* -------------------------------------------------------------------- */}
      {/*                          Enhanced Mobile Nav                         */}
      {/* -------------------------------------------------------------------- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-obsidian-900/80 backdrop-blur-xl md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30,
                duration: 0.6
              }}
              className="fixed right-0 top-0 bottom-0 z-40 w-80 glass-morphism-strong border-l border-white/20 md:hidden flex flex-col"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-white/10">
                <motion.h2 
                  className="text-2xl font-bold text-gradient"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Navigation
                </motion.h2>
              </div>
              
              {/* Menu Links */}
              <nav className="flex-1 flex flex-col justify-center px-6 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ 
                      delay: index * 0.1 + 0.3, 
                      type: "spring", 
                      stiffness: 200,
                      damping: 20
                    }}
                    onClick={() => scrollToSection(link.id)}
                    className={`group relative text-2xl font-bold transition-all duration-300 px-6 py-4 rounded-2xl text-left ${
                      activeSection === link.id 
                        ? "glass-morphism border border-white/20 text-gradient shadow-glow" 
                        : "text-slate-300 hover:text-white hover:glass-morphism"
                    }`}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 10,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    
                    {/* Active indicator */}
                    {activeSection === link.id && (
                      <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full"
                        layoutId="mobileActiveIndicator"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.button>
                ))}
              </nav>
              
              {/* Menu Footer */}
              <motion.div 
                className="p-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  onClick={onOpenCommandPalette}
                  className="w-full glass-morphism border border-white/10 hover:border-violet-500/50 rounded-xl px-4 py-3 text-slate-400 hover:text-white transition-all duration-300 hover:shadow-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="code-font text-sm">⌘K</span>
                    <span className="text-sm">Quick Search</span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;