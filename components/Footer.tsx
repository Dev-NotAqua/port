import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const toggleVisibility = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="bg-charcoal/50 border-t border-purple/20 mt-24">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-white/70 mb-4 md:mb-0">
            © {currentYear} Aqqua. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
             {Object.values(SOCIALS).map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.name} profile`}
                className="text-white/70 hover:text-purple transition-transform duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, backgroundColor: '#7851A9' }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 bg-purple/80 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </motion.button>
      )}
    </>
  );
};

export default Footer;