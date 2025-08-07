import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import SectionHeader from './SectionHeader';
import { useScrollProgress } from '../hooks/useOptimizedScroll';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 150, damping: 12 }
  },
};

interface SkillsProps {
  activeSkill: string | null;
  setActiveSkill: (skill: string | null) => void;
}

const Skills: React.FC<SkillsProps> = ({ activeSkill, setActiveSkill }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const scrollYProgress = useScrollProgress(32); // Throttled for performance
  // Simplified rotation calculation
  const rotate = scrollYProgress * 180; // Reduced rotation range
  
  const handleSkillClick = (skillName: string) => {
    if (activeSkill === skillName) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skillName);
    }
  };

  return (
    <section className="relative py-20">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <SectionHeader title="My" highlight="Skills" />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 text-center">
          {SKILLS_DATA.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              variants={itemVariants}
              onClick={() => handleSkillClick(skill.name)}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className={`relative flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer transition-all duration-300 group
                ${activeSkill === skill.name 
                  ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 border-purple-500/50 shadow-lg shadow-purple-500/20' 
                  : 'glass-effect hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10'
                }`
              }
              whileHover={{ 
                scale: 1.1, 
                rotate: 2,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Progress ring */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${skill.proficiency * 2.83} 283`}
                  strokeDashoffset="0"
                  className="text-purple-500/30 transition-all duration-1000"
                  style={{
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'center',
                    opacity: hoveredSkill === skill.name || activeSkill === skill.name ? 1 : 0.3
                  }}
                />
              </svg>
              
              <motion.div 
                className="mb-3 text-3xl"
                animate={{
                  scale: hoveredSkill === skill.name ? 1.2 : 1,
                  rotate: hoveredSkill === skill.name ? 360 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {skill.icon}
              </motion.div>
              
              <motion.p 
                className="font-bold text-white mb-1"
                animate={{
                  color: hoveredSkill === skill.name ? '#a855f7' : '#ffffff'
                }}
              >
                {skill.name}
              </motion.p>
              
              <motion.p 
                className="text-sm text-purple-400 font-medium"
                animate={{
                  opacity: hoveredSkill === skill.name ? 1 : 0.7
                }}
              >
                {skill.category}
              </motion.p>
              
              {/* Proficiency indicator */}
              <motion.div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0 }}
                animate={{ scale: hoveredSkill === skill.name ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                  {skill.proficiency}%
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;