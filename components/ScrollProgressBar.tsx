import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useOptimizedScroll';

// A thin progress bar that fills horizontally as the user scrolls the page
const ScrollProgressBar: React.FC = () => {
  const scrollYProgress = useScrollProgress(8); // 8ms throttle for smooth animation

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-purple origin-left z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;