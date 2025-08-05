import React, { useState, useCallback } from 'react';
import { generateContactMessage } from '../services/geminiService';
import { useTypewriter } from './useTypewriter';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  
  const typedMessage = useTypewriter(generatedMessage, 30);


  const handleGenerateMessage = useCallback(async () => {
    if (!name || !interest) {
      setError('Please fill out both your name and your interest.');
      return;
    }
    setError('');
    setIsLoading(true);
    setGeneratedMessage('');
    setCopied(false);

    try {
      const message = await generateContactMessage(name, interest);
      setGeneratedMessage(message);
    } catch (err) {
      setError('Failed to generate message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [name, interest]);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '600ms', opacity: 0 }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Let's <span className="text-purple">Connect</span>
      </h2>
      <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
        Interested in collaborating or just want to say hi? Fill out the fields below and let my AI assistant draft a conversation starter for you!
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
            <input 
              type="text" 
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full bg-charcoal/70 border border-purple/30 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple focus:border-purple transition"
              placeholder="e.g., Collaborating on a project"
            />
          </div>
           {error && <p className="text-purple font-semibold text-sm">{error}</p>}
          <button 
            onClick={handleGenerateMessage}
            disabled={isLoading}
            className="w-full bg-purple bg-opacity-90 hover:bg-opacity-100 disabled:bg-charcoal disabled:text-white/50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center"
          >
            {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
            ) : "Generate Message with AI"}
          </button>
        </div>

        {(generatedMessage || isLoading) && (
           <div className="mt-8">
             <label htmlFor="generated-message" className="block text-sm font-medium text-white/80 mb-2">Your AI-generated message:</label>
             <div className="relative">
                <textarea
                  id="generated-message"
                  readOnly
                  value={typedMessage}
                  className="w-full h-32 bg-charcoal/70 border border-purple/30 rounded-md py-2 px-3 text-white resize-none"
                />
                {generatedMessage && !isLoading && (
                    <button 
                      onClick={handleCopy}
                      className="absolute top-2 right-2 bg-purple/40 hover:bg-purple/60 text-white text-xs font-bold py-1 px-2 rounded transition-colors"
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                )}
             </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default Contact;