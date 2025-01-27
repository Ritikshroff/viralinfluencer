import React from 'react';
import { Helmet } from "react-helmet";


const HeroSection = () => {

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://viralfluencer.com" />
      </Helmet>
      <header className="relative bg-white w-full h-[500px] items-left p-2 overflow-hidden">
        <section className="relative bg-white w-full h-[500px] items-left p-2 overflow-hidden">
          <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
            {/* Content Container */}
            <div className="text-left z-10 relative">
              <h1 className="text-[#222222] font-bold text-2xl md:text-6xl leading-tight mb-4 gap-18">
                <span>Boost Your Brand </span>
                <br /> <span>With</span>
                <br /><span className='text-[#c55b4f]'>Effective</span>
                <br /><span className='text-[#2269a1]'>Influencer Marketing </span>
                <br /> <span className='text-[#2269a1]'>Strategies</span>
              </h1>
              <p className="text-[#555555] text-lg md:text-xl leading-relaxed mb-6">
                Connect with top influencers and create impactful campaigns <br /> that drive real results...
              </p>
              <a
                href="/submit-form"
                className="inline-block px-6 py-3 bg-[#2269a1] text-white font-semibold rounded-lg hover:bg-[#4e7683] transition duration-300"
                title="Book a consultation for influencer marketing"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default HeroSection;
