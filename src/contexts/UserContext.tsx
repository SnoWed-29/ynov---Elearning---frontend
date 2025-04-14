import  { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
    const [hasFetchedUserData, setHasFetchedUserData] = useState(false); // Track if user data has been fetched

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser && !additionalUserData && !hasFetchedUserData) { // Fetch only if logged in, no data yet, and haven't fetched
                setLoading(true); // Start loading when fetching user data
                try {
                    console.log('Fetching user data from backend for UID:', currentUser.uid); // Debug log
                    const response = await fetch(`${BACKEND_URL}/api/checkUser/${currentUser.uid}`);
                    console.log('Backend Response Status:', response.status); // Log the status code
                    if (response.ok) {
                        const responseData = await response.json(); // Get the full response object
                        console.log('Parsed Backend Data:', responseData); // Log the parsed data

                        if (responseData.exists && responseData.user) {
                            const userData = responseData.user;
                            setAdditionalUserData({
                                id: userData.id,
                                fullName: userData.fullName,
                                userName: userData.userName,
                                email: userData.email,
                                dob: userData.dob,
                                profile_picture: userData.profile_picture,
                                niveauxSpecialiteId: userData.niveauxSpecialiteId,
                            });
                            setHasFetchedUserData(true); // Mark that data has been fetched
                        } else {
                            console.warn('Backend user not found or data structure incorrect.');
                            setAdditionalUserData(null);
                        }
                    } else {
                        console.error('Failed to fetch user data from backend:', response.status);
                        try {
                            const errorData = await response.json();
                            console.error('Backend Error Details:', errorData); // Log error details if available
                        } catch (error) {
                            console.error('Failed to parse error response:', error);
                        }
                        setAdditionalUserData(null); // Reset user data on failure
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setAdditionalUserData(null); // Reset user data on error
                } finally {
                    setLoading(false); // Stop loading after attempting to fetch
                }
            } else if (!currentUser) {
                setUser(null);
                setAdditionalUserData(null);
                setHasFetchedUserData(false); // Reset fetch status on logout
            } else {
                setLoading(false); // If user data is already in context, no need to load again
            }
        });

        return () => unsubscribe(); // Cleanup the listener on unmount
    }, [user?.uid, additionalUserData, hasFetchedUserData]); // Re-run effect when user changes

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