// src/components/Dashboard/BrandDashboard.jsx

import React from 'react';
import DashboardLayout from './DashboardLayout';
// import BrandCampaignOverview from './BrandCampaignOverview';  // Brand-specific campaign details
import RevenueInsights from '../RevenueInsights';              // Revenue insights chart

const BrandDashboard = () => {
    return (
        <DashboardLayout>
            {/* <BrandCampaignOverview /> */}
            <RevenueInsights />
        </DashboardLayout>
    );
};

export default BrandDashboard;
