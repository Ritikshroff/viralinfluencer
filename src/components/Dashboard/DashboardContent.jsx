import  { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DashboardContent = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token') || '');

  
  useEffect(() => {
    
    const searchParams = new URLSearchParams(window.location.search);
    let code = searchParams.get('code');

    if (code) {
      console.log('Instagram Auth Code:', code);
      localStorage.setItem('instagram_auth_code', code);

      // Exchange the code for an access token
      fetch('https://api.instagram.com/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          client_id: '1635152597208805',
          client_secret: '4cd2d7d245840be9eebc956063fdf5f9', // Replace with your client secret
          grant_type: 'authorization_code',
          redirect_uri: 'https://www.viralfluencer.com/dashboard',
          code: code
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data.access_token) {
            console.log('Instagram Access Token:', data.access_token);
            localStorage.setItem('access_token', data.access_token);
            console.log(accessToken , "accessToken");
            
            setAccessToken(data.access_token);
            localStorage.setItem('is_instagram_connected', 'true');
          }
        })
        .catch(error => console.error('Error fetching access token:', error));
        

      // Remove 'code' from URL without reloading the page
      const cleanURL = window.location.origin + window.location.pathname;
      window.history.replaceState(null, '', cleanURL);
    }
  }, [accessToken]);

  const lineChartOptions = {
    title: {
      text: 'Engagement Trends'
    },
    xAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    yAxis: {
      title: {
        text: 'Engagement'
      }
    },
    series: [
      {
        name: 'Likes',
        data: [120, 200, 150, 80, 70, 110, 130]
      },
      {
        name: 'Comments',
        data: [60, 90, 100, 40, 30, 50, 60]
      }
    ]
  };

  const pieChartOptions = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Audience Demographics'
    },
    series: [
      {
        name: 'Users',
        colorByPoint: true,
        data: [
          {
            name: 'Male',
            y: 61.41
          },
          {
            name: 'Female',
            y: 38.59
          }
        ]
      }
    ]
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-6 space-y-2 md:flex-row md:justify-between">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="space-x-4">
          <a 
            href="https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=1635152597208805&redirect_uri=https://www.viralfluencer.com/dashboard&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights" 
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Connect Instagram
          </a>
        </div>
      </div>

      {/* Statistic Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold">Instagram Growth</h2>
          <p>New Followers: <span className="text-green-500">+2,845</span></p>
          <p>Post Reach: <span className="text-blue-500">+12.4%</span></p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold">Monthly Performance</h2>
          <p>Posts: <span className="text-purple-500">48</span></p>
          <p>Likes: <span className="text-pink-500">24.5K</span></p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold">Active Campaigns</h2>
          <p>Campaigns: <span className="text-orange-500">12</span></p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <p>New campaign approved 2 hours ago</p>
          <p>Content posted 5 hours ago</p>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-4">Engagement Trends</h2>
          <HighchartsReact highcharts={Highcharts} options={lineChartOptions} />
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-4">Audience Demographics</h2>
          <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;