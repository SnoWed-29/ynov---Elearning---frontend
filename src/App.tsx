import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from '@/contexts/UserContext';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Dashboard from '@/views/Dashboard';
import PrivateRoute from '@/components/PrivateRoute';
import MainLayout from '@/layouts/MainLayout';
import Course from './views/Course';
import CoursesList from './views/CoursesList';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Protected Routes with MainLayout */}
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <MainLayout />
                            </PrivateRoute>
                        }
                    >
                        <Route index element={<Dashboard />} />
                        <Route path="courses" element={<Course />} />
                        <Route path="courses/1" element={<CoursesList />} />
                    </Route>

                    {/* Fallback Route */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;
