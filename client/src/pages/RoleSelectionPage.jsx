import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

// --- SVG Icon Components ---
// It's good practice to define icons as separate components for reusability.

const StudentIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);

const FacultyIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <polyline points="17 11 19 13 23 9"></polyline>
    </svg>
);

const HodIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M12 11l-4 -2l4 -2l4 2l-4 2z"></path>
        <path d="M8 9v4l4 2"></path>
        <path d="M16 9v4l-4 2"></path>
    </svg>
);


// --- Reusable RoleCard Component ---
const RoleCard = ({ to, borderColor, icon: Icon, title, description, iconColor }) => (
    <Link 
        to={to} 
        className={`bg-white rounded-xl shadow-lg p-8 w-full max-w-sm text-center transform hover:-translate-y-2 transition-all duration-300 ease-in-out border-t-4 ${borderColor} flex flex-col items-center no-underline`}
    >
        <div className={`mb-5 ${iconColor}`}>
            <Icon className="w-16 h-16" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500 leading-relaxed">{description}</p>
    </Link>
);


// --- Main RoleSelectionPage Component ---
const RoleSelectionPage = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen flex flex-col items-center justify-center p-6">
            
            {/* Header Section */}
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold text-blue-700 mb-3">SPAV-SmartEvent</h1>
                <p className="text-xl text-gray-600">Please select your role to continue</p>
            </header>

            {/* Role Selection Grid */}
            <main className="flex flex-wrap justify-center items-stretch gap-8 w-full max-w-5xl">
                <RoleCard
                    to="/student-login"
                    borderColor="border-blue-500"
                    iconColor="text-blue-500"
                    icon={StudentIcon}
                    title="Student"
                    description="View events, manage your registrations, and download certificates."
                />
                <RoleCard
                    to="/faculty-login"
                    borderColor="border-orange-500"
                    iconColor="text-orange-500"
                    icon={FacultyIcon}
                    title="Faculty"
                    description="Create and manage events, track attendance, and view approvals."
                />
                <RoleCard
                    to="/hod-login"
                    borderColor="border-purple-500"
                    iconColor="text-purple-500"
                    icon={HodIcon}
                    title="HOD"
                    description="Approve events, manage registrations, and generate certificates."
                />
            </main>

        </div>
    );
};

export default RoleSelectionPage;
