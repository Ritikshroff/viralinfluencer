import React from 'react';
import InfluencerCard from './InfluencerCard';

const InfluencerCategoriesSection = () => (
  <section id="influencer_categories" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Our Influencer Categories</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <InfluencerCard title="Nano Influencers" description="1K - 10K Followers" />
        <InfluencerCard title="Micro Influencers" description="10K - 100K Followers" />
        <InfluencerCard title="Macro Influencers" description="100K - 1M Followers" />
        <InfluencerCard title="Mega Influencers" description="1M+ Followers" />
      </div>
    </div>
  </section>
);

export default InfluencerCategoriesSection;