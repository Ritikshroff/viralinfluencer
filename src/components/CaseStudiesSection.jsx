import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const CaseStudiesSection = () => (
  <section id="case_studies" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Success Stories</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CaseStudyCard title="Fashion Brand" description="450% ROI" />
        <CaseStudyCard title="Restaurant Chain" description="300% ROI" />
        <CaseStudyCard title="Fitness App" description="275% ROI" />
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;