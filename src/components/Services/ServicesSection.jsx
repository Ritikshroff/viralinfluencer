import React from 'react';
import HighlightedSection from '../HighlightedSection';
import { GrDocumentPerformance   } from "react-icons/gr";

const ServicesSection = () => (
  <section id="services" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Our Services</h2>
      <p className="mt-4 text-xl text-gray-500 text-center">
        Comprehensive influencer marketing solutions tailored to your brand's needs
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          title="Influencer Discovery & Outreach"
          icon={<svg className="w-12 h-12 text-[#2269a1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
          description="Find the perfect influencers for your brand using our advanced matching algorithm and verification process."
          features={[
            'Database Analysis',
            'Audience Verification',
            'Brand Alignment',
          ]}
        />
        <ServiceCard
          title="Campaign Management"
          icon={<svg className="w-12 h-12 text-[#2269a1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          description="End-to-end campaign management from planning to execution, ensuring your brand's message reaches the right audience."
          features={[
            'Strategy Development',
            'Content Creation',
            'Performance Tracking',
          ]}
        />
        <ServiceCard
          title="Performance Analytics"
          icon={ <GrDocumentPerformance  className="w-12 h-12 text-[#2269a1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"/> }
          description="In-depth analytics to measure the success of your campaigns and optimize future strategies."
          features={[
            'Real-time Reporting',
            'ROI Analysis',
            'Audience Insights',
          ]}
        />
        <ServiceCard
          title="Brand Partnerships"
          icon={
            <svg
              className="w-12 h-12 text-[#2269a1]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="15" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2" />
            </svg>
          }
          description="Building long-term partnerships with influencers to create authentic brand stories."
          features={[
            'Long-term Collaborations',
            'Creative Campaigns',
            'Brand Storytelling',
          ]}
        />
      </div>
    </div>
    <HighlightedSection/>
  </section>
);

const ServiceCard = ({ title, icon, description, features }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    {icon}
    <h3 className="text-lg font-semibold text-gray-800 mt-4">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
    <ul className="mt-4 list-disc list-inside text-gray-500">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

export default ServicesSection;