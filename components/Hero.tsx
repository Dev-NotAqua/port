import React, { useEffect, useState } from 'react';
import { motion, Variants, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { SOCIALS } from '../constants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, 
      delayChildren: 0.3,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

const letterContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0.6,
      duration: 1.2
    },
  },
};

const letterVariants: Variants = {
  hidden: { 
    y: 100, 
    opacity: 0, 
    rotateX: -90,
    scale: 0.8
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    rotateX: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: 'spring',
      stiffness: 100,
      damping: 15
    } 
  },
};

const itemVariants: Variants = {
  hidden: { 
    y: 60, 
    opacity: 0,
    scale: 0.9
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: 'spring',
      stiffness: 80,
      damping: 20
    } 
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const Hero: React.FC = () => {
  const name = "Aqqua";
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 300, damping: 30 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.section
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20"
    >

      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6">
          {/* Name Animation */}
          <motion.div
            variants={letterContainerVariants}
            className="space-y-4"
          >
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none">
              {name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  whileHover={{ 
                    scale: 1.3, 
                    y: -12,
                    rotateZ: [0, -5, 5, 0],
                    transition: { 
                      type: 'spring', 
                      stiffness: 500, 
                      damping: 15,
                      duration: 0.6
                    }
                  }}
                  className="inline-block cursor-pointer text-gradient hover:drop-shadow-2xl"
                  style={{
                    textShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Subtitle with Glass Effect */}
            <motion.div 
              variants={itemVariants}
              className="glass-morphism rounded-2xl p-6 backdrop-blur-xl"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient-gold mb-2">
                Fullstack & Game Script Developer
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto lg:mx-0" />
            </motion.div>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium"
          >
            I craft <span className="text-gradient font-semibold">immersive digital experiences</span> that bridge web and gaming worlds. From responsive applications to multiplayer environments, I transform complex challenges into <span className="text-gradient font-semibold">intuitive, high-performance solutions</span>.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-morphism-strong px-8 py-4 rounded-2xl font-semibold text-white hover:text-gradient transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="neumorphism px-8 py-4 rounded-2xl font-semibold text-slate-300 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-start space-x-6"
          >
            {Object.values(SOCIALS).map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.name} profile`}
                className="group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="glass-morphism p-4 rounded-2xl text-slate-400 group-hover:text-white transition-all duration-300 group-hover:shadow-glow">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        {/* Right Content - Avatar */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center lg:justify-end p-4 lg:p-8"
        >
          <motion.div
            className="relative group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            variants={floatingVariants}
            animate="animate"
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 rounded-full blur-2xl opacity-50"
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.8 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Glass Frame */}
            <motion.div
              className="relative glass-morphism-strong p-2 rounded-full"
              whileHover={{ 
                rotate: [0, -2, 2, 0],
                scale: 1.05
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 300,
                damping: 20
              }}
            >
              <img
                src="https://i.ibb.co/7xzQpdTK/a-f9c127127c8b240c04abc5d7a6d6eb20.gif"
                alt="Animated avatar"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20"
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                animate={{
                  y: [-5, 5, -5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                animate={{
                  y: [5, -5, 5],
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="glass-morphism p-3 rounded-full"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;