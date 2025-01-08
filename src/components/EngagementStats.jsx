// src/components/Dashboard/EngagementStats.jsx

import React from 'react';
// import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
const EngagementStats = () => {
    const config = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Influencer Engagement Over Time'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        },
        series: [
            {
                name: 'Engagement',
                data: [20, 40, 60, 80, 100]
            }
        ]
    };

    return (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Engagement Stats</h2>
            <Highcharts config={config} />
        </div>
    );
};

export default EngagementStats;
