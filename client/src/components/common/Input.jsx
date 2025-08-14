// src/components/common/Input.jsx
import React from 'react';

const Input = ({ id, label, type = 'text', value, onChange, placeholder = '', required = true, className = '' }) => {
    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default Input;