import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import SectionHeader from './SectionHeader';

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
  const handleSkillClick = (skillName: string) => {
    if (activeSkill === skillName) {
      setActiveSkill(null); // Deselect if already active
    } else {
      setActiveSkill(skillName);
    }
  };

  return (
    <div>
      <SectionHeader title="My" highlight="Skills" />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto bg-charcoal/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-purple/20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 text-center">
          {SKILLS_DATA.map((skill) => (
            <motion.div 
              key={skill.name} 
              variants={itemVariants}
              onClick={() => handleSkillClick(skill.name)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border  hover:bg-charcoal/70 transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer
                ${activeSkill === skill.name 
                  ? 'bg-purple/20 border-purple/80 shadow-lg shadow-purple/10' 
                  : 'bg-charcoal/40 border-purple/10 hover:border-purple/70'
                }`
              }
            >
              <div className={`mb-2 transition-transform duration-300 group-hover:scale-110 ${activeSkill === skill.name ? 'scale-110' : ''}`}>
                {skill.icon}
              </div>
              <p className="font-semibold text-white group-hover:text-white transition-colors">{skill.name}</p>
              <p className="text-xs text-purple font-medium mt-1 opacity-80 group-hover:opacity-100 transition-opacity">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;