import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react'; // For a consistent icon

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Login Form Data:', formData);
    };

    return (
        <section
            className={cn(
                'w-full min-h-screen',
                'bg-gradient-to-br from-blue-900/50 to-[#BD94F4]/50', // Direct hex
                'flex items-center justify-center p-4 md:p-8'
            )}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className={cn(
                    'bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl',
                    'w-full max-w-md p-6 md:p-10',
                    'border border-white/10'
                )}
            >
                <div className="space-y-6">
                    {/* Branding/Illustration (Simplified for Login) */}
                    <div className="flex flex-col items-center justify-center">
                        <BookOpen className="w-16 h-16 text-blue-400 mb-4 animate-pulse" />
                        <h1
                            className={cn(
                                'text-3xl font-bold text-white mb-4',
                                'bg-clip-text text-transparent',
                                'bg-gradient-to-r from-[#FCCC42] to-[#BD94F4]' // Direct hex
                            )}
                        >
                            Ynov Learning
                        </h1>
                    </div>

                    {/* Login Form */}
                    <div className="space-y-4">
                        <h2
                            className={cn(
                                'text-3xl font-semibold',
                                'text-[#F7F7F5]', 
                                'text-center',
                                'mb-6'
                            )}
                        >
                            Login
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="email" className="text-gray-200 my-1">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className={cn(
                                        'bg-black/20 text-white',
                                        'border-[#BD94F4]/30', 
                                        'placeholder:text-gray-400 focus:ring-blue-500'
                                    )}
                                />
                            </div>
                            <div>
                                <Label htmlFor="password" className="text-gray-200 my-1">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                    className={cn(
                                        'bg-black/20 text-white',
                                        'border-[#BD94F4]/30', // Direct hex
                                        'placeholder:text-gray-400 focus:ring-blue-500'
                                    )}
                                />
                            </div>
                            <Button
                                type="submit"
                                className={cn(
                                    'w-full',
                                    'bg-gradient-to-r from-[#3b82f6] to-[#BD94F4] text-white', // Direct hex
                                    'hover:from-[#3b82f6]/90 hover:to-[#BD94F4]/90',
                                    'py-3 text-lg font-semibold rounded-full shadow-lg',
                                    'transition-all duration-300 transform hover:scale-105',
                                    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                                )}
                            >
                                Login
                            </Button>
                        </form>
                        <div className="text-center text-gray-400 text-sm">
                            <a href="/register" className="text-blue-300 hover:underline">
                                Create an account
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Login;
