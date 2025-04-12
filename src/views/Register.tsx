import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react'; 
import logo from '@/assets/logo500.png'; // Adjust the path as necessary
interface FormData {
    userName: string;
    email: string;
    password: string;
    dob?: string;
    profile_picture?: File | null;
    niveauxSpecialiteId: string;
}

function Register() {
    const [formData, setFormData] = useState<FormData>({
        userName: '',
        email: '',
        password: '',
        dob: '',
        profile_picture: null,
        niveauxSpecialiteId: '',
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFormData({ ...formData, profile_picture: event.target.files[0] });
        } else {
            setFormData({ ...formData, profile_picture: null });
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form Data:', formData);
    };

    return (
        <section
            className={cn(
                'w-full min-h-screen bg-gradient-to-br from-blue-900/50 to-[#BD94F4]/50 ', // Darker background
                'flex items-center justify-center p-4 md:p-8'
            )}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className={cn(
                    'bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl',
                    'w-full w-4/5 h-fit p-6 md:p-10',
                    'border border-white/10'
                )}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side: Branding/Illustration */}
                    <div
                        className={cn(
                            'hidden md:flex flex-col items-center justify-center',
                            'bg-gradient-to-br rounded-2xl', // Darker accent
                            'p-6 md:p-8  from-blue-900/50 to-[#BD94F4]/50'
                        )}
                    >
                      <img src={logo} className="animate-pulse" alt="" />
                       
                        <p className="text-gray-300 text-center text-sm">
                            Create your account and start learning!
                        </p>
                    </div>

                    {/* Right Side: Registration Form */}
                    <div className="space-y-6">
                        <h2
                            className={cn(
                                'text-3xl font-semibold text-white text-center',
                                'mb-6'
                            )}
                        >
                            Register
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="userName" className="text-gray-200">
                                    User Name
                                </Label>
                                <Input
                                    id="userName"
                                    type="text"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    placeholder="Enter your username"
                                    required
                                    className={cn(
                                        'bg-black/20 text-white border-blue-500/30', // Changed border color
                                        'placeholder:text-gray-400 focus:ring-blue-500' // Changed focus ring
                                    )}
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className="text-gray-200">
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
                                        'bg-black/20 text-white border-blue-500/30', // Changed border color
                                        'placeholder:text-gray-400 focus:ring-blue-500' // Changed focus ring
                                    )}
                                />
                            </div>
                            <div>
                                <Label htmlFor="password" className="text-gray-200">
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
                                        'bg-black/20 text-white border-blue-500/30',  // Changed border color
                                        'placeholder:text-gray-400 focus:ring-blue-500' // Changed focus ring
                                    )}
                                />
                            </div>
                            <div>
                                <Label htmlFor="dob" className="text-gray-200">
                                    Date of Birth (Optional)
                                </Label>
                                <Input
                                    id="dob"
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className={cn(
                                        'bg-black/20 text-white border-blue-500/30', // Changed border color
                                        'focus:ring-blue-500' // Changed focus ring
                                    )}
                                />
                            </div>
                            <div>
                                <Label htmlFor="profile_picture" className="text-gray-200">
                                    Profile Picture (Optional)
                                </Label>
                                <Input
                                    id="profile_picture"
                                    type="file"
                                    name="profile_picture"
                                    onChange={handleFileChange}
                                    className={cn(
                                        'bg-black/20 text-white border-blue-500/30', // Changed border color
                                        'focus:ring-blue-500 file:text-blue-300 file:border-blue-500/30', // Changed file color
                                        'file:bg-blue-500/20 file:rounded-md file:px-4 file:py-2',  // Changed file color
                                        'file:mr-4 file:cursor-pointer'
                                    )}
                                />
                            </div>
                            <div>
                                <Label htmlFor="niveauxSpecialiteId" className="text-gray-200">
                                    Niveux
                                </Label>
                                <Select
                                    onValueChange={(value) => setFormData({ ...formData, niveauxSpecialiteId: value })}
                                    value={formData.niveauxSpecialiteId}
                                >
                                    <SelectTrigger
                                        className={cn(
                                            'w-full bg-black/20 text-white border-blue-500/30', // Changed border color
                                            'focus:ring-blue-500'  // Changed focus ring
                                        )}
                                    >
                                        <SelectValue placeholder="Select a level" className="text-gray-400" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-800 border-blue-500/30 text-white"> {/* Changed border color */}
                                        <SelectItem value="1" className="hover:bg-blue-500/20 focus:bg-blue-500/20">B1</SelectItem> {/* Changed hover color */}
                                        <SelectItem value="2" className="hover:bg-blue-500/20 focus:bg-blue-500/20">B2</SelectItem>
                                        <SelectItem value="3" className="hover:bg-blue-500/20 focus:bg-blue-500/20">B3</SelectItem>
                                        <SelectItem value="3" className="hover:bg-blue-500/20 focus:bg-blue-500/20">M1</SelectItem>
                                        <SelectItem value="3" className="hover:bg-blue-500/20 focus:bg-blue-500/20">M2</SelectItem>
                                        {/* Add more options as needed */}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="niveauxSpecialiteId" className="text-gray-200">
                                    Speciality Level
                                </Label>
                                <Select
                                    onValueChange={(value) => setFormData({ ...formData, niveauxSpecialiteId: value })}
                                    value={formData.niveauxSpecialiteId}
                                >
                                    <SelectTrigger
                                        className={cn(
                                            'w-full bg-black/20 text-white border-blue-500/30', // Changed border color
                                            'focus:ring-blue-500'  // Changed focus ring
                                        )}
                                    >
                                        <SelectValue placeholder="Select a level" className="text-gray-400" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-800 border-blue-500/30 text-white"> {/* Changed border color */}
                                        <SelectItem value="1" className="hover:bg-blue-500/20 focus:bg-blue-500/20">Beginner</SelectItem> {/* Changed hover color */}
                                        <SelectItem value="2" className="hover:bg-blue-500/20 focus:bg-blue-500/20">Intermediate</SelectItem>
                                        <SelectItem value="3" className="hover:bg-blue-500/20 focus:bg-blue-500/20">Advanced</SelectItem>
                                        {/* Add more options as needed */}
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button
                                type="submit"
                                className={cn(
                                    'w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white', // Consistent gradient
                                    'hover:from-blue-600 hover:to-purple-600',
                                    'py-3 text-lg font-semibold rounded-full shadow-lg',
                                    'transition-all duration-300 transform hover:scale-105',
                                    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' // Changed focus ring
                                )}
                            >
                                Register
                            </Button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Register;
