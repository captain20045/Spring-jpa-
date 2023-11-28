import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for authentication state
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState('');

    // Load userId from sessionStorage on initial render
    useEffect(() => {
        const savedUserId = sessionStorage.getItem('LOGIN_USER_ID');
        if (savedUserId) {
            setUserId(savedUserId);
            setIsLoggedIn(true);
        }
    }, []);

    // Function to handle login
    const login = (userId) => {
        sessionStorage.setItem('LOGIN_USER_ID', userId);
        setUserId(userId);
        setIsLoggedIn(true);
    };

    // Function to handle logout
    const logout = () => {
        sessionStorage.removeItem('LOGIN_USER_ID');
        setUserId('');
        setIsLoggedIn(false);
    };

    // Provide the current state and functions to modify it
    const value = {
        isLoggedIn,
        userId,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
