import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function IntroAnimation({ onAnimationComplete }: { onAnimationComplete: () => void }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      onAnimationComplete();
    }, 3000); // Show intro for 3 seconds
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="w-56 h-56 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 rounded-full flex items-center justify-center mb-8 mx-auto shadow-lg border-2 border-blue-500"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img
                src="/project-dark-horse-logo.png"
                alt="Project Dark Horse Logo"
                className="w-48 h-48 object-contain"
              />
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-gray-300 mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Brought to you by
            </motion.h2>
            <motion.h1
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Project Dark Horse
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
