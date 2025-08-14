import React from 'react';

// --- SVG Icon Components for Reusability ---
const DashboardIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>
);
const EventsIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
    </svg>
);
const RegisteredEventsIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
    </svg>
);
const AttendanceIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>
    </svg>
);
const CertificatesIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45-1-1-1zM12 12l-4-4h8l-4 4z"/>
    </svg>
);
const ApprovalsIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
);
const LogoutIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
    </svg>
);


// --- Navigation Configuration ---
// This object holds all the data for each role's sidebar, making the component cleaner.
const navConfig = {
    student: {
        title: 'Student Portal',
        color: 'blue',
        links: [
            { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
            { id: 'events', label: 'View Events', icon: EventsIcon },
            { id: 'registered-events', label: 'My Registered Events', icon: RegisteredEventsIcon },
            { id: 'attendance', label: 'My Attendance', icon: AttendanceIcon },
            { id: 'certificates', label: 'Download Certificates', icon: CertificatesIcon },
        ]
    },
    faculty: {
        title: 'Faculty Portal',
        color: 'orange',
        links: [
            { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
            { id: 'manage-events', label: 'Manage Events', icon: EventsIcon },
            { id: 'registrations', label: 'Student Registrations', icon: RegisteredEventsIcon },
            { id: 'attendance', label: 'Manage Attendance', icon: AttendanceIcon },
        ]
    },
    hod: {
        title: 'HOD Portal',
        color: 'purple',
        links: [
            { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
            { id: 'approvals', label: 'Event Approvals', icon: ApprovalsIcon },
            { id: 'attendance', label: 'View Attendance', icon: AttendanceIcon },
            { id: 'certificates', label: 'Generate Certificates', icon: CertificatesIcon },
        ]
    }
};

// --- Color Theme Helper ---
const colorThemes = {
    blue: {
        text: 'text-blue-700',
        bgHover: 'hover:bg-blue-600',
        activeBg: 'bg-blue-600'
    },
    orange: {
        text: 'text-orange-600',
        bgHover: 'hover:bg-orange-500',
        activeBg: 'bg-orange-500'
    },
    purple: {
        text: 'text-purple-700',
        bgHover: 'hover:bg-purple-600',
        activeBg: 'bg-purple-600'
    }
};

// --- Main Sidebar Component ---
const Sidebar = ({ role = 'student', activePage, onPageChange, isOpen }) => {
    
    const { title, links, color } = navConfig[role];
    const theme = colorThemes[color];

    const handleLogout = () => {
        // Clear user session and redirect
        console.log("Logging out...");
        window.location.href = '/'; // Redirect to role selection
    };
    
    return (
        <aside className={`bg-white shadow-lg w-64 h-screen flex flex-col fixed top-0 left-0 z-20 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
            
            {/* Header */}
            <div className={`text-center py-6 border-b border-gray-200`}>
                <h2 className={`text-2xl font-bold ${theme.text}`}>{title}</h2>
            </div>

            {/* Navigation */}
            <nav className="flex-grow p-4">
                <ul>
                    {links.map(link => (
                        <li key={link.id}>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onPageChange(link.id);
                                }}
                                className={`flex items-center p-3 my-2 rounded-lg font-medium transition-colors ${
                                    activePage === link.id
                                        ? `${theme.activeBg} text-white shadow-md`
                                        : `text-gray-600 ${theme.bgHover} hover:text-white`
                                }`}
                            >
                                <link.icon className="w-5 h-5 mr-4" />
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-gray-200">
                <button
                    onClick={handleLogout}
                    className="flex items-center justify-center w-full p-3 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-lg transition-colors"
                >
                    <LogoutIcon className="w-5 h-5 mr-3" />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
