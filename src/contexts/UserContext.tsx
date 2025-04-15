import  { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/config/firebase.config';
import  LoadingPage  from '../views/LoadingPage'; // Import your LoadingPage component

// Use environment variable for backend URL
const BACKEND_URL = 'http://localhost:3000';

interface AdditionalUserData {
  id: string;
  fullName: string;
  userName: string;
  email: string;
  dob?: string;
  profile_picture?: string | null;
  niveauxSpecialiteId?: number; // Made optional for flexibility
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void; // Add setLoading to the context
  additionalUserData: AdditionalUserData | null;
  setAdditionalUserData: (data: AdditionalUserData | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [additionalUserData, setAdditionalUserData] = useState<AdditionalUserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false); // Track if the minimum time has passed

  useEffect(() => {
    // Ensure the loading page stays for at least 2 seconds
    const timer = setTimeout(() => {
      setMinimumTimeElapsed(true); // Set minimum time elapsed to true after 2 seconds
    }, 1000); // Adjust this value as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  useEffect(() => {
    // Create an AbortController to cancel fetches if the component unmounts
    const abortController = new AbortController();

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.uid !== user?.uid) {
        setUser(currentUser);
      }

      if (currentUser) {
        setLoading(true); // Start loading
        try {
          const response = await fetch(`${BACKEND_URL}/api/checkUser/${currentUser.uid}`, {
            signal: abortController.signal,
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const responseData = await response.json();

          if (responseData.exists && responseData.user) {
            const userData = responseData.user;
            setAdditionalUserData({
              id: userData.id,
              fullName: userData.fullName,
              userName: userData.userName,
              email: userData.email,
              dob: userData.dob ?? undefined,
              profile_picture: userData.profile_picture ?? null,
              niveauxSpecialiteId: userData.niveauxSpecialiteId ?? undefined,
            });
          } else {
            setAdditionalUserData(null);
          }
        } catch (error) {
          if (error.name === 'AbortError') {
            console.log('Fetch aborted');
            return;
          }
          console.error('Error fetching user data:', error);
          setAdditionalUserData(null);
        } finally {
          setLoading(false); // Stop loading
        }
      } else {
        setUser(null);
        setAdditionalUserData(null);
        setLoading(false); // Stop loading
      }
    });

    return () => {
      unsubscribe();
      abortController.abort();
    };
  }, [user]);

  const handleLoaded = () => {
    setLoading(false); // Set loading to false
  };

  // Ensure the loading page stays visible for at least 2 seconds
  if (loading || !minimumTimeElapsed) {
    return <LoadingPage onLoaded={handleLoaded} />;
  }

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading, additionalUserData, setAdditionalUserData }}>
      {children}
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
