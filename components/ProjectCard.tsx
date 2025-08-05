import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import type { Project } from '../types';
import { LiveDemoIcon, RepoIcon } from './icons.tsx';

interface ProjectCardProps {
  project: Project;
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: 'easeIn' } },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, imageUrl, liveUrl, repoUrl } = project;
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12.5deg', '-12.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12.5deg', '12.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };


  return (
    <motion.div
      layout
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="bg-charcoal/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-purple/20 border border-purple/20 transition-shadow duration-300 group flex flex-col relative"
    >
      <div style={{ transform: 'translateZ(20px)'}} className="p-6 flex flex-col flex-grow">
          {imageUrl && (
            <div className="overflow-hidden rounded-md mb-4">
                <motion.img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-56 object-cover" 
                    loading="lazy"
                    style={{ transform: 'translateZ(40px)'}}
                />
            </div>
          )}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-4 text-sm flex-grow">{description}</p>
        
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="bg-purple/20 text-purple text-xs font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-6">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-purple hover:brightness-125 font-medium transition-all">
                <LiveDemoIcon />
                <span>Live Demo</span>
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
                <RepoIcon />
                <span>Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;