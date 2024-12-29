import React from 'react';
import { FiTrendingUp, FiUsers, FiSettings } from 'react-icons/fi'; // Feather Icons
import FeatureCard from './FeatureCard';

const AboutSection = () => (
  <section id="about" className="fade-in p-4 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Viralfluencer?</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          We connect brands to influencers to deliver ROI-driven campaigns that amplify your message and drive real results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<FiTrendingUp />} 
          title="Proven Brand Growth" 
          description="Drive measurable results with data-driven influencer campaigns that align with your brand goals and target audience."
          stat="300%+"
        />
        <FeatureCard 
          icon={<FiUsers />} 
          title="Perfect Influencer Matches" 
          description="Access our curated network of authentic influencers who align with your brand values and target audience."
          stat="10K+"
        />
        <FeatureCard 
          icon={<FiSettings />} 
          title="End-to-End Campaign Management" 
          description="From strategy to execution and reporting, we handle every aspect of your influencer marketing campaigns."
          stat="100%"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
