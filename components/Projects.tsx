import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

interface ProjectsProps {
  activeSkill: string | null;
}

const Projects: React.FC<ProjectsProps> = ({ activeSkill }) => {
  const filteredProjects = activeSkill
    ? PROJECTS.filter(project => project.tags.includes(activeSkill))
    : PROJECTS;

  return (
    <div>
      <SectionHeader title="My" highlight="Projects" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
      {activeSkill && filteredProjects.length === 0 && (
        <p className="text-center text-white/60 mt-8">No projects found with the skill "{activeSkill}".</p>
      )}
    </div>
  );
};

export default Projects;