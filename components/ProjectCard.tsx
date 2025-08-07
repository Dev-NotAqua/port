import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { Project } from '../types';
import { LiveDemoIcon, RepoIcon } from './icons.tsx';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: 'easeIn' } },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const { title, description, tags, imageUrl, liveUrl, repoUrl } = project;
    return (
    <motion.div
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        transition: { type: 'spring', stiffness: 400, damping: 15 }
      }}
      className="relative group"
    >
      <div className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 border border-white/20">
        {/* Image container with overlay */}
        <div className="relative overflow-hidden h-64 bg-slate-800">
          {imageUrl && (
            <motion.div 
              className="relative h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-64 object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          )}
          
          {/* Floating tags */}
          <motion.div 
            className="absolute top-4 right-4 flex flex-wrap gap-2"
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-purple-500/90 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.h3 
            className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-white/80 mb-4 text-base leading-relaxed"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            {description}
          </motion.p>
          
          {/* All tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <motion.span 
                key={tag} 
                className="bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-3 py-1 rounded-full border border-white/20"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(168, 85, 247, 0.3)',
                  borderColor: 'rgba(168, 85, 247, 0.5)'
                }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center gap-4">
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <LiveDemoIcon />
                <span>Live Demo</span>
              </motion.a>
            )}
            
            {repoUrl && (
              <motion.a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <RepoIcon />
                <span>Code</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
    </motion.div>
  );
};

export default ProjectCard;