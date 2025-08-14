import axios from 'axios';

// The base URL for your backend API.
// Make sure your Express server is running on this port.
const API_BASE_URL = 'http://localhost:5000/api/auth';

/**
 * Sends a login request to the backend.
 * @param {object} credentials - The user's email and password.
 * @returns {Promise<object>} The server's response data (user and token).
 */
const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        if (response.data && response.data.token) {
            // Store user info and token upon successful login
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        // Throw an error to be caught by the component
        throw error.response.data || new Error('Server error during login');
    }
};

/**
 * Sends a signup request to the backend.
 * @param {object} userData - The new user's details (name, email, password, role, etc.).
 * @returns {Promise<object>} The server's response data.
 */
const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        // Throw an error to be caught by the component
        throw error.response.data || new Error('Server error during signup');
    }
};

/**
 * Logs the user out by clearing localStorage.
 */
const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
};

const authService = {
    login,
    signup,
    logout,
};

export default authService;
