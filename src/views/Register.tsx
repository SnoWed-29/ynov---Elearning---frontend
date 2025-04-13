// pages/register.tsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import logo from '@/assets/logo500.png'; // Adjust the path as necessary
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../config/firebase.config'
import { sendRegistrationData } from '@/services/auth'; // Import the new function
import { fetchLevels, Level ,fetchSpecialities, Speciality } from '@/services/level'; 

interface FormData {
    userName: string;
    email: string;
    password: string;
    dob?: string;
    profile_picture?: File | null;
    Specialite: string;
    niveau: string; 
    fullName: string;
}

function Register() {
    const [formData, setFormData] = useState<FormData>({
        userName: '',
        email: '',
        password: '',
        dob: '',
        profile_picture: null,
        Specialite: '',
        niveau: '' ,
        fullName: ''// Initialize as empty string
    });

    const [levels, setLevels] = useState<Level[]>([]);
    const [specialities, setSpecialities] = useState<Speciality[]>([]);

    useEffect(() => {
        const loadLevels = async () => {
            try {
                const fetchedLevels = await fetchLevels();
                setLevels(fetchedLevels);
            } catch (error) {
                console.error('Failed to load levels:', error);
            }
        };

        loadLevels();
    }, []);

    const handleLevelChange = async (levelId: string) => {
        setFormData({ ...formData, niveau: levelId, Specialite: '' }); // Reset Specialite when niveau changes
        try {
            const fetchedSpecialities = await fetchSpecialities(Number(levelId));
            setSpecialities(fetchedSpecialities);
        } catch (error) {
            console.error('Failed to load specialities:', error);
        }
    };

    useEffect(() => {
        const loadSpecialities = async () => {
            try {
                const fetchedSpecialities = await fetchSpecialities(Number(formData.niveau));
                setSpecialities(fetchedSpecialities);
            } catch (error) {
                console.error('Failed to load specialities:', error);
            }
        };

        loadSpecialities();
    }, []);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const auth = getAuth(app); // Pass the initialized app to getAuth
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            console.log('User registered successfully:', user);
    
            // After successful Firebase user creation, send data to backend
            const registrationData = {
                uid: user.uid,
                fullName: formData.fullName,
                userName: formData.userName,
                email: formData.email,
                password: formData.password, // Consider if you need to send this to your backend
                dob: formData.dob,
                profile_picture: formData.profile_picture,
                Specialite: formData.Specialite, // Use Specialite here
                niveau: formData.niveau, // Include niveau in the registration data
            };
    
            const response = await sendRegistrationData(registrationData);
            if (response.ok) {
                console.log('Registration data sent to backend successfully', response);
                // Optionally redirect the user or show a success message
            } else {
                console.error('Failed to send registration data to backend:', response.statusText);
                // Optionally display an error message to the user
            }
    
        } catch (error) {
            console.error('Error during form submission:', error);
            // Optionally display an error message to the user
        }
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
                                <Label htmlFor="fullName" className="text-gray-200">
                                    Full Name
                                </Label>
                                <Input
                                    id="fullName"
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
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
                                <Label htmlFor="niveau" className="text-gray-200">
                                    Niveaux
                                </Label>
                                <Select
                                    onValueChange={handleLevelChange}
                                    value={formData.niveau}
                                >
                                    <SelectTrigger
                                        className="w-full bg-black/20 text-white border-blue-500/30 focus:ring-blue-500"
                                    >
                                        <SelectValue placeholder="Select a level" className="text-gray-400" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-800 border-blue-500/30 text-white">
                                        {levels.map((level) => (
                                            <SelectItem
                                                key={level.id}
                                                value={level.id.toString()} // Ensure the value is a string
                                                className="hover:bg-blue-500/20 focus:bg-blue-500/20"
                                            >
                                                {level.levelName}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="Specialite" className="text-gray-200">
                                    Specialities
                                </Label>
                                <Select
                                    onValueChange={(value) => setFormData({ ...formData, Specialite: value })}
                                    value={formData.Specialite}
                                    disabled={!formData.niveau} // Disable if no niveau is selected
                                >
                                    <SelectTrigger
                                        className={cn(
                                            'w-full bg-black/20 text-white border-blue-500/30', // Changed border color
                                            'focus:ring-blue-500'  // Changed focus ring
                                        )}
                                    >
                                        <SelectValue placeholder="Select a speciality" className="text-gray-400" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-800 border-blue-500/30 text-white"> {/* Changed border color */}
                                        {specialities.map((speciality) => (
                                            <SelectItem
                                                key={speciality.id}
                                                value={speciality.id.toString()} // Ensure the value is a string
                                                className="hover:bg-blue-500/20 focus:bg-blue-500/20"
                                            >
                                                {speciality.specialityName}
                                            </SelectItem>
                                        ))}
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