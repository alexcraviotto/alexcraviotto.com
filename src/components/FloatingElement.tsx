"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ 
  children, 
  duration = 3, 
  delay = 0, 
  className = "",
  amplitude = 10 
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  amplitude?: number;
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;