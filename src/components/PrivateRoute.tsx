import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useUser();
  const location = useLocation();

  if (loading) {
    return <div className="p-4">Loading...</div>; // Or a spinner component
  }

  return user ? <>{children}</> : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;