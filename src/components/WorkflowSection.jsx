import React from 'react';
import { FaBullseye, FaUser, FaRocket, FaChartBar } from 'react-icons/fa';
import ButtonContainer from './ButtonContainer';

const WorkflowSection = () => (
  <section id="workflow" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        How It Works
      </h2>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Our streamlined process ensures successful influencer marketing campaigns
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <WorkflowStep
          step={1}
          title="Define Brand Goals"
          description="We work together to understand your objectives and target audience."
          icon={<FaBullseye className="w-6 h-6 text-[#2269a1]" />}
        />
        <WorkflowStep
          step={2}
          title="Find Perfect Influencers"
          description="Match you with influencers that align with your brand values."
          icon={<FaUser Check className="w-6 h-6 text-[#2269a1]" />}
        />
        <WorkflowStep
          step={3}
          title="Launch Campaigns"
          description="Execute campaigns with our proven strategy and management."
          icon={<FaRocket className="w-6 h-6 text-[#2269a1]" />}
        />
        <WorkflowStep
          step={4}
          title="Analyze & Scale"
          description="Track performance and optimize for maximum ROI."
          icon={<FaChartBar className="w-6 h-6 text-[#2269a1]" />}
        />
      </div>
      <div className="mt-16 flex justify-center">
        <ButtonContainer/>
      </div>
    </div>
  </section>
);

const WorkflowStep = ({ step, title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-4xl font-bold text-primary-600">{icon}</div>
    <div className="text-4xl font-bold text-primary-600">{step}</div>
    <h3 className="mt-2 text-lg font-semibold text-gray-800">{title}</h3>
    <p className="mt-1 text-gray-600">{description}</p>
  </div>
);

export default WorkflowSection;