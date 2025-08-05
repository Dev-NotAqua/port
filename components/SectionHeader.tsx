import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    highlight: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlight }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold text-center mb-12"
    >
      {title} <span className="text-purple">{highlight}</span>
    </motion.h2>
  );
};

export default SectionHeader;
