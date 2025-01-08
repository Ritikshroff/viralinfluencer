// src/components/Dashboard/EngagementGraph.jsx

import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const EngagementGraph = () => {
    useEffect(() => {
        // Highcharts configuration object
        const config = {
            chart: {
                type: 'line',
                renderTo: 'engagement-chart', // ID of the div where the chart will render
            },
            title: {
                text: 'Influencer Engagement Over Time',
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            },
            series: [
                {
                    name: 'Engagement',
                    data: [20, 40, 60, 80, 100],
                },
            ],
        };

        // Initialize Highcharts and render it inside the target div
        Highcharts.chart(config);
    }, []);

    return (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Engagement Stats</h2>
            <div id="engagement-chart" className="w-full h-80"></div> {/* The div where Highcharts will render */}
        </div>
    );
};

export default EngagementGraph;
