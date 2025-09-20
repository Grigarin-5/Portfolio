'use client';

import React, { useEffect, useState } from 'react';
import BlurText from './BlurText';

const LandingSection: React.FC = () => {
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setShowScrollHint(true);
  };

  const scrollToContent = () => {
    const contentSection = document.getElementById('main-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10">
        <BlurText
          text="Welcome to My Portfolio"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
        />
        {showScrollHint && (
          <div className="animate-fade-in">
            <p className="text-gray-300 text-lg mb-8 opacity-0 animate-[fadeIn_1s_ease-in-out_0.5s_forwards]">
              Discover my work and passion
            </p>
            <button
              onClick={scrollToContent}
              className="group flex flex-col items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300 opacity-0 animate-[fadeIn_1s_ease-in-out_1s_forwards]"
              aria-label="Scroll to content"
            >
              <span className="text-sm font-light tracking-wider">SCROLL DOWN</span>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
              </div>
            </button>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-in-out_2s_forwards]">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-300"></div>
          <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/20"
      ></div>
    </section>
  );
};

export default LandingSection;