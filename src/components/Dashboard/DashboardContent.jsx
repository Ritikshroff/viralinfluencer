// import  { useState, useEffect } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import axios from 'axios';

// const DashboardContent = () => {
//   const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token') || '');

  
//   // useEffect(() => {
    
//   //   const searchParams = new URLSearchParams(window.location.search);
//   //   let code = searchParams.get('code');

//   //   if (code) {
//   //     console.log('Instagram Auth Code:', code);
//   //     localStorage.setItem('instagram_auth_code', code);

//   //     // Exchange the code for an access token using axios
//   //     const formData = new URLSearchParams({
//   //       client_id: '1635152597208805',
//   //       client_secret: '4cd2d7d245840be9eebc956063fdf5f9',
//   //       grant_type: 'authorization_code',
//   //       redirect_uri: 'https://www.viralfluencer.com/dashboard',
//   //       code: code
//   //     });

//   //     axios.post('https://api.instagram.com/oauth/access_token', formData, {
//   //       headers: {
//   //         'Content-Type': 'application/x-www-form-urlencoded'
//   //       }
//   //     })
//   //       .then(response => {
//   //         if (response.data.access_token) {
//   //           console.log('Instagram Access Token:', response.data.access_token);
//   //           localStorage.setItem('access_token', response.data.access_token);
//   //           console.log(accessToken, "accessToken");
            
//   //           setAccessToken(response.data.access_token);
//   //           localStorage.setItem('is_instagram_connected', 'true');
//   //         }
//   //       })
//   //       .catch(error => console.error('Error fetching access token:', error));
        

//   //     // Remove 'code' from URL without reloading the page
//   //     // const cleanURL = window.location.origin + window.location.pathname;
//   //     // window.history.replaceState(null, '', cleanURL);
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   const searchParams = new URLSearchParams(window.location.search);
//   //   let code = searchParams.get("code");

//   //   // Prevent reuse of the same code
//   //   if (code && !localStorage.getItem("instagram_auth_code")) {
//   //     console.log("Instagram Auth Code:", code);
//   //     localStorage.setItem("instagram_auth_code", code);

//   //     // Prepare data for API request
//   //     const formData = new URLSearchParams({
//   //       client_id: "1635152597208805",
//   //       client_secret: "8bb9edcf64d5f9eb8dffbfa386db78de",
//   //       grant_type: "authorization_code",
//   //       redirect_uri: "https://www.viralfluencer.com/dashboard",
//   //       code: code,
//   //     });
//   //     console.log(formData?.get("code"), "formData");

//   //     // Exchange the code for an access token
//   //     axios.post(
//   //       "https://viralfluencerbackend.onrender.com/get-instagram-token",
//   //       {
//   //         formData
//   //       },
//   //       {
//   //         headers: { "Content-Type": "application/json" }, // ✅ Fix: Ensure JSON format
//   //       }
//   //     )
//   //       .then((response) => {
//   //         console.log("✅ Instagram Access Token:", response.data.access_token);
//   //         localStorage.setItem("access_token", response.data.access_token);
//   //         localStorage.setItem("is_instagram_connected", "true");
//   //         setAccessToken(response.data.access_token);
//   //         console.log(accessToken, "accessToken");
          
//   //       })
//   //       .catch((error) => {
//   //         console.error("❌ Error fetching access token:", error.response?.data || error.message);
//   //       })
//   //       .finally(() => {
//   //         // Remove 'code' from URL to prevent reuse
//   //         const cleanURL = window.location.origin + window.location.pathname;
//   //         window.history.replaceState(null, "", cleanURL);
//   //       });
//   //   }
//   // }, []);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(window.location.search);
//     let code = searchParams.get("code");

//     if (code && !localStorage.getItem("instagram_auth_code")) {
//       console.log("Instagram Auth Code:", code);
//       localStorage.setItem("instagram_auth_code", code);

//       // Prepare JSON payload
//       const payload = {
//         client_id: "1635152597208805",
//         client_secret: "8bb9edcf64d5f9eb8dffbfa386db78de",
//         grant_type: "authorization_code",
//         redirect_uri: "https://www.viralfluencer.com/dashboard",
//         code: code,
//       };

//       console.log("📤 Sending JSON Payload:", payload);

//       // Exchange the code for an access token
//       axios.post("https://api.instagram.com/oauth/access_token", payload, {
//         // headers: {
//         //   "Content-Type": "application/json", // ✅ Fix: Ensure JSON format
//         // },
//       })
//         .then((response) => {
//           console.log("✅ Instagram Access Token:", response.data.access_token);
//           localStorage.setItem("access_token", response.data.access_token);
//           localStorage.setItem("is_instagram_connected", "true");
//           setAccessToken(response.data.access_token);
//           console.log(accessToken, "accessToken is got!!!!!!!" );
//         })
//         .catch((error) => {
//           console.error("❌ Error fetching access token:", error.response?.data || error.message);
//         })
//         .finally(() => {
//           // const cleanURL = window.location.origin + window.location.pathname;
//           // window.history.replaceState(null, "", cleanURL);
//         });
//     }
// }, [accessToken]);

//   const lineChartOptions = {
//     title: {
//       text: 'Engagement Trends'
//     },
//     xAxis: {
//       categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//     },
//     yAxis: {
//       title: {
//         text: 'Engagement'
//       }
//     },
//     series: [
//       {
//         name: 'Likes',
//         data: [120, 200, 150, 80, 70, 110, 130]
//       },
//       {
//         name: 'Comments',
//         data: [60, 90, 100, 40, 30, 50, 60]
//       }
//     ]
//   };

//   const pieChartOptions = {
//     chart: {
//       type: 'pie'
//     },
//     title: {
//       text: 'Audience Demographics'
//     },
//     series: [
//       {
//         name: 'Users',
//         colorByPoint: true,
//         data: [
//           {
//             name: 'Male',
//             y: 61.41
//           },
//           {
//             name: 'Female',
//             y: 38.59
//           }
//         ]
//       }
//     ]
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <div className="flex flex-col items-center mb-6 space-y-2 md:flex-row md:justify-between">
//         <h1 className="text-2xl font-bold">Dashboard Overview</h1>
//         <div className="space-x-4">
//           <a 
//             href="https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=1635152597208805&redirect_uri=https://www.viralfluencer.com/dashboard&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights" 
//             className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           >
//             Connect Instagram
//           </a>
//         </div>
//         <p>{accessToken?accessToken:"not found token"}</p>
//         <p>{accessToken}</p>
//       </div>

//       {/* Statistic Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         <div className="p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-lg font-semibold">Instagram Growth</h2>
//           <p>New Followers: <span className="text-green-500">+2,845</span></p>
//           <p>Post Reach: <span className="text-blue-500">+12.4%</span></p>
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-lg font-semibold">Monthly Performance</h2>
//           <p>Posts: <span className="text-purple-500">48</span></p>
//           <p>Likes: <span className="text-pink-500">24.5K</span></p>
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-lg font-semibold">Active Campaigns</h2>
//           <p>Campaigns: <span className="text-orange-500">12</span></p>
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-lg font-semibold">Recent Activity</h2>
//           <p>New campaign approved 2 hours ago</p>
//           <p>Content posted 5 hours ago</p>
//         </div>
//       </div>

//       {/* Graphs Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-lg font-semibold mb-4">Engagement Trends</h2>
//           <HighchartsReact highcharts={Highcharts} options={lineChartOptions} />
//         </div>
//         <div className="p-4 bg-white shadow-md rounded-md">
//           <h2 className="text-lg font-semibold mb-4">Audience Demographics</h2>
//           <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardContent;




import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const DashboardContent = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token') || '');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    if (code && !localStorage.getItem("instagram_auth_code")) {
      console.log("Instagram Auth Code:", code);
      localStorage.setItem("instagram_auth_code", code);

      // Prepare API request payload
      const payload = {
        client_id: "1635152597208805",
        client_secret: "8bb9edcf64d5f9eb8dffbfa386db78de",
        grant_type: "authorization_code",
        redirect_uri: "https://www.viralfluencer.com/dashboard",
        code: code,
      };

      axios.post("https://api.instagram.com/oauth/access_token", payload)
        .then((response) => {
          const token = response.data.access_token;
          console.log("✅ Instagram Access Token:", token);
          localStorage.setItem("access_token", token);
          localStorage.setItem("is_instagram_connected", "true");
          setAccessToken(token);
        })
        .catch((error) => {
          console.error("❌ Error fetching access token:", error.response?.data || error.message);
        })
        .finally(() => {
          // Remove 'code' from URL to prevent reuse
          window.history.replaceState(null, "", window.location.origin + window.location.pathname);
        });
    }
  }, []);

  // Line Chart Data
  const lineChartOptions = {
    title: { text: 'Engagement Trends' },
    xAxis: { categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
    yAxis: { title: { text: 'Engagement' } },
    series: [
      { name: 'Likes', data: [120, 200, 150, 80, 70, 110, 130] },
      { name: 'Comments', data: [60, 90, 100, 40, 30, 50, 60] }
    ]
  };

  // Pie Chart Data
  const pieChartOptions = {
    chart: { type: 'pie' },
    title: { text: 'Audience Demographics' },
    series: [{
      name: 'Users',
      colorByPoint: true,
      data: [
        { name: 'Male', y: 61.41 },
        { name: 'Female', y: 38.59 }
      ]
    }]
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
        <p>{accessToken ? `Token: ${accessToken}` : "Access Token Not Found"}</p>
      </div>

      {/* Statistic Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { title: "Instagram Growth", stats: ["New Followers: +2,845", "Post Reach: +12.4%"], color: "text-green-500" },
          { title: "Monthly Performance", stats: ["Posts: 48", "Likes: 24.5K"], color: "text-pink-500" },
          { title: "Active Campaigns", stats: ["Campaigns: 12"], color: "text-orange-500" },
          { title: "Recent Activity", stats: ["New campaign approved 2 hours ago", "Content posted 5 hours ago"], color: "text-blue-500" }
        ].map((card, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            {card.stats.map((stat, i) => (
              <p key={i} className={card.color}>{stat}</p>
            ))}
          </div>
        ))}
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
