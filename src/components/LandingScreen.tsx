'use client';

import React from 'react';
import BlurText from './BlurText';

interface LandingScreenProps {
  onAnimationComplete?: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onAnimationComplete }) => {
  const handleAnimationComplete = () => {
    console.log('Landing animation completed!');
    onAnimationComplete?.();
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-40">
      <div className="text-center">
        <BlurText
          text="Welcome to My Portfolio"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl md:text-6xl font-bold text-white"
        />
      </div>
    </div>
  );
};

export default LandingScreen;