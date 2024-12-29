import React from 'react';

function BlueTickIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#2269a1"
      className="bi bi-check-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.354 5.354a.5.5 0 0 1 .146.354v.5a.5.5 0 0 1-.146.354l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7 8.293l3.646-3.647a.5.5 0 0 1 .708 0z" />
    </svg>
  );
}

function HighlightedSection() {
  return (
    <div className="w-full max-w-4xl p-4 m-2 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-md">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <BlueTickIcon />
            <span className="text-gray-700">Data-Driven Approach</span>
          </div>
          <div className="flex items-center space-x-2">
            <BlueTickIcon />
            <span className="text-gray-700">Transparent Reporting</span>
          </div>
          <div className="flex items-center space-x-2">
            <BlueTickIcon />
            <span className="text-gray-700">Brand Safety Guaranteed</span>
          </div>
        </div>
        <button className="mt-4 md:mt-0 px-4 py-2 text-white bg-[#2269a1] rounded-md">
          Start Your Campaign
        </button>
      </div>
    </div>
  );
}

export default HighlightedSection;