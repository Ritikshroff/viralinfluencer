// src/components/Dashboard/DashboardLayout.jsx

import Sidebar from './Sidebar';
// import TopNavBar from './TopNavBar';  // A top navbar with the logo, user profile, and other quick links
import DashboardContent from './DashboardContent'; // This is the main section where content (charts, stats) will be shown
// import AnalyticsOverview from './Analyticsoverview';
// import AnalyticsOverview from './Analyticsoverview';
import CampaignDashboard from './CampaignDashboard';
import Analytics from './Analytics';

const DashboardLayout = ({ role }) => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Sidebar */}
            <Sidebar role={role} />

            {/* Main Content */}
            <div className="flex-1 bg-white p-6 overflow-auto">
                <DashboardContent />
                {/* <AnalyticsOverview/> */}
                {/* <AnalyticsOverview/> */}
                <Analytics/>
                <CampaignDashboard/>
            </div>
        </div>
    );
};

export default DashboardLayout;
