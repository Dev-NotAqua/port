import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    highlight: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
        {title} <span className="text-purple">{highlight}</span>
        {/* Animated underline */}
        <motion.span
          layoutId="section-underline" // shared element for smoother route-level transitions if needed later
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute -bottom-2 left-0 h-1 bg-purple/80 rounded-full"
        />
      </h2>
    </motion.div>
  );
};

export default SectionHeader;
