import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SOCIALS } from '../constants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const letterContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.4 },
  },
};

const letterVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero: React.FC = () => {
  const name = "Aqqua";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-100px)] text-center md:text-left"
    >
      <div className="md:w-2/3 md:pr-12">
        <motion.h1
          variants={letterContainerVariants}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
        >
          {name.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              whileHover={{ scale: 1.1, y: -5, color: '#FFFFFF' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-block cursor-pointer bg-gradient-to-r from-purple via-purple to-white/90 text-transparent bg-clip-text"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-purple mb-6">
          Fullstack & Game Script Developer
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-white/80 max-w-xl mx-auto md:mx-0 mb-8">
          I build beautiful, responsive web applications and immersive game experiences with a focus on cutting-edge technologies.
        </motion.p>
        <motion.div variants={itemVariants} className="flex justify-center md:justify-start space-x-4">
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
        </motion.div>
      </div>
      <motion.div variants={itemVariants} className="md:w-1/3 mt-10 md:mt-0">
        <img
          src="https://i.ibb.co/7xzQpdTK/a-f9c127127c8b240c04abc5d7a6d6eb20.gif"
          alt="Animated avatar"
          className="rounded-full border-4 border-purple/50 shadow-lg shadow-purple/20 w-64 h-64 md:w-80 md:h-80 mx-auto object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;