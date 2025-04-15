import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-[#FCCC42]/90 flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="max-w-3xl w-full text-center space-y-4 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-8" // Adjusted space-y
            >
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                    404
                </h1>
                <p className="text-xl sm:text-2xl text-gray-200">
                    Sorry, we couldn't find that page.
                </p>
                <div className="flex justify-center"> {/* Added a wrapping div for centering */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/"
                            className="bg-white/20 hover:bg-white/30 text-white border border-white/10 px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;
