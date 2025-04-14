import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming you have this utility from Shadcn UI

interface LoadingPageProps {
  isLoading: boolean;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ isLoading }) => {
  const [showLoader, setShowLoader] = useState(isLoading);

  useEffect(() => {
    if (!isLoading && showLoader) {
      // Ensure the animation lasts 2 seconds before hiding the loader
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 2000); // 2 seconds delay
      return () => clearTimeout(timer);
    } else if (isLoading && !showLoader) {
      setShowLoader(true);
    }
  }, [isLoading, showLoader]);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className={cn('fixed inset-0 flex items-center justify-center bg-white z-50')}
          variants={containerVariants}
          initial="initial"
          animate="initial"
          exit="exit"
        >
          <motion.div
            className="text-xl font-bold"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;