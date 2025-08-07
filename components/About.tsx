import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ y }}
      className="relative py-20"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <SectionHeader title="About" highlight="Me" />
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="glass-effect rounded-3xl p-8 md:p-12 lg:p-16"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="md:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl text-white/90 leading-relaxed">
                Engineer responsive, user-centric web applications with <span className="text-purple-400 font-semibold">3+ years</span> of expertise transforming complex problems into intuitive digital solutions through clean, maintainable code and modern design principles.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Proven ability to deliver high-impact projects prioritizing performance, accessibility, and seamless user experiences. My portfolio showcases diverse technical implementations across frontend and backend systems.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Specialized in creating immersive multiplayer environments through <span className="text-gradient font-semibold">FiveM and Roblox Lua scripting</span>, developing scalable game mechanics that engage thousands of users.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Currently pioneering <span className="text-gradient font-semibold">AI integration</span> using Google Gemini API to build context-aware applications that automate workflows and personalize user interactions.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="text-3xl font-bold text-purple-400">2</div>
                <div className="text-sm text-white/70">Projects Completed</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="text-3xl font-bold text-blue-400">100k+</div>
                <div className="text-sm text-white/70">Lines of Code</div>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30"
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="text-3xl font-bold text-green-400">99%</div>
                <div className="text-sm text-white/70">Client Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;