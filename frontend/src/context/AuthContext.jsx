import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            loadUser(token);
        } else {
            setLoading(false);
        }
    }, []);

    const loadUser = async (token) => {
        try {
            const res = await axios.get('http://localhost:3001/api/auth/user', {
                headers: { 'x-auth-token': token }
            });
            setUser(res.data);
            setLoading(false);
        } catch (err) {
            localStorage.removeItem('token');
            setUser(null);
            setLoading(false);
        }
    };

    const signup = async (userData) => {
        try {
            await axios.post('http://localhost:3001/api/auth/signup', userData);
            setError(null);
            return true;
        } catch (err) {
            setError(err.response?.data?.msg || 'Signup failed');
            return false;
        }
    };

    const login = async (userData) => {
        try {
            const res = await axios.post('http://localhost:3001/api/auth/login', userData);
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            setError(null);
            return true;
        } catch (err) {
            setError(err.response?.data?.msg || 'Login failed');
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
