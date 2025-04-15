import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCw } from 'lucide-react';

const LoadingPage = ({ onLoaded }: { onLoaded?: () => void }) => { // Added onLoaded prop
    const [loading, setLoading] = useState(true);
    const [slideOut, setSlideOut] = useState(false);
    const [animationDone, setAnimationDone] = useState(false); // New state to track animation completion

    useEffect(() => {
        // Simulate loading process
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false *before* slideOut
            setSlideOut(true); // Trigger slide-out animation
        }, 2000); // Simulate a 2-second loading time

        return () => clearTimeout(timer);
    }, []);

    // Variants for the slide-out animation
    const containerVariants = {
        initial: { x: 0 },
        animate: { x: '-100vw', transition: { duration: 0.8, ease: 'easeInOut' } }, // Slide to the left
        exit: { opacity: 0 }
    };

      // Function to call after the animation is complete
    const onAnimationComplete = () => {
        setAnimationDone(true); // Set the animationDone state
        if (onLoaded) {
            onLoaded(); // Call the onLoaded callback
        }
    };

    if (!loading && slideOut && animationDone) {
        return null;

    }

    if (loading || slideOut) {
        return (
            <div
                className="absolute inset-0 bg-[#FCCC42] z-50 flex items-center justify-center"
            >
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                    }}
                    className="text-gray-800"
                >
                    <RotateCw className="w-16 h-16 animate-spin" />
                </motion.div>
            </div>
        );
    }

    return null;
};

export default LoadingPage;
