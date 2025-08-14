import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

// --- Reusable InputField Component ---
const InputField = ({ id, label, type, value, onChange, required = true }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
            {label}
        </label>
        <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={required}
        />
    </div>
);

// --- Main LoginPage Component ---
const LoginPage = ({ role = 'student' }) => {
    const navigate = useNavigate();
    const roleTitle = role.charAt(0).toUpperCase() + role.slice(1);

    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        studentId: '',
        department: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (isLogin) {
                const credentials = { email: formData.email, password: formData.password };
                const data = await authService.login(credentials);
                // Redirect to the correct dashboard
                navigate(`/${data.user.role}-dashboard`);
            } else {
                const userData = { role, ...formData };
                await authService.signup(userData);
                // Switch to login form after successful signup
                alert('Signup successful! Please log in.');
                setIsLogin(true);
                setFormData({ ...formData, password: '' }); // Clear password field
            }
        } catch (err) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const formType = isLogin ? 'Login' : 'Signup';

    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">{roleTitle} Portal</h1>
                    <p className="text-gray-500 mt-2">
                        {isLogin ? 'Login to your account' : 'Create a new account'}
                    </p>
                </header>

                <div className="flex rounded-lg border border-gray-200 p-1 mb-6">
                    <button
                        onClick={() => { setIsLogin(true); setError(''); }}
                        className={`w-1/2 p-2 rounded-md font-semibold transition-colors ${isLogin ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => { setIsLogin(false); setError(''); }}
                        className={`w-1/2 p-2 rounded-md font-semibold transition-colors ${!isLogin ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        Signup
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">{error}</div>}
                    
                    {isLogin ? (
                        <>
                            <InputField id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
                            <InputField id="password" label="Password" type="password" value={formData.password} onChange={handleChange} />
                        </>
                    ) : (
                        <>
                            <InputField id="name" label="Full Name" type="text" value={formData.name} onChange={handleChange} />
                            <InputField id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
                            
                            {role === 'student' && (
                                <InputField id="studentId" label="Student ID" type="text" value={formData.studentId} onChange={handleChange} />
                            )}
                            {(role === 'faculty' || role === 'hod') && (
                                <InputField id="department" label="Department" type="text" value={formData.department} onChange={handleChange} />
                            )}
                            
                            <InputField id="password" label="Password" type="password" value={formData.password} onChange={handleChange} />
                        </>
                    )}
                    
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out mt-4 disabled:bg-blue-300"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : formType}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <a href="/" className="font-semibold text-blue-600 hover:text-blue-800 text-sm">
                        &larr; Back to Role Selection
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
