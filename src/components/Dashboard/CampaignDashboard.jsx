// import React, { useState } from 'react';

// function CampaignDashboard() {
//   const [activeCampaigns, setActiveCampaigns] = useState(12);
//   const [totalBudget, setTotalBudget] = useState(45250);
//   const [monthlyROI, setMonthlyROI] = useState(186);

//   const handleNewCampaign = () => {
//     setActiveCampaigns(activeCampaigns + 1);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto p-8">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold">Active Campaigns</h1>
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             onClick={handleNewCampaign}
//           >
//             New Campaign
//           </button>
//         </div>

//         <div className="grid grid-cols-3 gap-4">
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="text-lg font-semibold mb-2">Active Campaigns</h2>
//             <p className="text-gray-600">
//               {activeCampaigns}
//               <span className="text-green-500"> (+2 from last month)</span>
//             </p>
//           </div>

//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="text-lg font-semibold mb-2">Total Budget</h2>
//             <p className="text-gray-600">
//               ${totalBudget}
//               <span className="text-gray-600">(Budget utilized: 65%)</span>
//             </p>
//           </div>

//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="text-lg font-semibold mb-2">Campaign ROI</h2>
//             <p className="text-gray-600">
//               {monthlyROI}%
//               <span className="text-green-500"> (+23% vs last month)</span>
//             </p>
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded shadow mt-8">
//           <h2 className="text-lg font-semibold mb-2">Campaign Performance Overview</h2>
//           <div className="flex justify-end">
//             <select className="border border-gray-300 rounded px-2 py-1">
//               <option>Last 7 days</option>
//               <option>Last 30 days</option>
//               <option>All Time</option>
//             </select>
//           </div>
//           <div className="mt-4">
//             {/* Placeholder for campaign performance chart */}
//             <p className="text-center text-gray-400">
//               [Campaign Performance Chart Placeholder]
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CampaignDashboard;




import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import { chartOptions } from './chartOptions'; // Import chart options

function CampaignDashboard() {
  const [activeCampaigns, setActiveCampaigns] = useState(12);
  const [totalBudget, setTotalBudget] = useState(45250);
  const [monthlyROI, setMonthlyROI] = useState(186);
  const [campaignData, setCampaignData] = useState([]);

   const chartOptions = {
    chart: { type: 'line' },
    title: { text: 'Campaign Performance' },
    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      crosshair: true, // Add crosshair for better readability
    },
    yAxis: {
      title: { text: 'Value' },
      labels: {
        formatter: function () {
          return this.value; // Remove default label formatting
        },
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true, // Enable data labels on points
        },
        enableMouseTracking: true, // Enable tooltip and hover events
      },
    }}
  

  useEffect(() => {
    // Fetch dummy data for campaign performance (replace with actual API call)
    const fetchData = async () => {
      const data = [
        { name: 'Clicks', data: [120, 150, 180, 200, 170, 150, 130] },
        { name: 'Impressions', data: [1000, 1200, 1500, 1800, 1600, 1400, 1200] },
        { name: 'Conversions', data: [5, 8, 10, 12, 9, 7, 6] },
      ];
      setCampaignData(data);
    };

    fetchData();
  }, []);

  const handleNewCampaign = () => {
    setActiveCampaigns(activeCampaigns + 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ... (rest of the dashboard components) ... */}
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Active Campaigns</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNewCampaign}
          >
            New Campaign
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Active Campaigns</h2>
            <p className="text-gray-600">
              {activeCampaigns}
              <span className="text-green-500"> (+2 from last month)</span>
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Total Budget</h2>
            <p className="text-gray-600">
              ${totalBudget}
              <span className="text-gray-600">(Budget utilized: 65%)</span>
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Campaign ROI</h2>
            <p className="text-gray-600">
              {monthlyROI}%
              <span className="text-green-500"> (+23% vs last month)</span>
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow mt-8">
          <h2 className="text-lg font-semibold mb-2">Campaign Performance Overview</h2>
          <div className="flex justify-end">
            <select className="border border-gray-300 rounded px-2 py-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>All Time</option>
            </select>
          </div>
          <HighchartsReact highcharts={Highcharts} options={{ ...chartOptions, series: campaignData }} /> 
        </div>
      </div>
    </div>
  );
}

export default CampaignDashboard;