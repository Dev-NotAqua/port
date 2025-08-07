import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '../hooks/useOptimizedScroll';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const scrollYProgress = useScrollProgress(32);
  // Simplified transform calculations
  const y = scrollYProgress > 0.7 ? (scrollYProgress - 0.7) * 333 : 100; // Simplified calculation
  const opacity = scrollYProgress > 0.7 ? (scrollYProgress - 0.7) * 3.33 : 0; // Simplified calculation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setName('');
      setEmail('');
      setMessage('');
    }
  };


  return (
    <motion.section
      id="contact"
      className="relative py-20 md:py-32"
      style={{ transform: `translateY(${y}px)`, opacity: Math.min(1, Math.max(0, opacity)) }}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[100px]" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink">Connect</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-effect p-8 md:p-10 rounded-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:ring-2 focus:ring-purple focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:ring-2 focus:ring-purple focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-32 bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:ring-2 focus:ring-purple focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello!"
                  required
                />
              </motion.div>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-green-400 font-semibold text-center p-4 bg-green-400/10 rounded-lg border border-green-400/20"
                  >
                    🎉 Message sent successfully! I'll get back to you within 24 hours.
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple to-pink text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple/25 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!name || !email || !message}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;