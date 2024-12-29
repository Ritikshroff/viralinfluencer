import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center">What Our Clients Say</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard name="John Doe" feedback="Viralfluencer helped us reach our target audience effectively!" />
        <TestimonialCard name="Jane Smith" feedback="The campaign results exceeded our expectations!" />
        <TestimonialCard name="Alice Johnson" feedback="Professional and dedicated team that delivers results." />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;