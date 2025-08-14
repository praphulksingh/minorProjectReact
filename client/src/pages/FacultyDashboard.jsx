import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

// --- Placeholder Components for Faculty Dashboard Content ---

const DashboardSection = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Welcome back, Faculty!</h2>
        <p className="text-gray-500 mb-6">Here’s a summary of your event management activities.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-orange-600">Events Created</h3>
                <p className="text-4xl font-bold mt-2">8</p>
                <p className="text-gray-500 mt-1">Total events you have proposed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-orange-600">Pending Approval</h3>
                <p className="text-4xl font-bold mt-2">2</p>
                <p className="text-gray-500 mt-1">Events waiting for HOD's review.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-orange-600">Upcoming Events</h3>
                <p className="text-4xl font-bold mt-2">3</p>
                <p className="text-gray-500 mt-1">Approved events in the next 30 days.</p>
            </div>
        </div>
    </div>
);

const ManageEventsSection = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Events</h2>
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="py-4 px-6 whitespace-nowrap">AI & Machine Learning Workshop</td>
                        <td className="py-4 px-6 whitespace-nowrap">2025-08-15</td>
                        <td className="py-4 px-6 whitespace-nowrap"><span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Approved</span></td>
                        <td className="py-4 px-6 whitespace-nowrap">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm">View</button>
                        </td>
                    </tr>
                     <tr>
                        <td className="py-4 px-6 whitespace-nowrap">Guest Lecture on DevOps</td>
                        <td className="py-4 px-6 whitespace-nowrap">2025-09-05</td>
                        <td className="py-4 px-6 whitespace-nowrap"><span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Pending</span></td>
                        <td className="py-4 px-6 whitespace-nowrap">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm">View</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);


// --- Main FacultyDashboard Page Component ---
const FacultyDashboard = () => {
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
        'manage-events': { title: 'Manage Events', component: <ManageEventsSection /> },
        'registrations': { title: 'Student Registrations', component: <div>Registrations Content</div> },
        'attendance': { title: 'Manage Attendance', component: <div>Attendance Content</div> },
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar 
                role="faculty" 
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

export default FacultyDashboard;
