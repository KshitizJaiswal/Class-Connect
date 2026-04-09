import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { login, error } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const successMessage = location.state?.message;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(formData);
        if (success) navigate('/');
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <LogIn size={32} />
                    <h2>Sign In</h2>
                    <p>Welcome back to Class-Connect</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>
                    {error && <p className="auth-error">{error}</p>}
                    {successMessage && <p className="auth-success-msg">{successMessage}</p>}
                    <button type="submit" className="auth-button">Sign In</button>
                    <p className="auth-footer">
                        Don't have an account? <Link to="/signup">Create one</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
