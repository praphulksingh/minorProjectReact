import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

// --- Placeholder Components for Dashboard Content ---
// In a real application, these would be more complex and fetch data.

const DashboardSection = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Welcome back, Student!</h2>
        <p className="text-gray-500 mb-6">Here’s a quick overview of your event activities.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-600">Registered Events</h3>
                <p className="text-4xl font-bold mt-2">5</p>
                <p className="text-gray-500 mt-1">You are registered for 5 upcoming events.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-600">Attendance</h3>
                <p className="text-4xl font-bold mt-2">92%</p>
                <p className="text-gray-500 mt-1">Your overall attendance rate.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-600">Certificates Earned</h3>
                <p className="text-4xl font-bold mt-2">3</p>
                <p className="text-gray-500 mt-1">Ready to download.</p>
            </div>
        </div>
    </div>
);

const EventsSection = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Events</h2>
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="py-4 px-6 whitespace-nowrap">AI & Machine Learning Workshop</td>
                        <td className="py-4 px-6 whitespace-nowrap">2025-08-15</td>
                        <td className="py-4 px-6 whitespace-nowrap">
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Register</button>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    </div>
);

// --- Main StudentDashboard Page Component ---
const StudentDashboard = () => {
    const [activePage, setActivePage] = useState('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handlePageChange = (pageId) => {
        setActivePage(pageId);
        if (window.innerWidth < 1024) { // lg breakpoint
            setSidebarOpen(false);
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    
    // --- Content Mapping ---
    const pageContent = {
        dashboard: { title: 'Dashboard', component: <DashboardSection /> },
        events: { title: 'View Events', component: <EventsSection /> },
        'registered-events': { title: 'My Registered Events', component: <div>Registered Events Content</div> },
        'attendance': { title: 'My Attendance', component: <div>Attendance Content</div> },
        'certificates': { title: 'Download Certificates', component: <div>Certificates Content</div> },
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar 
                role="student" 
                activePage={activePage} 
                onPageChange={handlePageChange}
                isOpen={isSidebarOpen}
            />
            
            <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
                <Header 
                    pageTitle={pageContent[activePage].title} 
                    onMenuClick={toggleSidebar}
                />
                
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    {pageContent[activePage].component}
                </main>
            </div>
             {/* Overlay for mobile */}
             {isSidebarOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black opacity-50 z-10"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default StudentDashboard;
