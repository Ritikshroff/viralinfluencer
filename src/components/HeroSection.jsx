import React from 'react';
import { useSpring, animated } from 'react-spring';

const HeroSection = () => {
  const dotAnimation = useSpring({
    loop: { reverse: true },
    from: { transform: 'translateY(-200px)' },
    to: { transform: 'translateY(200px)' },
    config: { tension: 250, friction: 20 },
  });

  return (
    <section className="relative bg-white w-full h-[500px] items-left p-2 overflow-hidden">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        {/* Content Container */}
        <div className="text-left z-10 relative">
          <h1 className="text-[#222222] font-bold text-2xl md:text-6xl leading-tight mb-4 gap-18">
            <span>Boost Your Brand </span>
            <br /> <span>With</span>
            <br /><span className='text-[#c55b4f]'>Influencer</span>
            <br /><span className='text-[#2269a1]'>Marketing That </span>
            <br /> <span className='text-[#2269a1]'>Works</span>
          </h1>
          <p className="text-[#555555] text-lg md:text-xl leading-relaxed mb-6">
            Connect with the perfect influencers for your brand and <br /> create impactful marketing campaigns that drive real results..
          </p>
          <a
            href="/submit-form"
            className="inline-block px-6 py-3 bg-[#2269a1] text-white font-semibold rounded-lg hover:bg-[#4e7683] transition duration-300"
          >
            Book a Consultation
          </a>
        </div>

        {/* Dots Animation */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
          {[...Array(10)].map((_, index) => (
            <animated.div
              key={index}
              className="w-4 h-4 rounded-full bg-[#c55b4f] absolute"
              style={{
                ...dotAnimation,
                animationDelay: `${Math.random() * 5}s`, // Random delay to make each dot animate differently
                top: `${Math.random() * 100}%`, // Random top position
                left: `${Math.random() * 100}%`, // Random left position
                opacity: 0.7 + Math.random() * 0.3, // Random opacity for a dynamic effect
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
