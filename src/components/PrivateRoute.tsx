// src/components/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { user } = useUser();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default PrivateRoute;