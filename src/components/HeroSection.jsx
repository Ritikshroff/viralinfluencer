// import React from 'react';
// import { Helmet } from "react-helmet";

// const HeroSection = () => {
//   return (
//     <>
//       <Helmet>
//         <link rel="canonical" href="https://viralfluencer.com" />
//         <title>Influencer Marketing Strategies to Boost Your Brand | Viral Influencer</title>
//         <meta name="description" content="Discover effective influencer marketing strategies with Viral Influencer. Connect with top influencers and create impactful campaigns that drive real results." />
//       </Helmet>

//       {/* Hero Section */}
//       <header className="relative bg-white w-full h-[500px] items-left p-2 overflow-hidden">
//         <section className="relative bg-white w-full h-[500px] items-left p-2 overflow-hidden">
//           <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
//             <div className="text-left z-10 relative">
//               {/* Primary H1 for SEO */}
//               <h1 className="text-[#222222] font-bold text-2xl md:text-6xl leading-tight mb-4 gap-18">
//                 Boost Your Brand with 
//                 <br />
//                 <span className='text-[#c55b4f]'>Effective </span> 
//                 <br />
//                 <span className='text-[#2269a1]'>Influencer Marketing Strategies</span>
//               </h1>
//               <p className="text-[#555555] text-lg md:text-xl leading-relaxed mb-6">
//                 Connect with top influencers and create impactful campaigns that drive real results for your brand.
//               </p>
//               <a
//                 href="/submit-form"
//                 className="inline-block px-6 py-3 bg-[#2269a1] text-white font-semibold rounded-lg hover:bg-[#4e7683] transition duration-300"
//                 title="Book a consultation for influencer marketing"
//               >
//                 Book a Consultation
//               </a>
//             </div>
//           </div>
//         </section>
//       </header>

//       {/* New Content Section */}
//       <section className="bg-gray-50 py-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Secondary H2 */}
//           <h2 className="text-3xl font-bold text-center text-[#222222] mb-6">Why Choose Viral Influencer for Your Marketing Campaigns?</h2>
//           <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
//             At <strong>Viral Influencer</strong>, we revolutionize the way brands connect with audiences through influencer marketing. 
//             Our platform bridges the gap between top influencers and businesses, ensuring every campaign is impactful and data-driven. 
//             Whether you're a startup or an established brand, we help you reach the right audience, boost engagement, and maximize ROI.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//             {/* Tertiary H3 for Subtopics */}
//             <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-semibold text-[#2269a1] mb-2">Global Influencer Network</h3>
//               <p className="text-gray-600">
//                 Access a vast network of verified influencers across various niches to amplify your brand's message globally.
//               </p>
//             </div>

//             <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-semibold text-[#2269a1] mb-2">Data-Driven Campaigns for Better ROI</h3>
//               <p className="text-gray-600">
//                 Leverage real-time analytics to track performance, measure ROI, and optimize campaigns for better results.
//               </p>
//             </div>

//             <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-semibold text-[#2269a1] mb-2">Seamless Influencer Collaboration</h3>
//               <p className="text-gray-600">
//                 Our platform streamlines the influencer collaboration process, saving time and ensuring smooth communication.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;


import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'; // Ensure you're using react-router for navigation

const HeroSection = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://viralfluencer.com" />
        <title>Influencer Marketing Strategies To Boost Your Brand | Viralfluencer</title>
        <meta name="description" content="Discover effective influencer marketing strategies with Viral Influencer. Connect with top influencers and create impactful campaigns that drive real results." />
      </Helmet>

      {/* Hero Section */}
      <header className="relative bg-white w-full h-[500px] items-left p-2 overflow-hidden">
        <section className="relative bg-white w-full h-[500px] items-left p-2 overflow-hidden">
          <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
            <div className="text-left z-10 relative">
              <h1 className="text-[#222222] font-bold text-2xl md:text-6xl leading-tight mb-4 gap-18">
                Boost Your Brand with 
                <br />
                <span className='text-[#c55b4f]'>Effective</span> 
                <br />
                <span className='text-[#2269a1]'>Influencer Marketing Strategies</span>
              </h1>
              <p className="text-[#555555] text-lg md:text-xl leading-relaxed mb-6">
                Connect with top influencers and create impactful campaigns that drive real results for your brand. 
                Learn more about our <Link to="/services" className="text-[#2269a1] font-semibold hover:underline">influencer marketing services</Link>.
              </p>
              <Link
                to="/submit-form"
                className="inline-block px-6 py-3 bg-[#2269a1] text-white font-semibold rounded-lg hover:bg-[#4e7683] transition duration-300"
                title="Book a consultation for influencer marketing"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </header>

      {/* New Content Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#222222] mb-6">Why Choose Viral Influencer for Your Marketing Campaigns?</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
            At <strong>Viral Influencer</strong>, we revolutionize the way brands connect with audiences through influencer marketing. 
            Check out our <Link to="/case-studies" className="text-[#c55b4f] font-semibold hover:underline">successful case studies </Link> 
            to see the impact of our campaigns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-[#2269a1] mb-2">Global Influencer Network</h3>
              <p className="text-gray-600">
                Access a vast network of verified influencers across various niches. 
                <Link to="/Influencers" className="text-[#2269a1] font-semibold hover:underline"> Explore our influencer categories</Link>.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-[#2269a1] mb-2"> Data-Driven Campaigns for Better ROI</h3>
              <p className="text-gray-600">
                Leverage real-time analytics to optimize your campaigns. 
                Visit our <Link to="/Services" className="text-[#c55b4f] font-semibold hover:underline"> analytics dashboard</Link>.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-[#2269a1] mb-2">Seamless Influencer Collaboration</h3>
              <p className="text-gray-600">
                Streamline your influencer collaborations with ease. 
                <Link to="/submit-form" className="text-[#2269a1] font-semibold hover:underline"> Contact us to get started</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

