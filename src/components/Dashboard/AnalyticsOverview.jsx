import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AnalyticsOverview = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Daily');

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const engagementChartOptions = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Engagement Analysis',
    },
    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      title: {
        text: 'Engagement',
      },
    },
    series: [
      {
        name: 'Likes',
        data: [12, 19, 3, 5, 2, 3, 9],
      },
      {
        name: 'Comments',
        data: [3, 5, 2, 3, 7, 2, 7],
      },
    ],
  };

  const audienceGrowthOptions = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Audience Growth',
    },
    xAxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    },
    yAxis: {
      title: {
        text: 'Followers',
      },
    },
    series: [
      {
        name: 'Followers',
        data: [1000, 1200, 1500, 1800],
      },
    ],
  };

  const contentPerformanceData = [
    {
      contentType: 'Stories',
      reach: 845242,
      engagement: 5.2,
      ctr: 3.8,
      performance: 'High',
    },
    {
      contentType: 'Posts',
      reach: 1242123,
      engagement: 4.8,
      ctr: 2.9,
      performance: 'Medium',
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Analytics Overview</h2>
        <div className="flex items-center">
          <select
            className="border rounded-md px-2 py-1 mr-2"
            value={selectedPeriod}
            onChange={(e) => handlePeriodChange(e.target.value)}
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Download Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Metric Cards */}
        <MetricCard
          title="Total Reach"
          value="2.4M"
          change="+12.5% vs last period"
          icon={<i className="fas fa-globe"></i>}
        />
        <MetricCard
          title="Engagement Rate"
          value="4.8%"
          change="-0.3% vs last period"
          icon={<i className="fas fa-chart-line"></i>}
        />
        <MetricCard
          title="Avg. Response Time"
          value="2.3h"
          change="-0.5h vs last period"
          icon={<i className="fas fa-clock"></i>}
        />
        <MetricCard
          title="Content Performance"
          value="92%"
          change="+3% vs last period"
          icon={<i className="fas fa-chart-bar"></i>}
        />

        {/* Charts */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-4">Engagement Analysis</h3>
          <HighchartsReact highcharts={Highcharts} options={engagementChartOptions} />
        </div>
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-4">Audience Growth</h3>
          <HighchartsReact highcharts={Highcharts} options={audienceGrowthOptions} />
        </div>

        {/* Content Performance Table */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-4">Content Performance Breakdown</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Content Type</th>
                <th className="border p-2">Reach</th>
                <th className="border p-2">Engagement</th>
                <th className="border p-2">CTR</th>
                <th className="border p-2">Performance</th>
              </tr>
            </thead>
            <tbody>
              {contentPerformanceData.map((data, index) => (
                <tr key={index}>
                  <td className="border p-2">{data.contentType}</td>
                  <td className="border p-2">{data.reach}</td>
                  <td className="border p-2">{data.engagement}%</td>
                  <td className="border p-2">{data.ctr}%</td>
                  <td className="border p-2">{data.performance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, change, icon }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
      <div className="flex items-center">
        <div className="text-xl font-semibold">{title}</div>
        <div className="ml-auto">{icon}</div>
      </div>
      <div className="text-3xl font-bold mt-2">{value}</div>
      <div className="text-sm text-gray-500">{change}</div>
    </div>
  );
};

export default AnalyticsOverview;