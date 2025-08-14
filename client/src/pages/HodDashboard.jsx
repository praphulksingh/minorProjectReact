import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

// --- Placeholder Components for HOD Dashboard Content ---

const DashboardSection = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Welcome, HOD!</h2>
        <p className="text-gray-500 mb-6">Oversee and manage all departmental event activities.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-purple-600">Pending Approvals</h3>
                <p className="text-4xl font-bold mt-2">4</p>
                <p className="text-gray-500 mt-1">Events awaiting your review.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-purple-600">Total Events This Month</h3>
                <p className="text-4xl font-bold mt-2">12</p>
                <p className="text-gray-500 mt-1">Approved events across all faculty.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-purple-600">Overall Attendance</h3>
                <p className="text-4xl font-bold mt-2">88%</p>
                <p className="text-gray-500 mt-1">Average attendance for all events.</p>
            </div>
        </div>
    </div>
);

const ApprovalsSection = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Event Approval Requests</h2>
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proposed By</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="py-4 px-6 whitespace-nowrap">Guest Lecture on DevOps</td>
                        <td className="py-4 px-6 whitespace-nowrap">Prof. Anjali Mehta</td>
                        <td className="py-4 px-6 whitespace-nowrap">2025-09-05</td>
                        <td className="py-4 px-6 whitespace-nowrap">
                            <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm mr-2">Approve</button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm">Reject</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);


// --- Main HodDashboard Page Component ---
const HodDashboard = () => {
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
        approvals: { title: 'Event Approvals', component: <ApprovalsSection /> },
        attendance: { title: 'View Attendance', component: <div>Attendance Content</div> },
        certificates: { title: 'Generate Certificates', component: <div>Certificates Content</div> },
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar 
                role="hod" 
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

export default HodDashboard;
