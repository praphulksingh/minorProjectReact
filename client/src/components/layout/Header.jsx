import React from 'react';

// --- SVG Icon for the Menu ---
const MenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

// --- Main Header Component ---
const Header = ({ pageTitle, onMenuClick }) => {
    // Placeholder user data - you would fetch this after login
    const user = {
        name: 'Praphul Singh',
        avatar: 'https://placehold.co/40x40/600080/FFFFFF?text=PS' // Placeholder image
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="flex items-center justify-between h-16 px-4 md:px-6">
                
                {/* Left Side: Menu Toggle and Page Title */}
                <div className="flex items-center">
                    {/* Menu button for mobile/tablet */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden mr-4 p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
                        aria-label="Open sidebar"
                    >
                        <MenuIcon className="h-6 w-6" />
                    </button>
                    
                    <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                        {pageTitle}
                    </h1>
                </div>

                {/* Right Side: User Profile */}
                <div className="flex items-center">
                    <span className="text-gray-700 font-medium mr-3 hidden sm:block">{user.name}</span>
                    <img 
                        src={user.avatar} 
                        alt="User Avatar" 
                        className="w-10 h-10 rounded-full"
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/40x40/cccccc/FFFFFF?text=U'; }} // Fallback
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
