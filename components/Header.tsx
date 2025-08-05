import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenCommandPalette: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

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
      {/* -------------------------------------------------------------------- */}
      {/*                               Desktop Nav                            */}
      {/* -------------------------------------------------------------------- */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full border border-white/10 backdrop-blur-md px-8 py-2 ${
          isScrolled || isMenuOpen
            ? 'bg-charcoal/80 shadow-xl shadow-charcoal/50'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between space-x-8">
          {/* Logo ----------------------------------------------------------- */}
          <button
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Aq<span className="text-purple">qua</span>
          </button>

          {/* Desktop Links -------------------------------------------------- */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`group relative font-semibold uppercase tracking-wide text-sm px-4 py-1 rounded-full transition-all duration-300 ${activeSection === link.id ? "bg-purple/20 text-purple" : "text-white/80 hover:text-purple hover:bg-white/10"}`}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Command Palette Trigger ----------------------------------- */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center space-x-2 text-sm text-white/60 hover:text-white/90 border border-white/20 hover:border-white/40 rounded-md px-2 py-1 transition-colors"
            >
              <span>⌘K</span>
            </button>
          </nav>

          {/* Mobile Toggle -------------------------------------------------- */}
          <button
            className="md:hidden text-white/80 hover:text-purple z-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* -------------------------------------------------------------------- */}
      {/*                               Mobile Nav                             */}
      {/* -------------------------------------------------------------------- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-lg md:hidden flex"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-3xl font-semibold transition-all duration-300 px-6 py-2 rounded-full ${activeSection === link.id ? "bg-purple/20 text-purple" : "text-white/80 hover:text-purple hover:bg-white/10"}`}
            >
              {link.label}
            </button>
          ))}
        </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;