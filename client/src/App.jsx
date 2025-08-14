import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Import Page Components ---
import RoleSelectionPage from './pages/RoleSelectionPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import HodDashboard from './pages/HodDashboard';


// --- Placeholder for a Not Found Page ---
const NotFoundPage = () => (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
    </div>
);

// --- Main App Component with React Router ---
const App = () => {
    return (
        <Router>
            <Routes>
                {/* --- Main and Auth Routes --- */}
                <Route path="/" element={<RoleSelectionPage />} />
                <Route path="/student-login" element={<LoginPage role="student" />} />
                <Route path="/faculty-login" element={<LoginPage role="faculty" />} />
                <Route path="/hod-login" element={<LoginPage role="hod" />} />
                
                <Route path="/signup/student" element={<SignupPage role="student" />} />
                <Route path="/signup/faculty" element={<SignupPage role="faculty" />} />
                <Route path="/signup/hod" element={<SignupPage role="hod" />} />

                {/* --- Dashboard Routes --- */}
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
                <Route path="/hod-dashboard" element={<HodDashboard />} />

                {/* --- Catch-all for Not Found pages --- */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;
