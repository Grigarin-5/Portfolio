'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import GlassButton from './GlassButton';
import ProfileCard from './react-bits/ProfileCard';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center" style={{ background: 'transparent' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="text-purple-400">Your Name</span>
          </h1> */}

          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* A passionate full-stack developer creating amazing digital experiences */}
          </motion.p>

          <motion.div
            className="flex justify-center mt-20 pt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ProfileCard
              name="Grigarin Baby"
              title="Frontend Developer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/avatar.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </motion.div>

        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
            <ChevronDown size={32} className="mx-auto animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;