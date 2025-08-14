import React, { useState } from 'react';

// --- Reusable InputField Component ---
const InputField = ({ id, label, type, value, onChange, required = true }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
            {label}
        </label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={required}
        />
    </div>
);

// --- Main SignupPage Component ---
const SignupPage = ({ role = 'student' }) => {
    // Determine the title based on the role prop
    const roleTitle = role.charAt(0).toUpperCase() + role.slice(1);

    // State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        studentId: '',
        department: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signing up with:', { role, ...formData });
        // Here you would call your signup API
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                
                {/* Header */}
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Create {roleTitle} Account</h1>
                    <p className="text-gray-500 mt-2">
                        Join the platform to manage your events.
                    </p>
                </header>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <InputField id="name" label="Full Name" type="text" value={formData.name} onChange={handleChange} />
                        <InputField id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
                        
                        {/* Role-specific fields */}
                        {role === 'student' && (
                            <InputField id="studentId" label="Student ID" type="text" value={formData.studentId} onChange={handleChange} />
                        )}
                        {(role === 'faculty' || role === 'hod') && (
                            <InputField id="department" label="Department" type="text" value={formData.department} onChange={handleChange} />
                        )}
                        
                        <InputField id="password" label="Password" type="password" value={formData.password} onChange={handleChange} />
                    </div>
                    
                    {/* Submit Button */}
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out mt-4"
                    >
                        Create Account
                    </button>
                </form>

                {/* Back Link */}
                <div className="text-center mt-6">
                    <a href="/" className="font-semibold text-blue-600 hover:text-blue-800 text-sm">
                        &larr; Back to Role Selection
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
