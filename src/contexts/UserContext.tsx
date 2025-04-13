// src/contexts/UserContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/config/firebase.config';

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    loading: boolean;
    additionalUserData: AdditionalUserData | null;
    setAdditionalUserData: (data: AdditionalUserData | null) => void;
}

interface AdditionalUserData {
    id: string;
    fullName: string;
    userName: string;
    email: string;
    dob?: string;
    profile_picture?: string | null;
    niveauxSpecialiteId: number;
}

const BACKEND_URL = 'http://localhost:3000'; // Define the backend URL as a constant
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [additionalUserData, setAdditionalUserData] = useState<AdditionalUserData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                try {
                    console.log('Checking if backend user is created for UID:', currentUser.uid); // Debug log

                    // Poll the backend to check if the user is created
                    const checkBackendUser = async () => {
                        const response = await fetch(`${BACKEND_URL}/api/checkUser/${currentUser.uid}`);
                        if (response.ok) {
                            const data = await response.json();
                            if (data.exists) {
                                console.log('Backend user exists:', data.user); // Debug log
                                setAdditionalUserData({
                                    id: data.user.id,
                                    fullName: data.user.fullName,
                                    userName: data.user.userName,
                                    email: data.user.email,
                                    dob: data.user.dob,
                                    profile_picture: data.user.profile_picture,
                                    niveauxSpecialiteId: data.user.niveauxSpecialiteId,
                                });
                                return true;
                            }
                        }
                        return false;
                    };

                    // Poll the backend every 2 seconds until the user is created
                    const interval = setInterval(async () => {
                        const userCreated = await checkBackendUser();
                        if (userCreated) {
                            clearInterval(interval); // Stop polling once the user is created
                        }
                    }, 2000);
                } catch (error) {
                    console.error('Error checking backend user creation:', error);
                }
            } else {
                setUser(null);
                setAdditionalUserData(null);
            }

            setLoading(false); // Stop loading once the user state is determined
        });

        return () => unsubscribe(); // Cleanup the listener on unmount
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading, additionalUserData, setAdditionalUserData }}>
            {!loading && children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};