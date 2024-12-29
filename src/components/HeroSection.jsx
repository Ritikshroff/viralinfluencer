import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative bg-[#ffffff] w-full h-[500px] items-left p-2"
    >
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 ">
        {/* Content Container */}
        <div className="text-left">
          <h1 className="text-[#222222] font-bold text-2xl md:text-6xl leading-tight mb-4 gap-18">
            <span>Boost Your Brand </span>
            <br /> <span>With</span>
            {/* <br /><span className='text-[#2269a1]'>Influencer</span> */}
            <br /><span className='text-[#c55b4f]'>Influencer</span>
            <br /><span className='text-[#2269a1]'>Marketing That </span>
            <br /> <span className='text-[#2269a1]'>Works</span>
          </h1>
          <p className="text-[#555555] text-lg md:text-xl leading-relaxed mb-6">
            Connect with the perfect influencers for your brand and <br /> create impactful marketing campaigns that drive real results..
          </p>
          <a
            href="#contact_form"
            className="inline-block px-6 py-3 bg-[#2269a1] text-white font-semibold rounded-lg hover:bg-[#4e7683] transition duration-300"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
