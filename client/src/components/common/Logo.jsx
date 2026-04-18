import React from 'react';
import { motion } from 'framer-motion';

export const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Hexagon / Geometric Shape */}
        <motion.path
          d="M50 5L90 25V75L50 95L10 75V25L50 5Z"
          className="stroke-primary"
          strokeWidth="4"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Stylized 'D' */}
        <motion.path
          d="M35 30V70H50C61.0457 70 70 61.0457 70 50C70 38.9543 61.0457 30 50 30H35Z"
          className="stroke-primary"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Inner Accent Line for 'P' feel */}
        <motion.path
          d="M45 50H55"
          className="stroke-purple-500"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
        
        {/* Glow effect */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
};
