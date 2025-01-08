// src/components/Dashboard/InfluencerDashboard.jsx

import React from 'react';
import DashboardLayout from './DashboardLayout';
import EngagementStats from '../EngagementStats';  // Influencer engagement graph
// import Earnings from './Earnings';                // Earnings graph for the influencer

const InfluencerDashboard = () => {
    return (
        <DashboardLayout>
            <EngagementStats />
            {/* <Earnings /> */}
        </DashboardLayout>
    );
};

export default InfluencerDashboard;
