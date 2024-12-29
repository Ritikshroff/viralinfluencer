import React from 'react';

const CaseStudyCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

export default CaseStudyCard;