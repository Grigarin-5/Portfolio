'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LandingPage from '@/components/LandingPage';
import LiquidEther from '@/components/react-bits/LiquidEther';

export default function Home() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleLandingComplete = () => {
    setShowMainPage(true);
  };

  if (!showMainPage) {
    return <LandingPage onComplete={handleLandingComplete} />;
  }

  return (
    <>
      {/* Fixed Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0b2e 25%, #16213e 50%, #0f3460 75%, #0e4b99 100%)'
        }}
      >
        <LiquidEther
          colors={['#667eea', '#764ba2', '#f093fb']}
          mouseForce={50}
          cursorSize={200}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.8}
          isBounce={false}
          autoDemo={false}
          autoSpeed={0}
          autoIntensity={0}
          takeoverDuration={0.1}
          autoResumeDelay={10000}
          autoRampDuration={0.2}
        />
      </div>

      {/* Main Content */}
      <div className="min-h-screen relative" style={{ background: 'transparent' }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
