import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');


  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '600ms', opacity: 0 }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Let's <span className="text-purple">Connect</span>
      </h2>
      <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
        Interested in collaborating or just want to say hi? I'd love to hear from you!
      </p>
      
      <div className="max-w-2xl mx-auto bg-charcoal/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-purple/20">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Your Name</label>
            <input 
              type="text" 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-charcoal/70 border border-purple/30 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple focus:border-purple transition"
              placeholder="e.g., Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-white/80 mb-2">What's on your mind?</label>
            <textarea 
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full h-32 bg-charcoal/70 border border-purple/30 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple focus:border-purple transition resize-none"
              placeholder="e.g., I'd love to collaborate on a project..."
            />
          </div>
          
          <div className="text-center">
            <p className="text-white/70 text-sm mb-4">
              Feel free to reach out to me directly at: 
              <span className="text-purple font-semibold ml-1">your.email@example.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;