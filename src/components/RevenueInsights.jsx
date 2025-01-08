// src/components/Dashboard/RevenueInsights.jsx

import React from 'react';
import Highcharts from 'highcharts';

const RevenueInsights = () => {
    useEffect(() => {
        const config = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Revenue Insights for Campaigns',
            },
            xAxis: {
                categories: ['Campaign 1', 'Campaign 2', 'Campaign 3'],
            },
            series: [
                {
                    name: 'Revenue',
                    data: [1000, 2500, 3000],
                },
            ],
        };
    Highcharts.chart(config);

    }, [])

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold text-black">Revenue Insights</h2>
            <Highcharts config={config} />
        </div>
    );
};

export default RevenueInsights;

