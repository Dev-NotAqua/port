import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, SOCIALS } from '../constants';

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface Command {
  id: string;
  name: string;
  type: 'Navigation' | 'Project' | 'Social';
  action: () => void;
  icon: React.ReactNode;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, [setIsOpen]);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    closeModal();
  };
  
  const baseCommands: Command[] = [
    { id: 'home', name: 'Go to Home', type: 'Navigation', action: () => scrollToSection('home'), icon: <span className="text-purple">→</span> },
    { id: 'about', name: 'Go to About', type: 'Navigation', action: () => scrollToSection('about'), icon: <span className="text-purple">→</span> },
    { id: 'skills', name: 'Go to Skills', type: 'Navigation', action: () => scrollToSection('skills'), icon: <span className="text-purple">→</span> },
    { id: 'projects', name: 'Go to Projects', type: 'Navigation', action: () => scrollToSection('projects'), icon: <span className="text-purple">→</span> },
    { id: 'contact', name: 'Go to Contact', type: 'Navigation', action: () => scrollToSection('contact'), icon: <span className="text-purple">→</span> },
    ...PROJECTS.map(p => ({
        id: `proj-${p.title}`,
        name: `View Project: ${p.title}`,
        type: 'Project' as const,
        action: () => { if(p.liveUrl) window.open(p.liveUrl, '_blank'); closeModal(); },
        icon: <span className="text-purple">🚀</span>
    })),
    ...Object.values(SOCIALS).map(s => ({
        id: `social-${s.name}`,
        name: `Open ${s.name}`,
        type: 'Social' as const,
        action: () => { window.open(s.url, '_blank'); closeModal(); },
        icon: s.icon
    }))
  ];

  const filteredCommands = query === '' ? baseCommands : baseCommands.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(prev => (prev > 0 ? prev - 1 : filteredCommands.length - 1));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(prev => (prev < filteredCommands.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Enter' && filteredCommands[activeIndex]) {
        e.preventDefault();
        filteredCommands[activeIndex].action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, filteredCommands, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-charcoal/50 backdrop-blur-sm flex items-start justify-center pt-24"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full max-w-lg bg-[#202020] rounded-xl shadow-2xl shadow-purple/10 border border-purple/20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-2 border-b border-purple/20">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search commands..."
                className="w-full bg-transparent text-white/90 placeholder-white/50 focus:outline-none px-2 py-2"
              />
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              {filteredCommands.length > 0 ? (
                <ul>
                  {filteredCommands.map((command, index) => (
                    <li
                      key={command.id}
                      onMouseMove={() => setActiveIndex(index)}
                      onClick={command.action}
                      className={`flex items-center justify-between p-3 text-sm cursor-pointer transition-colors ${activeIndex === index ? 'bg-purple/20 text-white' : 'text-white/70'}`}
                    >
                      <div className="flex items-center space-x-3">
                         <div className="w-5 h-5 flex items-center justify-center">{command.icon}</div>
                        <span>{command.name}</span>
                      </div>
                      <span className="text-xs text-purple/80">{command.type}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="p-4 text-center text-sm text-white/60">No results found.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
