'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BlurText from './react-bits/BlurText';

interface LandingPageProps {
  onComplete: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(1);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (progress >= 100) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        return next > 100 ? 100 : next;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      setCanScroll(true);
    }
  }, [progress]);

  useEffect(() => {
    if (!canScroll) return;

    const handleScroll = () => {
      onComplete();
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        onComplete();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [canScroll, onComplete]);

  const handleContinue = useCallback(() => {
    onComplete();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-40">
      <div className="text-center w-full max-w-md px-6">
        <BlurText
          text="Welcome to My Portfolio"
          delay={150}
          animateBy="characters"
          direction="top"
          className="text-4xl md:text-6xl font-bold text-white whitespace-nowrap"
        />

        <div className="mt-8 flex justify-center">
          <div className="text-white text-2xl font-light tracking-wider">{progress}</div>
        </div>

        {progress === 100 && (
          <div className="mt-8 animate-fade-in flex flex-col items-center">
            <div className="text-white text-sm tracking-wider mb-4">SCROLL TO CONTINUE</div>
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;