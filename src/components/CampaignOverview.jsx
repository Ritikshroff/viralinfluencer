

import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const CampaignOverview = () => {
    useEffect(() => {

        const chartOptions = {

        chart: {
            type: "column",
        },
        title: {
            text: "Campaign Overview",
        },
        xAxis: {
            categories: ["Campaign A", "Campaign B", "Campaign C", "Campaign D"],
            title: {
                text: "Campaigns",
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: "Performance Metrics",
            },
        },
        series: [
            {
                name: "Clicks",
                data: [120, 200, 150, 80],
            },
            {
                name: "Spends",
                data: [300, 400, 350, 200],
            },
        ],
        colors: ["#2269A1", "#FFA500"],
        legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
        },
    };
        

        // Initialize Highcharts and render it inside the target div
        Highcharts.chart(chartOptions);
    }, []);

    return (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Engagement Stats</h2>
            <div id="engagement-chart" className="w-full h-80"></div> {/* The div where Highcharts will render */}
        </div>
    );
};

export default CampaignOverview;
