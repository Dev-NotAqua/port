import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      // In a real app, you would send this data to your backend
      // For now, we'll just show a success message
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };


  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '600ms', opacity: 0 }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Let's <span className="text-purple">Connect</span>
      </h2>
      <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
        Interested in collaborating or just want to say hi? Feel free to reach out!
      </p>
      
      <div className="max-w-2xl mx-auto bg-charcoal/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-purple/20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Your Name</label>
            <input 
              type="text" 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-charcoal/70 border border-purple/30 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple focus:border-purple transition"
              placeholder="e.g., Jane Smith"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Your Email</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-charcoal/70 border border-purple/30 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple focus:border-purple transition"
              placeholder="e.g., jane@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
            <textarea 
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 bg-charcoal/70 border border-purple/30 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple focus:border-purple transition resize-none"
              placeholder="Tell me about your project or just say hi!"
              required
            />
          </div>
          {isSubmitted && (
            <div className="text-green-400 font-semibold text-sm text-center">
              Message sent! I'll get back to you soon.
            </div>
          )}
          <button 
            type="submit"
            className="w-full bg-purple bg-opacity-90 hover:bg-opacity-100 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;