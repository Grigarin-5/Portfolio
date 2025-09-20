'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

const GlassButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false
}: GlassButtonProps) => {
  const baseClasses = `
    relative px-8 py-3 rounded-xl font-medium transition-all duration-300
    backdrop-blur-xl border border-white/30
    bg-white/5 shadow-lg shadow-black/10
    before:absolute before:inset-0 before:rounded-xl before:backdrop-blur-xl
    before:bg-gradient-to-br before:from-white/20 before:via-white/10 before:to-white/5
    before:transition-all before:duration-300
    hover:before:from-white/30 hover:before:via-white/20 hover:before:to-white/10
    hover:border-white/40 hover:shadow-xl hover:shadow-black/20
    hover:bg-white/10
    active:scale-95 transform
    disabled:opacity-50 disabled:cursor-not-allowed
    ${disabled ? '' : 'cursor-pointer'}
    overflow-hidden
  `;

  const variantClasses = {
    primary: `
      text-white
      after:absolute after:inset-0 after:rounded-xl after:backdrop-blur-xl
      after:bg-gradient-to-br after:from-purple-600/20 after:via-purple-500/15 after:to-purple-800/10
      after:transition-all after:duration-300
      hover:after:from-purple-600/30 hover:after:via-purple-500/25 hover:after:to-purple-800/20
      border-purple-400/40 hover:border-purple-400/60
      shadow-purple-500/20 hover:shadow-purple-500/30
    `,
    secondary: `
      text-purple-200
      after:absolute after:inset-0 after:rounded-xl after:backdrop-blur-xl
      after:bg-gradient-to-br after:from-purple-400/15 after:via-purple-300/10 after:to-purple-600/5
      after:transition-all after:duration-300
      hover:after:from-purple-400/25 hover:after:via-purple-300/20 hover:after:to-purple-600/15
      border-purple-300/40 hover:border-purple-300/60
      shadow-purple-400/20 hover:shadow-purple-400/30
    `
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  const buttonContent = (
    <motion.span
      className="relative z-20"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      className={combinedClasses}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default GlassButton;